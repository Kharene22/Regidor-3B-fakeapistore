const Footer = () => (
  <section id="footer">
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-yellow-400 mb-2">Clothora</h2>
          <p className="text-sm text-gray-400">
            &copy; 2024 Clothora. Crafted with ❤️ by our Team.
          </p>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="privacy" className="hover:text-yellow-400 transition duration-300">
            Privacy Policy
          </a>
          <a href="terms" className="hover:text-yellow-400 transition duration-300">
            Terms of Service
          </a>
          <a href="contact" className="hover:text-yellow-400 transition duration-300">
            Contact Us
          </a>
        </div>
      </div>
      <div className="mt-6 text-center text-sm text-gray-500">
        <p>All rights reserved &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  </section>
);

export default Footer;
