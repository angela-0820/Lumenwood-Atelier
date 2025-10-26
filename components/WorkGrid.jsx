'use client';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const works = [
  {
    id: 'oak-room',
    title: 'Oak Room — Tirana',
    cover: '/images/p1.jpg',
    blurb: 'A calm living space in neutral oak and limewash, designed for light from morning to dusk.',
    facts: ['65 m²', 'Custom oak joinery', 'Brushed brass'],
  },
  {
    id: 'clay-cafe',
    title: 'Clay Cafe — Lisbon',
    cover: '/images/p2.jpg',
    blurb: 'Hospitality project with terracotta bar, acoustic ceiling, and low-glare lighting.',
    facts: ['24 seats', 'Terracotta bar', 'Acoustic panels'],
  },
  {
    id: 'suite-porto',
    title: 'Hotel Suite — Porto',
    cover: '/images/p3.jpg',
    blurb: 'Walnut joinery and sand stone define a quiet suite with layered warm lighting.',
    facts: ['38 m²', 'Walnut, sandstone', 'Dimmable scenes'],
  },
  {
    id: 'atrium-office',
    title: 'Atrium Office — Porto',
    cover: '/images/p4.jpg',
    blurb: 'Executive workspace with blackened oak, acoustic partitions, and integrated storage.',
    facts: ['120 m²', 'Blackened oak', 'Task + ambient layers'],
  },
  {
    id: 'stone-spa',
    title: 'Stone Spa — Tirana',
    cover: '/images/p5.jpg',
    blurb: 'Warm stone, indirect light, and steam-safe finishes for a compact spa.',
    facts: ['55 m²', 'Heat-resistant stone', 'Low-glare lighting'],
  },
  {
    id: 'gallery-lounge',
    title: 'Gallery Lounge — Lisbon',
    cover: '/images/p6.jpg',
    blurb: 'Lounge for an art space; neutral palette to let art lead, with linen and walnut.',
    facts: ['74 m²', 'Walnut + linen', 'Track + wall-wash'],
  },
];

export default function WorkGrid() {
  // id i punes se hapur (modal)
  const [open, setOpen] = useState(null);
  const selected = works.find((w) => w.id === open);

  const closeBtnRef = useRef(null);
  //mbyllim modalin me ESC
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setOpen(null);
    }
    if (open) {
      window.addEventListener('keydown', onKey);
    }
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    if (selected && closeBtnRef.current) {
      const t = setTimeout(() => closeBtnRef.current?.focus(), 0);
      return () => clearTimeout(t);
    }
  }, [selected]);

  return (
    <>
      <div className="grid cols-2 cols-3">
        {works.map((w) => (
          <button
            key={w.id}
            type="button"
            className="project as-button hover-card"
            onClick={() => setOpen(w.id)}
            aria-haspopup="dialog"
            aria-controls={`${w.id}-dialog`}
            aria-label={`Open ${w.title}`}
          >
            <div style={{ position: 'relative', aspectRatio: '16/10' }}>
              <Image
                src={w.cover}
                alt={`${w.title} preview`}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                style={{ objectFit: 'cover' }}
                loading="lazy"
              />
            </div>
            <div className="meta">
              <h3 className="title">{w.title}</h3>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="backdrop"
          onClick={() => setOpen(null)}
        >
          <article
            className="modal-card"
            id={`${selected.id}-dialog`}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${selected.id}-title`}
            aria-describedby={`${selected.id}-desc`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-hero">
              <Image
                src={selected.cover}
                alt={`${selected.title} full`}
                fill
                sizes="(max-width: 900px) 95vw, 900px"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>

            <div className="modal-body">
              <h3 className="modal-title" id={`${selected.id}-title`}>
                {selected.title}
              </h3>

              <p className="small" id={`${selected.id}-desc`} style={{ margin: '6px 0 10px' }}>
                {selected.blurb}
              </p>

              <ul className="facts">
                {selected.facts.map((f, i) => (
                  <li key={`${selected.id}-fact-${i}`}>{f}</li>
                ))}
              </ul>

              <div style={{ display: 'flex', gap: 10, marginTop: 12, flexWrap: 'wrap' }}>
                <button
                  ref={closeBtnRef}
                  type="button"
                  className="btn"
                  onClick={() => setOpen(null)}
                >
                  Close
                </button>
                <a className="btn primary" href="/contact">
                  Discuss a similar project
                </a>
              </div>
            </div>
          </article>
        </div>
      )}
    </>
  );
}
