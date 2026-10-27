import { Outlet } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { CustomCursor } from "../components/CustomCursor";
import { LanguageProvider } from "../contexts/LanguageContext";
import { ThemeProvider } from "../contexts/ThemeContext";

export function Root() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen flex flex-col bg-[#F0F0F0] dark:bg-[#111] text-[#181818] dark:text-[#ebebeb] font-['Outfit'] transition-colors duration-300">
          <CustomCursor />
          <Navigation />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
