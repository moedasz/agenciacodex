import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Seo } from "../components/Seo";
import { WhatsAppIcon } from "../components/WhatsAppIcon";
import { buildWhatsAppUrl, DEFAULT_SPECIALIST_MESSAGE } from "../lib/contact";

export function NotFound() {
    return (
        <>
            <Seo
                title="Página não encontrada"
                description="A página que você tentou acessar não foi encontrada. Fale com a Bforense de forma confidencial para localizar o atendimento certo."
                path="/404"
                robots="noindex,nofollow"
            />
            <div className="pt-16 sm:pt-18">
                <section className="hero-gradient px-6 sm:px-8 py-20 sm:py-28">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="section-label">404</span>
                            <h1
                                className="font-heading text-3xl sm:text-4xl md:text-5xl leading-tight mb-4 tracking-tight text-gradient-headline"
                                style={{ fontWeight: 600, letterSpacing: "-0.02em" }}
                            >
                                Página não encontrada
                            </h1>
                            <p className="text-text-secondary text-lg max-w-2xl mx-auto" style={{ lineHeight: 1.7 }}>
                                O endereço acessado não existe ou foi movido. Você pode voltar para a página inicial ou falar com um especialista agora.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
                        >
                            <Link to="/" className="btn-secondary text-base">
                                <ArrowLeft className="w-4 h-4" />
                                Voltar para a home
                            </Link>
                            <a
                                href={buildWhatsAppUrl(DEFAULT_SPECIALIST_MESSAGE)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary text-base"
                            >
                                <WhatsAppIcon className="w-5 h-5" />
                                Falar com especialista
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    );
}
