const Gallery = () => {
  // This will be replaced with actual Contentful integration
  const images = [
    { id: 1, title: "Sunset at Sea" },
    { id: 2, title: "Family on Deck" },
    { id: 3, title: "Island Paradise" },
    { id: 4, title: "Storm Clouds" },
    { id: 5, title: "Marine Life" },
    { id: 6, title: "Beach Landing" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-navy mb-8">Photo Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image) => (
          <div
            key={image.id}
            className="aspect-square bg-light-blue rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="w-full h-full bg-navy/10 flex items-center justify-center">
              <span className="text-navy font-medium">{image.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;