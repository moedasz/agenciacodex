import { lazy, Suspense, useEffect, useState } from "react";

const WhatsAppButton = lazy(() =>
    import("./WhatsAppButton").then((module) => ({ default: module.WhatsAppButton })),
);

export function DesktopWhatsAppButton() {
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        const desktopMedia = window.matchMedia("(min-width: 768px)");
        let timer = 0;

        const scheduleRender = () => {
            window.clearTimeout(timer);

            if (!desktopMedia.matches) {
                setShouldRender(false);
                return;
            }

            timer = window.setTimeout(() => {
                setShouldRender(true);
            }, 1200);
        };

        const handleChange = (event: MediaQueryListEvent) => {
            if (!event.matches) {
                window.clearTimeout(timer);
                setShouldRender(false);
                return;
            }

            scheduleRender();
        };

        scheduleRender();
        desktopMedia.addEventListener("change", handleChange);

        return () => {
            window.clearTimeout(timer);
            desktopMedia.removeEventListener("change", handleChange);
        };
    }, []);

    if (!shouldRender) {
        return null;
    }

    return (
        <Suspense fallback={null}>
            <WhatsAppButton />
        </Suspense>
    );
}
