import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Building2,
  Link2,
  ClipboardList,
  AlertTriangle,
  Award,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  X,
  ZoomIn,
} from "lucide-react";

export default function PortfolioDetailsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");

  const mainImages = [
    "assets/img/portfolio/portfolio-5.webp",
    "assets/img/portfolio/portfolio-7.webp",
    "assets/img/portfolio/portfolio-8.webp",
  ];

  const galleryImages = [
    "assets/img/portfolio/portfolio-4.webp",
    "assets/img/portfolio/portfolio-6.webp",
    "assets/img/portfolio/portfolio-11.webp",
    "assets/img/portfolio/portfolio-12.webp",
  ];

  const techStack = [
    "Angular",
    "Express.js",
    "PostgreSQL",
    "GraphQL",
    "Firebase",
  ];

  const accordionItems = [
    {
      id: 0,
      icon: ClipboardList,
      title: "Project Overview",
      content:
        "Cras ultricies ligula sed magna dictum porta. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.",
    },
    {
      id: 1,
      icon: AlertTriangle,
      title: "The Challenge",
      content:
        "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Sed porttitor lectus nibh.",
    },
    {
      id: 2,
      icon: Award,
      title: "The Solution",
      content:
        "Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.",
    },
  ];

  const features = [
    "Real-time Data Visualization",
    "User Role Management",
    "Secure Authentication",
    "Customizable Dashboards",
    "Data Export Options",
    "Multi-device Support",
  ];

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mainImages.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [mainImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mainImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + mainImages.length) % mainImages.length
    );
  };

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const openLightbox = (image) => {
    setLightboxImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage("");
  };

  return (
    <div className="bg-gray-50">
      {/* Portfolio Details Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Portfolio Details
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit. Sed ut perspiciatis unde omnis iste natus error
              sit voluptatem accusantium doloremque laudantium totam rem aperiam
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Media */}
            <div className="space-y-6">
              {/* Main Slider */}
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="relative aspect-[4/3]">
                  {mainImages.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Portfolio slide ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ))}

                  {/* Navigation Buttons */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all shadow-lg"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all shadow-lg"
                    aria-label="Next slide"
                  >
                    <ChevronRight size={24} />
                  </button>

                  {/* Slide Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {mainImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentSlide
                            ? "bg-white w-8"
                            : "bg-white bg-opacity-50"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      ></button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Thumbnail Grid */}
              <div className="grid grid-cols-4 gap-3">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                    onClick={() => openLightbox(image)}
                  >
                    <img
                      src={image}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity flex items-center justify-center">
                      <ZoomIn
                        className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                        size={24}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white text-gray-700 rounded-full shadow-sm hover:shadow-md transition-shadow font-medium text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              {/* Project Meta */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex flex-wrap gap-4 mb-4">
                  <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold text-sm">
                    UX/UI Design
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar size={18} className="mr-2 text-blue-600" />
                    <span>September 2024</span>
                  </div>
                  <div className="flex items-center">
                    <Building2 size={18} className="mr-2 text-blue-600" />
                    <span>DigitalCraft Solutions</span>
                  </div>
                </div>
              </div>

              {/* Project Title */}
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Innovative Financial Dashboard App
              </h2>

              {/* Project Website */}
              <div className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                <Link2 size={20} />
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:underline"
                >
                  projectwebsite.example.com
                </a>
              </div>

              {/* Project Overview */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas varius tortor nibh, sit amet tempor nibh finibus et.
                  Aenean eu enim justo. Vestibulum aliquam hendrerit molestie.
                </p>
              </div>

              {/* Accordion */}
              <div className="space-y-3">
                {accordionItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon className="text-blue-600" size={20} />
                        <span className="font-semibold text-gray-900">
                          {item.title}
                        </span>
                      </div>
                      <ChevronRight
                        className={`text-gray-400 transition-transform ${
                          openAccordion === item.id ? "rotate-90" : ""
                        }`}
                        size={20}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openAccordion === item.id ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      <div className="px-6 pb-4 text-gray-600">
                        <p>{item.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Key Features */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="flex items-center text-xl font-bold text-gray-900 mb-4">
                  <Sparkles className="mr-2 text-yellow-500" size={24} />
                  Key Features
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle2
                        className="text-green-600 mr-2 mt-0.5 flex-shrink-0"
                        size={20}
                      />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  View Live Project
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl"
                >
                  Next Project
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-100 transition-colors"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          <div
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage}
              alt="Gallery item"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
