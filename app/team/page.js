import Section from '../../components/Section';
import TeamMember from '../../components/TeamMember';

export const metadata = {
  title: 'Team — Atelier Lumenwood',
  description: 'Leadership & architects behind our work.',
};

const people = [
  {
    name: 'Arta Dervishi',
    role: 'Creative Director',
    img: '/images/team1.jpg',
    bio: 'Sets design direction and material palette across projects. Loves limewash, linen, and quiet light.',
    tags: ['Concept', 'Art Direction', 'Client Vision'],
    links: { li: '#', ig: '#' }
  },
  {
    name: 'Mikel Santos',
    role: 'Lead Architect',
    img: '/images/team2.jpg',
    bio: 'Details every junction for longevity. Coordinates structure, MEP, and on-site adjustments.',
    tags: ['Technical', 'Joinery', 'Coordination'],
    links: { li: '#' }
  },
  {
    name: 'Thomas Peterson',
    role: 'Materials Lead',
    img: '/images/team3.jpg',
    bio: 'Sources honest finishes and tracks maintenance & sustainability in our Materials Library.',
    tags: ['Sourcing', 'Sustainability', 'Finishes'],
    links: { ig: '#', li: '#' }
  },
  {
    name: 'John Doe',
    role: 'Project Manager',
    img: '/images/team4.jpg',
    bio: 'Schedules vendors, runs budget transparency, and keeps site moving without surprises.',
    tags: ['Planning', 'Budget', 'Vendors'],
    links: { li: '#' }
  },
  {
    name: 'Elira Kola',
    role: 'Managing Partner',
    img: '/images/team5.jpg',
    bio: 'Leads client strategy and project delivery with a focus on longevity and measurable outcomes.',
    tags: ['Leadership', 'Client Strategy', 'Delivery'],
    links: { li: '#', ig: '#' }
  },
  {
    name: 'Mara Vega',
    role: 'Design Principal',
    img: '/images/team6.jpg',
    bio: 'Sets creative direction across programs and mentors teams on detailing and light.',
    tags: ['Creative Direction', 'Details', 'Lighting'],
    links: { li: '#' }
  }
];

export default function Team() {
  return (
    <>
      <div className="team-hero">
        <div>
          <div className="kicker"><span className="bar"></span>Our studio</div>
          <h1 style={{ margin: '8px 0 6px' }}>People who shape the work</h1>
          <p className="small" style={{ maxWidth: '60ch', margin: '0 auto' }}>
            Small on purpose. Senior-led teams collaborate with local makers to deliver interiors that age beautifully.
          </p>
        </div>
      </div>

      <Section title="Leadership & architects" subtitle="Experienced, hands-on, detail-obsessed">
        <div className="team-grid">
          {people.map((p) => (
            <TeamMember key={p.name} {...p} />
          ))}
        </div>
      </Section>
    </>
  );
}
