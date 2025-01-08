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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6 md:mb-8">Shop Our Merchandise</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm overflow-hidden">
            <div className="h-40 md:h-48 bg-light-blue/20" />
            <div className="p-4 md:p-6">
              <h2 className="text-lg md:text-xl font-bold text-navy mb-2">{product.name}</h2>
              <p className="text-gray-600 text-sm md:text-base mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-base md:text-lg font-bold text-coral">${product.price}</span>
                <button className="bg-navy text-white px-3 py-1.5 md:px-4 md:py-2 rounded text-sm md:text-base hover:bg-navy/90 transition-colors">
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