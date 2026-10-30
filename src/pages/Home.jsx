
import { Link } from "react-router-dom";

const categories = [
  "Brake Parts",
  "Engine Accessories",
  "Car Batteries",
  "Tyres & Wheels",
  "Lights & Electrical",
  "Filters & Fluids",
];

const featuredProducts = [
  {
    id: 1,
    name: "Premium Brake Pads",
    category: "Brake Parts",
    price: "KSh 2,500",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 2,
    name: "Car Battery",
    category: "Electrical",
    price: "KSh 8,500",
    image:
      "https://images.unsplash.com/photo-1597766353939-0b7b2d6b0c2d?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 3,
    name: "Automotive Wheel",
    category: "Tyres & Wheels",
    price: "KSh 12,000",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 4,
    name: "Car Headlight",
    category: "Lights & Electrical",
    price: "KSh 4,000",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">WELCOME TO AUTOPRO</p>

          <h1>
            The right parts.
            <br />
            The right price.
          </h1>

          <p className="hero-description">
            Find quality car spare parts and accessories for your vehicle
            in one convenient place.
          </p>

          <div className="hero-buttons">
            <Link to="/shop" className="button button-primary">
              Shop Now
            </Link>

            <Link to="/contact" className="button button-outline">
              Contact Us
            </Link>
          </div>

          <div className="hero-benefits">
            <span>✓ Quality parts</span>
            <span>✓ Great value</span>
            <span>✓ Friendly support</span>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1100&q=85"
            alt="Automotive parts in a workshop"
          />
          <div className="image-label">
            <strong>AutoPro</strong>
            <span>Your car parts partner</span>
          </div>
        </div>
      </section>

      <section className="section categories-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">EXPLORE OUR STORE</p>
            <h2>Shop by Category</h2>
          </div>

          <Link to="/shop" className="text-link">
            View all parts →
          </Link>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <Link
              to="/shop"
              className="category-card"
              key={category}
            >
              <span className="category-icon">⚙</span>
              <h3>{category}</h3>
              <span className="category-arrow">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section featured-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">CUSTOMER FAVOURITES</p>
            <h2>Featured Products</h2>
            <p className="section-description">
              Explore a few popular items from our store.
            </p>
          </div>

          <Link to="/shop" className="text-link">
            Shop all products →
          </Link>
        </div>

        <div className="product-grid">
          {featuredProducts.map((product) => (
            <article className="product-card" key={product.id}>
              <Link to={`/product/${product.id}`} className="product-image">
                <img src={product.image} alt={product.name} />
              </Link>

              <div className="product-info">
                <p className="product-category">{product.category}</p>
                <h3>{product.name}</h3>
                <p className="product-price">{product.price}</p>

                <Link
                  to={`/product/${product.id}`}
                  className="product-link"
                >
                  View product →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="promo-section">
        <div>
          <p className="eyebrow">NEED HELP FINDING A PART?</p>
          <h2>Let's find the right part for your car.</h2>
          <p>
            Contact our team for help choosing the right spare part for
            your vehicle.
          </p>
        </div>

        <Link to="/contact" className="button button-light">
          Get in Touch
        </Link>
      </section>
    </main>
  );
}
