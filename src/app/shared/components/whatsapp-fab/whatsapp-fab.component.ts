import { Component, inject } from '@angular/core';
import { AnalyticsService } from '../../services/analytics.service';

@Component({
  selector: 'app-whatsapp-fab',
  template: `
    <a [href]="whatsappLink" target="_blank" rel="noopener" class="whatsapp-fab"
       aria-label="Falar no WhatsApp" id="cta-whatsapp-fab" (click)="trackWhatsApp()">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.357 0-4.554-.685-6.405-1.865l-.447-.293-3.174 1.064 1.064-3.174-.293-.447A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
      </svg>
      <span class="fab-tooltip">Fale conosco</span>
    </a>
  `,
  styles: [`
    .whatsapp-fab {
      position: fixed;
      bottom: 24px;
      right: 24px;
      width: 60px;
      height: 60px;
      background: #25D366;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
      z-index: 999;
      transition: all 0.3s ease;
      animation: fabPulse 2s ease-in-out infinite;

      &:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 30px rgba(37, 211, 102, 0.6);

        .fab-tooltip {
          opacity: 1;
          transform: translateX(-100%) translateX(-12px) translateY(-50%);
        }
      }
    }

    .fab-tooltip {
      position: absolute;
      right: 100%;
      top: 50%;
      transform: translateX(-100%) translateX(-4px) translateY(-50%);
      background: #1a1a2e;
      color: #f5f6fa;
      padding: 8px 14px;
      border-radius: 8px;
      font-size: 0.8rem;
      font-weight: 500;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transition: all 0.3s ease;
      border: 1px solid #26263a;
    }

    @keyframes fabPulse {
      0%, 100% { box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4); }
      50% { box-shadow: 0 4px 30px rgba(37, 211, 102, 0.6); }
    }
  `]
})
export class WhatsappFabComponent {
  private analytics = inject(AnalyticsService);
  readonly whatsappLink = 'https://wa.me/5535992669710?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20sistemas%20da%20L%20Digital%20Labs.';

  trackWhatsApp(): void {
    this.analytics.trackWhatsAppClick('fab');
  }
}

