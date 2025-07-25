import React from "react";

const Jumbotron = () => {
  return (
    <div className="bg-light py-5">
      <div className="container">
        <div className="text-center">
          <h1 className="display-4 fw-bold text-dark mb-4">A Warm Welcome!</h1>
          <p
            className="lead text-muted mb-4 mx-auto"
            style={{ maxWidth: "720px" }}
          >
            I am creating this Landing page with React. This is just placeholder
            text. "Love is when the other person's happiness is more important
            than your own."
          </p>
        </div>

        {/* Button aligned to the left under the centered text */}
        <div className="d-flex justify-content-start mt-3">
          <button className="btn btn-primary px-4 py-2">Call to action!</button>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
