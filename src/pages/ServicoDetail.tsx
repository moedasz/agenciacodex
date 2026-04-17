import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { Seo } from "../components/Seo";
import { WhatsAppIcon } from "../components/WhatsAppIcon";
import { OperationsRoomSection } from "../components/OperationsRoomSection";
import { getServiceBySlug, type Service } from "../data/services";
import { NotFound } from "./NotFound";
import { buildWhatsAppUrl, BUSINESS_NAME, BUSINESS_SITE_URL } from "../lib/contact";

function todayStamp(): string {
    const now = new Date();
    return `${String(now.getDate()).padStart(2, "0")}.${String(now.getMonth() + 1).padStart(2, "0")}.${now.getFullYear()}`;
}

interface FaqProps {
    items: Service["faq"];
}

function CompactFaq({ items }: FaqProps) {
    const [open, setOpen] = useState<number | null>(0);
    return (
        <div>
            {items.map((item, i) => (
                <div key={i} className="dossier-faq-item" data-open={open === i}>
                    <button
                        type="button"
                        className="dossier-faq-btn"
                        onClick={() => setOpen(open === i ? null : i)}
                        aria-expanded={open === i}
                    >
                        <span>{item.q}</span>
                        <span className="dossier-faq-sign" aria-hidden="true" />
                    </button>
                    <div className="dossier-faq-answer">{item.a}</div>
                </div>
            ))}
        </div>
    );
}

