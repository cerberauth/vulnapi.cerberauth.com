// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'introduction',
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
        title: 'Getting Started with VulnAPI',
        description: 'Learn how to install and make your first API vulnerability scan with VulnAPI',
        slug: '/getting-started/',
      },
      collapsed: false,
      items: ['getting-started/installation']
    },
    {
      type: 'category',
      label: 'Best Practices',
      link: {
        type: 'generated-index',
        title: 'Security Best Practices',
        description: 'Discover API Security best practices',
        slug: '/best-practices/',
      },
      collapsed: true,
      items: ['best-practices/security-headers']
    },
    {
      type: 'category',
      label: 'Vulnerabilities',
      link: {
        type: 'generated-index',
        title: 'API Vulnerabilities',
        description: 'Discover API vulnerabilities',
        slug: '/vulnerabilities/',
      },
      collapsed: true,
      items: [
        'vulnerabilities/broken-authentication/jwt-alg-none',
        'vulnerabilities/broken-authentication/jwt-blank-secret',
        'vulnerabilities/broken-authentication/jwt-cross-service-relay-attack',
        'vulnerabilities/broken-authentication/jwt-null-signature',
      ]
    },
  ],
};

module.exports = sidebars;
