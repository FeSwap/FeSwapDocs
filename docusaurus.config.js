/** @type {import('@docusaurus/types').DocusaurusConfig} */
const math = require("remark-math");
const path = require("path");
const katex = require("rehype-katex");

module.exports = {
  title: 'FeSwap is live on Polygon',
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
        {label: 'On Polygon',  to: 'docs/Polygon/governance', position: 'left'},
        {
          type: 'dropdown',
          label: 'Tutorial',
          position: 'left',
          items: [
            {to: 'Swap',        label: 'Swap'},
            {to: 'Liquidity',   label: 'Liquidity'},
            {to: 'Mining',      label: 'Mining'},
            {to: 'NFT',         label: 'NFT'},
            {to: 'Sponsor',     label: 'Sponsor'},
          ],
        },

        {label: 'App',      href: 'https://app.feswap.io', position: 'left'},
        {label: '@ipfs',    href: 'https://ipfs.feswap.io', position: 'left'},
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
              href: 'https://t.me/FeSwap66',
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
              href: 'mailto: desk@feswap.io',
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
