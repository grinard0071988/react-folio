import React, { useState, useEffect, useRef } from "react";
import {
  ArrowUpRight,
  Download,
  LayoutGrid,
  Code,
  Smartphone,
  Camera,
  Sparkles,
  Database,
  Headphones,
  MapPin,
  Paintbrush,
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import style from "./About.module.css";
import { NavLink } from "react-router-dom";
import Dimage from "../../assets/img/profile/h-profile.webp";
import avatar1 from "../../assets/img/person/person-m-2.webp";
import avatar2 from "../../assets/img/person/person-m-3.webp";
import avatar3 from "../../assets/img/person/person-f-5.webp";
import avatar4 from "../../assets/img/person/person-m-5.webp";
import img1 from "../../assets/img/person/person-m-9.webp";
import img2 from "../../assets/img/person/person-f-5.webp";

export default function AboutPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    awards: 0,
  });
  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const skills = [
    {
      icon: LayoutGrid,
      title: "UI/UX",
      description: "Idealitic and Creative User experiences.",
    },
    {
      icon: Code,
      title: "React.js",
      description: "Popular Frontend Framework to bring ideas to Life.",
    },
    {
      icon: Smartphone,
      title: "Frontend",
      description: "Knowledge and Ideas to Design friendly User Interface.",
    },
    {
      icon: Database,
      title: "Full-Stack",
      description: "Making Seamless App with Frontend and backend grasp.",
    },
  ];

  const timeline = [
    {
      year: "2017",
      title: "Diploma., Web Design",
      description: "Web developer who structure and layout web design.",
    },
    {
      year: "2019",
      title: "Web developer/Freelance Start",
      description: "I started as web designer and programming Tutor.",
    },
    {
      year: "2022",
      title: "Joined Delight Graphic Studio",
      description: "where i work as a web Developer/UI Designer.",
    },
    {
      year: "2024",
      title: "BlackSilicon Fullstack Developer",
      description: "where i practice as Frontend and backend developer.",
    },
  ];

  const funFacts = [
    { icon: Sparkles, label: "Minimalism" },
    { icon: Headphones, label: "Live-music Beats" },
    { icon: MapPin, label: "City Walks" },
    { icon: Paintbrush, label: "Volleyball" },
  ];

  const technicalSkills = [
    {
      name: "Frontend",
      description: "React, JavaScript, HTML, CSS,system design,Tailwind.",
      percentage: 90,
    },
    {
      name: "Backend",
      description: "PHP, Python, JavaScript, Node.js, Express, Laravel.",
      percentage: 95,
    },
    {
      name: "Databases",
      description: "PostgreSQL, MySQL, MongoDB,SQLite, Redis.",
      percentage: 80,
    },
    {
      name: "DevOps/Cybersecurity",
      description:
        "Docker, CI/CD, Nginx, Linux/Authentication,security, testing",
      percentage: 75,
    },
  ];

  const testimonials = [
    {
      name: "Saul Goodman",
      role: "CEO & Founder",
      image: img1,
      text: "Working with this web developer was an excellent experience. The project was delivered on time with outstanding quality and attention to detail. Communication was clear, ideas were innovative, and the final website exceeded expectations in performance, design, and usability. Highly professional and reliable throughout the entire development process.",
      rating: 5,
    },
    {
      name: "Richard Omoniyi",
      role: "CTO & Founder",
      image: img2,
      text: "An exceptional web developer who truly understands client needs. The website design was modern, responsive, and perfectly aligned with our brand. Technical skills, creativity, and problem-solving abilities stood out. Every requirement was handled efficiently, resulting in a smooth, high-performing website that our users love and trust.",
      rating: 5,
    },
  ];

  const avatars = [avatar1, avatar2, avatar3, avatar4];

  // Counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounters({
        projects: Math.floor(35 * progress),
        clients: Math.floor(42 * progress),
        awards: Math.floor(15 * progress),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters({ projects: 35, clients: 42, awards: 15 });
      }
    }, interval);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="bg-gray-50">
      {/* About Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="sectionTitle text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">About</h2>
            <p className=" max-w-3xl ">
              I am a passionate Web Developer specializing in creating
              responsive, user-friendly, and visually appealing websites. With a
              strong foundation in front-end and back-end technologies, I focus
              on building efficient, scalable, and secure digital solutions.
            </p>
          </div>

          {/* Intro + Photo */}
          <div className="grid lg:grid-cols-12 gap-8 items-center mb-16">
            <div className={`${style.introContent} lg:col-span-7`}>
              <span className={`${style.eyebrow} font-medium mb-2 block`}>
                Hello there
              </span>
              <h2
                className={`${style.headline} text-3xl lg:text-4xl font-bold mb-6`}
              >
                Hi, I'm Adelodun - A calm, creative developer dedicated to
                crafting seamless and serene digital experiences.
              </h2>
              <p className={`${style.lead} text-lg mb-4`}>
                My goal is to deliver high-quality web applications that align
                with user needs and business objectives while continuously
                learning and adapting to new technologies.
              </p>
              <p className={`${style.lead}`}>
                I enjoy turning ideas into functional web experiences through
                clean code, creative design, and problem-solving. I am a
                passionate Web Developer specializing in creating responsive,
                user-friendly, and visually appealing websites. With a strong
                foundation in front-end and back-end technologies, I focus on
                building efficient, scalable, and secure digital solutions.
              </p>

              <div className={style.ctagroup}>
                <NavLink to="/portfolio" className={style.btnghost}>
                  View My Work <ArrowUpRight className="ml-2" size={18} />
                </NavLink>
                <a
                  href="/Code_SIBA_Resume_1.pdf"
                  target="_blank"
                  className={style.linkUnderline}
                >
                  Download Resume <Download className="ml-2" size={18} />
                </a>
              </div>
            </div>

            <div
              className={`${style.profilefigure} lg:col-span-5 flex justify-center`}
            >
              <img
                src={Dimage}
                alt="Portrait of Adel"
                className={`${style.profilePhoto} rounded-2xl shadow-xl w-full max-w-md`}
              />
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`${style.skillItem} p-6 rounded-xl shadow-sm`}
              >
                <skill.icon
                  className={`${style.skillItemIcon} mb-3`}
                  size={32}
                />
                <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                <p className="text-sm">{skill.description}</p>
              </div>
            ))}
          </div>

          {/* Journey Timeline */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {timeline.map((item, index) => (
              <div key={index} className={`${style.timelineItem}`}>
                <div className="flex items-start space-x-3">
                  <span
                    className={`${style.dot} w-3 h-3 mt-1 flex-shrink-0`}
                  ></span>
                  <div>
                    <time className="text-sm font-medium">{item.year}</time>
                    <h4 className="text-lg font-semibold mt-1">{item.title}</h4>
                    <p className="text-sm  mt-2">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quote */}
          <blockquote
            className={`${style.personalQuote} text-center mb-16 py-8`}
          >
            <Quote className="inline-block mb-4" size={40} />
            <p className="text-xl lg:text-2xl font-medium italic max-w-3xl mx-auto">
              "Building clean and meaningful experiences through thoughtful code
              and quiet design."
            </p>
          </blockquote>

          {/* Fun Facts */}
          <div className={` flex flex-wrap justify-center gap-4`}>
            {funFacts.map((fact, index) => (
              <div
                key={index}
                className={`${style.factPill} inline-flex items-center space-x-2 px-5 py-3`}
              >
                <fact.icon className={style.factPillIcon} size={20} />
                <span className="text-sm font-medium">{fact.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="sectionTitle text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Skills
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A skilled web developer with expertise in HTML, CSS, JavaScript,
              and modern frameworks. Proficient in responsive design,
              performance optimization, and cross-browser compatibility. Strong
              problem-solving abilities, attention to detail, and experience
              with APIs, version control, and secure, scalable web applications
              ensure reliable and engaging digital solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="skillBox p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                <p className="text-sm mb-4">{skill.description}</p>
                <span className="text-right block text-sm font-semibold  mb-2">
                  {skill.percentage}%
                </span>
                <div className={`${style.progress} w-full rounded-full h-2`}>
                  <div
                    className={`${style.progressBar} h-2 rounded-full`}
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 lg:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <div className="avatars flex -space-x-4">
                {avatars.map((avatar, index) => (
                  <img
                    key={index}
                    src={avatar}
                    alt={`Avatar ${index + 1}`}
                    className="w-16 h-16 rounded-full border-4"
                  />
                ))}
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="counters grid md:grid-cols-3 gap-8">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold mb-2">
                    {counters.projects}+
                  </h2>
                  <p className="">Practical Projects</p>
                </div>
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold mb-2">
                    {counters.clients}K
                  </h2>
                  <p className="">Clients worked with</p>
                </div>
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold mb-2">
                    {counters.awards}+
                  </h2>
                  <p className="">Recognition of work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="sectionTitle text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Testimonials
            </h2>
            <p className="max-w-3xl mx-auto">
              Client feedback reflects my commitment to quality, collaboration,
              and delivering reliable, user-focused web solutions that exceed
              expectations.
            </p>
          </div>

          {/* Testimonial Slider */}
          <div className="testimonialItem relative max-w-5xl mx-auto">
            <div className=" rounded-2xl shadow-xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="testimonialContent lg:col-span-8">
                  <Quote className="testimonialIcon mb-4" size={32} />
                  <p className="btnSlider text-lg mb-6 italic">
                    {testimonials[activeTestimonial].text}
                  </p>
                  <h3 className="btnSlider text-xl font-bold">
                    {testimonials[activeTestimonial].name}
                  </h3>
                  <h4 className=" mb-4">
                    {testimonials[activeTestimonial].role}
                  </h4>
                  <div className="flex space-x-1">
                    {[...Array(testimonials[activeTestimonial].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="text-yellow-400 fill-yellow-400"
                          size={20}
                        />
                      )
                    )}
                  </div>
                </div>

                <div className="lg:col-span-4 flex justify-center">
                  <img
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    className="testimonialImg w-32 h-32 lg:w-40 lg:h-40 object-cover shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="btnSlider absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="btnSlider absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>

            {/* Pagination Dots */}
            <div className=" swiperPagination flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeTestimonial
                      ? "swiperPaginationbullet"
                      : "swiperPaginationbulletactive"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
