import { lazy } from 'react';
import { Button } from "@/components/ui/button";

const Patreon = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6 md:mb-8 font-luminari">
        Support Our Journey
      </h1>
      
      <div className="prose max-w-none">
        <div className="bg-light-blue/10 backdrop-blur-sm p-4 md:p-8 rounded-lg shadow-sm mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-navy mb-3 md:mb-4 font-luminari">
            Why Support Us?
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
            Our sailing adventure is more than just a journey across the seas - it's a story of family,
            discovery, and the pursuit of dreams. By becoming a patron, you become part of our extended
            sailing family and help us continue sharing our experiences with the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8">
          <div className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-lg shadow-sm">
            <h3 className="text-lg md:text-xl font-bold text-navy mb-3 md:mb-4 font-luminari">
              What Your Support Enables
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700">
              <li>Creation of high-quality content and photography</li>
              <li>Maintenance and upgrades for our sailing equipment</li>
              <li>Educational resources for other aspiring sailing families</li>
              <li>Environmental conservation initiatives during our journey</li>
            </ul>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-lg shadow-sm">
            <h3 className="text-lg md:text-xl font-bold text-navy mb-3 md:mb-4 font-luminari">
              Patron Benefits
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-gray-700">
              <li>Exclusive behind-the-scenes content</li>
              <li>Monthly live Q&A sessions with our family</li>
              <li>Early access to new blog posts and videos</li>
              <li>Special mention in our content</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Button
            asChild
            className="bg-coral hover:bg-coral/90 text-white px-6 py-3 rounded-lg text-lg font-bold"
          >
            <a 
              href="https://www.patreon.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Become a Patron
            </a>
          </Button>
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            Every contribution, no matter the size, helps us continue our adventure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Patreon;