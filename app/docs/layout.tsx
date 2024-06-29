import { DocsLayout } from 'fumadocs-ui/layout';
import type { ReactNode } from 'react';
import { docsOptions } from '../layout.config';

import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle';
import { projects } from '@/config/projects';

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <DocsLayout
      sidebar={{
        banner: <RootToggle options={projects} />,
      }}
      {...docsOptions}
    >
      {children}
    </DocsLayout>
  );
}
