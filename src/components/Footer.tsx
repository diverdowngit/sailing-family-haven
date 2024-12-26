import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sailing Family</h3>
            <p className="text-gray-300">
              Join us on our journey across the seas as we explore the world together.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300">Email: hello@sailingfamily.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-coral transition-colors">
                <Facebook />
              </a>
              <a href="#" className="text-white hover:text-coral transition-colors">
                <Instagram />
              </a>
              <a href="#" className="text-white hover:text-coral transition-colors">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Sailing Family. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;