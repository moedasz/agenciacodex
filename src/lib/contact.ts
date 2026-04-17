export const BUSINESS_NAME = "Bforense";
export const BUSINESS_SITE_URL = "https://www.agenciaprivada.tech";
export const BUSINESS_OG_IMAGE = `${BUSINESS_SITE_URL}/cover-team.webp`;
export const BUSINESS_PHONE_RAW = "551131641004";
export const BUSINESS_PHONE_DISPLAY = "(11) 3164-1004";
export const BUSINESS_EMAIL = "bforense@pm.me";

export const DEFAULT_SPECIALIST_MESSAGE = "Olá! Gostaria de falar com um especialista.";
export const DEFAULT_BUDGET_MESSAGE = "Olá! Gostaria de solicitar um orçamento para meu caso.";
export const DEFAULT_CASE_EVALUATION_MESSAGE = "Olá! Gostaria de solicitar um orçamento para avaliar meu caso.";
export const DEFAULT_CONFIDENTIAL_EVALUATION_MESSAGE = "Olá! Gostaria de iniciar uma avaliação confidencial.";

export function buildWhatsAppUrl(message = DEFAULT_SPECIALIST_MESSAGE): string {
    const query = message ? `?text=${encodeURIComponent(message)}` : "";
    return `https://wa.me/${BUSINESS_PHONE_RAW}${query}`;
}

export function buildMailtoUrl(subject?: string, body?: string): string {
    const params = new URLSearchParams();

    if (subject) {
        params.set("subject", subject);
    }

    if (body) {
        params.set("body", body);
    }

    const query = params.toString();
    return `mailto:${BUSINESS_EMAIL}${query ? `?${query}` : ""}`;
}

interface ContactFormMessageInput {
    nome: string;
    whatsapp: string;
    assunto: string;
}

export function buildContactFormMessage(form: ContactFormMessageInput): string {
    return [
        DEFAULT_SPECIALIST_MESSAGE,
        "",
        `Nome: ${form.nome}`,
        `WhatsApp: ${form.whatsapp}`,
        `Como podemos ajudar: ${form.assunto}`,
    ].join("\n");
}
