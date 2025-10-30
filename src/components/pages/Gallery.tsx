import { useState } from 'react';
import { X, Image as ImageIcon } from 'lucide-react';
import { galleryData } from '../../data/gallery';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', 'Classroom', 'Events', 'Facilities', 'Activities'];

  const filteredImages = filter === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === filter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <ImageIcon className="h-4 w-4" />
              <span className="text-sm">Visual Stories</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6">Gallery</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Take a glimpse into life at Responsi Coaching Institute through our vibrant moments
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b sticky top-16 md:top-20 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  filter === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredImages.length === 0 ? (
            <div className="text-center py-20">
              <ImageIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-xl text-gray-600">No images found in this category</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((item, index) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer"
                  onClick={() => setSelectedImage(index)}
                  style={{ aspectRatio: '1' }}
                >
                  {/* Image */}
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs mb-2">
                        {item.category}
                      </div>
                      <p className="text-sm leading-relaxed">{item.title}</p>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tr-2xl"></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors bg-white/10 backdrop-blur-sm p-3 rounded-full"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-6 w-6" />
          </button>

          {/* Image Counter */}
          <div className="absolute top-6 left-6 text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-sm">
              {selectedImage + 1} / {filteredImages.length}
            </span>
          </div>

          {/* Main Content */}
          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <ImageWithFallback
                src={filteredImages[selectedImage].image}
                alt={filteredImages[selectedImage].title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
              />
            </div>
            
            {/* Image Info */}
            <div className="mt-6 text-center text-white">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-3">
                {filteredImages[selectedImage].category}
              </div>
              <p className="text-lg">{filteredImages[selectedImage].title}</p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((prev) => 
                    prev !== null && prev > 0 ? prev - 1 : filteredImages.length - 1
                  );
                }}
                className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-colors border border-white/20"
              >
                Previous
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((prev) => 
                    prev !== null && prev < filteredImages.length - 1 ? prev + 1 : 0
                  );
                }}
                className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-colors border border-white/20"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
