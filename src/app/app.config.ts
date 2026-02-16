import { APP_INITIALIZER, ApplicationConfig, isDevMode, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions, withInMemoryScrolling, withPreloading, PreloadAllModules } from '@angular/router';
import { inject } from '@vercel/analytics';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withViewTransitions({ skipInitialTransition: true }),
      withInMemoryScrolling({ scrollPositionRestoration: 'top', anchorScrolling: 'enabled' }),
      withPreloading(PreloadAllModules)
    ),
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => inject({ mode: isDevMode() ? 'development' : 'production' }),
      multi: true
    }
  ]
};
