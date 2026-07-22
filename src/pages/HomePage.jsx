import React from "react";
import {
  benefits,
  bestSellers,
  brands,
  categories,
  featureCards,
  promoImages,
  saleProducts,
} from "../assets";

const benefitCopy = [
  <>
    Curb-side <br />
    pickup
  </>,
  <>
    Free shipping on <br /> orders over $50
  </>,
  <>
    Low prices <br /> guaranteed
  </>,
  <>
    Available to <br /> you 24/7
  </>,
];

function SellerGrid({ title, products, showSaleBadge }) {
  return (
    <section className="seller">
      <div className="seller-bg">
        <div className="seller-title">
          <h2>{title}</h2>
        </div>
        <div className="sell-box-container">
          {products.map((product) => (
            <div className="sell-box" key={product.name}>
              <img src={product.image} alt={product.name} />
              {(showSaleBadge || product.sale) && (
                <div className="sell-span">
                  <span>Sale</span>
                </div>
              )}
              <div className="sell-box-content">
                <p>{product.name}</p>
                <p className="price">
                  <strike>{product.oldPrice}</strike> {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="sell-btn-wrapper">
          <button type="button" className="view-all-btn">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}

const categoryLabels = {
  Computers: "Computers",
  Mobile: "Mobile",
  "Drones & Cameras": "Drones & Cameras",
  Sale: "Sale",
  Tablets: "Tablets",
  "Best Sellers": "Best Sellers",
  "TV & Home Cinema": "T.V & Home Cinema",
  "Wearable Tech": "Wearable Tech",
  Speakers: "Speakers",
  Headphones: "Headphones",
};

function HomePage() {
  return (
    <>
      <section className="site-slider">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="slider-content">
                <p>
                  <span>Best Prices</span>
                </p>
                <h1>
                  Incredible Prices <br /> on All Your <br /> Favorite Item
                </h1>
                <p className="get-more-text">Get more for less on selected brands</p>
                <button type="button" className="shop-now-btn">
                  Shop Now
                </button>
              </div>
            </div>
            <div className="col-md-6" />
          </div>
        </div>
      </section>

      <section className="product-card-area">
        <div className="custom-padding">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="card-box">
                  <img className="img-fluid" src={featureCards[0].image} alt="Holiday smartphone deals" />
                  <div className="card-box-content">
                    <h6>Holiday Deals</h6>
                    <h1>
                      Up to <br />
                      30% off{" "}
                    </h1>
                    <p>Selected Smartphone Brands</p>
                    <button type="button" className="shop-btn-1">
                      Shop
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-box">
                  <img className="img-fluid" src={featureCards[1].image} alt="Headphone promotion" />
                  <div className="card-box-content">
                    <h6>Just In</h6>
                    <h1>
                      Take Your
                      <br />
                      Sound <br />
                      Anywhere{" "}
                    </h1>
                    <p>Top Headphone Brands</p>
                    <button type="button" className="shop-btn-2">
                      Shop
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose">
        <div className="custom-padding">
          <div className="container-fluid">
            <div className="section-bg">
              <div className="row">
                {benefits.map((benefit, index) => (
                  <div className="col-md-3" key={benefit.title}>
                    <div className="choose-card">
                      <img src={benefit.icon} alt="" />
                      <p>{benefitCopy[index]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SellerGrid title="Best Sellers" products={bestSellers} />

      <section className="category">
        <div className="category-bg">
          <div className="seller-title">
            <h2>Shop by Category</h2>
          </div>
          <div className="category-box-container">
            {categories.map((category) => (
              <div className="category-box" key={category.name}>
                <img src={category.image} alt={category.name} />
                <h6>{categoryLabels[category.name] || category.name}</h6>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="best-price">
        <div className="best-price-bg">
          <div className="best-price-area-box">
            <div className="best-price-img-bg">
              <img className="img-fluid" src={promoImages.laptopSpeaker} alt="Laptop and speaker" />
              <div className="best-price-red-box">
                <p>
                  Best <br /> Price
                </p>
              </div>
            </div>
            <div className="best-price-content-wrapper">
              <div className="best-price-content">
                <p className="highlight-price">
                  <span>Save up to</span>$150
                </p>
                <h6>
                  on selected laptop <br />
                  & tablets brands
                </h6>
                <p>Terms and conditions apply</p>
                <button type="button" className="shop-now-btn">
                  Shop
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SellerGrid title="On Sale" products={saleProducts} showSaleBadge />

      <section className="today-special">
        <div className="today-special-bg">
          <div className="today-special-area-box">
            <div className="today-special-img-bg">
              <img src={promoImages.dronebg} alt="Professional camera drone" />
            </div>
            <div className="today-content-wrapper">
              <div className="today-content">
                <span className="today">Today&apos;s Special</span>
                <p className="highlight-today">Best Arrival In Town</p>
                <h2>
                  <span>30% </span> OFF
                </h2>
                <p className="p-name">on professional camera drones</p>
                <p>
                  Limited quantities. <br />
                  See product detail pages for availability.
                </p>
                <button type="button" className="shop-now-btn">
                  Shop
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="brand">
        <div className="brand-bg">
          <div className="seller-title">
            <h2>Brands</h2>
          </div>
          <div className="brand-box-container">
            {brands.map((brandImage, index) => (
              <div className="brand-box" key={index}>
                <img src={brandImage} alt={`Brand ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="news-area">
        <div className="custom-padding">
          <div className="container-fluid">
            <div className="news-area-bg">
              <div className="row">
                <div className="col-md-12">
                  <div className="news-title">
                    <h2>Newsletter</h2>
                    <p>Sign up to receive updates on new arrivals and special offers</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <div className="input-title">
                    <p>Email *</p>
                  </div>
                  <div className="subscribe-input">
                    <input type="email" placeholder="Your email here..." aria-label="Email address" />
                    <div className="subscribe-btn-wrapper">
                      <button type="submit" className="subscribe-btn">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="help-section" id="help">
        <div className="help-section-bg">
          <div className="help-section-area-box">
            <div className="help-content-wrapper">
              <div className="help-content">
                <h2>
                  Need Help? Check <br /> Out Our Help Center
                </h2>
                <p>
                  I&apos;m a paragraph. Click here to add your own text <br /> and edit me. Let your users get to
                  know you.
                </p>
                <button type="button" className="help-section-btn">
                  Go To Help Center
                </button>
              </div>
            </div>
            <div className="help-section-img">
              <img src={promoImages.laptopWatch} alt="Laptop and smartwatch" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
