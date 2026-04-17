import { useEffect } from "react";
import {
    BUSINESS_NAME,
    BUSINESS_OG_IMAGE,
    BUSINESS_SITE_URL,
} from "../lib/contact";

interface SeoProps {
    title: string;
    description: string;
    path?: string;
    image?: string;
    type?: "website" | "article";
    robots?: string;
    jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
}

function toAbsoluteUrl(pathOrUrl: string): string {
    if (/^https?:\/\//.test(pathOrUrl)) {
        return pathOrUrl;
    }

    const normalizedPath = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
    return `${BUSINESS_SITE_URL}${normalizedPath}`;
}

function upsertMeta(attribute: "name" | "property", key: string, content: string) {
    let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

    if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
    }

    element.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
    let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

    if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
    }

    element.setAttribute("href", href);
}

function upsertJsonLd(jsonLd?: SeoProps["jsonLd"]) {
    const existing = document.getElementById("route-jsonld");

    if (!jsonLd) {
        existing?.remove();
        return;
    }

    const script = existing ?? document.createElement("script");
    script.id = "route-jsonld";
    script.setAttribute("type", "application/ld+json");
    script.textContent = JSON.stringify(jsonLd);

    if (!existing) {
        document.head.appendChild(script);
    }
}

export function Seo({
    title,
    description,
    path = "/",
    image = BUSINESS_OG_IMAGE,
    type = "website",
    robots = "index,follow",
    jsonLd,
}: SeoProps) {
    useEffect(() => {
        const canonicalUrl = toAbsoluteUrl(path);
        const imageUrl = toAbsoluteUrl(image);
        const normalizedTitle = title.includes(BUSINESS_NAME) ? title : `${title} | ${BUSINESS_NAME}`;

        document.title = normalizedTitle;
        upsertMeta("name", "description", description);
        upsertMeta("name", "robots", robots);
        upsertMeta("property", "og:type", type);
        upsertMeta("property", "og:url", canonicalUrl);
        upsertMeta("property", "og:title", normalizedTitle);
        upsertMeta("property", "og:description", description);
        upsertMeta("property", "og:image", imageUrl);
        upsertMeta("name", "twitter:card", "summary_large_image");
        upsertMeta("name", "twitter:title", normalizedTitle);
        upsertMeta("name", "twitter:description", description);
        upsertMeta("name", "twitter:image", imageUrl);
        upsertLink("canonical", canonicalUrl);
        upsertJsonLd(jsonLd);
    }, [description, image, jsonLd, path, robots, title, type]);

    return null;
}
