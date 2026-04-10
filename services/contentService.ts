import { supabase, isLiveMode, getStorageUrl } from '../lib/supabase';
import { SERVICES, SOLUTIONS, RESOURCES, TESTIMONIALS, TEAM, MILESTONES, CORE_VALUES, TICKER_METRICS, FEATURED_CASES } from '../data/constants';
import { Service, Solution, Resource, Testimonial, Locale, TeamMember, Milestone, CoreValue, TickerMetric, FeaturedCase, BilingualString } from '../types/index';
import { resolveLocale, snakeToCamel } from '../utils/i18n';
import { LucideIcon, getIconByName } from '../lib/icons';

const mapIcon = getIconByName;
const f = resolveLocale;

interface RawServiceRecord {
  id: string | number;
  title: BilingualString | string;
  shortDescription: BilingualString | string;
  fullDescription: BilingualString | string;
  marketImpact: BilingualString | string;
  roiTimeline: BilingualString | string;
  technicalComplexity?: 'Standard' | 'Advanced' | 'Critical';
  icon?: LucideIcon | string;
  iconName?: string;
  icon_name?: string;
  tags?: string[];
  process?: Array<{ step: BilingualString | string; desc: BilingualString | string }>;
  benefits?: BilingualString[] | string[];
  caseStudyId?: string;
}

interface RawSolutionRecord {
  id: string | number;
  title: BilingualString | string;
  subtitle: BilingualString | string;
  shortDescription: BilingualString | string;
  fullDescription: BilingualString | string;
  icon?: LucideIcon | string;
  iconName?: string;
  icon_name?: string;
  techStack?: string[];
  kpis?: Array<{ label: BilingualString | string; value: string | number }>;
  features?: Array<{ title: BilingualString | string; description: BilingualString | string }>;
  useCases?: BilingualString[] | string[];
}

interface RawResourceRecord {
  id?: string | number;
  slug?: string;
  title: BilingualString | string;
  description: BilingualString | string;
  thumbnailUrl?: string;
  thumbnail_url?: string;
  image?: string;
  img?: string;
  cover?: string;
  category?: BilingualString[] | string[] | string;
  readTime?: BilingualString | string;
  type?: 'prompt' | 'workflow' | 'whitepaper' | 'article';
  model?: string;
  content?: string;
  isPremium?: boolean;
  is_premium?: boolean;
  date?: string;
  author?: string;
  metadata?: { model?: string; content?: string };
}

interface RawTestimonialRecord {
  id: string | number;
  name?: string;
  role?: BilingualString | string;
  content?: BilingualString | string;
  author?: string;
  company?: string;
  avatarUrl?: string;
  avatar_url?: string;
  avatar?: string;
  image?: string;
}

interface RawTeamMemberRecord {
  id: string | number;
  name?: string;
  role?: BilingualString | string;
  bio?: BilingualString | string;
  spec?: string;
  status?: 'Online' | 'Busy' | 'Offline';
  img?: string;
  image?: string;
  avatarUrl?: string;
  photo?: string;
  social?: Record<string, string>;
}

interface RawMilestoneRecord {
  id: string | number;
  year?: string;
  version?: string;
  title?: BilingualString | string;
  desc?: BilingualString | string;
}

interface RawCoreValueRecord {
  id: string | number;
  title?: BilingualString | string;
  desc?: BilingualString | string;
  icon?: LucideIcon | string;
  iconName?: string;
  icon_name?: string;
}

interface RawTickerMetricRecord {
  id: string | number;
  label?: BilingualString | string;
  baseValue?: number;
  suffix?: string;
  trend?: string;
  color?: string;
  icon?: LucideIcon | string;
  iconName?: string;
  icon_name?: string;
  graph?: string;
}

interface RawFeaturedCaseRecord {
  id: string | number;
  sector?: BilingualString | string;
  title?: BilingualString | string;
  description?: BilingualString | string;
  result?: BilingualString | string;
  tags?: string[];
  iconName?: string;
  icon_name?: string;
}

