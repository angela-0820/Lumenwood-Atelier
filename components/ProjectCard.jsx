import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({
    href = '/projects',
    src = '/images/p1.jpg',
    title = 'Untitled project',
    meta,
    alt,
    priority = false,
}) {
    const label = `Open project: ${title}`;
    const altText = alt || `${title} preview`;

    return (
        <Link href={href} className="project" aria-label={label}>
            <div style={{ position: 'relative', aspectRatio: '16/10' }}>
                <Image
                    src={src}
                    alt={altText}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    loading={priority ? undefined : 'lazy'}
                    priority={priority}
                />
            </div>

            <div className="meta">
                <h3 className="title">{title}</h3>
                {meta && <p className="sub">{meta}</p>}
            </div>
        </Link>
    );
}
