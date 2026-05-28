# Kresťanský wellness template

Next.js + TypeScript + CSS Modules template pre jednoduchý prezentačný web bez databázy.

## Spustenie

```bash
npm install
npm run dev
```

## Brevo

Skopíruj `.env.example` ako `.env.local` a doplň hodnoty:

```bash
BREVO_API_KEY=
BREVO_SENDER_EMAIL=
BREVO_SENDER_NAME=
BREVO_TO_EMAIL=
```

Formulár odosiela dáta cez `src/app/api/contact/route.ts`.

## Štruktúra

Sekcie sú v priečinku `src/sections`, každá sekcia má vlastný priečinok:

```txt
src/sections/hero/hero.tsx
src/sections/hero/hero.module.css
```

Rovnako sú pripravené služby, Emočný kód, priebeh sedenia, o mne, cenník, kontakt, disclaimer a footer.
