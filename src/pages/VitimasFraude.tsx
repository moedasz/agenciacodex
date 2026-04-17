import {
    AlertTriangle,
    ArrowRight,
    Banknote,
    Bitcoin,
    Building2,
    Fingerprint,
    Landmark,
    LineChart,
    Network,
    Search,
    Target,
    TrendingUp,
} from "lucide-react";
import { Seo } from "../components/Seo";
import { WhatsAppIcon } from "../components/WhatsAppIcon";
import {
    BUSINESS_NAME,
    BUSINESS_PHONE_DISPLAY,
    BUSINESS_SITE_URL,
    buildWhatsAppUrl,
} from "../lib/contact";

const PAGE_PATH = "/vitimas-de-fraude";

const WHATSAPP_MSG_HERO =
    "Olá! Fui vítima de uma fraude financeira e gostaria de uma avaliação sigilosa do meu caso.";
const WHATSAPP_MSG_AVALIAR =
    "Olá! Perdi dinheiro em um golpe de investimento e gostaria de uma avaliação técnica.";
const WHATSAPP_MSG_CTA =
    "Olá! Quero uma avaliação do meu caso de fraude financeira pelo WhatsApp.";

const FRAUD_TYPES = [
    {
        icon: TrendingUp,
        title: "Plataformas de investimento fantasma",
        desc: "Falsas corretoras que exibem \"lucros\" em tela, mas bloqueiam saques. Promessas de 20% ao mês e domínio que some de um dia para o outro.",
    },
    {
        icon: Network,
        title: "Pirâmides financeiras e Ponzi",
        desc: "Esquemas de recrutamento disfarçados de \"clube\", \"comunidade\", \"franquia digital\" ou MLM — pagam os primeiros com o dinheiro dos últimos até colapsar.",
    },
    {
        icon: LineChart,
        title: "Opções binárias e forex laranja",
        desc: "Corretoras não autorizadas pela CVM, copy trade milagroso, robôs de sinais e gurus que cobram mentoria para te empurrar ao próprio esquema.",
    },
    {
        icon: Bitcoin,
        title: "Golpes com criptomoedas",
        desc: "Exchanges falsas, rug pull, airdrops maliciosos, contratos de mineração fake, golpe do amor (\"pig butchering\") e clonagem de carteiras.",
    },
    {
        icon: Banknote,
        title: "Consórcio e crédito fantasma",
        desc: "Carta contemplada fake, \"taxa antecipada\", financiamento sem juros e contratos digitais fraudulentos que nunca se cumprem.",
    },
    {
        icon: Building2,
        title: "Imóveis, franquias e negócios fake",
        desc: "Loteamentos que não existem, franquias que nunca abriram, sócios que somem com o capital e CNPJs de fachada usados para lavagem.",
    },
];

const WHAT_WE_DO = [
    {
        icon: Fingerprint,
        title: "Identificamos quem está por trás",
        desc: "Revelamos o CPF e CNPJ reais por trás do laranja, da conta de fachada, do perfil anônimo e do número usado para te atrair.",
    },
    {
        icon: Search,
        title: "Mapeamos o fluxo do dinheiro",
        desc: "Cruzamos chaves Pix, contas bancárias, carteiras cripto e empresas vinculadas para reconstruir para onde foi o seu valor.",
    },
    {
        icon: Landmark,
        title: "Localizamos bens e patrimônio",
        desc: "Levantamos imóveis, veículos, participações societárias e movimentações que indicam patrimônio alcançável.",
    },
    {
        icon: Target,
        title: "Conduzimos o caso do início ao fim",
        desc: "Conforme o escopo acordado, cuidamos de tudo — investigação, inteligência cibernética, dossiê, interlocução com autoridades e acompanhamento até o desfecho. Você não precisa costurar cada etapa.",
    },
];

