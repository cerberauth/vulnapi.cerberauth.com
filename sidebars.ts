import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
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
      items: [
        'getting-started/installation',
        'getting-started/github-action',
      ]
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
      items: [
        'best-practices/security-headers',
      ]
    },
    {
      type: 'category',
      label: 'Vulnerabilities',
      link: {
        type: 'doc',
        id: 'vulnerabilities/index',
      },
      collapsed: true,
      items: [
        'vulnerabilities/broken-authentication/jwt-alg-none',
        'vulnerabilities/broken-authentication/jwt-blank-secret',
        'vulnerabilities/broken-authentication/jwt-cross-service-relay-attack',
        'vulnerabilities/broken-authentication/jwt-null-signature',
        'vulnerabilities/security-misconfiguration/graphql-introspection',
      ]
    },
  ],
};

module.exports = sidebars;
