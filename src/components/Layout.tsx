import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { DesktopWhatsAppButton } from "./DesktopWhatsAppButton";

export function Layout() {
    return (
        <div className="min-h-screen bg-surface flex flex-col">
            <Header />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
            <DesktopWhatsAppButton />
        </div>
    );
}
