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
          editUrl: 'https://github.com/rettersoft/rettersoft.github.io/tree/master',
          
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
      // algolia:{
      //   appId: 'BNC7WBD0BQ',
      //   apiKey: "20076e9d4528af94670fff08b260e8a9",
      //   indexName: "DocSearch_retterbusinessservices",
      //   contextualSearch: true,
      //   placeHolder: "Search In Rio Docs",

      //   // Optional: Algolia search parameters
  
      //   // Optional: path for search page that enabled by default (`false` to disable it)
      // },
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
          // {
          //   type: 'doc',
          //   docId: 'Guides/Login Flow',
          //   position: 'left',
          //   label: 'Guides',
          // },
          // {
          //   type: 'doc',
          //   docId: 'Best Practices/Scaling Classes',
          //   position: 'left',
          //   label: 'Best Practices',
          // },
          // {
          //   type: 'doc',
          //   docId: 'About/Limits and Quotas',
          //   position: 'left',
          //   label: 'About',
          // },
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
                to: '/docs/Getting Started/About Documentation',
              },
              {
                label: 'Concepts',
                to: '/docs/Concepts/Projects/What are Projects',
              },
              {
                label: 'Developer Console',
                to: '/docs/Developer Console/Profile Settings - Secrets',
              },
              {
                label: 'Guides',
                to: '/docs/Guides/Login Flow',
              },
              {
                label: 'Best Practices',
                to: '/docs/Best Practices/Scaling Classes',
              },
              {
                label: 'About',
                to: '/docs/About/Limits and Quotas',
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
        copyright: `Copyright ?? ${new Date().getFullYear()} Retter.io`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['yaml'],
      }
    }),
};

module.exports = config;


// query=g&attributesToRetrieve=%5B%22hierarchy.lvl0%22%2C%22hierarchy.lvl1%22%2C%22hierarchy.lvl2%22%2C%22hierarchy.lvl3%22%2C%22hierarchy.lvl4%22%2C%22hierarchy.lvl5%22%2C%22hierarchy.lvl6%22%2C%22content%22%2C%22type%22%2C%22url%22%5D&attributesToSnippet=%5B%22hierarchy.lvl1%3A10%22%2C%22hierarchy.lvl2%3A10%22%2C%22hierarchy.lvl3%3A10%22%2C%22hierarchy.lvl4%3A10%22%2C%22hierarchy.lvl5%3A10%22%2C%22hierarchy.lvl6%3A10%22%2C%22content%3A10%22%5D&snippetEllipsisText=%E2%80%A6&highlightPreTag=%3Cmark%3E&highlightPostTag=%3C%2Fmark%3E&hitsPerPage=20&facetFilters=%5B%22language%3Aen%22%2C%5B%22docusaurus_tag%3Adefault%22%2C%22docusaurus_tag%3Adocs-default-current%22%5D%5D