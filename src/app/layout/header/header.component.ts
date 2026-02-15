import { Component, HostListener, signal, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-header',
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
    private router = inject(Router);

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

    private ticking = false;

    @HostListener('window:scroll')
    onScroll() {
        if (!this.ticking) {
            requestAnimationFrame(() => {
                this.isScrolled.set(window.scrollY > 50);
                const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                this.scrollProgress.set(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
                this.ticking = false;
            });
            this.ticking = true;
        }
    }

    toggleMobileMenu() {
        this.isMobileMenuOpen.update(v => !v);
        // Prevent body scroll when mobile menu is open
        document.body.style.overflow = this.isMobileMenuOpen() ? 'hidden' : '';
    }

    closeMobileMenu() {
        this.isMobileMenuOpen.set(false);
        document.body.style.overflow = '';
    }

    scrollToSection(fragment: string) {
        this.closeMobileMenu();
        if (fragment) {
            // If we're not on the home page, navigate there first
            if (this.router.url !== '/' && !this.router.url.startsWith('/#')) {
                this.router.navigate(['/'], { fragment }).then(() => {
                    setTimeout(() => {
                        const el = document.getElementById(fragment);
                        if (el) {
                            el.scrollIntoView({ behavior: 'smooth' });
                        }
                    }, 100);
                });
            } else {
                const el = document.getElementById(fragment);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    }
}

