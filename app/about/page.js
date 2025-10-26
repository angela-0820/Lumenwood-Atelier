import Section from '../../components/Section';

export const metadata = {
  title: 'About us — Atelier Lumenwood',
  description: 'Our story, values, and practice.',
};

export default function About() {
  return (
    <>
      <div className="about-hero">
        <div className="bg" aria-hidden />
        <div className="content">
          <span className="badge">Since 2012</span>
          <h1 style={{ margin: '10px 0 6px' }}>Designing spaces that age beautifully</h1>
          <p className="small" style={{ maxWidth: '52ch' }}>
            We began as a small studio crafting quiet residential interiors. Today we partner with
            architects, makers, and hospitality brands across Europe—still guided by materials,
            light, and longevity.
          </p>
        </div>
      </div>

      <Section title="Our story" subtitle="Milestones that shaped our practice">
        <div className="grid" style={{ gap: 16, gridTemplateColumns: '1fr' }}>
          <div className="card pad">
            <div className="timeline">
              <div className="t-item">
                <h3 className="t-year">2012</h3>
                <p className="t-text">
                  Atelier Lumenwood founded in Tirana—two designers, one borrowed workshop.
                </p>
              </div>
              <div className="t-item">
                <h3 className="t-year">2015</h3>
                <p className="t-text">
                  First hospitality project: a 24-seat café; custom oak joinery becomes our signature.
                </p>
              </div>
              <div className="t-item">
                <h3 className="t-year">2018</h3>
                <p className="t-text">
                  We launch our Materials Library to track patina, maintenance, and sourcing ethics.
                </p>
              </div>
              <div className="t-item">
                <h3 className="t-year">2021</h3>
                <p className="t-text">
                  Work expands to Lisbon and Porto; collaborations with local metal and stone shops.
                </p>
              </div>
              <div className="t-item">
                <h3 className="t-year">2024</h3>
                <p className="t-text">
                  Sustainability pledge: FSC timber by default, low-VOC finishes, and repairable details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Studio in numbers" subtitle="A small team with wide reach">
        <div className="stats">
          <div className="stat">
            <div className="num">120+</div>
            <div className="lbl">completed spaces</div>
          </div>
          <div className="stat">
            <div className="num">9</div>
            <div className="lbl">cities</div>
          </div>
          <div className="stat">
            <div className="num">35+</div>
            <div className="lbl">craft partners</div>
          </div>
          <div className="stat">
            <div className="num">12</div>
            <div className="lbl">years designing</div>
          </div>
        </div>
      </Section>

      <Section title="What we care about" subtitle="Principles behind every decision">
        <div className="values">
          {/* Karta 1 */}
          <article className="value">
            <div className="img" aria-hidden />
            <div className="body">
              <h3>Craft over trend</h3>
              <p>
                We specify honest materials and visible joinery so spaces improve with use—not
                expire with fashion.
              </p>
            </div>
          </article>

          <article className="value">
            <div className="img" aria-hidden />
            <div className="body">
              <h3>Light as a material</h3>
              <p>
                Layered lighting and natural reflectance guide the experience—from morning calm to
                evening warmth.
              </p>
            </div>
          </article>

          <article className="value">
            <div className="img" aria-hidden />
            <div className="body">
              <h3>Longevity</h3>
              <p>
                We detail for repair, specify replaceable parts, and document maintenance to extend
                a project’s life.
              </p>
            </div>
          </article>
        </div>
      </Section>

      <Section>
        <div className="card pad" style={{ textAlign: 'center' }}>
          <h2 style={{ margin: '0 0 8px' }}>Have a project in mind?</h2>
          <p className="small" style={{ margin: '0 0 12px' }}>
            Tell us about your space—home, café, or hotel.
          </p>
          <a href="/contact" className="btn primary">Start a conversation</a>
        </div>
      </Section>
    </>
  );
}
