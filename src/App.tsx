import { lazy, Suspense, type ReactNode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { AnalyticsTracker } from "./components/AnalyticsTracker";
import { ScrollToTop } from "./components/ScrollToTop";

const Servicos = lazy(() => import("./pages/Servicos").then((module) => ({ default: module.Servicos })));
const ServicoDetail = lazy(() =>
    import("./pages/ServicoDetail").then((module) => ({ default: module.ServicoDetail })),
);
const ComoFunciona = lazy(() =>
    import("./pages/ComoFunciona").then((module) => ({ default: module.ComoFunciona })),
);
const Sobre = lazy(() => import("./pages/Sobre").then((module) => ({ default: module.Sobre })));
const Contato = lazy(() => import("./pages/Contato").then((module) => ({ default: module.Contato })));
const Blog = lazy(() => import("./pages/Blog").then((module) => ({ default: module.Blog })));
const BlogPost = lazy(() => import("./pages/BlogPost").then((module) => ({ default: module.BlogPost })));
const NotFound = lazy(() => import("./pages/NotFound").then((module) => ({ default: module.NotFound })));
const VitimasFraude = lazy(() =>
    import("./pages/VitimasFraude").then((module) => ({ default: module.VitimasFraude })),
);
const Diagnostico = lazy(() =>
    import("./pages/Diagnostico").then((module) => ({ default: module.Diagnostico })),
);

function RouteFallback() {
    return <div className="min-h-[40vh]" aria-hidden="true" />;
}

function withSuspense(children: ReactNode) {
    return <Suspense fallback={<RouteFallback />}>{children}</Suspense>;
}

export default function App() {
    return (
        <BrowserRouter>
            <AnalyticsTracker />
            <ScrollToTop />
            <Routes>
                <Route path="/diagnostico" element={withSuspense(<Diagnostico />)} />
                <Route element={<Layout />}>
                    <Route path="/" element={withSuspense(<Home />)} />
                    <Route path="/servicos" element={withSuspense(<Servicos />)} />
                    <Route path="/servicos/:slug" element={withSuspense(<ServicoDetail />)} />
                    <Route path="/como-funciona" element={withSuspense(<ComoFunciona />)} />
                    <Route path="/sobre" element={withSuspense(<Sobre />)} />
                    <Route path="/contato" element={withSuspense(<Contato />)} />
                    <Route path="/blog" element={withSuspense(<Blog />)} />
                    <Route path="/blog/:slug" element={withSuspense(<BlogPost />)} />
                    <Route path="/vitimas-de-fraude" element={withSuspense(<VitimasFraude />)} />
                    <Route path="*" element={withSuspense(<NotFound />)} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
