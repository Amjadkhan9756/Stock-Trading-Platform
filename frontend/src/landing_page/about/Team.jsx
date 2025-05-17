import React from "react";

function Team() {
  return (
    <>
      <div className="conttainer mt-4 p-3">
        <div className="row p-5">
          <div className="col-2"></div>
          <div className="col-4 p-5">
            <p className="cntainer p-3 text-muted">
              We kick-started operations on the 15th of August, 2010 with the
              goal of breaking all barriers that traders and investors face in
              India in terms of cost, support, and technology. We named the
              company Zerodha, a combination of Zero and "Rodha", the Sanskrit
              word for barrier.
            </p>

            <p className="cntainer p-3 text-muted">
              Today, our disruptive pricing models and in-house technology have
              made us the biggest stock broker in India.
            </p>
            <p className="cntainer p-3 text-muted">
              Over 1+ Crore clients place millions of orders every day through
              our powerful ecosystem of investment platforms, contributing over
              15% of all Indian retail trading volumes.
            </p>
          </div>
          <div className="col-4 p-5">
            <p className="cntainer p-3 text-muted">
              In addition, we run a number of popular open online educational
              and community initiatives to empower retail traders and investors.
            </p>
            <p className="cntainer p-3 text-muted">
              <a href="">Rainmatter</a>, our fintech fund and incubator, has
              invested in several fintech startups with the goal of growing the
              Indian capital markets.
            </p>
            <p className="cntainer p-3 text-muted">
              And yet, we are always up to something new every day. Catch up on
              the latest updates on our blog or see what the media is{" "}
              <a href="">saying about us.</a>
            </p>
          </div>
          <div className="col-2"></div>
        </div>
      </div>

      <div className="conttainer mt-3 p-3">
        <div className="row p-5">
            <div className="col-2"></div>
          <div className="col-4 p-5">
            <img
              src="\image\nithinKamath.jpg"
              alt="Awards hero image"
              style={{ borderRadius: "50%" }}
            />
            <p className="container text-center mt-3 py-3 fs-2"> Nithin Kamath</p>
            <p  className="container text-center mt-2 py-2 "> Founder, CEO</p>
          </div>
          <div className="col-4 p-5">
            <p className="cntainer p-3 text-muted">
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p className="cntainer p-3 text-muted">
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p className="cntainer p-3 text-muted">
              Playing basketball is his zen.
            </p>
            <p>
              {" "}
              Connect on<a href=""> Homepage</a> /<a href="">TradingQnA</a> /{" "}
              <a href="">Twitter</a>
            </p>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </>
  );
}

export default Team;
