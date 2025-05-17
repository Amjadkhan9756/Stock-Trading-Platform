import React from "react";

function Hero() {
  return (
    <>
      <section className="text-center landing">
      <div className="container-fluid mt-5">
        <img
          src="/image/homeHero.png"
          alt="Awards hero image"
          style={{ width: "70%" }} // Adjusted to a reasonable size
        />
      </div>
      <div className="container flex flex-col items-center justify-center text-center  mt-4">
        <h1>Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="button "
          style={{ backgroundColor: "blue", borderRadius: "10%" }} // Example: blue-600
        >
          Sign up for free
        </button>
      </div>
      </section>
    
    </>
  );
}
export default Hero;