const TABLE_ALIASES: Record<string, string[]> = {
  'resources': ['resource'],
  'featured_cases': ['featured_case', 'cases', 'case_studies'],
  'team_members': ['team_member', 'team', 'members'],
  'core_values': ['core_value', 'values'],
  'testimonials': ['testimonial', 'reviews'],
  'services': ['service'],
  'solutions': ['solution'],
  'milestones': ['milestone', 'history'],
  'ticker_metrics': ['ticker_metric', 'metrics']
};

const ORDER_BY_MAP: Record<string, string> = {
  'resources': 'date',
  'featured_cases': 'id',
  'team_members': 'id',
  'core_values': 'id',
  'testimonials': 'id',
  'services': 'id',
  'solutions': 'id',
  'milestones': 'year',
  'ticker_metrics': 'id'
};

const isDev = import.meta.env.DEV;
const devLog = (...args: unknown[]): void => { if (isDev) console.log(...args); };
const devWarn = (...args: unknown[]): void => { if (isDev) console.warn(...args); };
const devError = (...args: unknown[]): void => { if (isDev) console.error(...args); };

async function fetchData<T>(
  logicalTable: string,
  fallback: T[],
  orderBy?: string
): Promise<Record<string, unknown>[]> {
  if (isLiveMode() && supabase) {
    try {
      const candidates = [
        logicalTable,
        ...(TABLE_ALIASES[logicalTable] || []),
        logicalTable.endsWith('s') ? logicalTable.slice(0, -1) : null
      ].filter((t): t is string => !!t);
      const uniqueCandidates = [...new Set(candidates)];
      const sortColumn = orderBy || ORDER_BY_MAP[logicalTable] || 'id';
      for (const table of uniqueCandidates) {
        const { data, error } = await supabase.from(table).select('*').order(sortColumn, { ascending: true });
        if (!error && data) {
          devLog('[Supabase] ' + data.length + ' enregistrements récupérés de "' + table + '"');
          return data.map(item => snakeToCamel(item) as Record<string, unknown>);
        }
        if (error && (error.code === '42P01' || error.code === '42703' || error.message?.includes('Could not find'))) {
          devWarn('[Supabase] Table non trouvée : "' + table + '"');
          continue;
        }
        if (error) {
          devError('[Supabase] Erreur technique sur "' + table + '":', error.message);
          throw error;
        }
      }
    } catch (err) {
      devError('[Supabase] Exception:', err);
      if (isLiveMode()) throw err;
    }
  }
  devLog('[ContentService] Utilisation du fallback local pour "' + logicalTable + '"');
  return fallback as unknown as Record<string, unknown>[];
}

class HybridContentService {
  async getServices(locale: Locale): Promise<Service<string>[]> {
    const raw = await fetchData<RawServiceRecord>('services', SERVICES as unknown as RawServiceRecord[]);
    return raw.map((s): Service<string> => {
      const record = s as unknown as RawServiceRecord;
      let iconComponent: LucideIcon;
      if (record.icon && typeof record.icon === 'function') {
        iconComponent = record.icon;
      } else {
        iconComponent = mapIcon(record.iconName || record.icon_name || String(record.icon));
      }
      return {
        id: String(record.id),
        title: f(record.title, locale),
        shortDescription: f(record.shortDescription, locale),
        fullDescription: f(record.fullDescription, locale),
        marketImpact: f(record.marketImpact, locale),
        roiTimeline: f(record.roiTimeline, locale),
        technicalComplexity: record.technicalComplexity || 'Standard',
        icon: iconComponent,
        tags: Array.isArray(record.tags) ? record.tags : [],
        process: (Array.isArray(record.process) ? record.process : []).map((p) => ({
          step: f(p.step, locale),
          desc: f(p.desc, locale)
        })),
        benefits: (Array.isArray(record.benefits) ? record.benefits : []).map((b: BilingualString | string) => f(b, locale)),
        caseStudyId: record.caseStudyId
      };
    });
  }

