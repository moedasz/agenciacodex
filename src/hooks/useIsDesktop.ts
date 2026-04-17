import { useEffect, useState } from "react";

export function useIsDesktop() {
    const [isDesktop, setIsDesktop] = useState(() =>
        typeof window !== "undefined" ? window.matchMedia("(min-width: 768px)").matches : false,
    );

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 768px)");

        const handleChange = (event: MediaQueryListEvent) => {
            setIsDesktop(event.matches);
        };

        setIsDesktop(mediaQuery.matches);
        mediaQuery.addEventListener("change", handleChange);

        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    return isDesktop;
}
