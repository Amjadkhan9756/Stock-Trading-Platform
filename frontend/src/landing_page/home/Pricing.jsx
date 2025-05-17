import React from "react";

function Pricing() {
  return (
    <div className="container mt-3 p-3">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="container">Unbeatable pricing</h1>
          <p className="container text-muted mt-3 p-4">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="/pricing" className="btn btn-outline-primary p-4">
            See pricing
          </a>
        </div>
        <div className="col-2">
          <img src="/image/pricing0.svg" alt="Pricing" />
          <p> Free account opening</p>
        </div>
        <div className="col">
          <img src="/image/pricing0.svg" alt="Pricing" />
          <p> Free equity delivery and direct mutual funds</p>
        </div>
        <div className="col">
          <img src="/image/intradayTrades.svg" alt="Intraday Trades" />
          <p> Intraday and F&O</p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
