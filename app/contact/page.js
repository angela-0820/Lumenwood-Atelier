'use client';
import { useState } from 'react';

export default function ContactForm() {

    const [sent, setSent] = useState(false);  // gjendja e thjeshte per feedback pas submit

    function submit(e) {
        e.preventDefault(); // ndalon  rifreskimin e faqes
        setSent(true);

    }

    if (sent) {
        return <p className="small">Thank you — we will get back to you shortly.</p>;
    }

    return (
        <form onSubmit={submit} style={{ display: 'grid', gap: 12 }}>
            <input
                name="name"
                placeholder="Your name"
                autoComplete="name"
                className="card pad"
                required
            />

            <input
                name="email"
                type="email"
                placeholder="Email"
                autoComplete="email"
                className="card pad"
                required
            />

            <input
                name="phone"
                type="tel"
                inputMode="tel"
                placeholder="Phone (optional)"
                autoComplete="tel"
                className="card pad"
            />
            <textarea
                name="message"
                placeholder="Tell us about the project"
                rows={5}
                className="card pad"
                required
            />
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <button className="btn primary" type="submit">Send</button>
                <a className="btn" href="mailto:hello@atelier-lumenwood.example">Or email us</a>
            </div>
        </form>
    );
}
