import { type BaseLayoutProps, type DocsLayoutProps } from 'fumadocs-ui/layout';
import { pageTree } from '@/app/source';

// shared configuration
export const baseOptions: BaseLayoutProps = {
    nav: {
        title: "okisdev's docs",
    },
    links: [
        {
            text: 'Harry Yep',
            url: 'https://harryyep.com',
            active: 'url',
        },
        {
            text: 'GitHub',
            url: 'https://github.com/okisdev',
            active: 'url',
        },
    ],
};

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
    ...baseOptions,
    tree: pageTree,
};
