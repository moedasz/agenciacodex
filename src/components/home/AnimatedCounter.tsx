import { useEffect, useRef, useState } from "react";

type Props = { value: number; suffix: string };

export function AnimatedCounter({ value, suffix }: Props) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const element = ref.current;

        if (!element) {
            return;
        }

        if (!("IntersectionObserver" in window)) {
            setIsInView(true);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries.some((entry) => entry.isIntersecting)) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "-100px" },
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isInView) return;

        const duration = 2000;
        const startTime = performance.now();
        let rafId = 0;
        let cancelled = false;

        const tick = (now: number) => {
            if (cancelled) return;
            const progress = Math.min((now - startTime) / duration, 1);
            setCount(Math.floor(progress * value));
            if (progress < 1) {
                rafId = requestAnimationFrame(tick);
            } else {
                setCount(value);
            }
        };

        rafId = requestAnimationFrame(tick);

        return () => {
            cancelled = true;
            cancelAnimationFrame(rafId);
        };
    }, [isInView, value]);

    return (
        <span ref={ref} className="counter-value">
            {count}
            {suffix}
        </span>
    );
}
