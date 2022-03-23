// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Rio Docs',
  tagline: 'Just Code Your Code',
  url: 'https://retterio-documentation.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/RetterLogo.png',
  organizationName: 'rettersoft', // Usually your GitHub org/user name.
  projectName: 'rettersoft.github.io', // Usually your repo name.
  deploymentBranch: 'master',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/rettersoft/rettersoft.github.io/tree/New-Side-Bar',
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
            docId: 'Getting Started/Intro',
            position: 'left',
            label: 'Getting Started',
          },
          {
            type: 'doc',
            docId: 'Concepts/Serverless Computing',
            position: 'left',
            label: 'Concepts',
          },
          {
            type: 'doc',
            docId: 'Guides/Setting Up Your Enviroment',
            position: 'left',
            label: 'Guides',
          },
          {
            type: 'doc',
            docId: 'Reference/Method Data Context',
            position: 'left',
            label: 'Reference',
          },
          {
            type: 'doc',
            docId: 'About/FAQ',
            position: 'left',
            label: 'About',
          },
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
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
                to: '/docs/Getting Started/intro',
              },
              {
                label: 'Concepts',
                to: '/docs/Concepts/Serverless Computing',
              },
              {
                label: 'Guides',
                to: '/docs/Guides/Setting Up Your Enviroment',
              },
              {
                label: 'Reference',
                to: '/docs/Reference/Method Data Context',
              },
              {
                label: 'About',
                to: '/docs/About/FAQ',
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
                label: 'Discord',
                href: 'https://discordapp.com/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
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