export function ServicoDetail() {
    const { slug } = useParams<{ slug: string }>();
    const service = slug ? getServiceBySlug(slug) : undefined;

    if (!service) {
        return <NotFound />;
    }

    const Icon = service.icon;
    const servicePath = `/servicos/${service.slug}`;
    const stamp = todayStamp();
    const ctaMessage = `Olá! Quero abrir um caso de ${service.title.toLowerCase()} (ref. ${service.dossierId}).`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.title,
        description: service.shortDesc,
        areaServed: "BR",
        provider: {
            "@type": "Organization",
            name: BUSINESS_NAME,
            url: BUSINESS_SITE_URL,
        },
    };

    return (
        <>
            <Seo
                title={service.title}
                description={service.shortDesc}
                path={servicePath}
                image={service.heroImage}
                jsonLd={jsonLd}
            />

            <article className="pt-16 sm:pt-18">
                {/* ===================== HERO (compact) ===================== */}
                <header className="dossier-hero dossier-hero-compact">
                    <div
                        className="dossier-hero-img"
                        style={{ backgroundImage: `url(${service.heroImage})` }}
                        role="img"
                        aria-label={service.heroImageAlt}
                    />
                    <div className="dossier-hero-overlay" />
                    <div className="dossier-hero-grid" />

                    <span className="dossier-crop dossier-crop-tl" />
                    <span className="dossier-crop dossier-crop-tr" />
                    <span className="dossier-crop dossier-crop-bl" />
                    <span className="dossier-crop dossier-crop-br" />

                    <div className="relative z-10 h-full min-h-[inherit] flex flex-col justify-between px-6 sm:px-10 lg:px-16 pt-10 pb-0">
                        <motion.div
                            initial={{ opacity: 0, y: -12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-wrap items-center justify-between gap-6"
                        >
                            <Link
                                to="/servicos"
                                className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-white transition-colors group"
                            >
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                                Todos os serviços
                            </Link>
                            <div className="dossier-id">
                                <span>{service.dossierId}</span>
                                <span className="sep">//</span>
                                <span>{stamp}</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.15 }}
                            className="max-w-3xl py-12 sm:py-16"
                        >
                            <div className="dossier-kicker mb-5">
                                <Icon className="w-3.5 h-3.5" strokeWidth={1.8} />
                                <span>{service.classification}</span>
                            </div>
                            <h1 className="dossier-headline dossier-headline-compact">
                                {service.title.split(" ").slice(0, -1).join(" ")}{" "}
                                <em>{service.title.split(" ").slice(-1)[0]}.</em>
                            </h1>
                            <p className="mt-6 max-w-2xl text-base sm:text-lg text-text-secondary leading-relaxed">
                                {service.shortDesc}
                            </p>
                        </motion.div>

                    </div>
                </header>

                {/* ===================== OVERVIEW + IDEAL FOR ===================== */}
                <section className="px-6 sm:px-10 lg:px-16 py-16 sm:py-20 bg-surface">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-7"
                        >
                            <span className="service-kicker">O serviço</span>
                            <h2 className="service-section-title">
                                {service.title.split(" ").slice(0, 2).join(" ")}{" "}
                                <em>em resumo</em>
                            </h2>
                            <p className="service-prose">{service.fullDesc}</p>

                            <a
                                href={buildWhatsAppUrl(ctaMessage)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary text-sm mt-8"
                            >
                                <WhatsAppIcon className="w-4 h-4" />
                                Abrir caso no WhatsApp
                                <ArrowRight className="w-3.5 h-3.5" />
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="lg:col-span-5"
                        >
                            <span className="service-kicker">Ideal para</span>
                            <ul className="service-persona-list">
                                {service.forWho.map((p, i) => (
                                    <li key={i} className="service-persona-item">
                                        <Check className="w-4 h-4 text-gold flex-shrink-0 mt-1" strokeWidth={2.4} />
                                        <span>{p}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </section>

                {/* ===================== CAPABILITIES (incluído) ===================== */}
                <section className="px-6 sm:px-10 lg:px-16 py-16 sm:py-20 bg-[color:var(--color-elevation)] border-y border-border-subtle">
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="service-kicker">O que está incluído</span>
                            <h2 className="service-section-title">
                                O que <em>entregamos</em>
                            </h2>
                            <ul className="space-y-3 mt-6">
                                {service.bullets.map((b, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check
                                            className="w-4 h-4 text-gold flex-shrink-0 mt-1"
                                            strokeWidth={2.4}
                                        />
                                        <span className="text-text leading-relaxed">{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </section>

                {/* ===================== CASE STUDIES (compact) ===================== */}
                <section className="px-6 sm:px-10 lg:px-16 py-16 sm:py-20 bg-[color:var(--color-elevation)] border-y border-border-subtle">
                    <div className="max-w-6xl mx-auto">
                        <div className="max-w-2xl mb-10">
                            <span className="service-kicker">Casos reais (nomes trocados)</span>
                            <h2 className="service-section-title">
                                O que <em>já resolvemos</em>
                            </h2>
                            <p className="text-text-secondary text-sm mt-3 leading-relaxed">
                                Nomes, cifras e cidades alterados por NDA. O método e o resultado são reais.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {service.caseStudies.slice(0, 2).map((c, i) => (
                                <motion.article
                                    key={i}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="dossier-case"
                                >
                                    <div className="dossier-case-code">{c.code}</div>
                                    <p className="dossier-case-situation">{c.situation}</p>
                                    <p className="dossier-case-outcome">{c.outcome}</p>
                                    <div className="dossier-case-duration">{c.duration}</div>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===================== FAQ ===================== */}
                <section className="px-6 sm:px-10 lg:px-16 py-16 sm:py-20 bg-surface">
                    <div className="max-w-3xl mx-auto">
                        <div className="mb-10">
                            <span className="service-kicker">Perguntas frequentes</span>
                            <h2 className="service-section-title">
                                Antes de abrir o caso, <em>você quer saber</em>
                            </h2>
                        </div>
                        <CompactFaq items={service.faq} />
                    </div>
                </section>

                {/* ===================== OPERATIONS ROOM ===================== */}
                <OperationsRoomSection />

                {/* ===================== FINAL CTA ===================== */}
                <section className="px-6 sm:px-10 lg:px-16 pb-20">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="dossier-cta-block"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
                                <div className="lg:col-span-7">
                                    <div className="dossier-kicker mb-4">
                                        <span>Caso {service.dossierId}</span>
                                    </div>
                                    <h2 className="dossier-cta-title">
                                        Tem algo para descobrir? <br />
                                        <em>Descobrimos por você.</em>
                                    </h2>
                                    <p className="mt-5 text-text-secondary text-base max-w-xl leading-relaxed">
                                        Toda conversa começa sob NDA. Primeiro contato sem compromisso,
                                        diagnóstico confidencial em até 12h.
                                    </p>
                                </div>
                                <div className="lg:col-span-5 flex flex-col items-start lg:items-end gap-3">
                                    <a
                                        href={buildWhatsAppUrl(ctaMessage)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary text-base"
                                    >
                                        <WhatsAppIcon className="w-5 h-5" />
                                        Abrir caso confidencial
                                        <ArrowRight className="w-4 h-4" />
                                    </a>
                                    <Link
                                        to="/contato"
                                        className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-white transition-colors"
                                    >
                                        ou mandar um e-mail
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </article>
        </>
    );
}