  async getServiceById(id: string, locale: Locale): Promise<Service<string> | null> {
    const services = await this.getServices(locale);
    return services.find(s => s.id === id) || null;
  }

  async getSolutions(locale: Locale): Promise<Solution<string>[]> {
    const raw = await fetchData<RawSolutionRecord>('solutions', SOLUTIONS as unknown as RawSolutionRecord[]);
    return raw.map((s): Solution<string> => {
      const record = s as unknown as RawSolutionRecord;
      let iconComponent: LucideIcon;
      if (record.icon && typeof record.icon === 'function') {
        iconComponent = record.icon;
      } else {
        iconComponent = mapIcon(record.iconName || record.icon_name || String(record.icon));
      }
      return {
        id: String(record.id),
        title: f(record.title, locale),
        subtitle: f(record.subtitle, locale),
        shortDescription: f(record.shortDescription, locale),
        fullDescription: f(record.fullDescription, locale),
        icon: iconComponent,
        techStack: Array.isArray(record.techStack) ? record.techStack : [],
        kpis: (Array.isArray(record.kpis) ? record.kpis : []).map((k) => ({
          label: f(k.label, locale),
          value: String(k.value || '')
        })),
        features: (Array.isArray(record.features) ? record.features : []).map((feat) => ({
          title: f(feat.title, locale),
          description: f(feat.description, locale)
        })),
        useCases: (Array.isArray(record.useCases) ? record.useCases : []).map((u: BilingualString | string) => f(u, locale))
      };
    });
  }

  async getSolutionById(id: string, locale: Locale): Promise<Solution<string> | null> {
    const solutions = await this.getSolutions(locale);
    return solutions.find(s => s.id === id) || null;
  }

  async getResources(locale: Locale, category: string = 'all'): Promise<Resource<string>[]> {
    const raw = await fetchData<RawResourceRecord>('resources', RESOURCES as unknown as RawResourceRecord[]);
    const mapped = raw.map((r): Resource<string> => {
      const record = r as unknown as RawResourceRecord;
      let categories: string[] = [];
      const rawCategory = record.category;
      if (Array.isArray(rawCategory)) {
        categories = rawCategory.map((c: BilingualString | string) => f(c, locale));
      } else if (typeof rawCategory === 'string') {
        try {
          const parsed = JSON.parse(rawCategory);
          if (Array.isArray(parsed)) {
            categories = parsed.map((c: BilingualString | string) => f(c, locale));
          } else {
            categories = [f(rawCategory as BilingualString | string, locale)];
          }
        } catch {
          categories = [f(rawCategory as BilingualString | string, locale)];
        }
      }
      const metadata = (record.metadata || {}) as { model?: string; content?: string };
      return {
        id: String(record.id || record.slug || ''),
        title: f(record.title, locale),
        description: f(record.description, locale),
        thumbnailUrl: getStorageUrl(record.thumbnailUrl || record.thumbnail_url || record.image || record.img || record.cover),
        category: categories,
        readTime: f(record.readTime || '5 min', locale),
        type: (String(record.type || 'article').toLowerCase()) as Resource<string>['type'],
        model: String(metadata.model || record.model || ''),
        content: String(metadata.content || record.content || ''),
        isPremium: Boolean(record.isPremium || record.is_premium),
        date: String(record.date || ''),
 author: String(record.author || 'Analyticatech')
      };
    });
    if (category === 'all') return mapped;
    return mapped.filter(r => r.type === category);
  }

