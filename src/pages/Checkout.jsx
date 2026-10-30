
import { Link } from "react-router-dom";

export default function Checkout() {
  return (
    <main className="page-panel">
      <h1>Checkout</h1>
      <p>Review your order and enter your delivery details here.</p>

      <form
        className="form-panel"
        onSubmit={(event) => event.preventDefault()}
      >
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          type="text"
          placeholder="Enter your full name"
          required
        />

        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          type="tel"
          placeholder="Enter your phone number"
          required
        />

        <label htmlFor="address">Delivery Address</label>
        <textarea
          id="address"
          placeholder="Enter your delivery address"
          required
        />

        <button type="submit" className="primary-button">
          Place Order
        </button>
      </form>

      <p>
        Need to return to your cart? <Link to="/cart">View Cart</Link>
      </p>
    </main>
  );
}
