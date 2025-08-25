import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faCode,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const portfolioProjects = [
  {
    title: "Full Stack E-Commerce Platform",
    image: "/projects/ecommerce.png",
    description:
      "A scalable, secure platform built with React, Spring Boot, and AWS, featuring user authentication, shopping cart, and payment integration.",
    github: "https://github.com/darshbalar/ecommerce",
    demo: "#",
  },
  {
    title: "Real-time Chat App",
    image: "/projects/chatapp.png",
    description:
      "Built with WebSocket and React, this app supports multiple chat rooms, emojis, and file sharing.",
    github: "https://github.com/darshbalar/chatapp",
    demo: "#",
  },
  {
    title: "Task Management Tool",
    image: "/projects/taskmanager.png",
    description:
      "A task manager with drag-and-drop features, deadline reminders, and team collaboration support built in React and Spring Boot.",
    github: "https://github.com/darshbalar/taskmanager",
    demo: "#",
  },
];

const achievementsList = [
  "Solved 650+ DSA problems on platforms like LeetCode and Codeforces",
  "Contributor to multiple open source projects on GitHub",
  "Presented a talk on Java Spring Boot at University Tech Fest 2024",
  "Certified AWS Solutions Architect – Associate",
];

const socialLinks = [
  {
    icon: faGithub,
    url: "https://github.com/darshbalar",
    label: "GitHub",
  },
  {
    icon: faLinkedin,
    url: "https://linkedin.com/in/darsh-balar",
    label: "LinkedIn",
  },
  {
    icon: faTwitter,
    url: "https://twitter.com/darshbalar",
    label: "Twitter",
  },
  {
    icon: faInstagram,
    url: "https://instagram.com/darshbalar",
    label: "Instagram",
  },
];

