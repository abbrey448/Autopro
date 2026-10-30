
import { Link } from "react-router-dom";

export default function Account() {
  return (
    <main className="section">
      <p className="eyebrow">YOUR AUTOPRO PROFILE</p>
      <h1>My Account</h1>

      <div className="page-panel">
        <p>Your account information will appear here after you sign in.</p>
        <div className="account-links">
          <Link to="/orders">View My Orders →</Link>
          <Link to="/login">Sign In →</Link>
        </div>
      </div>
    </main>
  );
}
