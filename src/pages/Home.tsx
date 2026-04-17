import { Seo } from "../components/Seo";
import { HeroSection } from "../components/home/HeroSection";
import { MetricsSection } from "../components/home/MetricsSection";
import { ComoFuncionaSection } from "../components/home/ComoFuncionaSection";
import { ServicesSection } from "../components/home/ServicesSection";
import { TestimonialsSection } from "../components/home/TestimonialsSection";
import { FAQSection } from "../components/home/FAQSection";
import { FinalCtaSection } from "../components/home/FinalCtaSection";
import { OperationsRoomSection } from "../components/OperationsRoomSection";

export function Home() {
    return (
        <>
            <Seo
                title="Investigação Particular Profissional em Todo o Brasil | Bforense"
                description="Detetive particular em São Paulo e Porto Alegre. Investigação conjugal, empresarial, localização de pessoas e golpistas. +255 casos resolvidos. Orçamento pelo WhatsApp em até 10 minutos."
                path="/"
            />
            <div className="pt-16 sm:pt-18">
                <HeroSection />
                <MetricsSection />
                <div className="section-divider-glow" />
                <ComoFuncionaSection />
                <div className="section-divider-glow" />
                <ServicesSection />
                <div className="section-divider-glow" />
                <TestimonialsSection />
                <div className="section-divider-glow" />
                <FAQSection />
                <div className="section-divider-glow" />
                <OperationsRoomSection />
                <div className="section-divider-glow" />
                <FinalCtaSection />
            </div>
        </>
    );
}
