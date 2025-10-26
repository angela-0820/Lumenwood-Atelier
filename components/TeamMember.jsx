'use client';

import Image from 'next/image';
import { useRef } from 'react';

/*Komponenti per shfaqjen e nje anetari te ekipit me foto, emer, rol, bio dhe rrjete sociale.*/
export default function TeamMember({
  name = 'Unnamed',
  role = 'Role',
  bio = '',
  img = '/images/team1.jpg',
  tags = [],
  links = {},
}) {
  const ref = useRef(null);
  function onMove(e) {

    if (!window.matchMedia('(hover: hover)').matches) return;
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const mx = (e.clientX - r.left) / r.width;
    const my = (e.clientY - r.top) / r.height;
    el.style.setProperty('--ry', `${(mx - 0.5) * 10}deg`);
    el.style.setProperty('--rx', `${-(my - 0.5) * 6}deg`);
  }
  function onLeave() {
    const el = ref.current; if (!el) return;
    el.style.setProperty('--ry', '0deg');
    el.style.setProperty('--rx', '0deg');
  }


  const altText = name ? `${name} portrait` : 'Team member portrait';

  return (
    <article
      ref={ref}
      className="member"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="photo-wrap">
        <div className="photo">

          <Image
            src={img}
            alt={altText}
            fill
            sizes="(max-width: 720px) 100vw, 33vw"
            style={{ objectFit: 'cover' }}
            loading="lazy"
          />
        </div>

      </div>

      <div className="member-body">

        <h3>{name}</h3>
        <div className="role">{role}</div>
        {bio && <p className="bio">{bio}</p>}
        {Array.isArray(tags) && tags.length > 0 && (
          <div className="pills">
            {tags.map((t, i) => (
              <span key={`${name}-${i}`} className="pill">{t}</span>
            ))}
          </div>
        )}

        {(links.ig || links.li || links.x || links.web) && (
          <div className="social">
            {links.ig && <a href={links.ig} aria-label="Instagram" target="_blank" rel="noopener noreferrer">IG</a>}
            {links.li && <a href={links.li} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">in</a>}
            {links.x && <a href={links.x} aria-label="X" target="_blank" rel="noopener noreferrer">X</a>}
            {links.web && <a href={links.web} aria-label="Website" target="_blank" rel="noopener noreferrer">↗</a>}
          </div>
        )}
      </div>
    </article>
  );
}
