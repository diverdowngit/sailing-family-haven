import { Facebook, Instagram, CircleDollarSign } from "lucide-react";

const Footer = () => {
  return (
    <footer 
      className="relative text-white py-8 md:py-12 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://raw.githubusercontent.com/diverdowngit/svseasenorablog/cd2be307e967ab6da1e5e432c3199ca728eca0f2/src/images/water.webp')",
      }}
    >
      <div className="absolute inset-0 bg-navy/70 backdrop-blur-sm" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Sailing Family</h3>
            <p className="text-gray-200 text-sm md:text-base">
              Join us on our journey across the seas as we explore the world together.
            </p>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Contact</h3>
            <p className="text-gray-200 text-sm md:text-base">Email: hello@sailingfamily.com</p>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-coral transition-colors">
                <Facebook className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="#" className="text-white hover:text-coral transition-colors">
                <Instagram className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="#" className="text-white hover:text-coral transition-colors">
                <CircleDollarSign className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} Sailing Family. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;