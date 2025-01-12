import Navigation from "./Navigation";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background font-luminari">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-4">
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content" className="flex-grow pt-16 w-full" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;