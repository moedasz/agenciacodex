# Bforense, Site institucional

Single-page application (SPA) para a **Bforense**, agência de investigação particular. Construído com Vite + React 19 + TypeScript, implantado na Vercel.

---

## Stack

| Camada         | Tecnologia                                  |
| -------------- | ------------------------------------------- |
| Build / dev    | Vite 7                                      |
| UI             | React 19 + TypeScript 5.6 (strict)          |
| Estilo         | Tailwind CSS 4 (via `@tailwindcss/vite`)    |
| Animações      | Framer Motion                               |
| Ícones         | lucide-react                                |
| Roteamento     | react-router-dom 7                          |
| Input mask     | react-imask                                 |
| Testes         | Vitest + Testing Library                    |
| Lint / format  | ESLint 9 + Prettier                         |
| Deploy         | Vercel (SPA rewrites + security headers)    |

---

## Scripts

```bash
npm run dev           # servidor de desenvolvimento (porta 3001 por padrão)
npm run build         # build de produção em ./dist
npm run preview       # serve o build de produção localmente
npm run typecheck     # tsc --noEmit
npm run lint          # ESLint sobre todos os .ts/.tsx
npm run lint:fix      # ESLint com autofix
npm run format        # Prettier --write em todo o projeto
npm run format:check  # Prettier --check (para CI)
npm run test          # Vitest em modo single-run
npm run test:watch    # Vitest em watch mode
npm run check         # typecheck + lint + test + build (gate de CI)
```

---

## Começando

**Requisitos:** Node 20+ e npm (ou pnpm, há `pnpm-lock.yaml` presente).

```bash
npm install
cp .env.example .env.local   # opcional, o projeto funciona sem envs por padrão
npm run dev
```

Abra http://localhost:3001.

---

## Estrutura

```
src/
├── components/
│   ├── home/              # sub-seções da Home (Hero, Metrics, Services, etc.)
│   ├── ErrorBoundary.tsx  # fallback de UI + logging para dataLayer
│   ├── Header.tsx         # navbar sticky com detecção de scroll
│   ├── Footer.tsx
│   ├── Layout.tsx         # wrapper de rota
│   ├── Seo.tsx            # <meta> tags + JSON-LD
│   └── ...
├── pages/                 # uma página por rota (Home, Servicos, Blog, etc.)
├── data/                  # conteúdo estático tipado (services, blog posts)
├── lib/
│   ├── animations.ts      # presets do framer-motion (fadeIn, etc.)
│   ├── analytics.ts       # wrappers para gtag/fbq
│   └── contact.ts         # URLs de WhatsApp/mailto, constantes de negócio
├── types/
│   └── global.d.ts        # Window augments (dataLayer, gtag, fbq)
└── test/
    └── setup.ts           # setup do Vitest (jest-dom + cleanup)
```

---

## Decisões de arquitetura

- **SPA sem backend.** Todas as conversões vão para WhatsApp via `wa.me` e email via `mailto:`. Nada toca o servidor, inclusive o formulário de contato (`src/pages/Contato.tsx`) constrói uma mensagem e abre o WhatsApp.
- **Analytics no runtime do cliente.** GA4 e Meta Pixel são carregados via `<script>` em `index.html`. `ErrorBoundary` empurra erros para `window.dataLayer` (evento `AppError`).
- **Code splitting manual.** `vite.config.ts` separa framer-motion, react e react-imask em chunks próprios para melhorar o cache entre deploys.
- **Vídeos de background só em desktop.** As seções `ServicesSection` e `FinalCtaSection` envolvem `<video>` em `hidden md:block` para não pesar em conexões móveis.
- **Sigilo como feature.** Textos, links e CTAs assumem que o visitante não quer deixar rastro, por isso o fluxo depende do WhatsApp/email do próprio usuário.

---

## Deploy

O deploy é feito pela Vercel. `vercel.json` define:

- Rewrites SPA (tudo que não é asset vai para `/index.html`)
- Headers de segurança: HSTS (2 anos), CSP com whitelist para GA/Facebook, X-Frame-Options, Referrer-Policy, Permissions-Policy
- Cache imutável (1 ano) para `/assets/*` e para webp/png/woff2/ttf/mp4 na raiz

**Para adicionar um novo domínio no CSP**, edite a diretiva `connect-src`/`script-src` em `vercel.json`.

---

## Testes

Testes vivem ao lado do código que testam (`*.test.ts` / `*.test.tsx`).

```bash
npm run test           # roda uma vez
npm run test:watch     # watch mode
```

Cobertura atual: `lib/contact`, `lib/animations`, `ErrorBoundary`. Expandir conforme novos componentes críticos surgem.

---

## Lint e formatação

- **ESLint 9** (flat config em `eslint.config.js`) com `typescript-eslint`, `react-hooks` e `react-refresh`.
- **Prettier** com indent de 4 espaços, `printWidth: 110`, trailing commas em tudo.

Rode `npm run lint:fix && npm run format` antes de abrir PR.
