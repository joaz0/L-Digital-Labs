import { Injectable } from '@angular/core';

declare global {
    interface Window {
        dataLayer: Record<string, unknown>[];
    }
}

@Injectable({ providedIn: 'root' })
export class AnalyticsService {

    constructor() {
        window.dataLayer = window.dataLayer || [];
    }

    pushEvent(eventName: string, eventData: Record<string, unknown> = {}): void {
        window.dataLayer.push({
            event: eventName,
            ...eventData
        });
    }

    trackWhatsAppClick(location: string): void {
        this.pushEvent('whatsapp_click', {
            click_location: location,
            click_url: 'https://wa.me/5535992669710'
        });
    }

    trackCtaClick(label: string, location: string): void {
        this.pushEvent('cta_click', {
            cta_label: label,
            cta_location: location
        });
    }

    trackFormSubmit(plano: string): void {
        this.pushEvent('lead_form_submit', {
            form_id: 'form-diagnostico',
            plano_interesse: plano || 'Não definido'
        });
    }

    updateConsent(level: 'all' | 'essential'): void {
        const granted = level === 'all' ? 'granted' : 'denied';
        this.pushEvent('consent_update', {
            analytics_storage: granted,
            ad_storage: granted,
            ad_user_data: granted,
            ad_personalization: granted
        });
    }

    isConsentGiven(): boolean {
        return document.cookie.includes('lgpd_consent=');
    }

    getConsentLevel(): string | null {
        const match = document.cookie.match(/lgpd_consent=(\w+)/);
        return match ? match[1] : null;
    }
}
