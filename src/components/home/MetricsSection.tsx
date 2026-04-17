import { motion } from "framer-motion";
import { METRICS } from "../../data/homeContent";
import { AnimatedCounter } from "./AnimatedCounter";

export function MetricsSection() {
    return (
        <section className="metrics-section metrics-grid-pattern px-6 sm:px-8 py-16 sm:py-20 bg-elevation">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
                    {METRICS.map((metric, i) => (
                        <motion.div
                            key={metric.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="text-center relative"
                        >
                            <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                            <p className="counter-label">{metric.label}</p>
                            {i < METRICS.length - 1 && <div className="metrics-divider" />}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
