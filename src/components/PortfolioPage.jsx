import React, { useState } from "react";
import { Plus, ExternalLink, X } from "lucide-react";

import portImg1 from "../assets/img/portfolio/banklist_website.webp";
import portImg2 from "../assets/img/portfolio/portfolio-2.webp";
import portImg3 from "../assets/img/portfolio/portfolio_website.webp";
import portImg4 from "../assets/img/portfolio/ycblog_website.png";
import portImg5 from "../assets/img/portfolio/portfolio-3.webp";
import portImg6 from "../assets/img/portfolio/portfolio-8.webp";
import { NavLink } from "react-router-dom";

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("*");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");

  const filters = [
    { id: "*", label: "All" },
    { id: "Case-Studies", label: "Case-Studies" },
    { id: "Personal-Work", label: "Personal-Work" },
    { id: "Client-Work", label: "Client-Work" },
    { id: "Partnership", label: "Partnership" },
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Business Banklist web App",
      category: "Strategic project Case",
      tags: ["Case-Studies", "Consulting"],
      filter: "Case-Studies",
      image: portImg1,
      link: "#",
    },
    {
      id: 2,
      title: "Product Project Restructuring",
      category: "Project Advisory",
      tags: ["Client-Work", "Innovation"],
      filter: "Client-Work",
      image: portImg2,
      link: "#",
    },
    {
      id: 3,
      title: "Personal Portfolio App",
      category: "Personal Operations Work",
      tags: ["Operations", "Personal-Work"],
      filter: "Personal-Work",
      image: portImg3,
      link: " https://grinard0071988.github.io/",
    },
    {
      id: 4,
      title: "Transformation Counseling Blog",
      category: "Partnership and Integration",
      tags: ["Technology", "Innovation"],
      filter: "Partnership",
      image: portImg4,
      link: "#",
    },
    {
      id: 5,
      title: "Client Product Expansion",
      category: "Strategic Planning",
      tags: ["Client-Work", "Growth"],
      filter: "Client-Work",
      image: portImg5,
      link: "#",
    },
    {
      id: 6,
      title: "Products Project Management",
      category: "Project Advisory",
      tags: ["Client-Work", "Expansion"],
      filter: "Client-Work",
      image: portImg6,
      link: "#",
    },
  ];

  const filteredItems =
    activeFilter === "*"
      ? portfolioItems
      : portfolioItems.filter((item) => item.filter === activeFilter);

  const openLightbox = (image) => {
    setLightboxImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-gray-50">
      {/* Portfolio Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="sectionTitle text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Portfolio
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The portfolio page showcases selected projects demonstrating
              technical expertise, creativity, problem-solving skills, and
              successful delivery of high-quality web development solutions.
            </p>
          </div>

          {/* Portfolio Filters */}
          <div className="portfolioFilters flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeFilter === filter.id
                    ? "portfolioFiltersBtnfilterActive"
                    : "portfolioFiltersBtn shadow-sm"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="portfolioCard  rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Portfolio Image */}
                <div className="portfolioImg relative overflow-hidden aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="portfolioOverlay absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className=" absolute inset-0 flex items-center justify-center space-x-4">
                      <button
                        onClick={() => openLightbox(item.image)}
                        className="portfolioOverlayLink w-12 h-12  rounded-full flex items-center justify-center"
                        aria-label="View image"
                      >
                        <Plus size={24} />
                      </button>
                      <NavLink
                        to={item.link}
                        className="portfolioOverlayLink w-12 h-12 rounded-full flex items-center justify-center"
                        aria-label="View details"
                      >
                        <ExternalLink size={20} />
                      </NavLink>
                    </div>
                  </div>
                </div>

                {/* Portfolio Info */}
                <div className="portfolioInfo p-6">
                  <h4 className="text-xl font-bold mb-2 ">{item.title}</h4>
                  <p className="text-gray-600 mb-4">{item.category}</p>

                  {/* Tags */}
                  <div className="portfolioTags flex flex-wrap gap-2">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">
                No portfolio items found for this category.
              </p>
            </div>
          )}

          {/* View All Button */}
          <div className="text-center">
            <NavLink
              to="#"
              onClick={scrollToTop}
              className="btnPrimaryPort inline-block px-8 py-4 text-white font-medium rounded-lg shadow-lg"
            >
              View All Case Studies
            </NavLink>
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
              alt="Portfolio item"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
