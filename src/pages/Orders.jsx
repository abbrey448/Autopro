
import { Link } from "react-router-dom";

export default function Orders() {
  return (
    <main className="page-panel">
      <h1>My Orders</h1>
      <p>Your orders will appear here once you make a purchase.</p>

      <Link to="/shop" className="primary-button">
        Continue Shopping
      </Link>
    </main>
  );
}
