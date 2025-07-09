import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

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
    'desarrollo-web/angular',
    'desarrollo-web/react',
    'desarrollo-web/scss',
    'desarrollo-web/html',
    'desarrollo-web/javascript',
    'desarrollo-web/nodejs',
    'versionado',
    'cicd',
  ],
};

export default sidebars;
