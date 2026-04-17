import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Radio } from "lucide-react";

const SIGNALS = [
    { icon: MapPin, label: "Sedes físicas", value: "São Paulo · Porto Alegre" },
    { icon: Radio, label: "Alcance", value: "Brasil inteiro, 26 estados + DF" },
];

export function OperationsRoomSection() {
    return (
        <section className="ops-room-section">
            <div className="ops-room-inner">
                <motion.div
                    initial={{ opacity: 0, scale: 1.04 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
                    className="ops-room-media"
                >
                    <img
                        src="/operations-room.webp"
                        alt="Sala de operações da Bforense em Porto Alegre, equipe monitorando painéis de inteligência"
                        loading="lazy"
                        decoding="async"
                        width={1512}
                        height={1024}
                    />
                    <div className="ops-room-media-overlay" aria-hidden />
                    <div className="ops-room-media-grid" aria-hidden />
                    <span className="ops-room-crop ops-room-crop-tl" aria-hidden />
                    <span className="ops-room-crop ops-room-crop-tr" aria-hidden />
                    <span className="ops-room-crop ops-room-crop-bl" aria-hidden />
                    <span className="ops-room-crop ops-room-crop-br" aria-hidden />

                    <div className="ops-room-badge" aria-hidden>
                        <span className="ops-room-badge-dot" />
                        <span>LIVE · TODO O BRASIL</span>
                    </div>
                </motion.div>

                <div className="ops-room-copy">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        <div className="dossier-kicker mb-5">
                            <span className="dossier-kicker-dot" aria-hidden />
                            <span>Quem está do outro lado</span>
                        </div>
                        <h2 className="ops-room-title">
                            Um time de operadores. <br />
                            <em>Duas sedes. O Brasil inteiro.</em>
                        </h2>
                        <p className="ops-room-lede">
                            Uma equipe de investigadores e analistas que atende o Brasil inteiro
                            com sede física em São Paulo e Porto Alegre.
                        </p>
                    </motion.div>

                    <motion.ul
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="ops-room-signals"
                    >
                        {SIGNALS.map((s) => {
                            const Icon = s.icon;
                            return (
                                <li key={s.label} className="ops-room-signal">
                                    <span className="ops-room-signal-icon" aria-hidden>
                                        <Icon className="w-3.5 h-3.5" strokeWidth={1.8} />
                                    </span>
                                    <div>
                                        <span className="ops-room-signal-label">{s.label}</span>
                                        <span className="ops-room-signal-value">{s.value}</span>
                                    </div>
                                </li>
                            );
                        })}
                    </motion.ul>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="ops-room-warning"
                    >
                        <span className="ops-room-warning-tag">Antes de mandar mensagem</span>
                        <p>
                            Só faça contato se tiver intenção real de contratar. Se for
                            curiosidade, como funciona, quanto custa em média, o que a lei
                            permite, temos um{" "}
                            <Link to="/blog" className="ops-room-warning-link">
                                blog inteiro <ArrowRight className="w-3.5 h-3.5 inline-block" />
                            </Link>{" "}
                            para você. De graça, com informação de qualidade.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
