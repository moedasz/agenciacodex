import { ArrowRight, Star } from "lucide-react";
import { WhatsAppIcon } from "../WhatsAppIcon";
import { buildWhatsAppUrl } from "../../lib/contact";
import { TESTIMONIALS, type HomeTestimonial } from "../../data/homeContent";

function TestimonialCard({ testimonial }: { testimonial: HomeTestimonial }) {
    return (
        <div
            className="relative bg-elevation border border-border-subtle rounded-2xl p-7 sm:p-8 hover:border-[rgba(192,57,43,0.35)] transition-all duration-400 flex flex-col group"
            style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.2)" }}
        >
            <span
                aria-hidden="true"
                className="absolute top-4 right-6 text-[4rem] leading-none font-serif text-[rgba(192,57,43,0.08)] select-none pointer-events-none"
            >
                "
            </span>

            <div className="flex gap-1 mb-4" aria-label="Avaliação 5 de 5 estrelas">
                {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-gold text-gold" aria-hidden="true" />
                ))}
            </div>

            <p className="text-[#ECE0E0] text-[0.95rem] sm:text-base leading-[1.7] flex-1 mb-6">
                "{testimonial.text}"
            </p>

            <div className="flex items-center justify-between pt-5 border-t border-[rgba(74,42,42,0.4)]">
                <div className="flex items-center gap-3">
                    <div
                        className="w-11 h-11 rounded-full border border-[rgba(192,57,43,0.2)] overflow-hidden flex-shrink-0"
                        style={{ marginTop: "-3px" }}
                        aria-hidden="true"
                    >
                        <img
                            src={testimonial.avatar}
                            alt=""
                            aria-hidden="true"
                            loading="lazy"
                            className="w-full h-full object-cover"
                            style={{ filter: "blur(3px) brightness(0.8)", transform: "scale(1.15)" }}
                        />
                    </div>
                    <div>
                        <p className="text-[#ECE0E0] text-sm font-semibold">{testimonial.name}</p>
                        <p className="text-[#8A7A7A] text-xs">{testimonial.location}</p>
                    </div>
                </div>
                <span className="hidden sm:inline-block px-3 py-1.5 bg-[rgba(192,57,43,0.08)] border border-[rgba(192,57,43,0.15)] rounded-lg text-gold text-xs font-medium">
                    {testimonial.type}
                </span>
            </div>
        </div>
    );
}

export function TestimonialsSection() {
    return (
        <section className="px-6 sm:px-8 py-20 sm:py-28 bg-surface-alt relative overflow-hidden">
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(192,57,43,0.04),transparent_70%)] pointer-events-none"
            />
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-14">
                    <span className="section-label">Mais de 255 Casos Resolvidos</span>
                    <h2 className="font-heading text-2xl sm:text-3xl text-text-primary">
                        Histórias Reais de Quem <span className="text-gold-accent">Agiu a Tempo.</span>
                    </h2>
                    <p className="text-[#B8A8A8] mt-4 max-w-xl mx-auto text-sm sm:text-base">
                        Cada caso abaixo é de um cliente real. Nomes alterados por sigilo.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {TESTIMONIALS.map((testimonial, i) => (
                        <TestimonialCard key={`${testimonial.name}-${i}`} testimonial={testimonial} />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-[#8A7A7A] text-xs mb-6">
                        * Nomes alterados para preservar a identidade dos clientes.
                    </p>
                    <a
                        href={buildWhatsAppUrl("Olá! Vi os depoimentos no site e gostaria de um orçamento para meu caso.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-base group inline-flex"
                    >
                        <WhatsAppIcon className="w-5 h-5" />
                        Quero Resolver Meu Caso
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
}
