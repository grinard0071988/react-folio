import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import mapImg from "../assets/img/map/map-address.png";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: false,
    errorMessage: "",
  });

  //business address coordinates
  const address = {
    lat: 51.6155,
    lng: -0.064,
    text: "163 Mendip Block Edmonton, London, United Kingdom, N9 0TB",
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["163 Mendip Block Edmonton", "UK,London N90TBC"],
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: ["+447438443247", "+2347065383436"],
    },
    {
      icon: Mail,
      title: "Email Address",
      details: [
        "grinardphpprogrammer007@gmail.com",
        "contact-grinardprog@yahoomail.com",
      ],
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset status
    setFormStatus({
      loading: true,
      success: false,
      error: false,
      errorMessage: "",
    });

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simulate success (in real app, you'd make an actual API call)
      const success = Math.random() > 0.2; // 80% success rate for demo

      if (success) {
        setFormStatus({
          loading: false,
          success: true,
          error: false,
          errorMessage: "",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        // Clear success message after 5 seconds
        setTimeout(() => {
          setFormStatus((prev) => ({ ...prev, success: false }));
        }, 5000);
      } else {
        throw new Error("Failed to send message. Please try again.");
      }
    } catch (error) {
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        errorMessage: error.message,
      });

      // Clear error message after 5 seconds
      setTimeout(() => {
        setFormStatus((prev) => ({ ...prev, error: false, errorMessage: "" }));
      }, 5000);
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="sectionTitle text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Contact
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The contact page provides an easy way to connect, discuss project
              ideas, ask questions, and explore potential collaborations or
              opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Contact Info */}
            <div className=" lg:col-span-5">
              <div className="infoBox rounded-2xl shadow-lg p-8 lg:p-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Contact Info
                </h3>
                <p className=" mb-8">
                  Below will makes it easy to reach me for inquiries,
                  collaborations, or project discussions through reliable
                  communication channels.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className=" flex items-start space-x-4 p-4 rounded-xl"
                    >
                      <div
                        className={`iconBox w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 `}
                      >
                        <info.icon className="iconBoxI " size={24} />
                      </div>
                      <div className="content">
                        <h4 className="font-semibold  mb-2">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className=" text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Decorative Element */}
                <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                  <p className="text-sm text-gray-700 italic">
                    "We're here to help and answer any question you might have.
                    We look forward to hearing from you!"
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="contactForm rounded-2xl shadow-lg p-8 lg:p-10">
                <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
                <p className="text-gray-600 mb-8">
                  Get in touch to discuss ideas, collaborations, or projects,
                  and let’s create effective, reliable, and innovative digital
                  solutions together.
                </p>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="formControl w-full px-4 py-3 border rounded-lg outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="formControl w-full px-4 py-3 border  rounded-lg outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                      className="formControl w-full px-4 py-3 border  rounded-lg outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      placeholder="Write your message here..."
                      required
                      className="formControl w-full px-4 py-3 border  rounded-lg  outline-none resize-none"
                    ></textarea>
                  </div>

                  {/* Status Messages */}
                  {formStatus.loading && (
                    <div className="flex items-center justify-center space-x-2 py-3 bg-blue-50 rounded-lg">
                      <Loader2
                        className="animate-spin text-blue-600"
                        size={20}
                      />
                      <span className="text-blue-700 font-medium">
                        Sending message...
                      </span>
                    </div>
                  )}

                  {formStatus.success && (
                    <div className="flex items-center space-x-2 py-3 px-4 bg-green-50 border border-green-200 rounded-lg">
                      <CheckCircle
                        className="text-green-600 flex-shrink-0"
                        size={20}
                      />
                      <span className="text-green-700 font-medium">
                        Your message sent successfully,You can reach me with the
                        details at leftside of this Page. Thank you!
                      </span>
                    </div>
                  )}

                  {formStatus.error && (
                    <div className="flex items-center space-x-2 py-3 px-4 bg-red-50 border border-red-200 rounded-lg">
                      <AlertCircle
                        className="text-red-600 flex-shrink-0"
                        size={20}
                      />
                      <span className="text-red-700 font-medium">
                        {formStatus.errorMessage}
                      </span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="text-center">
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={formStatus.loading}
                      className="contactFormbtn inline-flex items-center px-8 py-4 font-medium rounded-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                    >
                      {formStatus.loading ? (
                        <>
                          <Loader2 className="animate-spin mr-2" size={20} />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2" size={20} />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Optional Map Section */}
          <div className="mt-12">
            <div className="rounded-2xl shadow-lg overflow-hidden">
              <div
                style={{ backgroundImage: `url(${mapImg})` }}
                className="aspect-video bg-gray-200 flex items-center justify-center"
              >
                <div className="text-center">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${address.lat},${address.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mapLink font-medium text-sm"
                  >
                    <MapPin className="mx-auto text-gray-400 mb-2" size={48} />
                    <p className="text-gray-600">Open in Google Map ▶️</p>
                    <p className="text-sm text-gray-500">
                      163 Mendip Block Edmonton", "UK,London N90TB
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
