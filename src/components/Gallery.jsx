import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gallery1 from "../assets/LikyaBrownie.jpg";
import gallery2 from "../assets/LikyaCappuchino.jpg";
import gallery3 from "../assets/LikyaCookie.jpg";
import gallery4 from "../assets/LikyaKis.jpg";
import gallery5 from "../assets/LikyaSanSebo.jpg";
import gallery6 from "../assets/LikyaAffogato.jpg";
import gallery7 from "../assets/LikyaCortado.jpg";
import gallery8 from "../assets/LikyaIceLatte.jpg";
import gallery9 from "../assets/LikyaBrew.jpg";


export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideIntervalRef = useRef(null);

  const images = [
    { src: gallery8, alt: "Modern coffee shop interior",title:"Iced Latte" },
    { src: gallery2, alt: "Barista creating latte art",title:"Cappuccino" },
    { src: gallery3, alt: "Fresh coffee beans",title:"Cookie" },
    { src: gallery4, alt: "Fresh pastries display",title:"Kiş" },
    { src: gallery5, alt: "Modern coffee shop interior",title:"San Sebastian" },
    { src: gallery6, alt: "Barista creating latte art",title:"Affogato" },
    { src: gallery7, alt: "Fresh coffee beans",title:"Cortado" },
    { src: gallery1, alt: "Fresh pastries display",title:"Brownie" },
    { src: gallery9, alt: "Fresh pastries display",title:"Likya Brew" },

    
  ];

  const resetInterval = () => {
    if (slideIntervalRef.current) {
      clearInterval(slideIntervalRef.current);
    }
    slideIntervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
    resetInterval();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    resetInterval();
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    resetInterval();
  };

  useEffect(() => {
    resetInterval(); // başlat
    return () => clearInterval(slideIntervalRef.current); // temizle
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section id="gallery" className="py-20 bg-likya-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            data-testid="gallery-title"
          >
            Galeri
          </h2>
          <p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            data-testid="gallery-subtitle"
          >
            Likya Coffee’nin sıcak ortamını keşfedin; her fincanda kalite ve
            özen sizi bekliyor.
          </p>
        </motion.div>

        {/* Image Carousel */}
        <div
          className="relative h-[400px] sm:h-[500px]"
          data-testid="gallery-carousel"
        >
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-xl w-full h-full">
            <div className="relative w-full h-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide}
                  src={images[currentSlide].src}
                  alt={images[currentSlide].alt}
                  className="max-h-full max-w-full object-contain rounded-lg absolute"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  data-testid={`gallery-image-${currentSlide}`}
                />
              </AnimatePresence>
            </div>
            <div
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 px-4 py-2 rounded-md text-white text-sm sm:text-base font-medium"
              data-testid={`gallery-title-${currentSlide}`}
            >
              {images[currentSlide].title}
            </div>
            
          </div>
      
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-200"
            data-testid="button-previous-slide"
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-200"
            data-testid="button-next-slide"
          >
            <i className="fas fa-chevron-right"></i>
          </button>

          {/* Dots Indicator */}
          <div
            className="flex justify-center mt-6 space-x-2"
            data-testid="carousel-dots"
          >
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? "bg-likya-orange" : "bg-gray-500"
                }`}
                data-testid={`carousel-dot-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
