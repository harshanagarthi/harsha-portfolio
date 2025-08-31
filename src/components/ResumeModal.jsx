// ResumeModal.jsx
import {
  X,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Calendar,
  Award,
  BookOpen,
  Code,
  Zap,
  Briefcase,
  Users,
} from "lucide-react";
import { useEffect } from "react";

export default function ResumeModal({ onClose }) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    // Disable body scroll when modal opens
    document.body.style.overflow = "hidden";

    // Re-enable body scroll when modal closes
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-[9999] p-4">
      <div className="bg-white w-full max-w-4xl md:max-w-8xl h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative overscroll-contain z-[10000] scrollbar-hide">
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 z-[10001] p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200"
          onClick={onClose}
        >
          <X size={20} className="text-gray-600" />
        </button>

        {/* Resume Content */}
        <div className="p-8 md:p-12">
          {/* Header Section */}
          <div className="text-center mb-8 border-b-2 border-gray-200 pb-6 w-full">
            <h1 className="text-4xl md:text-5xl text-gray-800 mb-3 font-encode-sans-sc">
              Harshavardhan Reddy Nagarthi
            </h1>
            <p className="text-sm md:text-xl text-gray-600 mb-4 font-medium">
              Python Developer | Machine Learning Enthusiast | Web Developer
            </p>

            {/* Contact Information */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-blue-600" />
                <span>+91 9515251297</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-blue-600" />
                <span>harshanagarthi9966@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-blue-600" />
                <span>Hyderabad, India</span>
              </div>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="md:col-span-2 space-y-6">
              {/* Professional Summary */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users size={18} className="text-blue-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800">OBJECTIVE</h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-md md:text-sm text-justify">
                  Aspiring Software Engineer and passionate developer with a
                  strong foundation in Computer Programming, Web Development,
                  and Machine Learning. Committed to building innovative
                  solutions that solve real-world problems. Seeking an
                  oppurtunity to work in a challenging environment to contribute
                  to the organization while continuously advancing my technical
                  and professional skills in a collaborative environment.
                  {/* Strong foundation in machine learning and web development with a track record 
                  of successful project delivery and continuous learning. */}
                </p>
              </section>

              {/* Education */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <BookOpen size={18} className="text-green-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">EDUCATION</h2>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-green-500">
                    <div className="flex justify-between items-start mb-2 text-justify gap-3">
                      <h3 className="font-bold text-lg text-gray-800 w-100">
                        B.Tech in Computer Science and Engineering (AI&ML
                        Specialization)
                      </h3>
                      <span className="text-sm text-gray-500">2020 - 2024</span>
                    </div>
                    <div className="flex justify-between items-start mb-2 text-justify gap-3">
                      <p className="text-gray-700 font-medium">
                        Malla Reddy University
                      </p>
                      <p className="text-gray-600">CGPA: 8.78/10.0</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-green-500">
                    <div className="flex justify-between items-start mb-2 text-justify gap-3">
                      <h3 className="font-bold text-lg text-gray-800 w-100">
                        TGBIE
                      </h3>
                      <span className="text-sm text-gray-500">2019 - 2021</span>
                    </div>
                    <div className="flex justify-between items-start mb-2 text-justify gap-3">
                      <p className="text-gray-700 font-medium">
                        Sri Chaitanya Junior College
                      </p>
                      <p className="text-gray-600">Score: 944/1000</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-green-500">
                    <div className="flex justify-between items-start mb-2 text-justify gap-3">
                      <h3 className="font-bold text-lg text-gray-800 w-100">
                        TGBSE
                      </h3>
                      <span className="text-sm text-gray-500">2018 - 2019</span>
                    </div>
                    <div className="flex justify-between items-start mb-2 text-justify gap-3">
                      <p className="text-gray-700 font-medium">
                        Indo English High School
                      </p>
                      <p className="text-gray-600">CGPA: 9.2/10.0</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Projects */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Code size={18} className="text-purple-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">
                    KEY PROJECTS
                  </h2>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-purple-500 text-justify">
                    <h3 className="font-bold text-lg text-gray-800 mb-2">
                      SignSense - Traffic Sign Classification WebApp
                    </h3>
                    <p className="text-gray-700 mb-2">
                      A Flask based WebApp for realtime traffic sign
                      classification, allowing users to upload images for
                      instant predictions.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                        Flask
                      </span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                        Machine Learning
                      </span>
                      {/* <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                        Heroku
                      </span> */}
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-purple-500 text-justify">
                    <h3 className="font-bold text-lg text-gray-800 mb-2">
                      News Portal Web Application
                    </h3>
                    <p className="text-gray-700 mb-2">
                      Developed a dynamiz news portal with real-time updates,
                      enhancing user engagement and satisfaction.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                        HTML
                      </span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                        CSS
                      </span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                        JavaScript
                      </span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                        Bootstrap
                      </span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                        Python (Django)
                      </span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                        PHP
                      </span>
                      {/* <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                        Heroku
                      </span> */}
                    </div>
                  </div>
                </div>
              </section>

              {/* Experience */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Briefcase size={18} className="text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    EXPERIENCE
                  </h2>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-indigo-500">
                  <div className="flex justify-between items-start mb-2 text-justify gap-3">
                    <h3 className="font-bold text-lg text-gray-800 w-60">
                      Frontend Developer Intern at{" "}
                      <a
                        href="https://mhcognition.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600"
                      >
                        MHCognition
                      </a>
                    </h3>
                    <span className="text-sm text-gray-500">
                      Jan 2025 - May 2025
                    </span>
                  </div>
                  {/* <p className="text-gray-700 font-medium">
                    MindMaze Quiz Fest
                  </p> */}
                  <li className="text-gray-600 text-justify">
                    Designed and developed an AI chatbot interface and enhanced
                    LMS features for the company.
                  </li>
                  <li className="text-gray-600 text-justify">
                    Developed a System Requirements Check system for online
                    exams in the LMS portal.
                  </li>
                  <li className="text-gray-600 text-justify">
                    Led UI/UX Design and Development for Placment and Admission
                    Portal.
                  </li>
                </div>
              </section>
            </div>

            {/* Right Column - Skills & Certifications */}
            <div className="space-y-6">
              {/* Technical Skills */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <Zap size={18} className="text-red-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">SKILLS</h2>
                </div>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">
                      Technical Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-100 text-red-700 rounded-full text-sm">
                        Python
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-red-700 rounded-full text-sm">
                        Java
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-red-700 rounded-full text-sm">
                        JavaScript
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-red-700 rounded-full text-sm">
                        ReactJS
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-red-700 rounded-full text-sm">
                        Machine Learning
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-red-700 rounded-full text-sm">
                        EDA
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-red-700 rounded-full text-sm">
                        MySQL
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">
                      Soft Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        Communication
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        Adaptibility
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        Problem Solving
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        Teamwork and Collaboration
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">
                      Development Tools
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                        Jupyter Notebook
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                        Figma
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                        VS Code
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                        Git and Github
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                        Cursor
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-2">
                      Languages
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-100 text-black rounded-full text-sm">
                        English (B2 Level)
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-black rounded-full text-sm">
                        Teligu (Native)
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-black rounded-full text-sm">
                        Hindi (Intermediate)
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Certifications */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Award size={18} className="text-yellow-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">
                    Certifications
                  </h2>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-50 rounded-lg p-3 border-l-3 border-yellow-500">
                    <h3 className="font-semibold text-gray-800 text-sm">
                      <a href="https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS05S4375323404019697" target="_blank" rel="noopener noreferrer">An Introduction to Artificial Intelligence</a>
                    </h3>
                    <p className="text-gray-600 text-xs">NPTEL</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 border-l-3 border-yellow-500">
                    <h3 className="font-semibold text-gray-800 text-sm">
                      <a href="https://www.coursera.org/account/accomplishments/verify/W5GK5FN29HEJ?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" target="_blank" rel="noopener noreferrer">Data Analysis with Python Programming</a>
                    </h3>
                    <p className="text-gray-600 text-xs">Coursera</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 border-l-3 border-yellow-500">
                    <h3 className="font-semibold text-gray-800 text-sm">
                      <a href="https://www.coursera.org/account/accomplishments/verify/PN8843CXW99U?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" target="_blank" rel="noopener noreferrer">Relational Database Systems</a>
                    </h3>
                    <p className="text-gray-600 text-xs">Coursera</p>
                  </div>
                </div>
              </section>

              {/* Social Links */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  {/* <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Github size={18} className="text-gray-600" />
                  </div> */}
                  <h2 className="text-xl font-bold text-gray-800"><li>Connect</li></h2>
                </div>
                <div className="space-y-3">
                  <a
                    href="https://github.com/nhrmywork"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Github size={16} className="text-gray-600" />
                    <span className="text-sm text-gray-700">GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/nagarthiharshavardhan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Linkedin size={16} className="text-gray-600" />
                    <span className="text-sm text-gray-700">LinkedIn</span>
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
