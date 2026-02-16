import { Component, OnInit, inject } from '@angular/core';
import { AnalyticsService } from '../../services/analytics.service';

@Component({
    selector: 'app-cookie-consent',
    template: `
    @if (showBanner) {
    <div class="cookie-banner" [class.visible]="isVisible">
      <div class="cookie-content">
        <div class="cookie-text">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <path d="m9 12 2 2 4-4"/>
          </svg>
          <p>
            Este site utiliza cookies e tecnologias de rastreamento para melhorar sua experiência,
            analisar o tráfego e personalizar anúncios.
            <a href="#" class="cookie-link">Política de Privacidade</a>
          </p>
        </div>
        <div class="cookie-actions">
          <button class="btn-essential" (click)="acceptEssential()">Apenas essenciais</button>
          <button class="btn-accept" (click)="acceptAll()">Aceitar todos</button>
        </div>
      </div>
    </div>
    }
  `,
    styles: [`
    .cookie-banner {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 10000;
      padding: 16px 24px;
      background: rgba(15, 15, 30, 0.95);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-top: 1px solid rgba(139, 92, 246, 0.2);
      box-shadow: 0 -4px 30px rgba(0, 0, 0, 0.3);
      opacity: 0;
      transform: translateY(100%);
      transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);

      &.visible {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .cookie-content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
      flex-wrap: wrap;
    }

    .cookie-text {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      flex: 1;
      min-width: 280px;

      svg {
        flex-shrink: 0;
        margin-top: 2px;
        color: #8b5cf6;
      }

      p {
        margin: 0;
        font-size: 0.875rem;
        line-height: 1.5;
        color: #a0a0b8;
      }
    }

    .cookie-link {
      color: #8b5cf6;
      text-decoration: underline;
      transition: color 0.2s;

      &:hover {
        color: #a78bfa;
      }
    }

    .cookie-actions {
      display: flex;
      gap: 10px;
      flex-shrink: 0;
    }

    .btn-essential {
      padding: 10px 20px;
      border-radius: 8px;
      font-size: 0.85rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
      background: transparent;
      color: #a0a0b8;
      border: 1px solid #26263a;

      &:hover {
        border-color: #8b5cf6;
        color: #f5f6fa;
      }
    }

    .btn-accept {
      padding: 10px 24px;
      border-radius: 8px;
      font-size: 0.85rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      background: linear-gradient(135deg, #8b5cf6, #6d28d9);
      color: white;
      border: none;
      box-shadow: 0 2px 12px rgba(139, 92, 246, 0.3);

      &:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 20px rgba(139, 92, 246, 0.4);
      }
    }

    @media (max-width: 640px) {
      .cookie-banner {
        padding: 14px 16px;
      }

      .cookie-content {
        flex-direction: column;
        align-items: stretch;
        gap: 14px;
      }

      .cookie-actions {
        justify-content: stretch;

        button {
          flex: 1;
        }
      }
    }
  `]
})
export class CookieConsentComponent implements OnInit {
    private analytics = inject(AnalyticsService);

    showBanner = false;
    isVisible = false;

    ngOnInit(): void {
        if (!this.analytics.isConsentGiven()) {
            this.showBanner = true;
            // Small delay for the entrance animation
            setTimeout(() => this.isVisible = true, 100);
        }
    }

    acceptAll(): void {
        this.setConsent('all');
    }

    acceptEssential(): void {
        this.setConsent('essential');
    }

    private setConsent(level: 'all' | 'essential'): void {
        // Set cookie for 365 days
        const expires = new Date();
        expires.setFullYear(expires.getFullYear() + 1);
        document.cookie = `lgpd_consent=${level}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;

        this.analytics.updateConsent(level);

        // Animate out
        this.isVisible = false;
        setTimeout(() => this.showBanner = false, 500);
    }
}