const Demo = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleInputChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Simple client-side validation
    if (
      contactForm.name.trim() === "" ||
      contactForm.email.trim() === "" ||
      contactForm.message.trim() === ""
    ) {
      setFormStatus({ success: false, message: "Please fill in all fields." });
      return;
    }
    // Here you'd typically handle form submission via an API
    setFormStatus({ success: true, message: "Message sent successfully!" });
    setContactForm({ name: "", email: "", message: "" });
  };

  const sections = [
    "Home",
    "About",
    "Skills",
    "Services",
    "Projects",
    "Achievements",
    "Contact",
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/70 backdrop-blur-md border-b border-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer select-none">
            <FontAwesomeIcon icon={faCode} className="text-teal-400" />
            <span className="text-2xl font-extrabold bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Darsh Balar
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            {sections.map((section) => (
              <ScrollLink
                key={section}
                to={section}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-gray-300 hover:text-teal-400 cursor-pointer px-3 py-2 rounded-md hover:bg-gray-800/60 transition"
              >
                {section}
              </ScrollLink>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-300 hover:text-white transition"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800 px-6 py-4 space-y-3">
            {sections.map((section) => (
              <ScrollLink
                key={section}
                to={section}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setMenuOpen(false)}
                className="block text-gray-300 hover:text-teal-400 transition"
              >
                {section}
              </ScrollLink>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="Home"
        className="relative flex min-h-screen flex-col items-center justify-center text-center pt-40 pb-24 px-6 overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-transparent" />
        <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] rounded-full bg-pink-500 opacity-30 blur-3xl animate-animateSlow" />
        <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] rounded-full bg-purple-500 opacity-30 blur-3xl animate-animateSlow2" />

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
            Hi, I'm Darsh Balar
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-6 min-h-[40px]">
            <Typewriter
              words={[
                "Java Full Stack Developer",
                "Problem Solver",
                "DSA Enthusiast",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Passionate about building powerful, full-stack solutions that bridge
            design and functionality.
          </p>

          {/* CTAs */}
          <div className="flex gap-4 justify-center">
            <ScrollLink
              to="Projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="px-5 py-3 bg-gradient-to-r from-teal-500 via-purple-500 to-pink-500 rounded-lg shadow-lg hover:scale-105 transition"
            >
              View Projects
            </ScrollLink>
            <a
              href="/DarshBalar-Resume.pdf"
              download
              className="px-5 py-3 border border-gray-600 rounded-lg hover:bg-gray-800 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="About"
        className="py-24 px-6 bg-gradient-to-b from-black via-gray-950 to-gray-900"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
            I am a dedicated Java Full Stack Developer currently pursuing my
            B.Tech in Computer Science from Pandit Deendayal Energy University.
            I’ve solved over 650+ Data Structures and Algorithms problems,
            sharpening my problem-solving skills and coding efficiency.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="Skills"
        className="relative py-24 px-6 bg-gradient-to-b from-gray-900 via-gray-950 to-black"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-14">
            My Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Frontend Development",
                desc: "React, Tailwind, JavaScript, HTML, CSS",
                color: "teal",
              },
              {
                title: "Backend Development",
                desc: "Java, Spring Boot, REST APIs, SQL",
                color: "purple",
              },
              {
                title: "Tools & Cloud",
                desc: "Git, Docker, AWS, MySQL",
                color: "pink",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="p-7 bg-gray-800/70 rounded-2xl border border-gray-700 shadow-md hover:scale-105 transition-all"
              >
                <h3 className={`text-xl font-bold text-${card.color}-400 mb-2`}>
                  {card.title}
                </h3>
                <p className="text-gray-400">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="Services"
        className="relative py-24 px-6 bg-gradient-to-b from-black via-gray-950 to-gray-900"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-3">
            What I Offer
          </h2>
          <p className="text-gray-400 mb-12">
            Helping clients solve problems through clean, efficient, and
            scalable code.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-10">
            {[
              {
                title: "Web App Development",
                highlight: true,
                features: [
                  "Responsive Frontends",
                  "Scalable Backends",
                  "SEO Optimized",
                ],
              },
              {
                title: "API & Backend Solutions",
                features: [
                  "RESTful APIs",
                  "Database Design",
                  "Authentication Systems",
                ],
              },
              {
                title: "Problem Solving & DSA Mentorship",
                features: [
                  "Algorithm Optimization",
                  "Interview Preparation",
                  "Code Reviews",
                ],
              },
            ].map((service) => (
              <div
                key={service.title}
                className={`flex-1 p-10 rounded-2xl ${
                  service.highlight
                    ? "bg-gray-800/80 border-2 border-purple-500/40"
                    : "bg-gray-900/80 border border-gray-700"
                } shadow-md hover:scale-105 transition`}
              >
                <h3 className="text-2xl font-bold text-purple-400 mb-4">
                  {service.title}
                </h3>
                <ul className="text-gray-300 text-left space-y-3 list-disc list-inside">
                  {service.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="Projects"
        className="py-24 px-6 bg-gradient-to-b from-gray-900 via-gray-950 to-black"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-14">
            My Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {portfolioProjects.map(
              ({ title, image, description, github, demo }) => (
                <div
                  key={title}
                  className="bg-gray-800/70 rounded-2xl border border-gray-700 shadow-md hover:scale-105 transition-all flex flex-col overflow-hidden"
                >
                  <img
                    src={image}
                    alt={title}
                    className="object-cover h-48 w-full rounded-t-2xl"
                    loading="lazy"
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-100 mb-2">
                      {title}
                    </h3>
                    <p className="text-gray-400 flex-grow">{description}</p>
                    <div className="mt-4 flex gap-4">
                      {github && (
                        <a
                          href={github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-teal-400 hover:underline"
                          aria-label={`GitHub repository for ${title}`}
                        >
                          GitHub
                        </a>
                      )}
                      {demo && demo !== "#" && (
                        <a
                          href={demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-400 hover:underline"
                          aria-label={`Live demo for ${title}`}
                        >
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section
        id="Achievements"
        className="py-24 px-6 bg-gradient-to-b from-black via-gray-950 to-gray-900"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-10">
            Achievements
          </h2>
          <ul className="list-disc text-left max-w-3xl mx-auto space-y-4 text-gray-300">
            {achievementsList.map((item, index) => (
              <li key={index} className="text-lg">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="Contact"
        className="py-24 px-6 bg-gradient-to-b from-gray-900 via-gray-950 to-black"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-10 text-center">
            Get In Touch
          </h2>

          <form
            onSubmit={handleFormSubmit}
            className="max-w-xl mx-auto bg-gray-800/70 backdrop-blur-lg rounded-2xl p-8 shadow-lg"
            noValidate
          >
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray-300 mb-2 font-semibold"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={contactForm.name}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-300 mb-2 font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={contactForm.email}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-300 mb-2 font-semibold"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={contactForm.message}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>

            {formStatus && (
              <p
                className={`mb-4 text-center ${
                  formStatus.success ? "text-green-400" : "text-red-400"
                }`}
              >
                {formStatus.message}
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-teal-500 via-purple-500 to-pink-500 rounded-lg text-white font-bold hover:scale-105 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-teal-500 via-purple-500 to-pink-500 text-center py-10">
        <h2 className="text-2xl font-bold mb-4">Let’s Build Together 🚀</h2>
        <p className="mb-6">Contact me for collaborations and opportunities.</p>
        <div className="flex justify-center gap-6 mb-4">
          {socialLinks.map(({ icon, url, label }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-white text-2xl hover:text-gray-200 transition"
            >
              <FontAwesomeIcon icon={icon} />
            </a>
          ))}
        </div>
        <p className="text-white/80 text-sm">
          © {new Date().getFullYear()} Darsh Balar. All rights reserved.
        </p>
      </footer>

      {/* Animations keyframes */}
      <style>{`
        @keyframes animateSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(20px); }
        }
        @keyframes animateSlow2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-animateSlow {
          animation: animateSlow 6s ease-in-out infinite;
        }
        .animate-animateSlow2 {
          animation: animateSlow2 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Demo;
