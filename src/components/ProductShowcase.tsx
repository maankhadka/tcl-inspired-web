import { Card } from "@/components/ui/card";
import productImage from "@/assets/tcl-products.jpg";

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      title: "C845 Mini LED TV",
      image: productImage,
      featured: true
    },
    {
      id: 2,
      title: "C745 QLED TV",
      image: productImage,
      featured: false
    },
    {
      id: 3,
      title: "P745 4K HDR TV",
      image: productImage,
      featured: false
    },
    {
      id: 4,
      title: "Air Conditioner",
      image: productImage,
      featured: false
    },
    {
      id: 5,
      title: "Sound Bar",
      image: productImage,
      featured: false
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl tcl-heading mb-4">NEW ARRIVALS</h2>
          <p className="text-tcl-text-secondary text-lg">
            Discover our latest innovative products
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className={`group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.featured && (
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="tcl-heading text-lg mb-2">{product.title}</h3>
                <p className="text-tcl-text-secondary text-sm">
                  Experience the future of entertainment
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="text-primary hover:text-primary/80 font-medium text-lg transition-colors">
            View All Products →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;