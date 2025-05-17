import React from "react";

function Education() {
  return (
    <div className="container mt-4 p-4">
      <div className="row p-4">
        <div className="col-lg-6 p-4">
          <img 
            src="/image/education.svg" 
            alt="Education" 
            className="img-fluid"
          />
        </div>
        
        <div className="col-lg-6 p-4">
          <div className="d-flex flex-column h-100 justify-content-center">
            <h2 className="mb-4">Free and open market education</h2>
            
            <div className="mb-4">
              <p className="mb-3">
                Varsity, the largest online stock market education book in the world 
                covering everything from the basics to advanced trading.
              </p>
              <a href="/varsity" className="btn btn-outline-primary">
                Explore Varsity
              </a>
            </div>
            
            <div>
              <p className="mb-3">
                TradingQ&A, the most active trading and investment community 
                in India for all your market related queries.
              </p>
              <a href="/tradingqna" className="btn btn-outline-primary">
                Join TradingQ&A
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;