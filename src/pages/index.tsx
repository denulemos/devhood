import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {Redirect} from '@docusaurus/router';

export default function Home(): ReactNode {
  return (
   <Redirect to="/docs/landing/devhood" />
  );
}
