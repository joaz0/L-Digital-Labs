import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnalyticsService } from '../../shared/services/analytics.service';

@Component({
    selector: 'app-home',
    imports: [RouterLink],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
    @ViewChildren('animateEl') animateElements!: QueryList<ElementRef>;
    private analytics = inject(AnalyticsService);

    readonly whatsappLink = 'https://wa.me/5535992669710?text=Olá!%20Gostaria%20de%20solicitar%20um%20diagnóstico%20para%20meu%20projeto.';

    readonly benefits = [
        { icon: 'shield', title: 'Governança e Controle', desc: 'Permissões por usuário, logs de auditoria e rastreabilidade completa de ações.' },
        { icon: 'zap', title: 'MVP em 14 dias úteis', desc: 'Da ideia ao sistema rodando rapidamente, com entregas por marcos e sem surpresas.' },
        { icon: 'file-text', title: 'Documentação Incluída', desc: 'Manual do sistema, documentação técnica e handoff completo na entrega.' },
        { icon: 'trending-up', title: 'Evolução por Etapas', desc: 'Comece simples e evolua conforme a necessidade. Sem retrabalho, sem desperdício.' },
        { icon: 'lock', title: 'Garantia de 30 Dias', desc: 'Correções de bugs e ajustes dentro do escopo garantidos por 30 dias pós-entrega.' },
        { icon: 'layers', title: 'Integrações Prontas', desc: 'WhatsApp, pagamentos, Google Sheets e CRM conectados ao seu sistema.' },
    ];

    readonly services = [
        {
            tag: 'A1',
            title: 'Sistemas Web Sob Medida',
            desc: 'Painéis administrativos, dashboards e plataformas de backoffice construídos sob medida para a sua operação. Login, permissões, relatórios e tudo que sua empresa precisa para operar com controle.',
            features: ['Painéis e dashboards', 'CRUD completo', 'Permissões e auditoria', 'Relatórios PDF/Excel'],
            highlight: true
        },
        {
            tag: 'A2',
            title: 'APIs e Integrações',
            desc: 'Conectamos seu sistema a ferramentas que sua empresa já usa: WhatsApp, gateways de pagamento, Google Sheets, CRMs e qualquer API de terceiros.',
            features: ['WhatsApp Business', 'Pagamentos (Pix/Stripe)', 'Google Sheets/Drive', 'APIs REST/Webhooks'],
            highlight: false
        },
        {
            tag: 'A3',
            title: 'Modernização de Legados',
            desc: 'Substituímos planilhas, sistemas obsoletos e processos manuais por plataformas modernas e seguras, sem perder dados nem parar a operação.',
            features: ['Migração de dados', 'Interface moderna', 'Segurança atualizada', 'Zero downtime'],
            highlight: false
        },
    ];

    readonly integrations = [
        { name: 'WhatsApp', desc: 'Notificações e atendimento' },
        { name: 'Pix / Mercado Pago', desc: 'Pagamentos integrados' },
        { name: 'Stripe', desc: 'Cobranças recorrentes' },
        { name: 'Google Sheets', desc: 'Import/export de dados' },
        { name: 'Google Drive', desc: 'Armazenamento de arquivos' },
        { name: 'HubSpot', desc: 'CRM corporativo' },
    ];

    readonly plans = [
        {
            name: 'Básico',
            price: '8.900',
            desc: 'Para operações simples que precisam sair da planilha.',
            features: ['Login/logout', 'Até 5 usuários', 'Dashboard simples', 'CRUD básico', 'Relatórios PDF', '5 GB armazenamento'],
            support: '590',
            highlighted: false
        },
        {
            name: 'Pro',
            price: '24.900',
            desc: 'Para empresas que precisam de controle real e integrações.',
            features: ['Até 25 usuários', 'Permissões avançadas', 'Auditoria e logs', 'Notificações (email+push)', 'Relatórios PDF+Excel', '3 integrações', '50 GB armazenamento'],
            support: '1.490',
            highlighted: true
        },
        {
            name: 'Master',
            price: '59.900',
            desc: 'Para operações complexas com múltiplas filiais e BI.',
            features: ['Usuários ilimitados', 'Multi-empresas/filiais', 'Workflows avançados', 'BI e analytics', 'Integrações ilimitadas', 'White-label', '500 GB + backup diário'],
            support: '2.990',
            highlighted: false
        },
        {
            name: 'Sob Medida',
            price: null,
            desc: 'Arquitetura personalizada, compliance e equipe dedicada.',
            features: ['Tudo do Master', 'Arquitetura personalizada', 'Migração de legados', 'Infra dedicada + HA', 'Compliance (LGPD/ISO)', 'Equipe dedicada + SLA', '18 meses de suporte grátis'],
            support: null,
            highlighted: false
        }
    ];

    readonly processSteps = [
        { num: '01', title: 'Diagnóstico', desc: 'Entendemos sua operação, dores e objetivos.' },
        { num: '02', title: 'Plano + Escopo', desc: 'Definimos funcionalidades, prazos e investimento.' },
        { num: '03', title: 'Arquitetura', desc: 'Projetamos a base técnica e protótipo leve.' },
        { num: '04', title: 'Desenvolvimento', desc: 'Construímos por marcos com acompanhamento.' },
        { num: '05', title: 'QA + Deploy', desc: 'Testes rigorosos e publicação em produção.' },
        { num: '06', title: 'Handoff', desc: 'Treinamento, documentação e acesso completo.' },
        { num: '07', title: 'Garantia + Suporte', desc: '30 dias de garantia + suporte opcional.' },
    ];

    readonly faqs = [
        {
            q: 'Quanto tempo leva para entregar um MVP?',
            a: 'O prazo padrão de um MVP Básico é de 14 dias úteis. Projetos maiores são estimados durante o diagnóstico, com cronograma claro por marcos.'
        },
        {
            q: 'O que está incluso na garantia de 30 dias?',
            a: 'Correções de bugs e ajustes dentro do escopo original. Novas funcionalidades ou evoluções são tratadas como novo escopo ou via plano de suporte mensal.'
        },
        {
            q: 'Preciso contratar o suporte mensal?',
            a: 'Não. O suporte é opcional. A garantia de 30 dias é padrão em todas as entregas. O suporte mensal é indicado para quem precisa de evoluções contínuas e atendimento prioritário.'
        },
        {
            q: 'Qual tecnologia vocês usam?',
            a: 'Nosso stack principal é Node.js/TypeScript + React + PostgreSQL. Mas nos adaptamos à necessidade do projeto — o importante é a melhor solução para o seu caso.'
        },
        {
            q: 'Vocês fazem integrações com sistemas que já uso?',
            a: 'Sim. Integramos com WhatsApp, gateways de pagamento (Pix, Mercado Pago, Stripe), Google Sheets/Drive, CRMs como HubSpot e qualquer API de terceiros.'
        },
        {
            q: 'Posso começar simples e evoluir depois?',
            a: 'Exatamente. Nosso modelo é feito para isso: comece com um MVP Básico e evolua para Pro ou Master conforme sua operação cresce.'
        },
        {
            q: 'Vocês entregam documentação?',
            a: 'Sim, sempre. Toda entrega inclui documentação técnica, manual do sistema e handoff completo. Você não fica dependente de nós.'
        },
        {
            q: 'Os preços exibidos são fixos?',
            a: 'São valores de referência (a partir de). O investimento final é definido no diagnóstico, de acordo com a complexidade e funcionalidades específicas do projeto.'
        },
    ];

    openFaqIndex: number | null = null;

    toggleFaq(index: number) {
        this.openFaqIndex = this.openFaqIndex === index ? null : index;
    }

    trackWhatsApp(location: string): void {
        this.analytics.trackWhatsAppClick(location);
    }

    trackCta(label: string, location: string): void {
        this.analytics.trackCtaClick(label, location);
    }

    ngAfterViewInit() {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        this.animateElements.forEach(el => observer.observe(el.nativeElement));
    }
}
