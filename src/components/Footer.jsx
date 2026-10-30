
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-about">
          <Link to="/" className="footer-brand">
            Auto<span>Pro</span>
          </Link>

          <p>
            Your trusted place to find quality car spare parts and
            accessories for your vehicle.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop Products</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div>
          <h3>Customer Account</h3>
          <Link to="/login">Sign In</Link>
          <Link to="/register">Create Account</Link>
          <Link to="/orders">My Orders</Link>
          <Link to="/cart">Shopping Cart</Link>
        </div>

        <div>
          <h3>Contact</h3>
          <p>Email: support@autopro.example</p>
          <p>Location: Kenya</p>
          <p>Need help? Visit our contact page.</p>
          <Link to="/contact" className="footer-contact-link">
            Get in touch →
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} AutoPro. All rights reserved.</p>
        <p>Quality parts. Better journeys.</p>
      </div>
    </footer>
  );
}
