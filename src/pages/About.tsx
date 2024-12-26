const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-navy mb-8">Our Story</h1>
      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 mb-6">
          Welcome to our sailing family! We're a family of adventurers who decided to
          trade our conventional life for one on the open seas. Our journey began in
          2020 when we made the bold decision to live our dream of sailing around the
          world.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          What started as a crazy idea during family dinner has turned into an
          incredible adventure that has taught us more about ourselves and each other
          than we could have ever imagined.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <div className="bg-light-blue p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-navy mb-4">Our Mission</h2>
            <p className="text-gray-700">
              To inspire other families to embrace adventure and show that
              alternative lifestyles are possible with proper planning and
              determination.
            </p>
          </div>
          <div className="bg-light-blue p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-navy mb-4">Our Values</h2>
            <p className="text-gray-700">
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