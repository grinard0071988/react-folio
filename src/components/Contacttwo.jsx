import React, { useState, useEffect } from "react";
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

  const [submittedData, setSubmittedData] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(true);

  // Load submissions when component mounts
  useEffect(() => {
    loadSubmissions();
  }, []);

  const loadSubmissions = async () => {
    try {
      const result = await window.storage.get("contact-submissions");
      if (result && result.value) {
        setSubmittedData(JSON.parse(result.value));
      }
    } catch (error) {
      console.log("No previous submissions found");
    } finally {
      setLoading(false);
    }
  };

  const saveSubmissions = async (data) => {
    try {
      await window.storage.set("contact-submissions", JSON.stringify(data));
    } catch (error) {
      console.error("Error saving submissions:", error);
    }
  };

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

  const handleSubmit = async () => {
    // Validate required fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill in all required fields");
      return;
    }

    // Add timestamp and ID to submission
    const submission = {
      ...formData,
      id: Date.now(),
      timestamp: new Date().toLocaleString(),
    };

    // Update state with new submission
    const updatedData = [...submittedData, submission];
    setSubmittedData(updatedData);

    // Save to persistent storage
    await saveSubmissions(updatedData);

    // Show success message
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleExportJSON = () => {
    const dataStr = JSON.stringify(submittedData, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `contact-submissions-${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleExportCSV = () => {
    if (submittedData.length === 0) return;

    const headers = ["Name", "Email", "Subject", "Message", "Timestamp"];
    const csvRows = [headers.join(",")];

    submittedData.forEach((data) => {
      const row = [
        `"${data.name}"`,
        `"${data.email}"`,
        `"${data.subject}"`,
        `"${data.message.replace(/"/g, '""')}"`,
        `"${data.timestamp}"`,
      ];
      csvRows.push(row.join(","));
    });

    const csvStr = csvRows.join("\n");
    const dataBlob = new Blob([csvStr], { type: "text/csv" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `contact-submissions-${Date.now()}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleClearAll = async () => {
    if (
      window.confirm(
        "Are you sure you want to delete all submissions? This cannot be undone."
      )
    ) {
      setSubmittedData([]);
      try {
        await window.storage.delete("contact-submissions");
      } catch (error) {
        console.error("Error clearing submissions:", error);
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

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
            <div className="lg:col-span-5">
              <div className="infoBox rounded-2xl shadow-lg p-8 lg:p-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Contact Info
                </h3>
                <p className="mb-8">
                  Below will makes it easy to reach me for inquiries,
                  collaborations, or project discussions through reliable
                  communication channels.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 rounded-xl"
                    >
                      <div className="iconBox w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="iconBoxI" size={24} />
                      </div>
                      <div className="content">
                        <h4 className="font-semibold mb-2">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm">
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
                  and let's create effective, reliable, and innovative digital
                  solutions together.
                </p>

                <div className="space-y-6">
                  {showSuccess && (
                    <div className="flex items-center space-x-2 py-3 px-4 bg-green-50 border border-green-200 rounded-lg">
                      <CheckCircle
                        className="text-green-600 flex-shrink-0"
                        size={20}
                      />
                      <span className="text-green-700 font-medium">
                        Your message sent successfully. You can reach me with
                        the details at leftside of this Page. Thank you!
                      </span>
                    </div>
                  )}

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
                        className="formControl w-full px-4 py-3 border rounded-lg outline-none"
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
                      className="formControl w-full px-4 py-3 border rounded-lg outline-none"
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
                      className="formControl w-full px-4 py-3 border rounded-lg outline-none resize-none"
                    ></textarea>
                  </div>

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

                  {/* Submitted Data Display */}
                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-semibold text-gray-800">
                        Submissions ({submittedData.length})
                      </h2>
                      {submittedData.length > 0 && (
                        <div className="flex gap-2">
                          <button
                            onClick={handleExportJSON}
                            className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
                            title="Export as JSON"
                          >
                            JSON
                          </button>
                          <button
                            onClick={handleExportCSV}
                            className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors"
                            title="Export as CSV"
                          >
                            CSV
                          </button>
                          <button
                            onClick={handleClearAll}
                            className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors"
                            title="Clear all data"
                          >
                            Clear
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="space-y-4 max-h-[600px] overflow-y-auto">
                      {submittedData.length === 0 ? (
                        <p className="text-gray-500 text-center py-8">
                          No submissions yet
                        </p>
                      ) : (
                        submittedData.map((data) => (
                          <div
                            key={data.id}
                            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="font-semibold text-gray-800">
                                {data.name}
                              </h3>
                              <span className="text-xs text-gray-500">
                                {data.timestamp}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 mb-1">
                              {data.email}
                            </p>
                            <p className="text-sm font-medium text-indigo-600 mb-2">
                              {data.subject}
                            </p>
                            <p className="text-sm text-gray-700 bg-gray-50 p-2 rounded">
                              {data.message}
                            </p>
                          </div>
                        ))
                      )}
                    </div>
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
                      163 Mendip Block Edmonton, UK, London N90TB
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
