import './style.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
    title: 'Atelier Lumenwood',
    description: 'Designing with light — warm, modern interiors',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="charcoal">
            <body>
                <div className="container">
                    <header className="header">
                        <div className="container header-row">
                            <Navbar />
                        </div>
                    </header>
                    <main className="main">{children}</main>
                    <footer className="footer"><Footer /></footer>
                </div>
            </body>
        </html>
    );
}