const TESTIMONIALS = [
    {
        text: "Perdi R$47 mil numa plataforma de trade que prometia 12% ao mês. O suporte sumiu. A Bforense identificou o operador brasileiro por trás do domínio russo, rastreou o Pix e conduziu o caso. Recuperei boa parte em 6 meses.",
        name: "Marcos V.",
        location: "Florianópolis, SC",
        type: "Plataforma fake",
        avatar: "/img/avatars/men-32",
    },
    {
        text: "Entrei numa \"comunidade de cripto\" com promessa de mineração em nuvem. Quando percebi o golpe, já eram R$22 mil. A Bforense identificou três laranjas do mesmo núcleo familiar e a estrutura de empresas que lavava o dinheiro. Virou ação coletiva com mais 40 vítimas.",
        name: "Thiago B.",
        location: "Brasília, DF",
        type: "Golpe com criptomoedas",
        avatar: "/img/avatars/men-45",
    },
    {
        text: "Meu pai, aposentado, colocou R$80 mil numa pirâmide de \"franquia digital\". Todo mundo falou para esquecer. A Bforense levantou o CNPJ real, os sócios ocultos e imóveis em nome da esposa do dono. Caso voltou a andar com base concreta.",
        name: "Juliana A.",
        location: "Santo André, SP",
        type: "Pirâmide financeira",
        avatar: "/img/avatars/women-33",
    },
    {
        text: "Caí no golpe do Pix de \"investimento em carro\" e transferi R$12 mil. A polícia não dava retorno. A Bforense identificou o dono real da conta, o endereço e outros anúncios falsos dele. O caso foi reaberto. Preso em 3 semanas.",
        name: "Eduardo P.",
        location: "Porto Alegre, RS",
        type: "Golpe do Pix",
        avatar: "/img/avatars/men-67",
    },
];

const JSON_LD = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Investigação de Fraudes Financeiras — Bforense",
    serviceType: "Investigação privada e inteligência cibernética para vítimas de golpes financeiros",
    areaServed: "BR",
    provider: {
        "@type": "ProfessionalService",
        name: BUSINESS_NAME,
        url: BUSINESS_SITE_URL,
        telephone: "+55-11-3164-1004",
    },
    audience: {
        "@type": "PeopleAudience",
        audienceType: "Vítimas de fraude financeira, pirâmides, criptomoedas e golpes de investimento",
    },
    description:
        "Investigação particular e inteligência cibernética para vítimas de fraudes financeiras no Brasil: plataformas fake, pirâmides, golpes de cripto, opções binárias, consórcios fantasma e Pix. Conduzimos o caso do início ao fim conforme escopo.",
};

