import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
        title: 'L Digital Labs — Sistemas Web Sob Medida'
    },
    {
        path: 'planos',
        loadComponent: () => import('./pages/planos/planos.component').then(m => m.PlanosComponent),
        title: 'Planos — L Digital Labs'
    },
    {
        path: 'processo',
        loadComponent: () => import('./pages/processo/processo.component').then(m => m.ProcessoComponent),
        title: 'Processo — L Digital Labs'
    },
    {
        path: 'contato',
        loadComponent: () => import('./pages/contato/contato.component').then(m => m.ContatoComponent),
        title: 'Contato — L Digital Labs'
    },
    {
        path: '**',
        redirectTo: ''
    }
];
