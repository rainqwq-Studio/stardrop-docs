// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Stardrop Docs - 星落之书',
  tagline: 'Your Block, Our Constellation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://stardrop-docs.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rainqwq-Studio', // Usually your GitHub org/user name.
  projectName: 'stardrop-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['en', 'zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Stardrop Docs',
        logo: {
          alt: 'Stardrop Pavilion Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '星落之书（玩家手册）',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/rainqwq-Studio/stardrop-docs',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '服务器文档',
            items: [
              {
                label: '星落之书（玩家手册）',
                to: '/docs/home',
              },
            ],
          },
          {
            title: '社区与群组',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/RJ7GM8xJbT',
              },
              {
                label: 'QQ',
                href: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=Me3bPhEapXRK1AIlid13Pdfxc5LjFkNx&authKey=a02C6b3NFJZ2BcxSkrJbkkuiGVcvSG8SZ0Rr1AAMDXjMGA5729cwIFbs9%2FJGoxjW&noverify=0&group_code=272341800',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/rainqwq-Studio/stardrop-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} rainqwq Studio. All rights reserved. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