function HeroSection() {
    return (
        <section className="relative overflow-hidden" style={{ background: "#0F0A0A" }}>
            <div
                className="absolute inset-0 pointer-events-none"
                aria-hidden
                style={{
                    background:
                        "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(192,57,43,0.18), transparent 60%), radial-gradient(ellipse 60% 40% at 20% 90%, rgba(192,57,43,0.08), transparent 70%)",
                }}
            />
            <div className="absolute inset-0 hero-grid-overlay pointer-events-none" aria-hidden />
            <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 pt-28 pb-20 sm:pt-36 sm:pb-24">
                <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-[rgba(192,57,43,0.25)] bg-[rgba(192,57,43,0.06)]">
                    <AlertTriangle className="w-3.5 h-3.5 text-gold" aria-hidden />
                    <span className="text-xs text-gold uppercase tracking-[0.18em] font-medium">
                        Para vítimas de golpes de investimento
                    </span>
                </div>

                <h1
                    className="font-heading text-[clamp(2rem,7vw,3.75rem)] leading-[1.02] text-text-primary mb-4"
                    style={{ fontWeight: 600, letterSpacing: "-0.03em" }}
                >
                    Você foi vítima de fraude financeira?
                </h1>

                <p
                    className="font-heading text-[clamp(1.25rem,3.5vw,1.875rem)] leading-[1.2] text-gold-accent mb-6"
                    style={{ fontWeight: 500, letterSpacing: "-0.015em" }}
                >
                    Descobrimos quem está por trás e onde está o dinheiro.
                </p>

                <p className="text-[#B8A8A8] text-base sm:text-lg max-w-2xl leading-[1.6] mb-8">
                    Identificamos a autoria das fraudes, rastreamos o fluxo de capital e
                    criptoativos, e desvendamos a estrutura financeira oculta.{" "}
                    <span className="text-text-primary">
                        Viabilizamos a recuperação e conduzimos todo o processo sob absoluto
                        sigilo, sem expor sua identidade.
                    </span>
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:items-center mb-6">
                    <a
                        href={buildWhatsAppUrl(WHATSAPP_MSG_HERO)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-base group inline-flex uppercase tracking-wide"
                    >
                        <WhatsAppIcon className="w-5 h-5" />
                        Quero resolver isso
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden />
                    </a>
                    <span className="text-text-muted text-sm">
                        Resposta em até 10 minutos · Sigilo absoluto · Atendemos todo o Brasil
                    </span>
                </div>

            </div>
        </section>
    );
}

function FraudTypesSection() {
    return (
        <section className="px-6 sm:px-8 py-20 sm:py-24 bg-surface-alt">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <span className="section-label">Tipos de golpe que investigamos</span>
                    <h2 className="font-heading text-2xl sm:text-3xl text-text-primary">
                        Se você perdeu dinheiro em qualquer um destes,{" "}
                        <span className="text-gold-accent">temos como investigar.</span>
                    </h2>
                    <p className="text-[#B8A8A8] mt-4 max-w-2xl mx-auto text-sm sm:text-base">
                        A maioria das fraudes brasileiras reutiliza a mesma estrutura: laranjas,
                        CNPJs de fachada e sites descartáveis. Por isso conseguimos chegar em
                        quem está por trás.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {FRAUD_TYPES.map((f) => (
                        <div
                            key={f.title}
                            className="p-6 bg-elevation rounded-2xl border border-border-subtle hover:border-[rgba(192,57,43,0.35)] transition-colors"
                        >
                            <div
                                className="icon-container-gold mb-4"
                                style={{ width: 48, height: 48, borderRadius: 12 }}
                            >
                                <f.icon className="w-5 h-5 text-gold" strokeWidth={1.6} aria-hidden />
                            </div>
                            <h3 className="font-semibold text-text-primary mb-2">{f.title}</h3>
                            <p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function WhatWeDoSection() {
    return (
        <section className="px-6 sm:px-8 py-20 sm:py-24 bg-surface">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <span className="section-label">O que fazemos</span>
                    <h2 className="font-heading text-2xl sm:text-3xl text-text-primary">
                        Não vendemos esperança.{" "}
                        <span className="text-gold-accent">Vendemos evidência.</span>
                    </h2>
                    <p className="text-[#B8A8A8] mt-4 max-w-2xl mx-auto text-sm sm:text-base">
                        Investigação e inteligência cibernética, do primeiro rastro ao desfecho.
                        Quando o trabalho técnico é feito direito, a recuperação deixa de ser
                        sorte — passa a ser consequência previsível.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {WHAT_WE_DO.map((item) => (
                        <div
                            key={item.title}
                            className="p-6 bg-elevation rounded-2xl border border-border-subtle flex gap-4"
                        >
                            <div
                                className="icon-container-gold flex-shrink-0"
                                style={{ width: 48, height: 48, borderRadius: 12 }}
                            >
                                <item.icon className="w-5 h-5 text-gold" strokeWidth={1.6} aria-hidden />
                            </div>
                            <div>
                                <h3 className="font-semibold text-text-primary mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-text-secondary text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <a
                        href={buildWhatsAppUrl(WHATSAPP_MSG_AVALIAR)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-base group inline-flex"
                    >
                        <WhatsAppIcon className="w-5 h-5" />
                        Começar avaliação agora
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden />
                    </a>
                </div>
            </div>
        </section>
    );
}

function TestimonialsSection() {
    return (
        <section className="px-6 sm:px-8 py-20 sm:py-24 bg-surface-alt relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <span className="section-label">Casos reais</span>
                    <h2 className="font-heading text-2xl sm:text-3xl text-text-primary">
                        Onde a investigação chegou primeiro,{" "}
                        <span className="text-gold-accent">a recuperação veio depois.</span>
                    </h2>
                    <p className="text-[#B8A8A8] mt-4 max-w-xl mx-auto text-sm sm:text-base">
                        Nomes alterados. Valores, cidades e mecânica do golpe preservados.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {TESTIMONIALS.map((t, i) => (
                        <div
                            key={`${t.name}-${i}`}
                            className="relative bg-elevation border border-border-subtle rounded-2xl p-7 sm:p-8 flex flex-col"
                            style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.2)" }}
                        >
                            <span
                                aria-hidden
                                className="absolute top-4 right-6 text-[4rem] leading-none font-serif text-[rgba(192,57,43,0.08)] select-none pointer-events-none"
                            >
                                "
                            </span>
                            <p className="text-[#ECE0E0] text-[0.95rem] sm:text-base leading-[1.7] flex-1 mb-6">
                                "{t.text}"
                            </p>
                            <div className="flex items-center justify-between pt-5 border-t border-[rgba(74,42,42,0.4)]">
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-11 h-11 rounded-full border border-[rgba(192,57,43,0.2)] overflow-hidden flex-shrink-0"
                                        style={{ marginTop: "-3px" }}
                                        aria-hidden
                                    >
                                        <picture>
                                            <source type="image/avif" srcSet={`${t.avatar}.avif`} />
                                            <source type="image/webp" srcSet={`${t.avatar}.webp`} />
                                            <img
                                                src={`${t.avatar}.webp`}
                                                alt=""
                                                aria-hidden
                                                loading="lazy"
                                                decoding="async"
                                                width={44}
                                                height={44}
                                                className="w-full h-full object-cover"
                                                style={{ filter: "blur(3px) brightness(0.8)", transform: "scale(1.15)" }}
                                            />
                                        </picture>
                                    </div>
                                    <div>
                                        <p className="text-[#ECE0E0] text-sm font-semibold">
                                            {t.name}
                                        </p>
                                        <p className="text-[#8A7A7A] text-xs">{t.location}</p>
                                    </div>
                                </div>
                                <span className="hidden sm:inline-block px-3 py-1.5 bg-[rgba(192,57,43,0.08)] border border-[rgba(192,57,43,0.15)] rounded-lg text-gold text-xs font-medium">
                                    {t.type}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function FinalCta() {
    return (
        <section
            className="px-6 sm:px-8 py-20 sm:py-28 relative overflow-hidden"
            style={{ background: "#0F0A0A" }}
        >
            <div
                className="absolute inset-0 pointer-events-none"
                aria-hidden
                style={{
                    background:
                        "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(192,57,43,0.12), transparent 70%)",
                }}
            />
            <div className="max-w-3xl mx-auto text-center relative z-10">
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-text-primary mb-4">
                    Cada semana sem investigar é uma{" "}
                    <span className="text-gold-accent">prova que some.</span>
                </h2>
                <p className="text-text-secondary mb-8 max-w-xl mx-auto">
                    Domínio expira, conta é esvaziada, CNPJ é baixado, bens vão para laranjas.
                    Quanto antes começar, mais rastros estão quentes — e tudo o que vem depois
                    depende disso.
                </p>
                <a
                    href={buildWhatsAppUrl(WHATSAPP_MSG_CTA)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto btn-primary text-sm sm:text-base inline-flex"
                >
                    <WhatsAppIcon className="w-5 h-5" />
                    <span className="hidden sm:inline">
                        Solicitar avaliação pelo WhatsApp
                    </span>
                    <span className="sm:hidden">Avaliação pelo WhatsApp</span>
                    <ArrowRight className="w-4 h-4" aria-hidden />
                </a>
                <p className="text-text-muted text-xs sm:text-sm mt-4 sm:mt-6">
                    Atendemos em todo o Brasil · {BUSINESS_PHONE_DISPLAY}
                </p>
            </div>
        </section>
    );
}

export function VitimasFraude() {
    return (
        <>
            <Seo
                title="Vítima de Fraude Financeira? Investigação e Inteligência Cibernética | Bforense"
                description="Fraude em plataforma de investimento, pirâmide, cripto, opções binárias ou Pix? Investigação particular e inteligência cibernética do início ao fim: identificamos o responsável real, rastreamos o dinheiro e localizamos o patrimônio."
                path={PAGE_PATH}
                jsonLd={JSON_LD}
            />
            <div className="pt-16 sm:pt-18">
                <HeroSection />
                <div className="section-divider-glow" />
                <FraudTypesSection />
                <div className="section-divider-glow" />
                <WhatWeDoSection />
                <div className="section-divider-glow" />
                <TestimonialsSection />
                <div className="section-divider-glow" />
                <FinalCta />
            </div>
        </>
    );
}
