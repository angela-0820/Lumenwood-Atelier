export default function Section({
    title,
    subtitle,
    children,
    className = '',
    container = true,
}) { // krijojme id bazuar ne title per aksesibilitet
    const sectionId = title
        ? String(title).toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
        : undefined;

    const headingId = sectionId ? `${sectionId}-heading` : undefined;

    const Wrapper = container ? 'div' : 'Fragment';
    const wrapperProps = container ? { className: 'container' } : {};

    return (
        <section
            className={`section ${className}`.trim()}
            id={sectionId}
            aria-labelledby={headingId}
        >
            <Wrapper {...wrapperProps}>
                <div className="section-head">
                    {title && <h2 id={headingId}>{title}</h2>}
                    {subtitle && <p className="small">{subtitle}</p>}
                </div>

                {children}
            </Wrapper>
        </section>
    );
}
