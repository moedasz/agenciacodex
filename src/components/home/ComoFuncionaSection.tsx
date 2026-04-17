import { ArrowRight, FileCheck, Zap } from "lucide-react";
import { WhatsAppIcon } from "../WhatsAppIcon";
import { buildWhatsAppUrl, DEFAULT_CASE_EVALUATION_MESSAGE } from "../../lib/contact";

const STEPS = [
    {
        icon: WhatsAppIcon,
        step: "01",
        title: "Fale Agora. É de Graça",
        desc: "Um especialista responde você no WhatsApp em minutos. Sem formulário, sem julgamento, 100% sigiloso.",
    },
    {
        icon: FileCheck,
        step: "02",
        title: "Proposta em Até 10 Minutos",
        desc: "Avaliamos seu caso na hora e enviamos um orçamento claro, justo e sem letra miúda.",
    },
    {
        icon: Zap,
        step: "03",
        title: "Provas na Sua Mão em 4 Horas Até 7 Dias",
        desc: "Relatório técnico completo. Válido na justiça e onde mais você quiser usar. Isso, é contigo.",
    },
];

export function ComoFuncionaSection() {
    return (
        <section className="px-6 sm:px-8 py-20 sm:py-28 bg-surface relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-14">
                    <span className="section-label">De Suspeita a Certeza Sem Complicação</span>
                    <h2 className="font-heading text-2xl sm:text-3xl text-text-primary">
                        Como Funciona em <span className="text-gold-accent">3 Passos</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {STEPS.map((step) => (
                        <div
                            key={step.step}
                            className="text-center p-6 bg-elevation rounded-2xl border border-border-subtle relative"
                        >
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-bg text-xs font-bold px-3 py-1 rounded-full">
                                PASSO {step.step}
                            </div>
                            <div className="icon-container-gold mx-auto mb-4 mt-2" style={{ width: 56, height: 56, borderRadius: 16 }}>
                                <step.icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                            </div>
                            <h3 className="font-semibold text-lg text-text-primary mb-2">{step.title}</h3>
                            <p className="text-text-secondary text-sm leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <a
                        href={buildWhatsAppUrl(DEFAULT_CASE_EVALUATION_MESSAGE)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-base group inline-flex"
                    >
                        <WhatsAppIcon className="w-5 h-5" />
                        Comece Agora
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
}
