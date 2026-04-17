import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import {
    trackFacebookCustomEvent,
    trackFacebookEvent,
    trackGoogleEvent,
    trackPageView,
} from "../lib/analytics";

export function AnalyticsTracker() {
    const location = useLocation();
    const scrollDepthsTracked = useRef<Set<number>>(new Set());
    const startTime = useRef<number>(Date.now());
    const timeThresholds = useRef<Set<number>>(new Set());
    const hasSkippedInitialPageView = useRef(false);
    const pagePath = `${location.pathname}${location.search}`;

    // Track page view on route change
    useEffect(() => {
        // Reset trackers on page change
        scrollDepthsTracked.current = new Set();
        startTime.current = Date.now();
        timeThresholds.current = new Set();

        // The base document already fires the first PageView on initial load.
        if (!hasSkippedInitialPageView.current) {
            hasSkippedInitialPageView.current = true;
            return;
        }

        trackPageView(pagePath, document.title);
    }, [pagePath]);

    // Scroll depth tracking
    useEffect(() => {
        const scrollDepths = [25, 50, 75, 90, 100];

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;

            if (docHeight <= 0) {
                return;
            }

            const scrollPercent = Math.round((scrollTop / docHeight) * 100);

            scrollDepths.forEach((depth) => {
                if (scrollPercent >= depth && !scrollDepthsTracked.current.has(depth)) {
                    scrollDepthsTracked.current.add(depth);

                    trackGoogleEvent("scroll_depth", {
                        event_category: "engagement",
                        event_label: `${depth}%`,
                        value: depth,
                        page_path: pagePath,
                    });

                    // Facebook custom event for high engagement
                    if (depth >= 75) {
                        trackFacebookCustomEvent("HighEngagement", {
                            scroll_depth: depth,
                            page: pagePath,
                        });
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pagePath]);

    // Time on page tracking
    useEffect(() => {
        const timeThresholdsMs = [15000, 30000, 60000, 120000, 300000]; // 15s, 30s, 1m, 2m, 5m

        const checkTimeOnPage = () => {
            const timeSpent = Date.now() - startTime.current;

            timeThresholdsMs.forEach((threshold) => {
                if (timeSpent >= threshold && !timeThresholds.current.has(threshold)) {
                    timeThresholds.current.add(threshold);
                    const seconds = threshold / 1000;

                    trackGoogleEvent("time_on_page", {
                        event_category: "engagement",
                        event_label: `${seconds}s`,
                        value: seconds,
                        page_path: pagePath,
                    });

                    // Track high engagement users
                    if (threshold >= 60000) {
                        trackFacebookCustomEvent("EngagedUser", {
                            time_seconds: seconds,
                            page: pagePath,
                        });
                    }
                }
            });
        };

        const interval = setInterval(checkTimeOnPage, 5000);
        return () => clearInterval(interval);
    }, [pagePath]);

    // Track CTA clicks
    useEffect(() => {
        const trackClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const ctaElement = target.closest("a, button");

            if (!ctaElement) return;

            // Check if it's a WhatsApp link
            const href = ctaElement.getAttribute("href") || "";
            const label = ctaElement.getAttribute("data-analytics-label") || ctaElement.textContent?.trim() || "CTA";

            if (href.includes("wa.me") || href.includes("whatsapp")) {
                trackGoogleEvent("whatsapp_click", {
                    event_category: "conversion",
                    event_label: label,
                    page_path: pagePath,
                    value: 1,
                });

                trackFacebookEvent("Contact", {
                    method: "whatsapp",
                    page: pagePath,
                    label,
                });

                // Lead is only counted when the user is sent to WhatsApp.
                trackFacebookEvent("Lead", {
                    content_name: label,
                    page: pagePath,
                });
            }

            // Check if it's an email link
            if (href.includes("mailto:")) {
                trackGoogleEvent("email_click", {
                    event_category: "conversion",
                    event_label: label,
                    page_path: pagePath,
                });

                trackFacebookEvent("Contact", {
                    method: "email",
                    page: pagePath,
                    label,
                });
            }

            // Track primary CTA button clicks without marking them as leads.
            if (ctaElement.classList.contains("btn-primary")) {
                trackGoogleEvent("cta_click", {
                    event_category: "conversion",
                    event_label: label,
                    page_path: pagePath,
                });
            }
        };

        document.addEventListener("click", trackClick);
        return () => document.removeEventListener("click", trackClick);
    }, [pagePath]);

    return null;
}
