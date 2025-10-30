import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About HomeStyle</h1>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                HomeStyle was founded with a simple mission: to make quality home furniture and decor accessible to everyone. We believe that your home should be a reflection of your personal style and a comfortable sanctuary where you can relax and create memories with loved ones.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our carefully curated collection features furniture and decor for every room in your home. From modern sofas and elegant dining sets to stylish kitchen accessories and cozy bedroom essentials, we have everything you need to create the perfect living space.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
              <p className="text-muted-foreground leading-relaxed">
                We're committed to providing high-quality products at fair prices, backed by excellent customer service. Every item in our collection is selected with care, ensuring durability, style, and value for our customers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Sustainability</h2>
              <p className="text-muted-foreground leading-relaxed">
                We care about our planet and are continuously working to reduce our environmental impact. Many of our products are made from sustainable materials, and we partner with manufacturers who share our commitment to responsible production practices.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
