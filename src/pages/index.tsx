import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import styles from './index.module.css';

type CardItem = {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
};

type Phase = {
  num: number;
  title: string;
  description: string;
  cards: CardItem[];
};

// ─── Ikone (FontAwesome 5 solid) ───────────────────────────────
const icon = {
  univerzitet: (
    <svg viewBox="0 0 512 512" height="2em" width="2em" aria-hidden="true" focusable="false" fill="currentColor">
      <path d="M496 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a7.996 7.996 0 0 1 6.118 0l232 88A8 8 0 0 1 496 128zm-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24zM96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192H96z" />
    </svg>
  ),
  upis: (
    <svg viewBox="0 0 512 512" height="2em" width="2em" aria-hidden="true" focusable="false" fill="currentColor">
      <path d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z" />
    </svg>
  ),
  viza: (
    <svg viewBox="0 0 448 512" height="2em" width="2em" aria-hidden="true" focusable="false" fill="currentColor">
      <path d="M129.62 176h39.09c1.49-27.03 6.54-51.35 14.21-70.41-27.71 13.24-48.02 39.19-53.3 70.41zm0 32c5.29 31.22 25.59 57.17 53.3 70.41-7.68-19.06-12.72-43.38-14.21-70.41h-39.09zM224 286.69c7.69-7.45 20.77-34.42 23.43-78.69h-46.87c2.67 44.26 15.75 71.24 23.44 78.69zM200.57 176h46.87c-2.66-44.26-15.74-71.24-23.43-78.69-7.7 7.45-20.78 34.43-23.44 78.69zm64.51 102.41c27.71-13.24 48.02-39.19 53.3-70.41h-39.09c-1.49 27.03-6.53 51.35-14.21 70.41zM416 0H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 64 64 64h352c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32zm-80 416H112c-8.8 0-16-7.2-16-16s7.2-16 16-16h224c8.8 0 16 7.2 16 16s-7.2 16-16 16zm-112-96c-70.69 0-128-57.31-128-128S153.31 64 224 64s128 57.31 128 128-57.31 128-128 128zm41.08-214.41c7.68 19.06 12.72 43.38 14.21 70.41h39.09c-5.28-31.22-25.59-57.17-53.3-70.41z" />
    </svg>
  ),
  smjestaj: (
    <svg viewBox="0 0 576 512" height="2em" width="2em" aria-hidden="true" focusable="false" fill="currentColor">
      <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" />
    </svg>
  ),
  finansije: (
    <svg viewBox="0 0 512 512" height="2em" width="2em" aria-hidden="true" focusable="false" fill="currentColor">
      <path d="M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z" />
    </svg>
  ),
  // Faza 2 — pojedinačni zadaci
  meldezettel: (
    <svg viewBox="0 0 384 512" height="2em" width="2em" aria-hidden="true" focusable="false" fill="currentColor">
      <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
    </svg>
  ),
  osiguranje: (
    <svg viewBox="0 0 512 512" height="2em" width="2em" aria-hidden="true" focusable="false" fill="currentColor">
      <path d="M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z" />
    </svg>
  ),
  banka: (
    <svg viewBox="0 0 576 512" height="2em" width="2em" aria-hidden="true" focusable="false" fill="currentColor">
      <path d="M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V256H0v176zm192-68c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-40zm-128 0c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM576 80v48H0V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48z" />
    </svg>
  ),
  sim: (
    <svg viewBox="0 0 320 512" height="2em" width="2em" aria-hidden="true" focusable="false" fill="currentColor">
      <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z" />
    </svg>
  ),
  prevoz: (
    <svg viewBox="0 0 576 512" height="2em" width="2em" aria-hidden="true" focusable="false" fill="currentColor">
      <path d="M128 160h320v192H128V160zm400 96c0 26.51 21.49 48 48 48v96c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-96c26.51 0 48-21.49 48-48s-21.49-48-48-48v-96c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48v96c-26.51 0-48 21.49-48 48zm-48-104c0-13.255-10.745-24-24-24H120c-13.255 0-24 10.745-24 24v208c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V152z" />
    </svg>
  ),
  // Faza 3
  studij: (
    <svg viewBox="0 0 640 512" height="2em" width="2em" aria-hidden="true" focusable="false" fill="currentColor">
      <path d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c15.19 4.67 31.6 4.67 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-21.5 6.61-44.5 6.61-66 0l-145.5-44.69-7.78 121.3C133.85 415.96 222.42 448 320 448s186.15-32.04 186.49-56.99l-7.78-121.31-145.92 45.39z" />
    </svg>
  ),
  posao: (
    <svg viewBox="0 0 512 512" height="2em" width="2em" aria-hidden="true" focusable="false" fill="currentColor">
      <path d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z" />
    </svg>
  ),
  jezik: (
    <svg viewBox="0 0 640 512" height="2em" width="2em" aria-hidden="true" focusable="false" fill="currentColor">
      <path d="M152.1 236.2c-3.5-12.1-7.8-33.2-7.8-33.2h-.5s-4.3 21.1-7.8 33.2l-11.1 37.5H163zM616 96H336v320h280c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24zm-24 120c0 6.6-5.4 12-12 12h-11.4c-6.9 23.6-21.7 47.4-42.7 69.9 8.4 6.4 17.1 12.5 26.1 18 5.5 3.4 7.3 10.5 4.1 16.2l-7.9 13.9c-3.4 5.9-10.9 7.8-16.7 4.3-12.6-7.8-24.5-16.1-35.4-24.9-10.9 8.7-22.7 17.1-35.4 24.9-5.8 3.5-13.3 1.6-16.7-4.3l-7.9-13.9c-3.2-5.6-1.4-12.8 4.2-16.2 9.3-5.7 18-11.7 26.1-18-7.9-8.4-14.9-17-21-25.7-4-5.7-2.2-13.6 3.7-17.1l6.5-3.9 7.3-4.3c5.4-3.2 12.4-1.7 16 3.4 5 7 10.8 14 17.4 20.9 13.5-14.2 23.8-28.9 30-43.2H412c-6.6 0-12-5.4-12-12v-16c0-6.6 5.4-12 12-12h64v-16c0-6.6 5.4-12 12-12h16c6.6 0 12 5.4 12 12v16h64c6.6 0 12 5.4 12 12zM0 120v272c0 13.3 10.7 24 24 24h280V96H24c-13.3 0-24 10.7-24 24zm58.9 216.1L116.4 167c1.7-4.9 6.2-8.1 11.4-8.1h32.5c5.1 0 9.7 3.3 11.4 8.1l57.5 169.1c2.6 7.8-3.1 15.9-11.4 15.9h-22.9a12 12 0 0 1-11.5-8.6l-9.4-31.9h-60.2l-9.1 31.8c-1.5 5.1-6.2 8.7-11.5 8.7H70.3c-8.2 0-14-8.1-11.4-15.9z" />
    </svg>
  ),
  zivot: (
    <svg viewBox="0 0 640 512" height="2em" width="2em" aria-hidden="true" focusable="false" fill="currentColor">
      <path d="M616 192H480V24c0-13.26-10.74-24-24-24H312c-13.26 0-24 10.74-24 24v72h-64V16c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v80h-64V16c0-8.84-7.16-16-16-16H80c-8.84 0-16 7.16-16 16v80H24c-13.26 0-24 10.74-24 24v360c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V216c0-13.26-10.75-24-24-24zM128 404c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm128 192c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12V76c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm160 96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12V76c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm160 288c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40z" />
    </svg>
  ),
  // Faza 4
  gbhs: (
    <svg viewBox="0 0 640 512" height="2.6em" width="2.6em" aria-hidden="true" focusable="false" fill="currentColor">
      <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z" />
    </svg>
  ),
};

