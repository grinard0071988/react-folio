import React, { useState, useEffect, useRef } from "react";
import {
  GraduationCap,
  Briefcase,
  Award,
  Calendar,
  MapPin,
  Download,
} from "lucide-react";
import { NavLink } from "react-router-dom";

export default function ResumePage() {
  const [skillsVisible, setSkillsVisible] = useState(false);
  const skillsRef = useRef(null);

  const education = [
    {
      degree: "Mastering of Computer Science",
      period: "2018 - 2020",
      institution: "Codecademy and Udemy Institution ,USA and NYC",
      description:
        "My educational background highlights foundational knowledge, technical training, and continuous learning that support my growth as a professional web developer.",
    },
    {
      degree: "Diploma of Computer Science",
      period: "2017 - 2018",
      institution: "FUTA Institute of Technology",
      description:
        "My education reflects a strong foundation in web technologies, problem-solving skills, and continuous learning to adapt in development.",
    },
  ];

  const professionalSkills = [
    { name: "Frontend Development", percentage: 95 },
    { name: "Backend Development", percentage: 85 },
    { name: "UI/UX Design", percentage: 90 },
    { name: "Project Management", percentage: 80 },
  ];

  const experience = [
    {
      title: "Software Engineer",
      period: "2021 - Present",
      company: "BlackSilicon, Mountain View, LN",
      responsibilities: [
        "Incharge of development, implementation, and optimization of web applications using modern technologies",
        "Delegate tasks to the 7 members of the development team and provide counsel on all aspects of the project",
        "Supervise the assessment of all web applications, mobile apps, and software platforms for quality and efficiency",
        "Oversee the efficient use of production project budgets ranging from $2,000 - $25,000",
      ],
    },
    {
      title: "Software Developer",
      period: "2019 - 2020",
      company: "Delight Studio, Island, LN",
      responsibilities: [
        "Developed numerous marketing programs (logos, brochures, infographics, presentations, and advertisements)",
        "Managed up to 5 projects or tasks at a given time while under pressure",
        "Recommended and consulted with clients on the most appropriate software platforms",
        "Created 4+ design presentations and proposals a month for clients and account managers",
      ],
    },
    {
      title: "Web Developer/Coding Instructor",
      period: "2017 - 2019",
      company: "TooAmple Inc., Lasgidi, LN",
      responsibilities: [
        "Implemented responsive websites and web applications using modern JavaScript frameworks",
        "Collaborated with senior developers to maintain and optimize existing applications",
        "Participated in code reviews and contributed to team documentation efforts",
        "Assisted in the development of RESTful APIs and microservices",
      ],
    },
  ];

  // Animate skills when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setSkillsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Resume Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="sectionTitle text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              Resume
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              Explore my professional journey, technical expertise, and project
              experience demonstrating strong problem-solving skills and
              impactful web development solutions.
            </p>

            {/* Download Resume Button */}
            {/* <button className=" "> */}
            <a
              href="/Code_SIBA_Resume_1.pdf"
              target="_blank"
              className="topBtn inline-flex items-center px-6 py-3 font-medium rounded-lg"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </a>
            {/* </button> */}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Education Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <GraduationCap className="genColor" size={24} />
                  </div>
                  <h3 className="genColor text-2xl font-bold ">Education</h3>
                </div>

                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <article
                      key={index}
                      className="relative pl-8 pb-6 border-l-2 genColor last:pb-0"
                    >
                      <div className="absolute -left-2 top-0 w-4 h-4 genBg rounded-full"></div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {edu.degree}
                      </h4>
                      <div className="flex items-center text-sm genColor font-medium mb-2">
                        <Calendar size={16} className="mr-1" />
                        {edu.period}
                      </div>
                      <p className="genColor italic mb-3 flex items-start">
                        <MapPin size={16} className="mr-1 mt-1 flex-shrink-0" />
                        {edu.institution}
                      </p>
                      <p className="text-gray-600">{edu.description}</p>
                    </article>
                  ))}
                </div>
              </div>

              {/* Professional Skills Section */}
              <div
                ref={skillsRef}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Award className="genColor" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Professional Skills
                  </h3>
                </div>

                <div className="space-y-6">
                  {professionalSkills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-lg font-semibold text-gray-900">
                          {skill.name}
                        </h4>
                        <span className="text-sm font-bold genColor">
                          {skill.percentage}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div
                          className="progressBar  h-3 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: skillsVisible
                              ? `${skill.percentage}%`
                              : "0%",
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              {/* Experience Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center space-x-3 mb-6 ">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Briefcase className="genColor" size={24} />
                  </div>
                  <h3 className="genColor text-2xl font-bold ">
                    Professional Experience
                  </h3>
                </div>

                <div className="space-y-8">
                  {experience.map((exp, index) => (
                    <article
                      key={index}
                      className="relative pl-8 pb-8 border-l-2 genColor last:pb-0"
                    >
                      <div className="absolute -left-2 top-0 w-4 h-4 genBg rounded-full"></div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {exp.title}
                      </h4>
                      <div className="flex items-center text-sm genColor font-medium mb-2">
                        <Calendar size={16} className="mr-1" />
                        {exp.period}
                      </div>
                      <p className="genColor italic mb-4 flex items-start">
                        <MapPin size={16} className="mr-1 mt-1 flex-shrink-0" />
                        {exp.company}
                      </p>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li
                            key={idx}
                            className="text-gray-600 flex items-start"
                          >
                            <span className="text-blue-600 mr-2 mt-1.5 flex-shrink-0">
                              •
                            </span>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="mainBg mt-12  rounded-2xl shadow-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <NavLink
                to="/contact"
                className="resumeBtn px-8 py-3 font-medium rounded-lg shadow-lg"
              >
                Get In Touch
              </NavLink>
              <NavLink
                to="/portfolio"
                className="topBtn px-8 py-3   font-medium rounded-lg   "
              >
                View My Work
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
