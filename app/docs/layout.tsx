import { DocsLayout } from 'fumadocs-ui/layout';
import type { ReactNode } from 'react';
import { docsOptions } from '../layout.config';

import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle';

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <DocsLayout
            sidebar={{
                banner: (
                    <RootToggle
                        options={[
                            {
                                icon: '📁',
                                title: 'APIs',
                                description: "okisdev's APIs",
                                url: '/docs/apis',
                            },
                            {
                                icon: '📁',
                                title: 'Chat Chat',
                                description: 'Unified chat and search to AI platform',
                                url: '/docs/chat',
                            },
                            {
                                icon: '📁',
                                title: 'Notion Blog React',
                                description: 'Notion Blog React',
                                url: '/docs/notion-blog-react',
                            },
                            {
                                icon: '📁',
                                title: 'Notion Photo React',
                                description: 'Notion Blog React',
                                url: '/docs/notion-photo-react',
                            },
                            {
                                icon: '📁',
                                title: 'Rail',
                                description: 'Notion Blog React',
                                url: '/docs/rail',
                            },
                            {
                                icon: '📁',
                                title: 'TfL Tube',
                                description: 'Notion Blog React',
                                url: '/docs/tfl-tube',
                            },
                        ]}
                    />
                ),
            }}
            {...docsOptions}
        >
            {children}
        </DocsLayout>
    );
}
