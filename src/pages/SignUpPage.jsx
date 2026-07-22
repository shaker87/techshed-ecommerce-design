import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../store/actions/authActions";

function SignUpPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, user, error } = useSelector((state) => state.auth);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (user?.role) {
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
    dispatch(signUp(formState));
  };

  return (
    <section className="section shell">
      <div className="auth-shell">
        <div className="auth-card auth-card-accent">
          <p className="eyebrow">Join TechShed</p>
          <h1>Create your account</h1>
          <p>
            Start building your profile now so future checkout, dashboard, and loyalty features are
            ready for you.
          </p>
          <ul className="auth-benefits">
            <li>Fast checkout in the future</li>
            <li>Exclusive member-only deals</li>
            <li>Saved order history and support</li>
          </ul>
        </div>

        <div className="auth-card">
          <h2>Sign Up</h2>
          <form className="auth-form" onSubmit={handleSubmit}>
            <label>
              Full Name
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                value={formState.name}
                onChange={handleChange}
              />
            </label>
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
                placeholder="Create a password"
                value={formState.password}
                onChange={handleChange}
              />
            </label>
            <label>
              Confirm Password
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formState.confirmPassword}
                onChange={handleChange}
              />
            </label>
            {error && <p className="form-message error-message">{error}</p>}
            <button type="submit" className="primary-button auth-submit">
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>
          <p className="auth-switch">
            Already have an account? <Link to="/signin">Sign in</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default SignUpPage;
