import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('/lovable-uploads/d88858c1-aec0-433a-a468-5628bc82e629.png')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-navy/60 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-wave font-luminari">
              Adventure Awaits on the Open Seas
            </h1>
            <p className="text-xl mb-8 font-luminari">
              Follow our family's journey as we explore the world's oceans and share our
              sailing adventures.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center bg-coral text-white px-6 py-3 rounded-lg hover:bg-coral/90 transition-colors"
            >
              Our Story <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-navy mb-4 font-luminari">Latest Blog</h2>
              <p className="text-gray-600 mb-4">
                Read about our most recent adventures and discoveries at sea.
              </p>
              <Link
                to="/blog"
                className="text-coral hover:text-coral/80 inline-flex items-center"
              >
                Read More <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-navy mb-4 font-luminari">Shop Merch</h2>
              <p className="text-gray-600 mb-4">
                Support our journey with our exclusive merchandise collection.
              </p>
              <Link
                to="/merchandise"
                className="text-coral hover:text-coral/80 inline-flex items-center"
              >
                Shop Now <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-navy mb-4 font-luminari">Photo Gallery</h2>
              <p className="text-gray-600 mb-4">
                Experience the beauty of sailing through our photo collection.
              </p>
              <Link
                to="/gallery"
                className="text-coral hover:text-coral/80 inline-flex items-center"
              >
                View Gallery <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;