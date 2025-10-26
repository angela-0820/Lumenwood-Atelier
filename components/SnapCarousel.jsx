'use client';

import Image from 'next/image';
import { useRef, useCallback } from 'react';


export default function SnapCarousel({ items = [] }) {
    const scrollerRef = useRef(null);


    const onKeyDown = useCallback((e) => {
        const el = scrollerRef.current;
        if (!el) return;
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            el.scrollBy({ left: el.clientWidth * 0.9, behavior: 'smooth' });
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            el.scrollBy({ left: -el.clientWidth * 0.9, behavior: 'smooth' });
        }
    }, []);

    return (
        <div className="carousel">
            <div
                ref={scrollerRef}
                className="scroller"
                role="region"
                aria-label="project carousel"
                tabIndex={0}
                onKeyDown={onKeyDown}
            >
                {items.map((it, i) => {

                    const alt = it.alt || `${it.title || 'Project'} preview`;

                    return (
                        <article key={`${i}-${it.src || 'slide'}`} className="slide">
                            <div className="slide-card hover-card">
                                <Image
                                    src={it.src}
                                    alt={alt}
                                    fill
                                    sizes="(max-width: 900px) 80vw, 45vw"
                                    style={{ objectFit: 'cover' }}
                                    loading={i === 0 ? 'eager' : 'lazy'}
                                    priority={i === 0}
                                />

                                {(it.title || it.desc) && (
                                    <div className="slide-overlay">
                                        <div className="slide-meta">
                                            {it.title && (
                                                <h3 style={{ margin: '0 0 2px', fontSize: '0.95rem', fontWeight: 600 }}>
                                                    {it.title}
                                                </h3>
                                            )}
                                            {it.desc && (
                                                <p className="small" style={{ margin: 0, color: '#ddd' }}>
                                                    {it.desc}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </article>
                    );
                })}
            </div>

            <span className="sr-only">
                Use left and right arrow keys to scroll projects.
            </span>
        </div>
    );
}
