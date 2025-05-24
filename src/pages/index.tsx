import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout title="Dobrodošli" description="Baza znanja za BH studente u Grazu">
      <Head>
        <meta name="keywords" content="Graz, studenti, Bosna, studij, vodič" />
      </Head>
      <main className={styles.hero}>

        <section className={styles.intro}>
          <h1>Dobrodošli u Graz!</h1>
          <p>
            Pronađi sve informacije o studiju, vizama, smještaju i životu u Grazu — na jednom mjestu.
          </p>
        </section>
        <section className={styles.search}>
          <input type="text" placeholder="🔍 Pretraži..." className={styles.searchInput} />
        </section>


        <section className={styles.cards}>
          {[
            { title: 'Univerziteti', desc: 'Pregled TU Graz, Uni Graz i drugih.', link: '/docs/univerziteti/pregled' },
            { title: 'Upis', desc: 'Kako se upisati, dokumenti, rokovi.', link: '/docs/upis/bachelor' },
            { title: 'Viza i boravak', desc: 'Vodič za vizu, dokumenti, prijava.', link: '/docs/viza/pregled' },
            { title: 'Smještaj', desc: 'Domovi, stanovi, agencije, savjeti.', link: '/docs/smjestaj/domovi' },
            { title: 'Po dolasku', desc: 'Prvi koraci: Meldezettel, SIM, banke...', link: '/docs/dolazak/prvi-koraci' },
            { title: 'Život u Grazu', desc: 'Posao, kultura, mentalno zdravlje.', link: '/docs/zivot/posao' },
            { title: 'Jezik i integracija', desc: 'Kursevi, ÖSD, savjeti za učenje.', link: '/docs/zivot/jezik' },
            { title: 'Udruženje GBHS', desc: 'Ko smo mi i kako ti možemo pomoći.', link: '/docs/udruzenje/o-nama' },
          ].map((item, idx) => (
            <div className={styles.card} key={idx}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <Link to={item.link}>➤ Pogledaj više</Link>
            </div>
          ))}
        </section>
      </main>
    </Layout>
  );
}



// import type {ReactNode} from 'react';
// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
// import Heading from '@theme/Heading';

// import styles from './index.module.css';

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <Heading as="h1" className="hero__title">
//           {siteConfig.title}
//         </Heading>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro">
//             Docusaurus Tutorial - 5min ⏱️
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default function Home(): ReactNode {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <Layout
//       title={`Hello from ${siteConfig.title}`}
//       description="Description will go into a meta tag in <head />">
//       <HomepageHeader />
//       <main>
//         <HomepageFeatures />
//       </main>
//     </Layout>
//   );
// }
