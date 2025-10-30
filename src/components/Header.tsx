import { Link } from "react-router-dom";
import { ShoppingCart, Search, Menu, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Home className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-foreground">HomeStyle</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/shop" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Shop All
            </Link>
            <Link to="/category/furniture" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Furniture
            </Link>
            <Link to="/category/decor" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Decor
            </Link>
            <Link to="/category/kitchen" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Kitchen
            </Link>
            <Link to="/category/bedroom" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Bedroom
            </Link>
            <Link to="/category/outdoor" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Outdoor
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2">
              <Input
                type="search"
                placeholder="Search products..."
                className="w-64"
              />
              <Button size="icon" variant="ghost">
                <Search className="h-5 w-5" />
              </Button>
            </div>
            
            <Link to="/cart">
              <Button size="icon" variant="ghost">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>

            <Button
              size="icon"
              variant="ghost"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link to="/shop" className="block py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
              Shop All
            </Link>
            <Link to="/category/furniture" className="block py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
              Furniture
            </Link>
            <Link to="/category/decor" className="block py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
              Decor
            </Link>
            <Link to="/category/kitchen" className="block py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
              Kitchen
            </Link>
            <Link to="/category/bedroom" className="block py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
              Bedroom
            </Link>
            <Link to="/category/outdoor" className="block py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
              Outdoor
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
