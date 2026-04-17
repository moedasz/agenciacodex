import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { buildWhatsAppUrl } from "../../lib/contact";
import { FAQ_ITEMS, type HomeFaqItem } from "../../data/homeContent";

function FAQItem({
    item,
    isOpen,
    onClick,
}: {
    item: HomeFaqItem;
    isOpen: boolean;
    onClick: () => void;
}) {
    return (
        <div className="border border-border-subtle rounded-xl mb-3 overflow-hidden bg-elevation hover:border-gold/30 transition-colors">
            <button
                type="button"
                onClick={onClick}
                aria-expanded={isOpen}
                className="w-full p-5 flex items-center justify-between text-left group"
            >
                <span className="font-medium text-text-primary group-hover:text-gold transition-colors pr-4">
                    {item.question}
                </span>
                <ChevronDown
                    aria-hidden="true"
                    className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                    }`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[500px] pb-5 px-5" : "max-h-0"
                }`}
            >
                <p className="text-text-secondary leading-relaxed mb-3">{item.answer}</p>
                <a
                    href={buildWhatsAppUrl("Olá! Tenho uma dúvida sobre: " + item.question)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-gold hover:text-[#D44637] text-sm font-medium transition-colors"
                >
                    Ainda tem dúvidas? Fale com um especialista
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
            </div>
        </div>
    );
}

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="px-6 sm:px-8 py-20 sm:py-28 bg-surface">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="section-label">Dúvidas Frequentes</span>
                    <h2 className="font-heading text-2xl sm:text-3xl text-text-primary">
                        Perguntas <span className="text-gold-accent">Frequentes</span>
                    </h2>
                    <p className="text-text-secondary mt-4">
                        Tire suas dúvidas sobre nossos serviços de investigação particular.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    {FAQ_ITEMS.map((item, i) => (
                        <FAQItem
                            key={item.question}
                            item={item}
                            isOpen={openIndex === i}
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
