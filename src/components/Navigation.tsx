import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Anchor } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Gallery", path: "/gallery" },
    { 
      name: "Merchandise", 
      path: "https://lets-sail-andiamo.myspreadshop.ie",
      external: true 
    },
    { name: "Keep Us Afloat", path: "/patreon" },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center space-x-2">
            <span className="flex items-center" aria-hidden="true">
              <Anchor className="h-6 w-6 sm:h-7 sm:w-7 text-navy" />
            </span>
            <Link 
              to="/" 
              className="text-lg sm:text-xl md:text-2xl font-bold text-navy whitespace-nowrap font-luminari"
              aria-label="Go to homepage"
            >
              Sailing Family
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4 md:space-x-8">
            <ul className="flex space-x-4 md:space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  {item.external ? (
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy-dark hover:text-coral transition-colors duration-200 text-base sm:text-lg md:text-xl py-2 font-luminari"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      className="text-navy-dark hover:text-coral transition-colors duration-200 text-base sm:text-lg md:text-xl py-2 font-luminari"
                      aria-current={window.location.pathname === item.path ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-navy hover:text-coral transition-colors duration-200 p-2"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
            {isOpen ? (
              <X className="h-8 w-8" aria-hidden="true" />
            ) : (
              <Menu className="h-8 w-8" aria-hidden="true" />
            )}
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-screen opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          }`}
          role="region"
          aria-label="Mobile menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm shadow-sm">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  {item.external ? (
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-3 py-2 text-lg font-medium text-navy-dark hover:text-coral transition-colors duration-200 font-luminari"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      className="block px-3 py-2 text-lg font-medium text-navy-dark hover:text-coral transition-colors duration-200 font-luminari"
                      onClick={() => setIsOpen(false)}
                      aria-current={window.location.pathname === item.path ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;