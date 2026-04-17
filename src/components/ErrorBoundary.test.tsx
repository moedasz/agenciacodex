import type React from "react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ErrorBoundary } from "./ErrorBoundary";

function Boom(): React.ReactElement {
    throw new Error("boom");
}

describe("ErrorBoundary", () => {
    beforeEach(() => {
        window.dataLayer = [];
        vi.spyOn(console, "error").mockImplementation(() => {});
    });

    it("renders children when there is no error", () => {
        render(
            <ErrorBoundary>
                <p>ok</p>
            </ErrorBoundary>,
        );
        expect(screen.getByText("ok")).toBeInTheDocument();
    });

    it("renders fallback UI and pushes to dataLayer when a child throws", () => {
        render(
            <ErrorBoundary>
                <Boom />
            </ErrorBoundary>,
        );
        expect(screen.getByText(/algo deu errado/i)).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /recarregar/i })).toBeInTheDocument();
        expect(window.dataLayer?.[0]).toMatchObject({
            event: "AppError",
            errorMessage: "boom",
        });
    });
});
