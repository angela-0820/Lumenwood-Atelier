import Hero from '../components/Hero';
import Section from '../components/Section';
import SnapCarousel from '../components/SnapCarousel';
import ProjectCard from '../components/ProjectCard';
import ProcessTimeline from '../components/ProcessTimeline';

const carouselItems = [
    { src: '/images/p1.jpg', alt: 'Oak living room', title: 'Oak Room, Tirana', desc: 'Neutral oak, limewash walls, linen textures.' },
    { src: '/images/p2.jpg', alt: 'Cafe interior', title: 'Clay Cafe, Lisbon', desc: 'Terracotta bar, brass accents, acoustic panels.' },
    { src: '/images/p3.jpg', alt: 'Hotel suite', title: 'Hotel Suite, Porto', desc: 'Walnut joinery, sand stone, dimmable layers.' }
];

export default function Home() {
    return (
        <>
            <Hero />

            <Section title="Why us">
                <div className="card pad" style={{ maxWidth: 820, margin: '0 auto' }}>
                    <p className="small">
                        We create modern spaces tailored to each client—fresh, warm, functional—while preserving a homey feel.
                        Materials first, details always.
                    </p>
                </div>
            </Section>

            <Section title="Selected Work">
                <SnapCarousel items={carouselItems} />
            </Section>

            {/* Procesi i punes - i shpjeguar shkurt ne nje timeline te thjeshte */}
            <Section title="Our work process" subtitle="makes your vision come to life">
                <div id="process" className="card pad">
                    <ProcessTimeline />
                </div>
            </Section>

            <Section title="Categories">
                <div className="grid cols-2 cols-3">
                    <ProjectCard href="/projects" src="/images/p1.jpg" title="Minimalist design" meta="Light, simple, calm" />
                    <ProjectCard href="/projects" src="/images/p2.jpg" title="Modern interior" meta="Contemporary lines" />
                    <ProjectCard href="/projects" src="/images/p3.jpg" title="Modern furniture" meta="Crafted to fit" />
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
                    <a href="/contact" className="btn primary">Get a free consultation</a>
                </div>
            </Section>
        </>
    );
}
