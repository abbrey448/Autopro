
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <main className="section">
      <div className="form-panel">
        <p className="eyebrow">WELCOME BACK</p>
        <h1>Sign In</h1>

        <form onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="login-email">Email address</label>
          <input id="login-email" type="email" placeholder="you@example.com" required />

          <label htmlFor="login-password">Password</label>
          <input id="login-password" type="password" placeholder="Enter your password" required />

          <button className="button button-primary" type="submit">
            Sign In
          </button>
        </form>

        <p className="form-note">
          Don't have an account? <Link to="/register">Create one</Link>
        </p>
      </div>
    </main>
  );
}
