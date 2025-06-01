import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Student Hub',
  tagline: 'Početna tačka za studij, život i uspjeh u Grazu',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://mirzacamic.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/GBHS-StudentHub/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mirzacamic', // Usually your GitHub org/user name.
  projectName: 'GBHS-StudentHub', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/mirzacamic/GBHS-StudentHub/tree/main/docs',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/mirzacamic/GBHS-StudentHub/tree/main/docs',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Student Hub',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Baza znanja',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/mirzacamic/GBHS-StudentHub/tree/main/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Student Hub',
          items: [
            {
              label: 'Baza znanja',
              to: '/docs/intro',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
        {
          title: 'Društvene mreže',
          items: [
            {
              label: 'GBHS Website',
              href: 'https://www.gbhs.at',
            },
            {
              label: 'WhatsApp Community',
              href: 'https://chat.whatsapp.com/HV7qlBT0r2m601iAcvHsiB',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/gbhs_graz/',
            },
          ],
        },
        {
          title: 'Više',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/mirzacamic/GBHS-StudentHub',
            },
          ],
        },
      ],
    copyright: `Copyright © ${new Date().getFullYear()} GBHS Student Hub. 
    Content licensed by <a href="https://www.gbhs.at" target="_blank" rel="noopener noreferrer">GBHS</a>. <a href="/docs/license">View license</a>.`,


      
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};



export default config;
