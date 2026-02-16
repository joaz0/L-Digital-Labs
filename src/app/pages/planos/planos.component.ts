import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnalyticsService } from '../../shared/services/analytics.service';

@Component({
    selector: 'app-planos',
    imports: [RouterLink],
    templateUrl: './planos.component.html',
    styleUrl: './planos.component.scss'
})
export class PlanosComponent implements AfterViewInit {
    @ViewChildren('animateEl') animateElements!: QueryList<ElementRef>;
    private analytics = inject(AnalyticsService);

    readonly whatsappLink = 'https://wa.me/5535992669710?text=Olá!%20Tenho%20interesse%20em%20um%20dos%20planos%20da%20L%20Digital%20Labs.';

    readonly plans = [
        {
            name: 'Básico',
            price: '8.900',
            desc: 'Para operações simples que precisam sair da planilha.',
            support: '590',
            highlighted: false
        },
        {
            name: 'Pro',
            price: '24.900',
            desc: 'Para empresas que precisam de controle real e integrações.',
            support: '1.490',
            highlighted: true
        },
        {
            name: 'Master',
            price: '59.900',
            desc: 'Para operações complexas com múltiplas filiais e BI.',
            support: '2.990',
            highlighted: false
        },
        {
            name: 'Sob Medida',
            price: null,
            desc: 'Arquitetura personalizada, compliance e equipe dedicada.',
            support: null,
            highlighted: false
        }
    ];

    readonly features = [
        { name: 'Usuários', basico: 'Até 5', pro: 'Até 25', master: 'Ilimitados', sobmedida: 'Ilimitados' },
        { name: 'Login/Logout', basico: true, pro: true, master: true, sobmedida: true },
        { name: 'Dashboard', basico: 'Simples', pro: 'Avançado', master: 'BI/Analytics', sobmedida: 'Personalizado' },
        { name: 'CRUD', basico: 'Básico', pro: 'Completo', master: 'Completo', sobmedida: 'Personalizado' },
        { name: 'Permissões avançadas', basico: false, pro: true, master: true, sobmedida: true },
        { name: 'Auditoria / Logs', basico: false, pro: true, master: true, sobmedida: true },
        { name: 'Notificações (email + push)', basico: false, pro: true, master: true, sobmedida: true },
        { name: 'Relatórios PDF', basico: true, pro: true, master: true, sobmedida: true },
        { name: 'Relatórios Excel', basico: false, pro: true, master: true, sobmedida: true },
        { name: 'Integrações', basico: 'Nenhuma', pro: '3 integrações', master: 'Ilimitadas', sobmedida: 'Ilimitadas' },
        { name: 'API completa + Webhooks', basico: false, pro: 'API básica', master: true, sobmedida: true },
        { name: 'Multi-empresas / Filiais', basico: false, pro: false, master: true, sobmedida: true },
        { name: 'Workflows avançados', basico: false, pro: false, master: true, sobmedida: true },
        { name: 'White-label', basico: false, pro: false, master: true, sobmedida: true },
        { name: 'Armazenamento', basico: '5 GB', pro: '50 GB', master: '500 GB', sobmedida: 'Ilimitado' },
        { name: 'Backup', basico: 'Nenhum', pro: 'Semanal', master: 'Diário', sobmedida: 'Diário + HA' },
        { name: 'Infra', basico: 'Cloud compartilhada', pro: 'Containers', master: 'Dedicada', sobmedida: 'On-prem / Híbrida' },
        { name: 'Customização', basico: false, pro: 'Limitada', master: 'Completa', sobmedida: 'Total' },
        { name: 'Legado / Migração', basico: false, pro: false, master: false, sobmedida: true },
        { name: 'Compliance (LGPD/ISO)', basico: false, pro: false, master: false, sobmedida: true },
        { name: 'Equipe dedicada + SLA', basico: false, pro: false, master: false, sobmedida: true },
        { name: 'Treinamento', basico: false, pro: false, master: true, sobmedida: true },
        { name: 'Suporte grátis incluso', basico: '—', pro: '—', master: '5 meses', sobmedida: '18 meses' },
    ];

    getCellValue(value: any): string {
        if (value === true) return '✓';
        if (value === false) return '—';
        return String(value);
    }

    isBoolTrue(value: any): boolean {
        return value === true;
    }

    isBoolFalse(value: any): boolean {
        return value === false;
    }

    trackWhatsApp(): void {
        this.analytics.trackWhatsAppClick('planos');
    }

    trackCta(label: string): void {
        this.analytics.trackCtaClick(label, 'planos');
    }

    ngAfterViewInit() {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) entry.target.classList.add('visible');
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );
        this.animateElements.forEach(el => observer.observe(el.nativeElement));
    }
}
