import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';

export default async function Layout({ params, children }: { params: Promise<{ lang: string }>; children: React.ReactNode }) {
  return (
    <DocsLayout tree={source.pageTree[(await params).lang]} {...baseOptions}>
      {children}
    </DocsLayout>
  );
}
