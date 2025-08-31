export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-4xl font-bold mb-8 text-center text-black dark:text-white font-nosifer">Contact Me</h3>
        <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 shadow-lg text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Feel free to reach out via email or connect on LinkedIn.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mruharsha@gmail.com" target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200 shadow-lg"
            >
              Email
            </a>
            <a 
              href="https://linkedin.com/in/nagarthiharshavardhan" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-black dark:border-white text-black dark:text-white rounded-lg font-semibold hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors duration-200"
            >
              LinkedIn
            </a>
            {/* <a 
              href="https://github.com/yourusername" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-black dark:border-white text-black dark:text-white rounded-lg font-semibold hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors duration-200"
            >
              GitHub
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
  