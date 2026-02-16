import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AnalyticsService } from '../../shared/services/analytics.service';

@Component({
    selector: 'app-contato',
    imports: [FormsModule],
    templateUrl: './contato.component.html',
    styleUrl: './contato.component.scss'
})
export class ContatoComponent implements AfterViewInit {
    @ViewChildren('animateEl') animateElements!: QueryList<ElementRef>;
    private analytics = inject(AnalyticsService);

    readonly whatsappLink = 'https://wa.me/5535992669710?text=Olá!%20Gostaria%20de%20solicitar%20um%20diagnóstico%20para%20meu%20projeto.';

    formData = {
        nome: '',
        empresa: '',
        email: '',
        telefone: '',
        plano: '',
        mensagem: ''
    };

    formSubmitted = false;
    formError = false;

    readonly planoOptions = [
        'Básico',
        'Pro',
        'Master',
        'Sob Medida',
        'Ainda não sei'
    ];

    submitForm() {
        // Simple client-side validation
        if (!this.formData.nome || !this.formData.email || !this.formData.mensagem) {
            this.formError = true;
            return;
        }
        this.formError = false;

        // In production, this would POST to an API
        // For now, we build a WhatsApp message with the form data
        const message = encodeURIComponent(
            `Olá! Gostaria de solicitar um diagnóstico.\n\n` +
            `Nome: ${this.formData.nome}\n` +
            `Empresa: ${this.formData.empresa || 'Não informado'}\n` +
            `Email: ${this.formData.email}\n` +
            `Telefone: ${this.formData.telefone || 'Não informado'}\n` +
            `Plano de interesse: ${this.formData.plano || 'Não definido'}\n` +
            `Mensagem: ${this.formData.mensagem}`
        );

        window.open(`https://wa.me/5535992669710?text=${message}`, '_blank');
        this.analytics.trackFormSubmit(this.formData.plano);
        this.formSubmitted = true;
    }

    trackWhatsApp(): void {
        this.analytics.trackWhatsAppClick('contato');
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
