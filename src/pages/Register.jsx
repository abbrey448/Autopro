
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <main className="section">
      <div className="form-panel">
        <p className="eyebrow">JOIN AUTOPRO</p>
        <h1>Create Account</h1>

        <form onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="register-name">Full name</label>
          <input id="register-name" type="text" placeholder="Your full name" required />

          <label htmlFor="register-email">Email address</label>
          <input id="register-email" type="email" placeholder="you@example.com" required />

          <label htmlFor="register-password">Password</label>
          <input id="register-password" type="password" minLength="6" placeholder="At least 6 characters" required />

          <button className="button button-primary" type="submit">
            Create Account
          </button>
        </form>

        <p className="form-note">
          Already registered? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </main>
  );
}
