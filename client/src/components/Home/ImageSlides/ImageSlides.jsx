import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

import imgslide1 from "../../../assets/images/home-imgs-slide/slideimg1.png"
import imgslide2 from "../../../assets/images/home-imgs-slide/slideimg2.png"
import imgslide3 from "../../../assets/images/home-imgs-slide/slideimg3.png"
import imgslide4 from "../../../assets/images/home-imgs-slide/imgslide4.png"

const SchoolSlideshow = ({data}) => {
    if (!data)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-yellow-400"></div>
      </div>
    );

  const slides = [
    {
      id: 1,
      image: data.images[3].formats.medium.url,
      title: 'Pencapaian Cemerlang SPM 2024',
      description: 'Menelusuri Kejayaan Pelajar dalam Usaha dan Dedikasi'
    },
    {
      id: 2,
      image: data.images[0].formats.medium.url,
      title: 'SMK Suria Perdana',
      description: 'Together Towards Excellence – Nurturing Futures in Parit Raja, Johor"'
    },
    {
      id: 3,
      image: data.images[1].formats.medium.url,
      title: 'Breaking Barriers in SPM 2024',
      description: 'A Decade of Consistency: From 71.95% to Perfect Scores'
    },
    {
      id: 4,
      image: data.images[2].formats.medium.url,
      title: 'SMK Suria Perdana’s Ecosystem',
      description: 'Where 2000+ Students, 1000+ Educators, and 500+ Staff Unite for Success'
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-advance slides
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg shadow-2xl bg-gray-900">
      {/* Main Slideshow Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-contain"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            
            {/* Slide Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-12">
              <div className="max-w-4xl">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4 transform transition-all duration-700 delay-300">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl text-white/90 transform transition-all duration-700 delay-500">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </button>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isPlaying ? (
          <Pause className="w-4 h-4 md:w-5 md:h-5 text-white" />
        ) : (
          <Play className="w-4 h-4 md:w-5 md:h-5 text-white" />
        )}
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-white/50 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div
          className="h-full bg-white transition-all duration-300 ease-linear"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
};

export default SchoolSlideshow;