import React from "react";
import Hero from "./Hero";
// import LeftSection from "./LeftSection";
// import RightSection from "./RightSection";
// import Universe from "./Universe";

function ProductsPage() {
  return (
    <>
      <Hero />
      {/* Nexxt */}
      <div className="conatiner mt-5 p-3 ">
        <div className="row mt-4">
          <div className="col-2 "></div>
          <div className="col-3 ">
            <img src="\image\kite.png" alt="Kite" />
          </div>
          <div className="col-2"></div>

          <div className="col-3">
            <h1>Kite</h1>
            <p>
              Our ultra-fast flagship trading platform with streaming market
              data, advanced charts, an elegant UI, and more. Enjoy the Kite
              experience seamlessly on your Android and iOS devices.
            </p>
            <div className="text-center">
              <a
                href=""
                className="btn btn-outline-primary mx-5"
                style={{ textDecoration: "none" }}
              >
                Explore our products{" "}
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
              <a
                href=""
                className="btn btn-outline-primary"
                style={{ textDecoration: "none" }}
              >
                Try Kite demo{" "}
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
              <div className="container mt-5">
                <div className="row">
                  <div className="col-2"></div>
                  <div className="col-2">
                    <img src="/image/googlePlayBadge.svg" alt="Google Play" />
                  </div>
                  <div className="col-4"></div>
                  <div className="col-2">
                    <img src="/image/appstoreBadge.svg" alt="App Store" />
                  </div>
                  <div className="col-2"></div>
                </div>
              </div>
              <div className="col-4"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Next */}
      <div className="container mt-5 p-3">
        <div className="row mt-4 align-items-center gx-4">
          {" "}
          {/* Horizontal gap between columns */}
          {/* Left spacer (responsive) */}
          <div className="col-lg-2 d-none d-lg-block"></div>
          {/* Content column */}
          <div className="col-lg-3 col-md-5 pe-lg-4">
            {" "}
            {/* Right padding on large screens */}
            <h1>Console</h1>
            <p className="mb-4">
              The central dashboard for your Zerodha account. Gain insights into
              your trades and investments with in-depth reports and
              visualisations.
            </p>
            <div className="mt-3">
              <a
                href="#"
                className="btn btn-outline-primary"
                style={{ textDecoration: "none" }}
              >
                Learn more{" "}
                <i
                  className="fa fa-long-arrow-right ms-2"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </div>
          {/* Image column with responsive spacing */}
          <div className="col-lg-5 col-md-7 ps-lg-4 mt-md-0 mt-4">
            {" "}
            {/* Left padding + mobile top margin */}
            <img
              src="/image/console.png"
              alt="Console"
              className="img-fluid rounded-3 shadow-sm"
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />
          </div>
          {/* Right spacer (responsive) */}
          <div className="col-lg-2 d-none d-lg-block"></div>
        </div>
      </div>
      {/* Next */}

      <div className="conatiner mt-5 p-3 ">
        <div className="row mt-4">
          <div className="col-2 "></div>
          <div className="col-3 ">
            <img src="/image/coin.png" alt="Coin" />
          </div>
          <div className="col-2"></div>

          <div className="col-3">
            <h1>Coin</h1>
            <p>
              Buy direct mutual funds online, commission-free, delivered
              directly to your Demat account. Enjoy the investment experience on
              your Android and iOS devices.
            </p>
            <div>
              <a
                href=""
                className="btn btn-outline-primary mx-5"
                style={{ textDecoration: "none" }}
              >
                Coin{" "}
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
              {/* <a
                href=""

                className="btn btn-outline-primary"
                style={{ textDecoration: "none" }}
              >
                Try Kite demo{" "}
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a> */}
              <div className="container mt-5">
                <div className="row">
                  <div className="col-2"></div>
                  <div className="col-2">
                    <img src="/image/googlePlayBadge.svg" alt="Google Play" />
                  </div>
                  <div className="col-4"></div>
                  <div className="col-2">
                    <img src="/image/appstoreBadge.svg" alt="App Store" />
                  </div>
                  <div className="col-2"></div>
                </div>
              </div>
              <div className="col-4"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Next */}
      <div className="container mt-5 p-3">
        <div className="row mt-4 align-items-center gx-4">
          {" "}
          {/* Horizontal gap between columns */}
          {/* Left spacer (responsive) */}
          <div className="col-lg-2 d-none d-lg-block"></div>
          {/* Content column */}
          <div className="col-lg-3 col-md-5 pe-lg-4">
            {" "}
            {/* Right padding on large screens */}
            <h1>Kite Connect API</h1>
            <p className="mb-4">
              Build powerful trading platforms and experiences with our super
              simple HTTP/JSON APIs. If you are a startup, build your investment
              app and showcase it to our clientbase.
            </p>
            <div className="mt-3">
              <a
                href="#"
                className="btn btn-outline-primary"
                style={{ textDecoration: "none" }}
              >
                Kite Connect
                <i
                  className="fa fa-long-arrow-right ms-2"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </div>
          {/* Image column with responsive spacing */}
          <div className="col-lg-5 col-md-7 ps-lg-4 mt-md-0 mt-4">
            {" "}
            {/* Left padding + mobile top margin */}
            <img
              src="\image\kiteconnect.png"
              alt="Kiteconnect"
              className="img-fluid rounded-3 shadow-sm"
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />
          </div>
          {/* Right spacer (responsive) */}
          <div className="col-lg-2 d-none d-lg-block"></div>
        </div>
      </div>

      {/* Next */}

      <div className="conatiner mt-5 p-3 ">
        <div className="row mt-4">
          <div className="col-2 "></div>
          <div className="col-3 ">
            <img src="\image\varsity.png" alt="Varsity" />
          </div>
          <div className="col-2"></div>

          <div className="col-3">
            <h1>Varsity mobile</h1>
            <p>
              An easy to grasp, collection of stock market lessons with in-depth
              coverage and illustrations. Content is broken down into bite-size
              cards to help you learn on the go.
            </p>
            <div className="text-center">
              {/* <a
                href=""
                className="btn btn-outline-primary mx-5"
                style={{ textDecoration: "none" }}
              >
                Explore our products{" "}
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
              <a
                href=""
                className="btn btn-outline-primary"
                style={{ textDecoration: "none" }}
              >
                Try Kite demo{" "}
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a> */}
              <div className="container mt-5">
                <div className="row">
                  <div className="col-2"></div>
                  <div className="col-2">
                    <img src="/image/googlePlayBadge.svg" alt="Google Play" />
                  </div>
                  <div className="col-4"></div>
                  <div className="col-2">
                    <img src="/image/appstoreBadge.svg" alt="App Store" />
                  </div>
                  <div className="col-2"></div>
                </div>
              </div>
              <div className="col-4"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductsPage;
