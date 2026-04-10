import * as Sentry from '@sentry/react';
import { browserTracingIntegration } from '@sentry/react';

/**
 * SENTRY ERROR TRACKING CONFIGURATION
 * Production-grade error monitoring and performance tracking
 * Updated for Sentry v10 compatibility
 */
export const initSentry = (): void => {
  // Only initialize in production and when DSN is provided
  const dsn = import.meta.env.VITE_SENTRY_DSN;
  
  if (import.meta.env.DEV || !dsn) {
    return;
  }

  Sentry.init({
    dsn,
    integrations: [
      browserTracingIntegration(),
    ],
    tracesSampleRate: 0.1,
    
    beforeSend(event) {
      if (import.meta.env.DEV) {
        return null;
      }
      
      const errorMessage = event.exception?.values?.[0]?.value || '';
      const filteredErrors = [
        'ResizeObserver loop limit exceeded',
        'NetworkError when attempting to fetch resource',
        'Failed to fetch',
        'Network request failed',
        'Loading chunk',
      ];
      
      if (filteredErrors.some(msg => errorMessage.includes(msg))) {
        return null;
      }
      
      return event;
    },
    
    environment: import.meta.env.MODE || 'production',
    release: import.meta.env.VITE_APP_VERSION || '3.2.1',
    
    beforeSendTransaction(event) {
      if (event.breadcrumbs) {
        event.breadcrumbs = event.breadcrumbs.map(crumb => {
          if (crumb.category === 'xhr' || crumb.category === 'fetch') {
            if (crumb.data?.url) {
              crumb.data.url = crumb.data.url.split('?')[0];
            }
          }
          return crumb;
        });
      }
      return event;
    },
  });
};

export const captureError = (
  error: Error,
  context?: Record<string, unknown>
): void => {
  if (import.meta.env.DEV) {
    console.error('[Sentry Dev]', error, context);
    return;
  }

  Sentry.captureException(error, { extra: context });
};

// Note: setSentryUser and clearSentryUser are kept for future auth integration
// They are intentionally not removed as they will be needed when implementing user authentication
