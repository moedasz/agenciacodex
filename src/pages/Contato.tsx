import { useState } from "react";
import { motion } from "framer-motion";
import { IMaskInput } from "react-imask";
import { Mail, Send, Loader2, ArrowRight } from "lucide-react";
import { Seo } from "../components/Seo";
import { WhatsAppIcon } from "../components/WhatsAppIcon";
import { trackFacebookEvent, trackGoogleEvent } from "../lib/analytics";
import { fadeIn } from "../lib/animations";
import {
    buildContactFormMessage,
    buildMailtoUrl,
    buildWhatsAppUrl,
    BUSINESS_EMAIL,
    DEFAULT_SPECIALIST_MESSAGE,
} from "../lib/contact";

const OPTIONS = [
    "Preciso verificar informações sobre uma pessoa",
    "Preciso proteger meu patrimônio ou empresa",
    "Estou em uma disputa judicial ou societária",
    "Preciso de um levantamento antes de uma decisão importante",
    "Prefiro não dizer agora",
];

const PHONE_REGEX = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;

type FormErrors = Partial<Record<"nome" | "whatsapp" | "assunto", string>>;

export function Contato() {
    const [form, setForm] = useState({ nome: "", whatsapp: "", assunto: "" });
    const [errors, setErrors] = useState<FormErrors>({});
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    const validate = (): FormErrors => {
        const next: FormErrors = {};
        const nome = form.nome.trim();
        if (!nome || nome.length < 2) next.nome = "Informe seu nome (mínimo 2 caracteres)";
        if (nome.length > 80) next.nome = "Nome muito longo";

        if (!form.whatsapp) next.whatsapp = "Informe seu WhatsApp";
        else if (!PHONE_REGEX.test(form.whatsapp)) next.whatsapp = "Formato: (00) 00000-0000";

        if (!form.assunto) next.assunto = "Selecione uma opção";
        return next;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) return;

        setLoading(true);
        const pagePath = `${window.location.pathname}${window.location.search}`;
        const url = buildWhatsAppUrl(buildContactFormMessage(form));

        trackGoogleEvent("contact_form_submit", {
            event_category: "conversion",
            event_label: "contact_form",
            page_path: pagePath,
        });

        trackFacebookEvent("Lead", {
            content_name: "contact_form",
            page: pagePath,
        });

        const popup = window.open(url, "_blank", "noopener,noreferrer");
        if (!popup) {
            window.location.href = url;
        }

        setLoading(false);
        setSent(true);
    };

    const inputClass = (hasError: boolean) =>
        `w-full input-premium ${hasError ? "border-red-500/70 focus:border-red-500" : ""}`;

    return (
        <>
            <Seo
                title="Fale conosco"
                description="Fale com a Bforense com sigilo absoluto desde o primeiro contato. Atendimento por WhatsApp ou email criptografado."
                path="/contato"
            />
            <div className="pt-16 sm:pt-18">
                <section className="hero-gradient px-6 sm:px-8 py-16 sm:py-24">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="section-label">Contato</span>
                            <h1
                                className="font-heading text-3xl sm:text-4xl md:text-5xl leading-tight mb-4 tracking-tight text-gradient-headline"
                                style={{ fontWeight: 600, letterSpacing: "-0.02em" }}
                            >
                                Fale conosco
                            </h1>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-text-secondary text-lg max-w-2xl mx-auto"
                            style={{ lineHeight: 1.7, fontWeight: 400 }}
                        >
                            Sigilo absoluto desde o primeiro contato. Escolha como prefere falar.
                        </motion.p>
                    </div>
                </section>

                <section className="px-6 sm:px-8 pb-10 sm:pb-16 bg-surface">
                    <div className="max-w-4xl mx-auto -mt-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div {...fadeIn} className="service-card p-8 rounded-xl group">
                                <div className="flex items-center gap-4 mb-5">
                                    <div className="w-14 h-14 rounded-xl bg-[#25D366]/10 flex items-center justify-center">
                                        <WhatsAppIcon className="w-7 h-7 text-[#25D366]" />
                                    </div>
                                    <h2 className="font-heading text-xl text-text-primary">WhatsApp</h2>
                                </div>
                                <p className="text-text-secondary text-sm mb-6" style={{ lineHeight: 1.7 }}>
                                    Resposta em até 2 horas em horário comercial. Atendimento sigiloso 24h.
                                </p>
                                <a
                                    href={buildWhatsAppUrl(DEFAULT_SPECIALIST_MESSAGE)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-semibold text-sm px-6 py-3.5 rounded-md hover:bg-[#1faf55] transition-all hover:-translate-y-0.5"
                                >
                                    Abrir conversa no WhatsApp
                                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                                </a>
                            </motion.div>

                            <motion.div
                                {...fadeIn}
                                transition={{ delay: 0.1 }}
                                className="service-card p-8 rounded-xl group"
                            >
                                <div className="flex items-center gap-4 mb-5">
                                    <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center">
                                        <Mail className="w-7 h-7 text-gold" strokeWidth={1.5} aria-hidden="true" />
                                    </div>
                                    <h2 className="font-heading text-xl text-text-primary">Email criptografado</h2>
                                </div>
                                <p className="text-text-secondary text-sm mb-6" style={{ lineHeight: 1.7 }}>
                                    Para casos que exigem documentação inicial por escrito. ProtonMail.
                                </p>
                                <a href={buildMailtoUrl()} className="btn-primary w-full text-sm justify-center">
                                    {BUSINESS_EMAIL}
                                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section className="px-6 sm:px-8 pb-20 sm:pb-28 bg-surface">
                    <div className="max-w-2xl mx-auto">
                        <motion.div {...fadeIn} className="process-card">
                            <div className="text-center mb-8">
                                <span className="section-label">Formulário</span>
                                <h2 className="font-heading text-xl text-text-primary">Ou envie uma mensagem</h2>
                            </div>

                            {sent ? (
                                <div className="text-center py-8" role="status" aria-live="polite">
                                    <div className="w-16 h-16 rounded-full bg-[#25D366]/10 flex items-center justify-center mx-auto mb-4">
                                        <WhatsAppIcon className="w-8 h-8 text-[#25D366]" />
                                    </div>
                                    <h3 className="font-semibold text-text-primary text-lg mb-2">Mensagem enviada</h3>
                                    <p className="text-text-secondary text-sm">
                                        Entraremos em contato pelo WhatsApp informado de forma discreta.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                                    <div>
                                        <label htmlFor="contact-nome" className="block text-text-secondary text-sm mb-2">
                                            Nome (primeiro nome)
                                        </label>
                                        <input
                                            id="contact-nome"
                                            type="text"
                                            value={form.nome}
                                            onChange={(e) => {
                                                setForm({ ...form, nome: e.target.value });
                                                if (errors.nome) setErrors({ ...errors, nome: undefined });
                                            }}
                                            className={inputClass(Boolean(errors.nome))}
                                            placeholder="Seu nome"
                                            maxLength={80}
                                            autoComplete="given-name"
                                            aria-invalid={Boolean(errors.nome)}
                                            aria-describedby={errors.nome ? "contact-nome-error" : undefined}
                                            required
                                        />
                                        {errors.nome && (
                                            <p id="contact-nome-error" className="text-red-400 text-xs mt-1.5">
                                                {errors.nome}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="contact-whatsapp"
                                            className="block text-text-secondary text-sm mb-2"
                                        >
                                            WhatsApp
                                        </label>
                                        <IMaskInput
                                            id="contact-whatsapp"
                                            mask="(00) 00000-0000"
                                            type="tel"
                                            inputMode="numeric"
                                            autoComplete="tel-national"
                                            value={form.whatsapp}
                                            onAccept={(value) => {
                                                setForm((prev) => ({ ...prev, whatsapp: value }));
                                                if (errors.whatsapp) setErrors((prev) => ({ ...prev, whatsapp: undefined }));
                                            }}
                                            className={inputClass(Boolean(errors.whatsapp))}
                                            placeholder="(00) 00000-0000"
                                            aria-invalid={Boolean(errors.whatsapp)}
                                            aria-describedby={errors.whatsapp ? "contact-whatsapp-error" : undefined}
                                            required
                                        />
                                        {errors.whatsapp && (
                                            <p id="contact-whatsapp-error" className="text-red-400 text-xs mt-1.5">
                                                {errors.whatsapp}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="contact-assunto"
                                            className="block text-text-secondary text-sm mb-2"
                                        >
                                            Como podemos ajudar?
                                        </label>
                                        <select
                                            id="contact-assunto"
                                            value={form.assunto}
                                            onChange={(e) => {
                                                setForm({ ...form, assunto: e.target.value });
                                                if (errors.assunto) setErrors({ ...errors, assunto: undefined });
                                            }}
                                            className={`${inputClass(Boolean(errors.assunto))} appearance-none cursor-pointer`}
                                            aria-invalid={Boolean(errors.assunto)}
                                            aria-describedby={errors.assunto ? "contact-assunto-error" : undefined}
                                            required
                                        >
                                            <option value="" disabled>
                                                Selecione uma opção
                                            </option>
                                            {OPTIONS.map((opt) => (
                                                <option key={opt} value={opt}>
                                                    {opt}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.assunto && (
                                            <p id="contact-assunto-error" className="text-red-400 text-xs mt-1.5">
                                                {errors.assunto}
                                            </p>
                                        )}
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="mt-2 btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {loading ? (
                                            <>
                                                <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                                                Enviando...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-4 h-4" aria-hidden="true" />
                                                Enviar mensagem
                                                <ArrowRight className="w-4 h-4" aria-hidden="true" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}

                            <p className="text-text-muted text-xs text-center mt-8">
                                Seus dados são tratados com sigilo absoluto. O contato será feito exclusivamente pelo
                                WhatsApp informado, de forma discreta.
                            </p>
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    );
}
