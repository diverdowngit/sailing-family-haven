import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background font-luminari text-base sm:text-lg">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-4">
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content" className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;