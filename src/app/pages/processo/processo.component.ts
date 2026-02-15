import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-processo',
    imports: [RouterLink],
    templateUrl: './processo.component.html',
    styleUrl: './processo.component.scss'
})
export class ProcessoComponent implements AfterViewInit {
    @ViewChildren('animateEl') animateElements!: QueryList<ElementRef>;

    readonly whatsappLink = 'https://wa.me/5535992669710?text=Olá!%20Gostaria%20de%20entender%20melhor%20o%20processo%20de%20desenvolvimento.';

    readonly steps = [
        {
            num: '01',
            title: 'Diagnóstico',
            desc: 'Entendemos sua operação, mapeamos as dores e identificamos oportunidades de automação e controle.',
            details: ['Reunião de levantamento (remoto ou presencial)', 'Mapeamento de processos atuais', 'Identificação de requisitos e prioridades', 'Relatório de diagnóstico'],
            duration: '1–2 dias úteis'
        },
        {
            num: '02',
            title: 'Plano + Escopo',
            desc: 'Definimos funcionalidades, cronograma, investimento e entregáveis — tudo documentado e aprovado antes de começar.',
            details: ['Documento de escopo detalhado', 'Cronograma com marcos de entrega', 'Proposta comercial com investimento', 'Aprovação formal do cliente'],
            duration: '2–3 dias úteis'
        },
        {
            num: '03',
            title: 'Arquitetura + Protótipo',
            desc: 'Projetamos a estrutura técnica do sistema e criamos um protótipo navegável para validar antes do código.',
            details: ['Definição de stack e infraestrutura', 'Modelagem do banco de dados', 'Protótipo navegável (wireframe)', 'Validação do fluxo com o cliente'],
            duration: '2–4 dias úteis'
        },
        {
            num: '04',
            title: 'Desenvolvimento por Marcos',
            desc: 'Construímos o sistema em ciclos curtos com entregas parciais. Você acompanha cada evolução em tempo real.',
            details: ['Sprints de 5–7 dias úteis', 'Entregas parciais para validação', 'Ambiente de staging para testes', 'Comunicação contínua via WhatsApp/reuniões'],
            duration: 'Conforme complexidade'
        },
        {
            num: '05',
            title: 'QA + Deploy',
            desc: 'Testes rigorosos de qualidade, segurança e performance antes de publicar em produção.',
            details: ['Testes funcionais completos', 'Testes de segurança', 'Otimização de performance', 'Deploy em ambiente de produção'],
            duration: '2–3 dias úteis'
        },
        {
            num: '06',
            title: 'Handoff + Documentação',
            desc: 'Entregamos o sistema com manual completo, documentação técnica e treinamento.',
            details: ['Manual do usuário', 'Documentação técnica (API, banco, infra)', 'Treinamento da equipe', 'Acesso completo ao código-fonte'],
            duration: '1–2 dias úteis'
        },
        {
            num: '07',
            title: 'Garantia + Suporte',
            desc: '30 dias de garantia para correções sem custo. Após isso, suporte mensal opcional para evoluções contínuas.',
            details: ['Garantia de 30 dias (conforme escopo)', 'Correções sem custo adicional', 'Canal de suporte prioritário', 'Plano de suporte mensal (opcional)'],
            duration: '30 dias + contínuo'
        },
    ];

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
