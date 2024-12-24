import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-1 p-3"></div>
        <div className="col-5 p-3" style={{ lineHeight: "1.5rem" }}>
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" />
          <br />
          <a href="" style={{ marginRight: "10px" }}>
            Track account opening
          </a>
          <a href="" style={{ marginRight: "10px" }}>
            Track segment activation
          </a>
          <a href="" style={{ marginRight: "10px" }}>
            Intraday margins
          </a>
          <a href="">Kite user manual</a>
        </div>
        <div className="col-1 p-3"></div>
        <div className="col-5 p-3" style={{ lineHeight: "1.5rem" }}>
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;