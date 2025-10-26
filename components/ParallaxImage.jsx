'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ParallaxImage({
    src,
    alt,
    height = 520,
    speed = 0.2,
    caption,
    priority = false,
}) {
    const ref = useRef(null);

    // progresi i scroll-it brenda zones se figures
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    // clamp i thjeshte per speed (nese del jashte kufijve)
    const s = Math.max(-1, Math.min(1, Number(speed) || 0.2));

    const y = useTransform(scrollYProgress, [0, 1], [0, -height * s]);

    return (
        <figure ref={ref} className="figure" style={{ height }}>
            <motion.div style={{ y, height: '100%' }}>
                <div style={{ position: 'relative', height: '100%' }}>
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectFit: 'cover' }}
                        priority={priority}
                    />
                </div>
            </motion.div>

            {caption && <figcaption className="caption">{caption}</figcaption>}
        </figure>
    );
}
