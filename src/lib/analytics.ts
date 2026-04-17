type AnalyticsParams = Record<string, unknown>;

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
        fbq?: (...args: unknown[]) => void;
        dataLayer?: unknown[];
    }
}

function isBrowser(): boolean {
    return typeof window !== "undefined";
}

export function trackGoogleEvent(eventName: string, params: AnalyticsParams = {}) {
    if (!isBrowser() || typeof window.gtag !== "function") {
        return;
    }

    window.gtag("event", eventName, params);
}

export function trackFacebookEvent(eventName: string, params: AnalyticsParams = {}) {
    if (!isBrowser() || typeof window.fbq !== "function") {
        return;
    }

    window.fbq("track", eventName, params);
}

export function trackFacebookCustomEvent(eventName: string, params: AnalyticsParams = {}) {
    if (!isBrowser() || typeof window.fbq !== "function") {
        return;
    }

    window.fbq("trackCustom", eventName, params);
}

export function trackPageView(path: string, title: string) {
    trackGoogleEvent("page_view", {
        page_path: path,
        page_title: title,
    });

    trackFacebookEvent("PageView");
}
