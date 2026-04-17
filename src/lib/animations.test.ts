import { describe, it, expect } from "vitest";
import { fadeIn, fadeInDown, fadeInAnimate, staggeredFadeIn } from "./animations";

describe("animation presets", () => {
    it("fadeIn has the expected shape", () => {
        expect(fadeIn).toMatchObject({
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
        });
    });

    it("fadeInDown starts from a negative Y offset", () => {
        expect(fadeInDown.initial).toEqual({ opacity: 0, y: -20 });
    });

    it("fadeInAnimate uses animate (not whileInView)", () => {
        expect(fadeInAnimate).toHaveProperty("animate");
        expect(fadeInAnimate).not.toHaveProperty("whileInView");
    });

    it("staggeredFadeIn scales the delay with the index", () => {
        const first = staggeredFadeIn(0);
        const third = staggeredFadeIn(2);
        expect(first.transition.delay).toBe(0);
        expect(third.transition.delay).toBeCloseTo(0.2);
    });
});
