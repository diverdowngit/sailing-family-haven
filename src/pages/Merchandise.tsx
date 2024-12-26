const Merchandise = () => {
  const products = [
    {
      id: 1,
      name: "Sailing Family T-Shirt",
      price: 29.99,
      description: "Comfortable cotton t-shirt with our logo",
    },
    {
      id: 2,
      name: "Adventure Cap",
      price: 24.99,
      description: "Adjustable cap perfect for sunny days",
    },
    {
      id: 3,
      name: "Ocean Waves Hoodie",
      price: 49.99,
      description: "Cozy hoodie with wave design",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-navy mb-8">Shop Our Merchandise</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-light-blue" /> {/* Placeholder for product image */}
            <div className="p-6">
              <h2 className="text-xl font-bold text-navy mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-coral">${product.price}</span>
                <button className="bg-navy text-white px-4 py-2 rounded hover:bg-navy/90 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Merchandise;