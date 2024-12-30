import { Facebook, Instagram, CircleDollarSign } from "lucide-react";

const Footer = () => {
  return (
    <footer 
      className="relative text-white py-12 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://raw.githubusercontent.com/diverdowngit/svseasenorablog/cd2be307e967ab6da1e5e432c3199ca728eca0f2/src/images/water.webp')",
      }}
    >
      <div className="absolute inset-0 bg-navy/80" /> {/* Overlay for better text readability */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <CircleDollarSign />
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