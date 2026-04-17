import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Check, FileText } from "lucide-react";
import { WhatsAppIcon } from "../WhatsAppIcon";
import { buildWhatsAppUrl } from "../../lib/contact";
import { fadeIn } from "../../lib/animations";
import { SERVICES, type HomeService } from "../../data/homeContent";

function ServiceCard({ service, index }: { service: HomeService; index: number }) {
    const Icon = service.icon;
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            className="service-card p-6 rounded-xl group h-full flex flex-col"
        >
            <div className="icon-container-gold mb-5" style={{ width: 48, height: 48, borderRadius: 12 }}>
                <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
            </div>
            <h3 className="font-semibold text-lg text-[#ECE0E0] mb-2">{service.title}</h3>
            <p className="text-[#B8A8A8] text-sm leading-relaxed mb-4 flex-1">{service.desc}</p>
            <ul className="space-y-2.5 mb-5">
                {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-[#B8A8A8]">
                        <Check className="w-3.5 h-3.5 text-gold flex-shrink-0" aria-hidden="true" />
                        {feature}
                    </li>
                ))}
            </ul>
            <Link
                to={`/servicos/${service.slug}`}
                className="mt-auto inline-flex items-center justify-center gap-2 w-full bg-[rgba(192,57,43,0.1)] hover:bg-[rgba(192,57,43,0.2)] border border-[rgba(192,57,43,0.2)] hover:border-[rgba(192,57,43,0.4)] text-gold font-medium text-sm py-3 px-4 rounded-lg transition-all group/btn"
            >
                <FileText className="w-4 h-4" aria-hidden="true" />
                Saiba Mais
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
            </Link>
        </motion.div>
    );
}

export function ServicesSection() {
    return (
        <section id="servicos" className="px-6 sm:px-8 py-20 sm:py-28 relative overflow-hidden scroll-mt-20" style={{ background: "#0F0A0A" }}>
            <div className="absolute inset-0 z-0 hidden md:block" aria-hidden="true">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    className="w-full h-full object-cover"
                    style={{ opacity: 0.35 }}
                >
                    <source src="/services-bg.mp4" type="video/mp4" />
                </video>
                <div
                    className="absolute inset-0 bg-gradient-to-b from-[#0F0A0A] via-transparent to-[#0F0A0A]"
                    style={{ opacity: 0.8 }}
                />
            </div>
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div {...fadeIn} className="text-center mb-6">
                    <span className="section-label">Nossos Serviços</span>
                    <h2 className="font-heading text-2xl sm:text-3xl text-text-primary">
                        Investigações Profissionais para <span className="text-gold-accent">Cada Situação</span>
                    </h2>
                    <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
                        Oferecemos soluções completas com sigilo absoluto e provas válidas em juízo para serem usadas
                        como você bem entender. Cada caso é único, e tratamos assim.
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
                    {SERVICES.map((service, i) => (
                        <ServiceCard key={service.slug} service={service} index={i} />
                    ))}
                </div>
                <motion.div {...fadeIn} className="text-center mt-12">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-5 bg-elevation rounded-xl border border-border-subtle">
                        <p className="text-text-secondary text-sm">
                            Não encontrou o que procura? Atendemos{" "}
                            <span className="text-text-primary font-medium">diversos tipos de investigação</span>.
                        </p>
                        <a
                            href={buildWhatsAppUrl("Olá! Gostaria de consultar um especialista sobre meu caso.")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-bg font-semibold text-sm py-2.5 px-5 rounded-lg transition-colors"
                        >
                            <WhatsAppIcon className="w-4 h-4" />
                            Consultar Especialista
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
