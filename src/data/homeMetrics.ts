export type HomeMetric = {
    value: number;
    suffix: string;
    label: string;
};

export const METRICS: HomeMetric[] = [
    { value: 255, suffix: "+", label: "Casos Resolvidos" },
    { value: 10, suffix: "+", label: "Anos de Experiência" },
    { value: 100, suffix: "%", label: "Sigilo Garantido" },
    { value: 12, suffix: "+", label: "Estados Atendidos" },
];
