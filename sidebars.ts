import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Manual sidebar configuration with hola.md as landing page
  tutorialSidebar: [
    'landing/devhood',
    'accesibilidad/accesibilidad',
    {
      type: 'category',
      label: '🎨 Frontend',
      collapsed: true,
      link: { type: 'doc', id: 'landing/frontend' },
      items: [
        {
          type: 'category',
          label: '❤️ Angular',
          collapsed: true,
          items: [
            'desarrollo-web/angular',
            'desarrollo-web/angular/clean-code',
            'desarrollo-web/angular/performance',
          ],
        },
        'desarrollo-web/react',
        'desarrollo-web/scss',
        'desarrollo-web/html',
      ],
    },
    {
      type: 'category',
      label: '👨‍💻 Javascript',
      link: { type: 'doc', id: 'landing/jsts' },
      collapsed: true,
      items: [
        'desarrollo-web/javascript/javascript',
        'desarrollo-web/javascript/typescript',
        'desarrollo-web/nodejs',
      ],

    },
    {
      type: 'category',
      label: '⚙️ DevOps',
      link: { type: 'doc', id: 'landing/devops' },
      collapsed: true,
      items: [
        'versionado',
      'cicd',
      ],
    },
    {
      type: 'category',
      label: 'Teoria',
      collapsed: true,
      items: [
        'desarrollo-web/backend/poo',
      ],
    },
    {
      type: 'category',
      label: '🖥️ Backend',
      collapsed: true,
      items: [
        'desarrollo-web/backend/java',
      ],
    },
  ],
};

export default sidebars;
