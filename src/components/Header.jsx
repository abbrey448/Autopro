
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand">
          <span className="brand-icon">A</span>
          <span>
            Auto<span className="brand-highlight">Pro</span>
            <small>CAR SPARE PARTS</small>
          </span>
        </Link>

        <nav className="main-nav">
          <NavLink to="/" end>
            Home
          </NavLink>

          <NavLink to="/shop">
            Shop
          </NavLink>

          <NavLink to="/contact">
            Contact
          </NavLink>
        </nav>

        <div className="header-actions">
          <Link to="/login" className="login-link">
            Sign In
          </Link>

          <Link to="/cart" className="cart-link">
            Cart <span>↗</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
