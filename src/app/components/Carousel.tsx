"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slide from "./Slide";
import { slides } from "../utils/slidesData";

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [_isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-dark font-inter"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Main Carousel Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <Slide key={index} slide={slide} isActive={index === currentSlide} />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 
                   bg-primary/20 hover:bg-primary/40 backdrop-blur-sm 
                   text-white p-3 md:p-4 rounded-full 
                   transition-all duration-300 hover:scale-110 
                   focus:outline-none focus:ring-2 focus:ring-primary
                   group z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:text-primary transition-colors" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 
                   bg-primary/20 hover:bg-primary/40 backdrop-blur-sm 
                   text-white p-3 md:p-4 rounded-full 
                   transition-all duration-300 hover:scale-110 
                   focus:outline-none focus:ring-2 focus:ring-primary
                   group z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:text-primary transition-colors" />
      </button>

      {/* Slide Indicators */}
      <div
        className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 
                      flex space-x-3 z-10"
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 
  focus:outline-none focus:ring-2 focus:ring-green-400
  ${
    index === currentSlide
      ? "bg-green-500 scale-125"
      : "bg-green-300/40 hover:bg-green-400 hover:scale-110"
  }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div
        className="absolute top-6 md:top-8 right-4 md:right-8 
                      text-white/80 text-sm md:text-base font-medium z-10"
      >
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
};

export default Carousel;
