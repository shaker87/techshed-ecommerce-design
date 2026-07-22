import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useLocation } from "react-router-dom";
import { footerColumns, shopLinks } from "../siteData";
import { paymentMethods } from "../assets";
import { signOut } from "../store/actions/authActions";

function MainLayout({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const location = useLocation();
  const dashboardPaths = ["/admin", "/customer"];
  const isDashboard = dashboardPaths.includes(location.pathname);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 992) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  if (isDashboard) {
    return <Outlet />;
  }

  const loginLabel = user ? user.name.split(" ")[0] : "Log In";
  const loginTo = user
    ? user.role === "admin"
      ? "/admin"
      : "/customer"
    : "/signin";

  return (
    <div className="app-shell storefront">
      <header className="header">
        <div className="header-top custom-padding">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="free-shipping-text">
                  <span>
                    <i className="fas fa-truck" /> Free shipping for order over 50$
                  </span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="top-menu">
                  <ul>
                    <li>
                      <a href="#about">About</a>
                    </li>
                    <li>
                      <a href="#contact">Contact</a>
                    </li>
                    <li>
                      <a href="#help">Help Center</a>
                    </li>
                    <li>
                      <span>Call Us </span>
                      <a href="tel:123456789">123-456-789</a>
                    </li>
                    {user && (
                      <li>
                        <button
                          type="button"
                          className="theme-toggle-link"
                          onClick={() => dispatch(signOut())}
                        >
                          Sign Out
                        </button>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-sticky">
          <div className="header-middle">
            <div className="custom-padding">
              <div className="container-fluid">
                <div className="row middle-row align-items-center storefront-middle-row">
                  <div className="col-lg-8 col-md-7 col-12 storefront-middle-left">
                    <div className="logo-input">
                      <div className="logo">
                        <Link to="/">TechShed</Link>
                      </div>
                      <div className="search-input">
                        <input type="text" placeholder="Search here..." aria-label="Search products" />
                        <button type="button" className="input-btn" aria-label="Search">
                          <i className="fas fa-search" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-5 col-12 storefront-middle-right">
                    <div className="header-middle-icon">
                      <span>
                        <Link to={loginTo} className="storefront-auth-link">
                          <i className="fas fa-user" />
                          <span className="header-action-label">{loginLabel}</span>
                        </Link>
                      </span>
                      <span className="header-action-item--hide-xs">
                        <Link to={user ? "/customer" : "/signup"} className="storefront-auth-link">
                          <i className="far fa-heart" />
                          <span className="header-action-label">Favorites</span>
                        </Link>
                      </span>
                      <span>
                        <Link to={user ? "/customer" : "/signin"} className="storefront-auth-link">
                          <i className="fas fa-shopping-cart" />
                          <span className="header-action-label">0</span>
                        </Link>
                      </span>
                      <span className="header-action-item--hide-xs">
                        <button
                          type="button"
                          className="theme-toggle-link"
                          onClick={toggleTheme}
                          aria-label="Toggle theme"
                        >
                          <i className={theme === "light" ? "fas fa-moon" : "fas fa-sun"} />
                        </button>
                      </span>
                      <span className="header-menu-toggle">
                        <button
                          type="button"
                          id="menu-btn"
                          className="theme-toggle-link"
                          onClick={() => setMenuOpen((open) => !open)}
                          aria-expanded={menuOpen}
                          aria-label="Toggle navigation menu"
                        >
                          <i className={menuOpen ? "fas fa-times" : "fas fa-bars"} />
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`header-bottom ${menuOpen ? "header-bottom--open" : ""}`}>
            <div className="custom-padding">
              <div className="container-fluid">
                <nav
                  className={`header-bottom-menu ${menuOpen ? "mobile-open" : ""}`}
                  aria-label="Shop categories"
                >
                  <ul>
                    {shopLinks.map((label) => (
                      <li key={label}>
                        <a href="#" onClick={() => setMenuOpen(false)}>
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <div className="footer">
          <div className="footer-padding">
            <div className="container-fluid">
              <div className="footer-top">
                <div className="row">
                  {footerColumns.map((column) => (
                    <div className="col-md-3" key={column.title}>
                      <div className="footer-top-box">
                        <h3>{column.title}</h3>
                        <ul>
                          {column.items.map((item) => (
                            <li key={item}>
                              {column.title === "Store Location" ? (
                                item
                              ) : (
                                <a href="#">{item}</a>
                              )}
                            </li>
                          ))}
                        </ul>
                        {column.title === "Store Location" && (
                          <div className="social-icon">
                            <ul>
                              <li>
                                <a href="#" aria-label="Facebook">
                                  <i className="fab fa-facebook-f" />
                                </a>
                              </li>
                              <li>
                                <a href="#" aria-label="Instagram">
                                  <i className="fab fa-instagram" />
                                </a>
                              </li>
                              <li>
                                <a href="#" aria-label="Twitter">
                                  <i className="fab fa-twitter" />
                                </a>
                              </li>
                              <li>
                                <a href="#" aria-label="YouTube">
                                  <i className="fab fa-youtube" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hr" />
              <div className="footer-bottom">
                <div className="row">
                  <div className="col-md-8 offset-md-2">
                    <div className="footer-text">
                      <p>We accept the following paying methods</p>
                    </div>
                    <div className="payment-method">
                      {paymentMethods.map((method, index) => (
                        <img src={method} alt={`Payment method ${index + 1}`} key={index} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright-text">
          <p>© 2023 by TechShed. Proudly created with Wix.com</p>
        </div>
      </footer>
    </div>
  );
}

export default MainLayout;