// ─── Struktura: 4 faze ─────────────────────────────────────────
const phases: Phase[] = [
  {
    num: 1,
    title: 'Prije dolaska',
    description: 'Sve što treba obaviti prije nego kročiš u Graz.',
    cards: [
      {title: 'Univerziteti', description: 'Pregled TU Graz, Uni Graz i drugih fakulteta.', link: '/docs/univerziteti', icon: icon.univerzitet},
      {title: 'Upis', description: 'Proces upisa, potrebni dokumenti i rokovi.', link: '/docs/upis', icon: icon.upis},
      {title: 'Viza i boravak', description: 'Viza D, produženje boravka i potrebne prijave.', link: '/docs/viza', icon: icon.viza},
      {title: 'Smještaj', description: 'Studentski domovi, privatni stanovi i savjeti.', link: '/docs/smjestaj', icon: icon.smjestaj},
      {title: 'Finansije i stipendije', description: 'Bankovni račun, dokaz sredstava, stipendije i pomoći.', link: '/docs/finansije', icon: icon.finansije},
    ],
  },
  {
    num: 2,
    title: 'Po dolasku',
    description: 'Prvi koraci koje riješiš u prvim danima i sedmicama.',
    cards: [
      {title: 'Meldezettel', description: 'Prijava adrese u prvih nekoliko dana.', link: '/docs/po-dolasku/prvi-koraci/meldezettel', icon: icon.meldezettel},
      {title: 'Zdravstveno osiguranje', description: 'ÖGK, e-card i šta pokriva.', link: '/docs/po-dolasku/prvi-koraci/zdravstveno-osiguranje', icon: icon.osiguranje},
      {title: 'Aktivacija računa', description: 'Aktiviraj bankovni račun i osnovne usluge.', link: '/docs/po-dolasku/prvi-koraci/aktivacija-racuna', icon: icon.banka},
      {title: 'SIM kartica', description: 'Nabavka SIM-a i pregled operatera.', link: '/docs/po-dolasku/prvi-koraci/sim-kartica', icon: icon.sim},
      {title: 'Karta za prevoz', description: 'Top-Ticket / KlimaTicket i studentske karte.', link: '/docs/po-dolasku/prvi-koraci/karta-za-prevoz', icon: icon.prevoz},
    ],
  },
  {
    num: 3,
    title: 'Studij i život',
    description: 'Kako funkcioniše studij i svakodnevni život u Grazu.',
    cards: [
      {title: 'Studij i akademski život', description: 'Portali, ECTS, STEOP, prijava i polaganje ispita.', link: '/docs/studij', icon: icon.studij},
      {title: 'Posao i prakse', description: 'Radna dozvola, gdje tražiti posao, zarada i porez.', link: '/docs/posao', icon: icon.posao},
      {title: 'Jezik i integracija', description: 'Kursevi njemačkog, ÖSD ispit i savjeti za učenje.', link: '/docs/jezik', icon: icon.jezik},
      {title: 'Život u Grazu', description: 'Prevoz, hrana, kultura i mentalno zdravlje.', link: '/docs/zivot', icon: icon.zivot},
    ],
  },
  {
    num: 4,
    title: 'Zajednica',
    description: 'Ko smo mi i kako ti GBHS može pomoći.',
    cards: [
      {title: 'Udruženje GBHS', description: 'Ko smo mi, čime se bavimo, kako se učlaniti i kako nas kontaktirati.', link: '/docs/gbhs', icon: icon.gbhs},
    ],
  },
];

