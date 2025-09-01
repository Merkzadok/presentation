import React from "react";

interface SlideProps {
  slide: {
    title: string;
    content: string;
    image: string;
    imageAlt: string;
  };
  isActive: boolean;
}

const Slide: React.FC<SlideProps> = ({ slide, isActive }) => {
  return (
    <div className="min-w-full h-full flex flex-col lg:flex-row">
      {/* Text Section */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12 lg:p-16">
        <div
          className={`max-w-2xl transition-all duration-1000 ${
            isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1
            className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 md:mb-8 
                         leading-tight"
          >
            <span className="bg-gradient-to-r from-teal-300 via-green-300 to-green-500 bg-clip-text text-transparent">
              {slide.title}
            </span>
          </h1>

          <p
            className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-12 
                        leading-relaxed font-light whitespace-pre-line"
          >
            {slide.content}
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12 lg:p-16">
        <div
          className={`relative w-full max-w-lg lg:max-w-xl transition-all duration-1000 delay-300 ${
            isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        >
          <div
            className="relative overflow-hidden rounded-2xl shadow-2xl 
                          transform transition-all duration-500 hover:scale-105 
                          hover:shadow-primary/20"
          >
            <img
              src={slide.image}
              alt={slide.imageAlt}
              className="w-full h-64 md:h-80 lg:h-96 object-cover 
                         transition-transform duration-700 hover:scale-110"
              loading="lazy"
            />

            {/* Image Overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent 
                           opacity-0 hover:opacity-100 transition-opacity duration-300"
            />
          </div>

          {/* Decorative Elements */}
          <div
            className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 
                          rounded-full blur-xl animate-pulse"
          />
          <div
            className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 
                          rounded-full blur-xl animate-pulse delay-1000"
          />
        </div>
      </div>
    </div>
  );
};

export default Slide;
