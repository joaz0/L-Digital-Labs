# L Digital Labs — Site Oficial

Site corporativo premium da **L Digital Labs** (L.digitallabs).
Sistemas web sob medida para empresas profissionais.

## Stack

- **Angular 20** — standalone components, lazy loading, signals
- **TypeScript** — tipagem estrita
- **SCSS** — design system com variáveis, glassmorphism, animações

## Rodando localmente

```bash
npm install
ng serve
# http://localhost:4200
```

## Estrutura

```
src/
├── app/
│   ├── layout/          → Header (sticky + scroll progress) e Footer
│   ├── pages/
│   │   ├── home/        → Landing (10 seções)
│   │   ├── planos/      → Cards + tabela comparativa (23 features)
│   │   ├── processo/    → Timeline 7 etapas
│   │   └── contato/     → Formulário de diagnóstico
│   └── shared/          → WhatsApp FAB
├── styles.scss          → Design system completo
└── index.html           → SEO, OG, Schema.org
```

## Rotas

| Rota | Página |
|---|---|
| `/` | Home |
| `/planos` | Comparativo de planos |
| `/processo` | Processo em 7 etapas |
| `/contato` | Formulário de diagnóstico |

## Build de produção

```bash
ng build --configuration=production
# Output: dist/ldigitallabs-site/browser/
```

## Deploy

**Vercel:** `npx vercel`
**Netlify:** Build `ng build --configuration=production`, publish `dist/ldigitallabs-site/browser`
**Estático:** Sirva `dist/ldigitallabs-site/browser/` com nginx/apache
