import logoPath from "../assets/LikyaUzunLogo.png";

export default function Footer() {
  return (
    <footer className="bg-likya-dark border-t border-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo and Name */}
          <div className="flex items-center justify-center space-x-3 mb-6">
            <img 
              src={logoPath} 
              alt="Likya Coffee Logo" 
              className="h-16 w-100"
              data-testid="footer-logo"
            />
          </div>
          
          {/* Description */}
          <p className="text-gray-400 mb-6 max-w-md mx-auto" data-testid="footer-description">
            Likya Coffee – Tutkuyla hazırlanır, sevgiyle sunulur.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://www.facebook.com/likyacoffee/?locale=tr_TR" 
              className="text-gray-400 hover:text-likya-orange transition-colors duration-200"
              data-testid="link-facebook"
              target="_blank" rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a 
              href="https://www.instagram.com/likyacoffee/" 
              className="text-gray-400 hover:text-likya-orange transition-colors duration-200"
              data-testid="link-instagram"
              target="_blank" rel="noopener noreferrer"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
            
          </div>
          
          {/* Copyright */}
          <p className="text-gray-500 text-sm" data-testid="footer-copyright">
            © 2025 Likya Coffee. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
