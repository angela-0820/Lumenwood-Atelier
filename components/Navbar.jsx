'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const el = document.documentElement;
    if (!el.getAttribute('data-theme')) el.setAttribute('data-theme', 'auto');
  }, []);


  function toggleTheme() {
    const el = document.documentElement;
    const order = ['auto', 'greige', 'umber']; 
    const cur = el.getAttribute('data-theme') || 'auto';
    const idx = Math.max(0, order.indexOf(cur)); 
    const next = order[(idx + 1) % order.length];
    el.setAttribute('data-theme', next);
  }

  const links = [
    { href: '/about', label: 'About us' },
    { href: '/projects', label: 'Portfolio' },
    { href: '/team', label: 'Team' },
  ];

  // aktivizo linkun kur path perputhet fiks
  const isActive = (href) => pathname === href;

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-inner">
          <Link href="/" className="brand" aria-label="Atelier Lumenwood home">
            <span className="brand-dot" />
            <span className="brand-text">Atelier Lumenwood</span>
          </Link>

          <div className="nav-group">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-link${isActive(l.href) ? ' active' : ''}`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="nav-actions">
            <Link href="/contact" className="btn cta solid-outline">Contact us</Link>
            <button className="btn ghost" onClick={toggleTheme} aria-label="Toggle theme">
              Theme
            </button>

            <button
              className="hamburger"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(v => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {/* Drawer per mobile (mbyllet kur klikon jasht panelit ose ne nje link) */}
        {open && (
          <div className="nav-drawer" onClick={() => setOpen(false)}>
            <div className="nav-drawer-panel" onClick={e => e.stopPropagation()}>
              {links.map(l => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`nav-link block${isActive(l.href) ? ' active' : ''}`}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              <Link href="/contact" className="btn cta block" onClick={() => setOpen(false)}>
                Contact us
              </Link>
              <button
                className="btn ghost block"
                onClick={() => { toggleTheme(); setOpen(false); }}
              >
                Theme
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
