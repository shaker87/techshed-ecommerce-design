import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../store/actions/authActions";

function SignInPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, user, error } = useSelector((state) => state.auth);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (user?.role === "admin") {
      navigate("/admin");
    } else if (user?.role === "customer") {
      navigate("/customer");
    }
  }, [navigate, user]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signIn(formState));
  };

  return (
    <section className="section shell">
      <div className="auth-shell">
        <div className="auth-card auth-card-accent">
          <p className="eyebrow">Welcome back</p>
          <h1>Sign in to TechShed</h1>
          <p>
            Access your orders, wishlist, saved addresses, and future customer dashboard features.
          </p>
          <ul className="auth-benefits">
            <li>Track orders in one place</li>
            <li>Save favorite products</li>
            <li>Manage profile and payments</li>
          </ul>
        </div>

        <div className="auth-card">
          <h2>Sign In</h2>
          <form className="auth-form" onSubmit={handleSubmit}>
            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formState.email}
                onChange={handleChange}
              />
            </label>
            <label>
              Password
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formState.password}
                onChange={handleChange}
              />
            </label>
            <div className="auth-row">
              <label className="checkbox">
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#">Forgot password?</a>
            </div>
            {error && <p className="form-message error-message">{error}</p>}
            <button type="submit" className="primary-button auth-submit">
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>
          <p className="auth-switch">
            Don't have an account? <Link to="/signup">Create one</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default SignInPage;
