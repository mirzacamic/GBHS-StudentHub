import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// GBHS Student Hub — ručni sidebar
// Struktura: Faza -> Tema -> Stranica (3 nivoa).
// Redoslijed, oznake i slugovi se kontrolišu OVDJE.
//
// Ključ je `tutorialSidebar` jer navbar/footer već pokazuju na to ime.
//
// NAPOMENA o draft stranicama:
// Stub stranice imaju `draft: true`. U dev modu (`npm run start`) sve radi.
// U PRODUKCIJSKOM buildu (`npm run build`) draftovi se izbacuju, pa ručni sidebar
// koji ih referencira PUKNE. Dok stranica nije gotova: drži je u dev modu, ili joj
// zakomentariši red, ili stavi `draft: false` kad je završena i provjerena.
//
// Svaka TEMA ima kratak stabilan `slug` (npr. /viza) -> URL je /docs/viza.
// Na te slugove pokazuju i kartice na landing stranici.

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    // ───────────────────────── FAZA 1 ─────────────────────────
    {
      type: 'category',
      label: 'Prije dolaska',
      link: {
        type: 'generated-index',
        slug: '/prije-dolaska',
        description: 'Sve što treba obaviti prije nego kročiš u Graz.',
      },
      items: [
        {
          type: 'category',
          label: 'Univerziteti',
          link: {
            type: 'generated-index',
            slug: '/univerziteti',
            description:
              'Pregled univerziteta i fakulteta u Grazu i kako izabrati.',
          },
          items: [
            'prije-dolaska/univerziteti/tu-graz',
            'prije-dolaska/univerziteti/uni-graz',
            'prije-dolaska/univerziteti/kunstuni-graz',
            'prije-dolaska/univerziteti/med-uni-graz',
            'prije-dolaska/univerziteti/fh-joanneum',
          ],
        },
        {
          type: 'category',
          label: 'Upis',
          link: {
            type: 'generated-index',
            slug: '/upis',
            description: 'Proces upisa: dokumenti, rokovi i takse.',
          },
          items: [
            'prije-dolaska/upis/proces-upisa',
            'prije-dolaska/upis/potrebni-dokumenti',
            'prije-dolaska/upis/rokovi',
            'prije-dolaska/upis/kurs-ili-direktan-upis',
            'prije-dolaska/upis/takse',
          ],
        },
        {
          type: 'category',
          label: 'Viza i boravak',
          link: {
            type: 'generated-index',
            slug: '/viza',
            description: 'D-viza, potrebni dokumenti i produženje boravka.',
          },
          items: [
            'prije-dolaska/viza-i-boravak/d-viza',
            'prije-dolaska/viza-i-boravak/potrebni-dokumenti',
            'prije-dolaska/viza-i-boravak/termin-i-predaja',
            'prije-dolaska/viza-i-boravak/troskovi',
            'prije-dolaska/viza-i-boravak/produzenje-boravka',
          ],
        },
        {
          type: 'category',
          label: 'Smještaj',
          link: {
            type: 'generated-index',
            slug: '/smjestaj',
            description: 'Studentski domovi, privatni stanovi i kako tražiti.',
          },
          items: [
            'prije-dolaska/smjestaj/studentski-domovi',
            'prije-dolaska/smjestaj/privatni-stanovi',
            'prije-dolaska/smjestaj/kako-traziti',
            'prije-dolaska/smjestaj/savjeti',
          ],
        },
        {
          type: 'category',
          label: 'Finansije i stipendije',
          link: {
            type: 'generated-index',
            slug: '/finansije',
            description:
              'Bankovni račun, dokaz sredstava, stipendije i socijalne pomoći.',
          },
          items: [
            'prije-dolaska/finansije-i-stipendije/bankovni-racun',
            'prije-dolaska/finansije-i-stipendije/dokaz-sredstava-za-vizu',
            'prije-dolaska/finansije-i-stipendije/stipendije',
            'prije-dolaska/finansije-i-stipendije/socijalne-pomoci',
          ],
        },
      ],
    },

    // ───────────────────────── FAZA 2 ─────────────────────────
    {
      type: 'category',
      label: 'Po dolasku',
      link: {
        type: 'generated-index',
        slug: '/po-dolasku',
        description: 'Prvi administrativni koraci u prvim danima i sedmicama.',
      },
      items: [
        {
          type: 'category',
          label: 'Prvi koraci',
          link: {
            type: 'generated-index',
            slug: '/prvi-koraci',
            description: 'Checklist onoga što riješiš odmah po dolasku.',
          },
          items: [
            'po-dolasku/prvi-koraci/meldezettel',
            'po-dolasku/prvi-koraci/zdravstveno-osiguranje',
            'po-dolasku/prvi-koraci/aktivacija-racuna',
            'po-dolasku/prvi-koraci/sim-kartica',
            'po-dolasku/prvi-koraci/karta-za-prevoz',
          ],
        },
      ],
    },

    // ───────────────────────── FAZA 3 ─────────────────────────
    {
      type: 'category',
      label: 'Studij i život',
      link: {
        type: 'generated-index',
        slug: '/studij-i-zivot',
        description: 'Kako funkcioniše studij i svakodnevni život u Grazu.',
      },
      items: [
        {
          type: 'category',
          label: 'Studij i akademski život',
          link: {
            type: 'generated-index',
            slug: '/studij',
            description: 'Portali, prijava predmeta, ECTS, STEOP i ispiti.',
          },
          items: [
            'studij-i-zivot/studij/online-portali',
            'studij-i-zivot/studij/prijava-predmeta',
            'studij-i-zivot/studij/ects',
            'studij-i-zivot/studij/steop',
            'studij-i-zivot/studij/ispiti',
            'studij-i-zivot/studij/savjeti-za-ucenje',
          ],
        },
        {
          type: 'category',
          label: 'Posao i prakse',
          link: {
            type: 'generated-index',
            slug: '/posao',
            description: 'Radna dozvola, prava, gdje tražiti posao i porez.',
          },
          items: [
            'studij-i-zivot/posao-i-prakse/radna-dozvola-i-prava',
            'studij-i-zivot/posao-i-prakse/gdje-traziti-posao',
            'studij-i-zivot/posao-i-prakse/zarada-i-porez',
            'studij-i-zivot/posao-i-prakse/prakse-u-struci',
          ],
        },
        {
          type: 'category',
          label: 'Jezik i integracija',
          link: {
            type: 'generated-index',
            slug: '/jezik',
            description: 'Kursevi njemačkog, VGUH, ÖSD ispit i savjeti.',
          },
          items: [
            'studij-i-zivot/jezik-i-integracija/njemacki-kursevi',
            'studij-i-zivot/jezik-i-integracija/vguh',
            'studij-i-zivot/jezik-i-integracija/osd-ispit',
            'studij-i-zivot/jezik-i-integracija/savjeti-za-ucenje-jezika',
          ],
        },
        {
          type: 'category',
          label: 'Život u Grazu',
          link: {
            type: 'generated-index',
            slug: '/zivot',
            description: 'Prevoz, hrana, zdravlje, kultura i mentalno zdravlje.',
          },
          items: [
            'studij-i-zivot/zivot-u-grazu/javni-prevoz',
            'studij-i-zivot/zivot-u-grazu/hrana-i-pice',
            'studij-i-zivot/zivot-u-grazu/zdravlje',
            'studij-i-zivot/zivot-u-grazu/kultura-i-druzenje',
            'studij-i-zivot/zivot-u-grazu/mentalno-zdravlje',
          ],
        },
      ],
    },

    // ───────────────────────── FAZA 4 ─────────────────────────
    {
      type: 'category',
      label: 'Zajednica',
      link: {
        type: 'generated-index',
        slug: '/zajednica',
        description: 'Ko smo mi i kako ti GBHS može pomoći.',
      },
      items: [
        {
          type: 'category',
          label: 'Udruženje GBHS',
          link: {
            type: 'generated-index',
            slug: '/gbhs',
            description: 'O nama, čime se bavimo, učlanjenje i kontakt.',
          },
          items: [
            'zajednica/gbhs/o-nama',
            'zajednica/gbhs/cime-se-bavimo',
            'zajednica/gbhs/uclanjenje',
            'zajednica/gbhs/kontakt',
          ],
        },
      ],
    },
  ],
};

export default sidebars;