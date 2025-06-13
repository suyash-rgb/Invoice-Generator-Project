import React from "react";
import "./Features.css"; // Ensure you style this section properly

const Features = () => {
  return (
    <section id="features" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 display-5 fw-bold">Why Choose QuickInvoice?</h2>

        <div className="row g-4 justify-content-center">
          {/* Feature 1 - Easy to Fill Invoice Details */}
          <div className="col-md-6 col-lg-3 d-flex">
            <div className="card h-100 shadow-sm border-0 text-center flex-fill">
              <div className="card-img-top-container d-flex align-items-center justify-content-center">
                <img
                  src="/assets/easy-fill.png" /* Adjust path if needed */
                  className="rounded-circle"
                  alt="Easy to Fill Invoice Details"
                />
              </div>
              <div className="card-body p-4">
                <h5 className="card-title fw-bold mb-2 fs-5">Easy to Fill Invoice Details</h5>
                <p className="card-text text-muted small">
                  Quickly enter invoice details without hassle. No complex fields—just straightforward invoicing.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2 - Curated List of Templates */}
          <div className="col-md-6 col-lg-3 d-flex">
            <div className="card h-100 shadow-sm border-0 text-center flex-fill">
              <div className="card-img-top-container d-flex align-items-center justify-content-center">
                <img
                  src="/assets/templates.png"
                  className="rounded-circle"
                  alt="Curated List of Templates"
                />
              </div>
              <div className="card-body p-4">
                <h5 className="card-title fw-bold mb-2 fs-5">Curated List of Templates</h5>
                <p className="card-text text-muted small">
                  Access a variety of professionally designed invoice templates to suit your needs.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3 - Add Logo & Details */}
          <div className="col-md-6 col-lg-3 d-flex">
            <div className="card h-100 shadow-sm border-0 text-center flex-fill">
              <div className="card-img-top-container d-flex align-items-center justify-content-center">
                <img
                  src="/assets/add-logo.png"
                  className="rounded-circle"
                  alt="Add Your Logo & Invoice Details"
                />
              </div>
              <div className="card-body p-4">
                <h5 className="card-title fw-bold mb-2 fs-5">Add Your Logo & Invoice Details</h5>
                <p className="card-text text-muted small">
                  Personalize your invoices by adding a company logo and essential details effortlessly.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 4 - Tailor Fields to Your Needs */}
          <div className="col-md-6 col-lg-3 d-flex">
            <div className="card h-100 shadow-sm border-0 text-center flex-fill">
              <div className="card-img-top-container d-flex align-items-center justify-content-center">
                <img
                  src="/assets/custom-fields.png"
                  className="rounded-circle"
                  alt="Tailor Fields to Your Needs"
                />
              </div>
              <div className="card-body p-4">
                <h5 className="card-title fw-bold mb-2 fs-5">Tailor Fields to Your Needs</h5>
                <p className="card-text text-muted small">
                  Customize invoice fields to align with your business requirements—total flexibility.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;