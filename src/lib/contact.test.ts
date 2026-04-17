import { describe, it, expect } from "vitest";
import {
    BUSINESS_EMAIL,
    BUSINESS_PHONE_RAW,
    buildContactFormMessage,
    buildMailtoUrl,
    buildWhatsAppUrl,
    DEFAULT_SPECIALIST_MESSAGE,
} from "./contact";

describe("buildWhatsAppUrl", () => {
    it("encodes the message as a text query param", () => {
        const url = buildWhatsAppUrl("Olá! Como vai?");
        expect(url).toBe(`https://wa.me/${BUSINESS_PHONE_RAW}?text=${encodeURIComponent("Olá! Como vai?")}`);
    });

    it("uses the default specialist message when called with no args", () => {
        const url = buildWhatsAppUrl();
        expect(url).toContain(encodeURIComponent(DEFAULT_SPECIALIST_MESSAGE));
    });

    it("omits the query string for an empty message", () => {
        const url = buildWhatsAppUrl("");
        expect(url).toBe(`https://wa.me/${BUSINESS_PHONE_RAW}`);
    });

    it("escapes ampersands and other special characters", () => {
        const url = buildWhatsAppUrl("foo & bar = baz");
        expect(url).toContain("foo%20%26%20bar%20%3D%20baz");
    });
});

describe("buildMailtoUrl", () => {
    it("returns a plain mailto without params when nothing is passed", () => {
        expect(buildMailtoUrl()).toBe(`mailto:${BUSINESS_EMAIL}`);
    });

    it("adds subject and body as URL-encoded params", () => {
        const url = buildMailtoUrl("Assunto ß", "corpo da mensagem");
        expect(url).toContain(`mailto:${BUSINESS_EMAIL}`);
        expect(url).toContain("subject=Assunto+%C3%9F");
        expect(url).toContain("body=corpo+da+mensagem");
    });
});

describe("buildContactFormMessage", () => {
    it("formats all form fields on separate lines", () => {
        const msg = buildContactFormMessage({
            nome: "João",
            whatsapp: "(11) 99999-0000",
            assunto: "Preciso de ajuda",
        });
        expect(msg).toContain("Nome: João");
        expect(msg).toContain("WhatsApp: (11) 99999-0000");
        expect(msg).toContain("Como podemos ajudar: Preciso de ajuda");
        expect(msg.startsWith(DEFAULT_SPECIALIST_MESSAGE)).toBe(true);
    });
});
