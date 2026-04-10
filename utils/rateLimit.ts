import { supabase } from '../lib/supabase';

/**
 * RATE LIMITING AVANCÉ AVEC SUPABASE
 * Persistant et distribué pour environnement serverless
 */

interface RateLimitConfig {
  maxRequests: number;      // Nombre max de requêtes
  windowMs: number;         // Fenêtre de temps en ms
  blockDurationMs: number;  // Durée de blocage si limite dépassée
}

const DEFAULT_CONFIG: RateLimitConfig = {
  maxRequests: 5,
  windowMs: 60 * 1000,      // 1 minute
  blockDurationMs: 5 * 60 * 1000, // 5 minutes de blocage
};

interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetTime: number;
  blocked: boolean;
}

interface RateLimitRecord {
  identifier: string;
  requests: number;
  first_request: number;
  last_request: number;
  blocked_until: number | null;
}

export async function checkRateLimit(
  identifier: string,
  config: Partial<RateLimitConfig> = {}
): Promise<RateLimitResult> {
  const finalConfig = { ...DEFAULT_CONFIG, ...config };
  const now = Date.now();
  
  // Vérifier si Supabase est disponible
  if (!supabase) {
    console.warn('[RateLimit] Supabase not available, allowing request');
    return { allowed: true, remaining: finalConfig.maxRequests, resetTime: now + finalConfig.windowMs, blocked: false };
  }
  
  try {
    // 1. Récupérer l'état actuel depuis Supabase
    const { data: existingRecord, error: fetchError } = await supabase
      .from('rate_limits')
      .select('*')
      .eq('identifier', identifier)
      .single() as { data: RateLimitRecord | null; error: { code: string; message: string } | null };
    
    if (fetchError && fetchError.code !== 'PGRST116') { // PGRST116 = not found
      console.error('[RateLimit] Fetch error:', fetchError);
      // En cas d'erreur, on laisse passer mais on log
      return { allowed: true, remaining: 0, resetTime: now + finalConfig.windowMs, blocked: false };
    }
    
    // 2. Si pas de record existant, créer un nouveau
    if (!existingRecord) {
      const newRecord = {
        identifier,
        requests: 1,
        first_request: now,
        last_request: now,
        blocked_until: null as number | null,
      };
      
      if (!supabase) {
        return { allowed: true, remaining: finalConfig.maxRequests - 1, resetTime: now + finalConfig.windowMs, blocked: false };
      }
      
      await supabase.from('rate_limits').insert(newRecord);
      
      return {
        allowed: true,
        remaining: finalConfig.maxRequests - 1,
        resetTime: now + finalConfig.windowMs,
        blocked: false,
      };
    }
    
    // 3. Vérifier si actuellement bloqué
    if (existingRecord.blocked_until && existingRecord.blocked_until > now) {
      return {
        allowed: false,
        remaining: 0,
        resetTime: existingRecord.blocked_until,
        blocked: true,
      };
    }
    
    // 4. Vérifier si on doit réinitialiser la fenêtre
    const windowStart = existingRecord.first_request;
    if (now - windowStart > finalConfig.windowMs) {
      // Réinitialiser la fenêtre
      const updatedRecord = {
        requests: 1,
        first_request: now,
        last_request: now,
        blocked_until: null as number | null,
      };
      
      if (!supabase) {
        return { allowed: true, remaining: finalConfig.maxRequests - 1, resetTime: now + finalConfig.windowMs, blocked: false };
      }
      
      await supabase
        .from('rate_limits')
        .update(updatedRecord)
        .eq('identifier', identifier);
      
      return {
        allowed: true,
        remaining: finalConfig.maxRequests - 1,
        resetTime: now + finalConfig.windowMs,
        blocked: false,
      };
    }
    
    // 5. Vérifier si limite atteinte
    if (existingRecord.requests >= finalConfig.maxRequests) {
      // Bloquer l'IP
      const blockedUntil = now + finalConfig.blockDurationMs;
      
      if (!supabase) {
        return { allowed: false, remaining: 0, resetTime: blockedUntil, blocked: true };
      }
      
      await supabase
        .from('rate_limits')
        .update({ 
          blocked_until: blockedUntil,
          last_request: now 
        })
        .eq('identifier', identifier);
      
      return {
        allowed: false,
        remaining: 0,
        resetTime: blockedUntil,
        blocked: true,
      };
    }
    
    // 6. Incrémenter le compteur
    if (!supabase) {
      return { allowed: true, remaining: finalConfig.maxRequests - existingRecord.requests - 1, resetTime: windowStart + finalConfig.windowMs, blocked: false };
    }
    
    await supabase
      .from('rate_limits')
      .update({ 
        requests: existingRecord.requests + 1,
        last_request: now 
      })
      .eq('identifier', identifier);
    
    return {
      allowed: true,
      remaining: finalConfig.maxRequests - existingRecord.requests - 1,
      resetTime: windowStart + finalConfig.windowMs,
      blocked: false,
    };
    
  } catch (error) {
    console.error('[RateLimit] Unexpected error:', error);
    // En cas d'erreur critique, on laisse passer mais on log
    return { allowed: true, remaining: 0, resetTime: now + finalConfig.windowMs, blocked: false };
  }
}