export default function Home() {
  return (
    <Layout title="Dobrodošli" description="Baza znanja za BH studente u Grazu">
      <Head>
        <meta name="keywords" content="Graz, studenti, Bosna, studij, vodič, GBHS" />
      </Head>
      <main className={styles.homeContainer}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <h1 className={styles.heroTitle}>Dobrodošli u Graz!</h1>
            <p className={styles.heroSubtitle}>
              Pronađi sve informacije o studiju, vizama, smještaju i životu u Grazu —
              na jednom mjestu.
            </p>
            <div className={styles.searchContainer}>
              <input
                type="text"
                placeholder="🔍 Pretraži bazu znanja..."
                className={styles.searchInput}
                readOnly
                aria-label="Pretraži bazu znanja"
              />
            </div>
          </div>
        </section>

        <section className={styles.phases}>
          {phases.map((phase) => (
            <div key={phase.num} className={styles.phase}>
              <div className={styles.phaseHeader}>
                <h2 className={styles.phaseTitle}>
                  <span className={styles.phaseNum}>{phase.num}</span>
                  {phase.title}
                </h2>
                <p className={styles.phaseDesc}>{phase.description}</p>
              </div>

              {phase.cards.length === 1 ? (
                <Link to={phase.cards[0].link} className={styles.bannerCard}>
                  <div className={styles.bannerIcon}>{phase.cards[0].icon}</div>
                  <div>
                    <h3 className={styles.cardTitle}>{phase.cards[0].title}</h3>
                    <p className={styles.cardDesc}>{phase.cards[0].description}</p>
                  </div>
                </Link>
              ) : (
                <div className={styles.phaseGrid}>
                  {phase.cards.map((item) => (
                    <Link key={item.title} to={item.link} className={styles.card}>
                      <div className={styles.cardIcon}>{item.icon}</div>
                      <h3 className={styles.cardTitle}>{item.title}</h3>
                      <p className={styles.cardDesc}>{item.description}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>

        <section className={styles.latestNewsSection}>
          <div className={styles.latestNewsContainer}>
            <h2 className={styles.latestNewsTitle}>Najnovije vijesti</h2>
            <p style={{textAlign: 'center'}}>Trenutno nema novosti.</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}