/** @type {import('@docusaurus/types').DocusaurusConfig} */
const math = require("remark-math");
const path = require("path");
const katex = require("rehype-katex");

module.exports = {
  title: 'FeSwap is Alive',
  tagline: '🤲💰️ Decentralized Crypto AMM Exchange with Zero Commision Fee 💰️🤲',
  url: 'https://wwww.feswap.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/Fesw.png',
  organizationName: 'FeSwap', // Usually your GitHub org/user name.
  projectName: 'FeSwapDocs',  // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'cn'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      cn: {
        label: '中文',
      },
    },
  },
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
      integrity:
        'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig: {
    navbar: {
      title: 'FeSwap Exchange',
      logo: {
        alt: 'FeSwap Site Logo',
        src: 'img/Fesw.png',
      },
      items: [
        {to: 'Swap',        label: 'Swap',        position: 'left'},
        {to: 'Liquidity',   label: 'Liquidity',   position: 'left'},
        {to: 'Mining',      label: 'Mining',      position: 'left'},
        {to: 'NFT',         label: 'NFT',         position: 'left'},
        {to: 'Sponsor',     label: 'Sponsor',     position: 'left'},

        {label: 'App',      href: 'https://app.feswap.io', position: 'right'},
        {label: '@ipfs',    href: 'https://ipfs.feswap.io', position: 'right'},
        {
          to: 'docs/',
          activeBasePath: '/',
          label: 'Docs 📚',
          position: 'right',
        },
        {
          type: 'dropdown',
          label: 'Community',
          position: 'right',
          items: [
            {to: 'blog', label: 'Blog 💬'},
            {
              to: 'download',
              label: 'Download ⤵',
            },
          ],
        },
        {
          type: 'localeDropdown',
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
              label: 'FeSwap Governance',
              to: 'docs/Feswap/introduction',
            },
            {
              label: 'FreeSwap Protocol',
              to: 'docs/FreeSwap/abstract',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Telegram',
              href: 'https://t.me/FeSwap',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/feswap66',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Contact',
              href: 'mailto: desk@fesap.io',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/feswap',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FeSwap Decentralized Free Exchange.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
//          editUrl: 'https://github.com/feswap/',
          remarkPlugins: [math],
          rehypePlugins: [katex],  
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:'https://github.com/feswap/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [path.resolve(__dirname, "my-plugin")],
};
