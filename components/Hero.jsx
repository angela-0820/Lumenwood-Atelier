import ParallaxImage from './ParallaxImage';

export default function Hero() {
    return (
        <div
            className="grid cols-2"
            style={{ alignItems: 'center', gap: 24 }}
        >
            <div className="hero-wrap">
                <span className="hero-kicker">Modern Design Studio</span>

                <h1 className="hero-title">
                    We make interior spaces more functional and modern
                </h1>
                {/* Pershkrim i shkurter i sherbimit */}
                <p className="small hero-sub">
                    Warm materials, clear lines, and a process built for real homes and hospitality spaces.
                </p>

                {/* Dy CTA te qarta: procesi dhe kontakti */}
                <div className="hero-cta-row">
                    <a href="#process" className="btn solid">Our process</a>
                    <a href="/contact" className="btn primary">Contact us</a>
                </div>

                <div className="hero-outline" aria-hidden />
            </div>

            <ParallaxImage
                src="/images/hero.jpg"
                alt="Warm interior"
                height={520}
                caption={`Atelier Lumenwood — ${new Date().getFullYear()}`}
            />
        </div>
    );
}
