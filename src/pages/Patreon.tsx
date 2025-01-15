import { Helmet } from "react-helmet";

const Patreon = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Helmet>
        <title>Keep Us Afloat - Let's Sail Andiamo</title>
        <meta name="description" content="Support our sailing adventures through Patreon and become part of our journey." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={window.location.href} />
        <meta property="og:title" content="Keep Us Afloat - Let's Sail Andiamo" />
        <meta property="og:description" content="Support our sailing adventures through Patreon and become part of our journey." />
        <meta property="og:type" content="website" />
      </Helmet>
      <h1 className="text-4xl font-bold text-navy mb-8">Keep Us Afloat</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-navy mb-4">Support Our Journey</h2>
          <p className="text-gray-600 mb-4">
            By becoming a patron, you'll be directly supporting our sailing adventures
            and helping us create more content to share with the community.
          </p>
          <a
            href="https://www.patreon.com/letssailandiamo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-coral text-white px-6 py-3 rounded-lg hover:bg-coral/90 transition-colors"
          >
            Join us on Patreon
          </a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-navy mb-4">Patron Benefits</h2>
          <ul className="space-y-4 text-gray-600">
            <li>✨ Early access to blog posts and videos</li>
            <li>🎥 Exclusive behind-the-scenes content</li>
            <li>🗺️ Detailed sailing routes and anchorage tips</li>
            <li>💬 Private Discord community access</li>
            <li>🎁 Monthly patron-only giveaways</li>
            <li>📸 High-resolution photo downloads</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Patreon;