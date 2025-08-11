import { scrollToSection } from "../lib/scrollToSection";
import logoPath from "../assets/Likya-Turuncu-Logo.png";
import heroBackground2 from "../assets/HeroBackground2.jpg";
import heroBackgroundMobile from "../assets/Hero-Mobil.jpg";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-likya-dark via-likya-dark-secondary to-likya-dark opacity-90"></div>
      
      {/* Desktop Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center hidden sm:block"
        style={{
          backgroundImage: `url(${heroBackground2})`,
          opacity: 0.8,
        }}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 0.8, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      ></motion.div>

      {/* Mobile Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center block sm:hidden"
        style={{
          backgroundImage: `url(${heroBackgroundMobile})`,
          opacity: 0.7,
        }}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      ></motion.div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        
        {/* Logo */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src={logoPath} 
            alt="Likya Coffee Logo" 
            className="h-24 w-100 mx-auto mb-4"
            data-testid="hero-logo"
          />
        </motion.div>

        {/* Subtitle */}
        <motion.h1
          style={{ textShadow: '0 1px 2px black' }}
          className="text-xl md:text-2xl text-white font-medium mb-8"
          data-testid="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
        Likya Coffee - İstanbul Kozyatağı’nda seçkin origin çekirdeklerden kahveler ve enfes yiyecekler sunuyoruz.
        </motion.h1>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <button 
            onClick={() => scrollToSection('menu')}
            className="bg-likya-orange hover:bg-likya-orange-light text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 shadow-lg"
            data-testid="button-view-menu"
          >
            Menü
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="border-2 border-white text-white hover:bg-white hover:text-likya-dark px-8 py-3 rounded-full font-medium transition-all duration-200"
            data-testid="button-learn-more"
          >
            Daha Fazla
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <i className="fas fa-chevron-down text-white text-2xl" data-testid="scroll-indicator"></i>
      </motion.div>
    </section>
  );
}