  async getTestimonials(_locale: Locale): Promise<Testimonial<string>[]> {
    const raw = await fetchData<RawTestimonialRecord>('testimonials', TESTIMONIALS as unknown as RawTestimonialRecord[]);
    return raw.map((t): Testimonial<string> => {
      const record = t as unknown as RawTestimonialRecord;
      return {
        id: String(record.id),
        name: String(record.name || ''),
        role: String(record.role || ''),
        content: String(record.content || ''),
        company: String(record.company || ''),
        avatar: getStorageUrl(record.avatarUrl || record.avatar_url || record.avatar || record.image)
      };
    });
  }

  async getTeam(locale: Locale): Promise<TeamMember<string>[]> {
    const raw = await fetchData<RawTeamMemberRecord>('team_members', TEAM as unknown as RawTeamMemberRecord[]);
    return raw.map((t): TeamMember<string> => {
      const record = t as unknown as RawTeamMemberRecord;
      return {
        id: String(record.id),
        name: String(record.name || ''),
        role: f(record.role, locale),
        spec: String(record.spec || ''),
        status: record.status || 'Online',
        img: getStorageUrl(record.img || record.image || record.avatarUrl || record.photo),
      };
    });
  }

  async getMilestones(locale: Locale): Promise<Milestone<string>[]> {
    const raw = await fetchData<RawMilestoneRecord>('milestones', MILESTONES as unknown as RawMilestoneRecord[]);
    return raw.map((m): Milestone<string> => {
      const record = m as unknown as RawMilestoneRecord;
      return {
        id: String(record.id),
        year: String(record.year || ''),
        version: String(record.version || '1.0'),
        title: f(record.title, locale),
        desc: f(record.desc, locale)
      };
    });
  }

  async getCoreValues(locale: Locale): Promise<CoreValue<string>[]> {
    const raw = await fetchData<RawCoreValueRecord>('core_values', CORE_VALUES as unknown as RawCoreValueRecord[]);
    return raw.map((v): CoreValue<string> => {
      const record = v as unknown as RawCoreValueRecord;
      let iconComponent: LucideIcon;
      if (record.icon && typeof record.icon === 'function') {
        iconComponent = record.icon;
      } else {
        iconComponent = mapIcon(record.iconName || record.icon_name || String(record.icon));
      }
      return {
        id: String(record.id),
        title: f(record.title, locale),
        desc: f(record.desc, locale),
        icon: iconComponent
      };
    });
  }

  async getTickerMetrics(locale: Locale): Promise<TickerMetric<string>[]> {
    const raw = await fetchData<RawTickerMetricRecord>('ticker_metrics', TICKER_METRICS as unknown as RawTickerMetricRecord[]);
    return raw.map((m): TickerMetric<string> => {
      const record = m as unknown as RawTickerMetricRecord;
      let iconComponent: LucideIcon;
      if (record.icon && typeof record.icon === 'function') {
        iconComponent = record.icon;
      } else {
        iconComponent = mapIcon(record.iconName || record.icon_name || String(record.icon));
      }
      return {
        id: String(record.id),
        label: f(record.label, locale),
        baseValue: Number(record.baseValue || 0),
        suffix: String(record.suffix || ''),
        trend: String(record.trend || ''),
        color: String(record.color || ''),
        icon: iconComponent,
        graph: String(record.graph || '')
      };
    });
  }

  async getFeaturedCases(locale: Locale): Promise<FeaturedCase<string>[]> {
    const raw = await fetchData<RawFeaturedCaseRecord>('featured_cases', FEATURED_CASES as unknown as RawFeaturedCaseRecord[]);
    return raw.map((c): FeaturedCase<string> => {
      const record = c as unknown as RawFeaturedCaseRecord;
      return {
        id: String(record.id),
        sector: f(record.sector, locale),
        title: f(record.title, locale),
        description: f(record.description, locale),
        result: f(record.result, locale),
        tags: Array.isArray(record.tags) ? record.tags : [],
        iconName: String(record.iconName || record.icon_name || '')
      };
    });
  }
}

export const contentService = new HybridContentService();
