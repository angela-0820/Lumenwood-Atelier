const DEFAULT_STEPS = [
    { title: '01 Concept', sub: 'brief & mood' },
    { title: '02 Plan', sub: 'layouts & budget' },
    { title: '03 Design', sub: 'materials & details' },
    { title: '04 Build', sub: 'site & vendors' },
    { title: '05 Launch', sub: 'handover' },
];

export default function ProcessTimeline({ steps }) {
    const items = Array.isArray(steps) && steps.length ? steps : DEFAULT_STEPS;

    return (
        <ol
            className="process"
            aria-label="Work process"
            style={{ listStyle: 'none', padding: 0, margin: 0 }}
        >
            {items.map((s, i) => (

                <li key={`${i}-${s.title}`} className="step" data-step={i + 1}>
                    <div className="dot"></div>
                    <div className="line"></div>

                    <h4>{s.title}</h4>
                    <p>{s.sub}</p>
                </li>
            ))}
        </ol>
    );
}
