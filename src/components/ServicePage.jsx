import React, { useState } from "react";
import {
  Code,
  Smartphone,
  Palette,
  BarChart3,
  Cloud,
  Shield,
  ArrowRight,
  CheckCircle,
  X,
} from "lucide-react";
import { NavLink } from "react-router-dom";

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      icon: Code,
      title: "Custom Web Development",
      description:
        "Custom web development focuses on building tailored digital solutions designed specifically for unique business needs. It delivers scalable, secure, and high-performance websites with personalized features, seamless user experiences, and flexible functionality that align with brand goals and support long-term growth.",
      color: "blue",
      features: [
        "Responsive website design",
        "E-commerce solutions",
        "CMS integration",
        "Performance optimization",
        "SEO-friendly architecture",
      ],
    },
    {
      id: 2,
      icon: Smartphone,
      title: "Mobile App Solutions",
      description:
        "Mobile app solutions deliver user-friendly, high-performance applications tailored for iOS and Android platforms. They focus on intuitive design, seamless functionality, secure architecture, and scalable features to enhance user engagement, improve accessibility, and support business growth through innovative mobile experiences.",
      color: "purple",
      features: [
        "iOS & Android development",
        "Cross-platform solutions",
        "App store optimization",
        "Push notifications",
        "In-app purchases",
      ],
    },
    {
      id: 3,
      icon: Palette,
      title: "UI/UX Design",
      description:
        "UI/UX design focuses on creating intuitive, visually appealing, and user-centered digital experiences. It combines research, usability, and aesthetic design to ensure seamless navigation, clear interactions, and consistent interfaces that enhance user satisfaction, accessibility, and engagement across web and mobile platforms.",
      color: "pink",
      features: [
        "User research & testing",
        "Wireframing & prototyping",
        "Visual design",
        "Design systems",
        "Accessibility compliance",
      ],
    },
    {
      id: 4,
      icon: BarChart3,
      title: "E-Commerce/Business Solution",
      description:
        "E-commerce and business solutions provide scalable digital platforms that streamline online sales and operations. They integrate secure payments, inventory management, and user-friendly interfaces to enhance customer experiences, improve efficiency, and support sustainable business growth across competitive digital markets.",
      color: "green",
      features: [
        "Online store setup (custom or Shopify integrations)",
        "Payment processing",
        "Inventory and order management systems",
        "Admin dashboards and analytics",
        "Analytics & reporting",
      ],
    },
    {
      id: 5,
      icon: Cloud,
      title: "Cloud Computing",
      description:
        "Cloud computing delivers scalable, secure, and cost-effective access to data, applications, and infrastructure over the internet. It enables flexibility, real-time collaboration, efficient resource management, and rapid deployment, helping businesses improve performance, reduce operational costs, and adapt quickly to changing technological demands.",
      color: "cyan",
      features: [
        "Cloud migration",
        "Infrastructure as code",
        "Serverless architecture",
        "Auto-scaling solutions",
        "Cloud cost optimization",
      ],
    },
    {
      id: 6,
      icon: Shield,
      title: "Cybersecurity Solutions",
      description:
        "Security hardening and cybersecurity focus on protecting systems, networks, and data from threats. They involve risk assessment, vulnerability management, secure configurations, monitoring, and compliance practices to prevent attacks, ensure data integrity, and maintain reliable, trustworthy digital environments for businesses and users.",
      color: "red",
      features: [
        "Security audits",
        "Penetration testing",
        "Data encryption",
        "Compliance management",
        "Incident response",
      ],
    },
  ];

  const openServiceModal = (service) => {
    setSelectedService(service);
  };

  const closeServiceModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="bg-gray-50">
      {/* Services Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="sectionTitle text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              This services page highlights, my professional development
              solutions, showcasing expertise in web, mobile, and digital
              technologies tailored to client needs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              return (
                <div
                  key={service.id}
                  className="serviceItem rounded-2xl shadow-lg overflow-hidden group"
                >
                  <div className="p-8">
                    {/* Service Icon */}
                    <div
                      className={`w-16 h-16 serviceIcon rounded-xl flex items-center justify-center mb-6 `}
                    >
                      <service.icon className={` serviceIconI `} size={32} />
                    </div>

                    {/* Service Content */}
                    <h3 className="serviceContenth3 text-2xl font-bold mb-4 ">
                      {service.title}
                    </h3>
                    <p className="serviceContentp mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Learn More Button */}
                    <button
                      onClick={() => openServiceModal(service)}
                      className={`serviceLink inline-flex items-center  font-semibold px-4 py-2 rounded-lg transition-colors group/btn`}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="serviceLinkI ml-2" size={20} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="mainBg rounded-2xl shadow-xl p-8 lg:p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Can't find exactly what you're looking for? We specialize in
                creating tailored solutions that meet your unique business
                needs.
              </p>
              <NavLink
                to="/contact"
                className="resumeBtn inline-block px-8 py-4  font-semibold rounded-lg "
              >
                Get In Touch
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4"
          onClick={closeServiceModal}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-cyan-600 to-cyan-400 p-8 text-white relative">
              <button
                onClick={closeServiceModal}
                className="absolute top-4 right-4 w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                  <selectedService.icon size={32} />
                </div>
                <h3 className="text-3xl font-bold">{selectedService.title}</h3>
              </div>
              <p className="text-blue-100">{selectedService.description}</p>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Key Features
              </h4>
              <ul className="space-y-3">
                {selectedService.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle
                      className={`text-cyan-600 mr-3 mt-0.5 flex-shrink-0`}
                      size={20}
                    />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                <h5 className="font-semibold text-gray-900 mb-2">
                  Interested in this service?
                </h5>
                <p className="text-gray-600 text-sm mb-4">
                  Get in touch to discuss how we can help bring your project to
                  life.
                </p>
                <div className="flex flex-wrap gap-3">
                  <NavLink
                    to="/contact"
                    className={`px-6 py-3 bg-gradient-to-r from-cyan-600 to-cyan-400 text-white font-medium rounded-lg hover:shadow-lg transition-shadow`}
                  >
                    Request a Quote
                  </NavLink>
                  <button
                    onClick={closeServiceModal}
                    className="px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
