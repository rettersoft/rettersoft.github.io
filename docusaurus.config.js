// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Rio Docs',
  tagline: 'Just Business Logic',
  url: 'https://rettersoft.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/RetterLogo.png',
  organizationName: 'rettersoft', // Usually your GitHub org/user name.
  projectName: 'rettersoft.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: true,
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/rettersoft/rettersoft.github.io/blob/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Rio Doc',
        logo: {
          alt: 'Retter Logo',
          src: 'img/RetterLogo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'Getting Started/About Documentation',
            position: 'left',
            label: 'Getting Started',
          },
          {
            type: 'doc',
            docId: 'Concepts/Projects/What are Projects',
            position: 'left',
            label: 'Concepts',
          },
          {
            type: 'doc',
            docId: 'Developer Console/Profile Settings - Secrets',
            position: 'left',
            label: 'Developer Console',
          },
          {
            type: 'doc',
            docId: 'Guides/Login Flow',
            position: 'left',
            label: 'Guides',
          },
          {
            type: 'doc',
            docId: 'Best Practices/Scaling Classes',
            position: 'left',
            label: 'Best Practices',
          },
          {
            type: 'doc',
            docId: 'About/Good Read',
            position: 'left',
            label: 'About',
          },
          // {
          //   to: '/blog', label: 'Blog', position: 'left'
          // },
          {
            href: 'https://github.com/rettersoft/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/Getting Started/Your first project',
              },
              {
                label: 'Developer Console',
                to: '/docs/Concepts/Developer Console',
              },
              {
                label: 'Guides',
                to: '/docs/Guides/Setting Up Your Enviroment',
              },
              {
                label: 'Best Practices',
                to: '/docs/Concepts/Best Practices',
              },
              {
                label: 'Reference',
                to: '/docs/Reference/Method Data Context',
              },
              {
                label: 'About',
                to: '/docs/About/Limits',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/retter_io',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UCcSE3QHVrW4NwXyKmxQXvOw',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/rettersoft/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Retter.io`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
