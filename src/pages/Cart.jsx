
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <main className="section">
      <p className="eyebrow">YOUR SHOPPING</p>
      <h1>Shopping Cart</h1>
      <div className="page-panel">
        <h2>Your cart is empty</h2>
        <p>Choose car parts from our shop to get started.</p>
        <Link to="/shop" className="button button-primary">
          Browse Products
        </Link>
      </div>
    </main>
  );
}
