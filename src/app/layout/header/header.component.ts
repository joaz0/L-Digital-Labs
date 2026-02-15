import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-header',
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
    isScrolled = signal(false);
    isMobileMenuOpen = signal(false);
    scrollProgress = signal(0);

    readonly navLinks = [
        { label: 'Início', path: '/', fragment: '' },
        { label: 'Serviços', path: '/', fragment: 'servicos' },
        { label: 'Planos', path: '/planos', fragment: '' },
        { label: 'Processo', path: '/processo', fragment: '' },
        { label: 'Contato', path: '/contato', fragment: '' },
    ];

    readonly whatsappLink = 'https://wa.me/5535992669710?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20sistemas%20da%20L%20Digital%20Labs.';

    @HostListener('window:scroll')
    onScroll() {
        this.isScrolled.set(window.scrollY > 50);
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        this.scrollProgress.set(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
    }

    toggleMobileMenu() {
        this.isMobileMenuOpen.update(v => !v);
    }

    closeMobileMenu() {
        this.isMobileMenuOpen.set(false);
    }

    scrollToSection(fragment: string) {
        this.closeMobileMenu();
        if (fragment) {
            const el = document.getElementById(fragment);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
}
