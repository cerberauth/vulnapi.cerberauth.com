import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'VulnAPI',
  tagline: 'Let\'s detect vulnerabilities and secure your API.',
  favicon: 'img/favicon.ico',

  url: 'https://vulnapi.cerberauth.com',
  baseUrl: '/',
  trailingSlash: true,

  organizationName: 'cerberauth',
  projectName: 'vulnapi',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  scripts: [
    { src: 'https://a.cerberauth.com/js/script.outbound-links.js', defer: true, 'data-domain': 'vulnapi.cerberauth.com' },
  ],

  plugins: [
    require.resolve('docusaurus-lunr-search')
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/cerberauth/vulnapi.cerberauth.com/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/cerberauth/vulnapi.cerberauth.com/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig:
    {
      image: 'logo-no-background.png',
      navbar: {
        title: 'VulnAPI',
        logo: {
          alt: 'VulnAPI',
          src: 'logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            position: 'left',
            label: 'Docs',
          },
          {
            label: 'Vulnerabilities',
            to: '/docs/vulnerabilities/',
            position: 'left',
          },
          {
            to: '/labs',
            label: 'Labs',
            position: 'left',
          },
          {
            href: 'https://github.com/cerberauth/vulnapi',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://vulnapi.cerberauth.com/discord',
            label: 'Discord',
            position: 'right',
          }
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
                to: '/docs/getting-started/',
              },
              {
                label: 'Best API Security Practices',
                to: '/docs/best-practices/',
              },
              {
                label: 'API Security Vulnerabilities',
                to: '/docs/vulnerabilities/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/cerberauth',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/cerberauth/vulnapi',
              },
              {
                label: 'Discord',
                href: 'https://vulnapi.cerberauth.com/discord',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'CerberAuth',
                href: 'https://www.cerberauth.com/',
              },
              {
                label: 'VulnAPI Blog',
                to: '/blog',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CerberAuth.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    } satisfies Preset.ThemeConfig,
};

module.exports = config;
