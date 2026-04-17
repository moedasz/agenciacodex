import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import {
    buildWhatsAppUrl,
    BUSINESS_PHONE_DISPLAY,
    DEFAULT_BUDGET_MESSAGE,
    DEFAULT_SPECIALIST_MESSAGE,
} from "../lib/contact";

const NAV_LINKS = [
    { label: "Serviços", href: "/servicos" },
    { label: "Como funciona", href: "/como-funciona" },
    { label: "Sobre", href: "/sobre" },
    { label: "Blog", href: "/blog" },
    { label: "Contato", href: "/contato" },
];

export function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [location.pathname]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-[rgba(10,10,10,0.8)] backdrop-blur-[20px] border-b border-[rgba(255,255,255,0.04)]"
                    : "bg-[rgba(10,10,10,0.8)] backdrop-blur-[20px] border-b border-transparent"
            }`}
        >
            <div className="max-w-6xl mx-auto px-6 sm:px-8">
                <div className="flex items-center justify-between h-16 sm:h-18">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0">
                        <picture>
                            <source
                                type="image/avif"
                                srcSet="/img/logoagencia-150.avif 1x, /img/logoagencia-300.avif 2x, /img/logoagencia-450.avif 3x"
                            />
                            <source
                                type="image/webp"
                                srcSet="/img/logoagencia-150.webp 1x, /img/logoagencia-300.webp 2x, /img/logoagencia-450.webp 3x"
                            />
                            <img
                                src="/img/logoagencia-300.png"
                                alt="Bforense"
                                className="h-8 sm:h-10 w-auto"
                                width={188}
                                height={40}
                                decoding="async"
                                fetchPriority="high"
                            />
                        </picture>
                    </Link>

                    {/* Desktop Nav - hidden on Home for conversion focus */}
                    {!isHome && (
                        <nav className="hidden md:flex items-center gap-8">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    className={`text-sm font-medium transition-colors ${
                                        location.pathname === link.href
                                            ? "text-text-primary"
                                            : "text-text-secondary hover:text-text-primary"
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    )}

                    {/* Home: phone number + CTA */}
                    {isHome && (
                        <div className="hidden md:flex items-center gap-4">
                            <span className="flex items-center gap-2 text-text-secondary text-sm">
                                <Phone className="w-3.5 h-3.5 text-gold" />
                                {BUSINESS_PHONE_DISPLAY}
                            </span>
                        </div>
                    )}

                    {/* CTA Desktop */}
                    <a
                        href={buildWhatsAppUrl(DEFAULT_BUDGET_MESSAGE)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:inline-flex items-center gap-2 btn-header font-medium text-sm px-5 py-2.5 rounded-md"
                    >
                        <WhatsAppIcon className="w-4 h-4" />
                        {isHome ? "Solicitar Orçamento" : "Fale conosco"}
                    </a>

                    {/* Mobile Menu Button - only on non-home pages */}
                    {!isHome ? (
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="md:hidden p-2 text-text-secondary hover:text-text-primary"
                            aria-label="Menu"
                        >
                            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    ) : (
                        <a
                            href={buildWhatsAppUrl(DEFAULT_BUDGET_MESSAGE)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="md:hidden inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-bg font-semibold text-xs px-4 py-2.5 rounded-lg transition-colors"
                        >
                            <WhatsAppIcon className="w-4 h-4" />
                            Orçamento
                        </a>
                    )}
                </div>
            </div>

            {/* Mobile Menu - only on non-home pages */}
            {!isHome && (
                <div
                    className={`md:hidden bg-surface border-b border-[rgba(255,255,255,0.04)] overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
                        mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                    aria-hidden={!mobileOpen}
                >
                    <nav className="flex flex-col px-6 py-4 gap-1">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                onClick={() => setMobileOpen(false)}
                                className={`py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                                    location.pathname === link.href
                                        ? "bg-surface-card text-text-primary"
                                        : "text-text-secondary hover:text-text-primary hover:bg-surface-card"
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <a
                            href={buildWhatsAppUrl(DEFAULT_SPECIALIST_MESSAGE)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 flex items-center justify-center gap-2 btn-header font-medium text-sm px-5 py-3 rounded-md"
                        >
                            <WhatsAppIcon className="w-4 h-4" />
                            Fale conosco
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
