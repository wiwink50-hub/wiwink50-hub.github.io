export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export const products: Product[] = [
  // Furniture (5 items)
  {
    id: "1",
    name: "Modern Sectional Sofa",
    price: 1299.99,
    image: "/src/assets/product-sofa.jpg",
    category: "Furniture",
    description: "Comfortable and stylish sectional sofa perfect for any living room. Features premium fabric upholstery and sturdy construction."
  },
  {
    id: "2",
    name: "Wooden Dining Table Set",
    price: 899.99,
    image: "/src/assets/product-table.jpg",
    category: "Furniture",
    description: "Beautiful solid wood dining table with matching chairs. Seats 6 people comfortably with timeless design."
  },
  {
    id: "3",
    name: "Luxury Leather Sectional",
    price: 1899.99,
    image: "/src/assets/product-sofa-2.jpg",
    category: "Furniture",
    description: "Premium L-shaped leather sectional with exceptional comfort. Perfect centerpiece for modern living spaces."
  },
  {
    id: "4",
    name: "Glass Coffee Table",
    price: 399.99,
    image: "/src/assets/product-coffee-table.jpg",
    category: "Furniture",
    description: "Contemporary glass top coffee table with sleek metal frame. Minimalist design that complements any décor."
  },
  {
    id: "5",
    name: "Modern Bookshelf",
    price: 549.99,
    image: "/src/assets/product-bookshelf.jpg",
    category: "Furniture",
    description: "Elegant wooden bookshelf with multiple shelves. Perfect for displaying books, plants, and decorative items."
  },
  
  // Decor (5 items)
  {
    id: "6",
    name: "Ceramic Vase Collection",
    price: 79.99,
    image: "/src/assets/product-decor.jpg",
    category: "Decor",
    description: "Set of three modern ceramic vases in complementary sizes. Perfect for fresh or dried flower arrangements."
  },
  {
    id: "7",
    name: "Abstract Wall Art Set",
    price: 189.99,
    image: "/src/assets/product-wall-art.jpg",
    category: "Decor",
    description: "Three-piece geometric wall art with gold frames. Adds sophisticated modern touch to any room."
  },
  {
    id: "8",
    name: "Designer Throw Pillows",
    price: 59.99,
    image: "/src/assets/product-pillows.jpg",
    category: "Decor",
    description: "Set of 4 decorative throw pillows with geometric patterns. Premium fabric with hidden zippers."
  },
  {
    id: "9",
    name: "Marble Table Lamp",
    price: 129.99,
    image: "/src/assets/product-lamp.jpg",
    category: "Decor",
    description: "Elegant table lamp with natural marble base and gold accents. Perfect for bedroom or living room lighting."
  },
  {
    id: "10",
    name: "Gold Frame Wall Mirror",
    price: 249.99,
    image: "/src/assets/product-mirror.jpg",
    category: "Decor",
    description: "Large decorative wall mirror with ornate gold frame. Creates illusion of space and adds elegance."
  },
  
  // Kitchen (5 items)
  {
    id: "11",
    name: "Stainless Cookware Set",
    price: 299.99,
    image: "/src/assets/product-kitchen.jpg",
    category: "Kitchen",
    description: "Professional-grade 10-piece cookware set. Includes pots, pans, and lids with heat-resistant handles."
  },
  {
    id: "12",
    name: "Professional Knife Set",
    price: 349.99,
    image: "/src/assets/product-knife-set.jpg",
    category: "Kitchen",
    description: "Premium chef knife set with wooden block. German stainless steel blades for precision cutting."
  },
  {
    id: "13",
    name: "Stand Mixer",
    price: 279.99,
    image: "/src/assets/product-mixer.jpg",
    category: "Kitchen",
    description: "Powerful 5-quart stand mixer for all your baking needs. Multiple speed settings and attachments included."
  },
  {
    id: "14",
    name: "Porcelain Dinnerware Set",
    price: 159.99,
    image: "/src/assets/product-dinnerware.jpg",
    category: "Kitchen",
    description: "16-piece elegant white porcelain dinnerware set. Service for 4 including plates, bowls, and mugs."
  },
  {
    id: "15",
    name: "Espresso Coffee Machine",
    price: 449.99,
    image: "/src/assets/product-coffee-maker.jpg",
    category: "Kitchen",
    description: "Professional espresso and cappuccino maker. 15-bar pressure pump for café-quality coffee at home."
  },
  
  // Bedroom (5 items)
  {
    id: "16",
    name: "Upholstered King Bed",
    price: 1099.99,
    image: "/src/assets/product-bed.jpg",
    category: "Bedroom",
    description: "Luxurious king-size bed with elegant upholstered headboard. Creates a sophisticated focal point in any bedroom."
  },
  {
    id: "17",
    name: "Luxury Bedding Set",
    price: 199.99,
    image: "/src/assets/product-bedding.jpg",
    category: "Bedroom",
    description: "Premium 1000 thread count bedding set. Includes duvet cover, fitted sheet, and pillowcases."
  },
  {
    id: "18",
    name: "Modern Dresser",
    price: 699.99,
    image: "/src/assets/product-dresser.jpg",
    category: "Bedroom",
    description: "6-drawer dresser with soft-close mechanism. Clean white finish with ample storage space."
  },
  {
    id: "19",
    name: "Plush Area Rug",
    price: 179.99,
    image: "/src/assets/product-rug.jpg",
    category: "Bedroom",
    description: "Soft shag area rug in neutral gray. Adds warmth and comfort underfoot with luxurious texture."
  },
  {
    id: "20",
    name: "Sliding Door Wardrobe",
    price: 999.99,
    image: "/src/assets/product-wardrobe.jpg",
    category: "Bedroom",
    description: "Spacious wardrobe with sliding doors and interior organization. Natural wood finish with hanging rods and shelves."
  },
  
  // Outdoor (5 items)
  {
    id: "21",
    name: "Patio Furniture Set",
    price: 799.99,
    image: "/src/assets/product-outdoor.jpg",
    category: "Outdoor",
    description: "Weather-resistant outdoor furniture set with cushions. Includes table and four chairs, perfect for outdoor dining."
  },
  {
    id: "22",
    name: "Outdoor Lounge Chair",
    price: 399.99,
    image: "/src/assets/product-lounge-chair.jpg",
    category: "Outdoor",
    description: "Comfortable chaise lounge with adjustable backrest. UV-resistant materials with plush cushions."
  },
  {
    id: "23",
    name: "Garden Dining Set",
    price: 1299.99,
    image: "/src/assets/product-outdoor-dining.jpg",
    category: "Outdoor",
    description: "Large outdoor dining set for 6 people. Powder-coated aluminum frame with weather-resistant finish."
  },
  {
    id: "24",
    name: "Fire Pit Table",
    price: 899.99,
    image: "/src/assets/product-fire-pit.jpg",
    category: "Outdoor",
    description: "Propane fire pit table with safety glass shield. Creates cozy ambiance for outdoor gatherings."
  },
  {
    id: "25",
    name: "Garden Planter Set",
    price: 149.99,
    image: "/src/assets/product-planters.jpg",
    category: "Outdoor",
    description: "Set of 3 modern ceramic planters in graduated sizes. Drainage holes and weather-resistant construction."
  }
];
