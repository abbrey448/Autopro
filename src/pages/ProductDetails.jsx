
import { Link, useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Premium Brake Pads",
    category: "Brake Parts",
    price: 2500,
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Car Battery",
    category: "Electrical",
    price: 8500,
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Automotive Wheel",
    category: "Tyres & Wheels",
    price: 12000,
    image:
      "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Car Headlight",
    category: "Lights & Electrical",
    price: 4500,
    image:
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=800&q=80",
  },
];

export default function ProductDetails() {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <main className="page-panel">
        <h1>Product Not Found</h1>
        <p>Sorry, we could not find that product.</p>
        <Link to="/shop">Back to Shop</Link>
      </main>
    );
  }

  return (
    <main className="page-panel">
      <div className="product-details">
        <img src={product.image} alt={product.name} />

        <div>
          <p>{product.category}</p>
          <h1>{product.name}</h1>
          <h2>KSh {product.price.toLocaleString()}</h2>
          <p>Quality car spare parts from AutoPro.</p>

          <Link to="/cart" className="primary-button">
            Go to Cart
          </Link>
        </div>
      </div>
    </main>
  );
}
