import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Helmet>
        <title>About Us - Let's Sail Andiamo</title>
        <meta name="description" content="Learn about our sailing family and our journey across the seas." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={window.location.href} />
        <meta property="og:title" content="About Us - Let's Sail Andiamo" />
        <meta property="og:description" content="Learn about our sailing family and our journey across the seas." />
        <meta property="og:type" content="website" />
      </Helmet>
      <h1 className="text-4xl font-bold text-navy mb-8">About Us</h1>
      <div className="prose max-w-none">
        <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6 font-luminari">
          Welcome to our sailing family! We're a family of adventurers who decided to
          trade our conventional life for one on the open seas. Our journey began in
          2020 when we made the bold decision to live our dream of sailing around the
          world.
        </p>
        <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6 font-luminari">
          What started as a crazy idea during family dinner has turned into an
          incredible adventure that has taught us more about ourselves and each other
          than we could have ever imagined.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 my-8 md:my-12">
          <div className="bg-light-blue/10 backdrop-blur-sm p-6 rounded-lg shadow-sm">
            <h2 className="text-xl md:text-2xl font-bold text-navy mb-3 md:mb-4 font-luminari">Our Mission</h2>
            <p className="text-gray-700 text-sm md:text-base font-luminari">
              To inspire other families to embrace adventure and show that
              alternative lifestyles are possible with proper planning and
              determination.
            </p>
          </div>
          <div className="bg-light-blue/10 backdrop-blur-sm p-6 rounded-lg shadow-sm">
            <h2 className="text-xl md:text-2xl font-bold text-navy mb-3 md:mb-4 font-luminari">Our Values</h2>
            <p className="text-gray-700 text-sm md:text-base font-luminari">
              Freedom, adventure, education through experience, environmental
              consciousness, and family unity guide our journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
