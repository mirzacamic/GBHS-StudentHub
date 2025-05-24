// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Dobrodošli',
    },
    {
      type: 'category',
      label: 'Univerziteti',
      items: [
        'univerziteti/Pregled',
        'univerziteti/TU Graz',
        'univerziteti/Uni Graz',
        'univerziteti/Med Uni',
        'univerziteti/Kunst Uni',
        'univerziteti/Jezik',
      ],
    },
    {
      type: 'category',
      label: 'Upis na fakultet',
      items: [
        'upis/Bachelor',
        'upis/Master',
        'upis/Dokummenti i prijava',
      ],
    },
    {
      type: 'category',
      label: 'Viza i boravak',
      items: [
        'viza/Pregled',
        'viza/Dokumenti',
        'viza/Produzenje',
      ],
    },
    {
      type: 'category',
      label: 'Smještaj',
      items: [
        'smjestaj/Studentski domovi',
        'smjestaj/Stanovi',
        'smjestaj/Savjeti',
      ],
    },
    {
      type: 'category',
      label: 'Po dolasku u Graz',
      items: [
        'dolazak/Prvi koraci',
        'dolazak/SIM kartica',
        'dolazak/Banka',
        'dolazak/Zdravstveno osiguranje',
        'dolazak/Javni prevoz',
      ],
    },
    {
      type: 'category',
      label: 'Život u Grazu',
      items: [
        'zivot/Posao',
        'zivot/Zdravlje',
        'zivot/Kultura',
        'zivot/Jezik',
      ],
    },
    {
      type: 'category',
      label: 'Udruženje GBHS',
      items: [
        'udruzenje/o-nama',
        'udruzenje/mentorstvo',
        'udruzenje/kontakt',
      ],
    },
  ],
};

export default sidebars;
