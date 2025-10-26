// Ketu eshte Server Component (nuk ka 'use client'),
// prandaj lejohet export i metadata. Grida e punimeve renditet nga WorkGrid (Client).

import Section from '../../components/Section';
import WorkGrid from '../../components/WorkGrid';

export const metadata = {
    title: 'Projects — Atelier Lumenwood',
    description: 'Selected work.',
};

export default function Projects() {
    return (
        <Section title="Portfolio">
            {/* WorkGrid eshte komponent Client qe merret me klikimet dhe modalin */}
            <WorkGrid />
        </Section>
    );
}
