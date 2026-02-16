import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnalyticsService } from '../../shared/services/analytics.service';

@Component({
    selector: 'app-footer',
    imports: [RouterLink],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
    private analytics = inject(AnalyticsService);
    readonly currentYear = new Date().getFullYear();
    readonly whatsappLink = 'https://wa.me/5535992669710?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20sistemas%20da%20L%20Digital%20Labs.';

    trackWhatsApp(): void {
        this.analytics.trackWhatsAppClick('footer');
    }
}
