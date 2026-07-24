import { useState, useEffect } from "react";
import { scrollToSection } from "../lib/scrollToSection";
import logoPath from "../assets/LikyaUzunLogo.png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* ✅ Mobil menü açıkken tıklanabilir overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* ✅ Navbar yapısı */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-likya-dark/95 backdrop-blur-sm border-b border-likya-dark-secondary opacity-95 ${isScrolled ? "shadow-lg" : ""}`}>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-50">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img
                src={logoPath}
                alt="Likya Coffee Logo"
                className="h-14 w-100block object-contain h-12 w-auto flex-none min-w-[140px] md:h-14 md:min-w-[165px] lg:h-16 lg:min-w-[190px]"
                data-testid="logo-image"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {["home", "about","consulting", "beans", "brew", "signatures", "menu", "gallery", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => handleNavClick(section)}
                  className="text-gray-300 hover:text-likya-orange transition-colors duration-200"
                  data-testid={`nav-${section}`}
                >
                  {{
                    home: "Anasayfa",
                    about: "Hakkımızda",
                    consulting: "Danışmanlık",
                    beans: "Çekirdeklerimiz",
                    brew: "Demleme Teknikleri",
                    signatures: "Serinleten İmzalarımız",
                    menu: "Menü",
                    gallery: "Galeri",
                    contact: "İletişim"
                  }[section]}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-likya-orange"
                data-testid="button-mobile-menu"
              >
                <i className="fas fa-bars text-xl" />
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
  className={`md:hidden z-50 bg-likya-dark-secondary border-t border-gray-700 transition-all duration-500 overflow-hidden ${
    isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
  }`}
>
  <div className="px-2 pt-2 pb-3 space-y-1">
    {["home", "about","consulting", "beans","brew","signatures","menu", "gallery", "contact"].map((section) => (
      <button
        key={section}
        onClick={() => handleNavClick(section)}
        className="block w-full text-left px-4 py-2 text-gray-200 hover:bg-likya-orange/10 hover:text-white rounded-md transition-all duration-500"
        data-testid={`nav-mobile-${section}`}
      >
        {{
          home: "Anasayfa",
          about: "Hakkımızda",
          consulting: "Danışmanlık",
          beans: "Çekirdeklerimiz",
          brew: "Demleme Teknikleri",
          signatures: "Serinleten İmzalarımız",
          menu: "Menü",
          gallery: "Galeri",
          contact: "İletişim"
        }[section]}
      </button>
    ))}
  </div>
</div>
        </div>
      </nav>
    </>
  );
}
