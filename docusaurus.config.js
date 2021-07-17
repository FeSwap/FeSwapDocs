/** @type {import('@docusaurus/types').DocusaurusConfig} */
const math = require("remark-math");
const path = require("path");
const katex = require("rehype-katex");

module.exports = {
  title: 'FeSwap',
  tagline: 'The First Free Decentralized AMM Exchange in the World 🤲💰️💰️🤲',
  url: 'https://docs.feswap.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'Feswap', // Usually your GitHub org/user name.
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
      href: "https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq",
      crossorigin: "anonymous",
    },
  ],
  themeConfig: {
    navbar: {
      title: 'FeSwap Exchange ',
      logo: {
        alt: 'FeSwap Site Logo',
        src: 'img/favicon.png',
      },
      items: [
        {to: 'swap',    label: 'SWAP',    position: 'left'},
        {to: 'borrow',  label: 'BORROW',  position: 'left'},
        {to: 'NFT',     label: 'NFT',     position: 'left'},
        {
          to: 'docs/',
          activeBasePath: '/',
          label: 'Cookbooks 📚',
          position: 'right',
        },
        {to: 'blog', label: 'Community', position: 'right'},
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
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/feswap',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FeSwap Decentralized Exchange. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/feswap/',
          remarkPlugins: [math],
          rehypePlugins: [katex],  
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/feswap/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [path.resolve(__dirname, "my-plugin")],
};
