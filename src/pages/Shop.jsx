
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Premium Brake Pads",
    category: "Brake Parts",
    price: 2500,
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Car Battery",
    category: "Electrical",
    price: 8500,
    image: "https://images.unsplash.com/photo-1597766353939-0b7b2d6b0c2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Automotive Wheel",
    category: "Wheels & Tyres",
    price: 12000,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Car Headlight",
    category: "Lighting",
    price: 4000,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Shop() {
  return (
    <main className="section">
      <p className="eyebrow">AUTOPRO STORE</p>
      <h1>Shop Car Spare Parts</h1>
      <p className="section-description">
        Find quality spare parts and accessories for your vehicle.
      </p>

      <div className="product-grid" style={{ marginTop: "30px" }}>
        {products.map((product) => (
          <article className="product-card" key={product.id}>
            <Link
              to={`/product/${product.id}`}
              className="product-image"
            >
              <img src={product.image} alt={product.name} />
            </Link>

            <div className="product-info">
              <p className="product-category">{product.category}</p>

              <h3>{product.name}</h3>

              <p className="product-price">
                KSh {product.price.toLocaleString("en-KE")}
              </p>

              <Link
                to={`/product/${product.id}`}
                className="product-button"
              >
                View Product
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
