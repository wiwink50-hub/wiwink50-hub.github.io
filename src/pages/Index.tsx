import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import heroImage from "@/assets/hero-home.jpg";

const Index = () => {
  const featuredProducts = products.slice(0, 4);
  const categories = [
    { name: "Furniture", path: "/category/furniture", image: "/src/assets/product-sofa.jpg" },
    { name: "Decor", path: "/category/decor", image: "/src/assets/product-decor.jpg" },
    { name: "Kitchen", path: "/category/kitchen", image: "/src/assets/product-kitchen.jpg" },
    { name: "Bedroom", path: "/category/bedroom", image: "/src/assets/product-bed.jpg" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] overflow-hidden">
          <img
            src={heroImage}
            alt="Modern home interior"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/40" />
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
                Transform Your Space
              </h1>
              <p className="text-xl md:text-2xl mb-8 animate-fade-in">
                Discover quality furniture and decor for every room in your home
              </p>
              <Link to="/shop">
                <Button size="lg" variant="secondary" className="animate-fade-in">
                  Shop Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={category.path}
                  className="group relative aspect-square overflow-hidden rounded-lg"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/40 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold">Featured Products</h2>
              <Link to="/shop">
                <Button variant="outline">View All</Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Create Your Dream Home Today
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Browse our extensive collection of furniture and decor to find the perfect pieces for your space.
            </p>
            <Link to="/shop">
              <Button size="lg" variant="secondary">
                Start Shopping
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
