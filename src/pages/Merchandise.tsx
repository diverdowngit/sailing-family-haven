import { Helmet } from "react-helmet";

const Merchandise = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Helmet>
        <title>Merchandise - Let's Sail Andiamo</title>
        <meta name="description" content="Shop our exclusive sailing-themed merchandise and support our journey." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={window.location.href} />
        <meta property="og:title" content="Merchandise - Let's Sail Andiamo" />
        <meta property="og:description" content="Shop our exclusive sailing-themed merchandise and support our journey." />
        <meta property="og:type" content="website" />
      </Helmet>
      <h1 className="text-4xl font-bold text-navy mb-8">Merchandise</h1>
      <div className="text-center">
        <p className="text-lg mb-8">
          Visit our merchandise store to support our journey and get some awesome sailing-themed gear!
        </p>
        <a
          href="https://lets-sail-andiamo.myspreadshop.ie"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-coral text-white px-8 py-4 rounded-lg hover:bg-coral/90 transition-colors text-lg"
        >
          Visit Our Store
        </a>
      </div>
    </div>
  );
};

export default Merchandise;