import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "../WhatsAppIcon";
import {
    BUSINESS_PHONE_DISPLAY,
    buildWhatsAppUrl,
    DEFAULT_CASE_EVALUATION_MESSAGE,
} from "../../lib/contact";
import { fadeIn } from "../../lib/animations";

export function FinalCtaSection() {
    return (
        <section className="px-6 sm:px-8 py-24 sm:py-32 relative overflow-hidden" style={{ background: "#0F0A0A" }}>
            <div className="absolute inset-0 z-0 hidden md:block" aria-hidden="true">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    className="w-full h-full object-cover"
                    style={{ opacity: 0.5 }}
                >
                    <source src="/cta-bg.mp4" type="video/mp4" />
                </video>
                <div
                    className="absolute inset-0 bg-gradient-to-t from-[#0F0A0A] via-transparent to-[#0F0A0A]"
                    style={{ opacity: 0.7 }}
                />
                <div
                    className="absolute inset-0 bg-gradient-to-r from-[#0F0A0A] via-transparent to-[#0F0A0A]"
                    style={{ opacity: 0.5 }}
                />
            </div>
            <div
                className="glow-orb glow-orb-lg animate-pulse-glow"
                style={{ top: "30%", left: "10%" }}
                aria-hidden="true"
            />
            <div
                className="glow-orb glow-orb-sm animate-float-slow"
                style={{ bottom: "20%", right: "15%" }}
                aria-hidden="true"
            />
            <div className="max-w-3xl mx-auto text-center relative z-10">
                <motion.div {...fadeIn}>
                    <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-text-primary mb-4">
                        Cada Dia Sem Agir é uma Prova que{" "}
                        <span className="text-gold-accent">Pode Ser Perdida.</span>
                    </h2>
                    <p className="text-text-secondary mb-4 max-w-xl mx-auto">
                        Converse com um especialista agora e resolva seu caso com sigilo e profissionalismo. Solicite
                        um orçamento sem compromisso.
                    </p>

                    <p className="text-red-400/80 text-sm font-medium mb-8">
                        Vagas limitadas: aceitando apenas 5 novos casos esta semana
                    </p>

                    <a
                        href={buildWhatsAppUrl(DEFAULT_CASE_EVALUATION_MESSAGE)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto btn-primary text-sm sm:text-base inline-flex"
                    >
                        <WhatsAppIcon className="w-5 h-5" />
                        <span className="hidden sm:inline">Solicitar Orçamento pelo WhatsApp</span>
                        <span className="sm:hidden">Orçamento pelo WhatsApp</span>
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </a>

                    <p className="text-text-muted text-xs sm:text-sm mt-4 sm:mt-6">
                        Atendemos em todo o Brasil · {BUSINESS_PHONE_DISPLAY}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
