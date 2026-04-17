import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { NetworkBackground } from "../NetworkBackground";

function scrollToServices() {
    const target = document.getElementById("servicos");
    if (!target) return;
    const headerOffset = 72;
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: "smooth" });
}

export function HeroSection() {
    return (
        <section className="hero-section relative min-h-screen overflow-hidden">
            <div className="absolute inset-0 hero-gradient" />
            <NetworkBackground />
            <div className="absolute inset-0 hero-grid-overlay pointer-events-none" aria-hidden="true" />
            <div className="hero-mobile-bg md:hidden" aria-hidden="true" />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.15 }}
                className="hero-desktop-image hidden md:block"
                aria-hidden="true"
            >
                <img
                    src="/hero-desktop.webp"
                    alt=""
                    className="hero-desktop-img"
                    loading="eager"
                    decoding="async"
                />
                <div className="hero-img-fade-left" />
                <div className="hero-img-fade-bottom" />
                <div className="hero-img-fade-top" />
            </motion.div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 min-h-[100svh] md:min-h-screen flex flex-col justify-start pt-20 md:justify-center md:pt-0 pb-0 md:pb-0">
                <div className="md:max-w-[62%] lg:max-w-[60%]">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="hero-kicker mb-5 md:mb-6"
                    >
                        <span className="hero-kicker-rule" aria-hidden />
                        <span className="hero-kicker-stack">
                            <span className="hero-kicker-lead">Clareza absoluta</span>
                            <span className="hero-kicker-sub">quando você mais precisa</span>
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="font-heading text-[clamp(1.875rem,8vw,3.5rem)] md:text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] md:leading-[1.05] mb-5 md:mb-6"
                        style={{ fontWeight: 600, letterSpacing: "-0.035em" }}
                    >
                        {/* Mobile, one word per line for impact */}
                        <span className="md:hidden">
                            <span className="text-white block">Respostas</span>
                            <span className="text-white block">definitivas.</span>
                            <span className="text-gold-accent block mt-1">Provas</span>
                            <span className="text-gold-accent block">incontestáveis.</span>
                        </span>
                        {/* Desktop, one phrase per line */}
                        <span className="hidden md:block">
                            <span className="text-white block whitespace-nowrap">Respostas definitivas.</span>
                            <span className="text-gold-accent block whitespace-nowrap">Provas incontestáveis.</span>
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-[#B8A8A8] text-[0.95rem] md:text-base lg:text-lg max-w-[34ch] md:max-w-xl mb-7 md:mb-8"
                        style={{ lineHeight: 1.65 }}
                    >
                        Agência de investigação e inteligência privada com soluções completas para crises, fraudes e litígios. Mais de 255 casos solucionados em todo o Brasil. Avaliação sigilosa em até 30 minutos.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-4"
                    >
                        <button
                            type="button"
                            onClick={scrollToServices}
                            className="btn-primary text-base group w-full sm:w-auto"
                        >
                            Conhecer Nossas Soluções
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-20 md:h-32 bg-gradient-to-t from-[#000000] to-transparent z-20 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="hidden md:flex absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex-col items-center gap-2 cursor-pointer"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
                role="button"
                aria-label="Rolar para ver mais conteúdo"
            >
                <span className="text-[#8A7A7A] text-[0.65rem] uppercase tracking-[0.2em] font-medium">Saiba mais</span>
                <div className="w-[22px] h-[36px] rounded-full border-2 border-[rgba(192,57,43,0.4)] flex items-start justify-center p-1.5">
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                        className="w-[4px] h-[4px] rounded-full bg-gold"
                    />
                </div>
            </motion.div>
        </section>
    );
}
