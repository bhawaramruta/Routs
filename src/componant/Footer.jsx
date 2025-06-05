import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-dark">
        <div className="container py-5  ">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                Company
              </h4>
              <h6 className="text-light fw-normal">About Us</h6>
              <h6 className="text-light fw-normal">Contact Us</h6>
              <h6 className="text-light fw-normal">Reservation</h6>
              <h6 className="text-light fw-normal">Privacy Policy</h6>
              <h6 className="text-light fw-normal">Terms & Condition</h6>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                Contact
              </h4>
              <p className="mb-2 text-light">
                <i className="fa fa-map-marker-alt me-3"></i>123 Street, New
                York, USA
              </p>
              <p className="mb-2 text-light">
                <i className="fa fa-phone-alt me-3"></i>+012 345 67890
              </p>
              <p className="mb-2 text-light">
                <i className="fa fa-envelope me-3"></i>info@example.com
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                Opening
              </h4>
              <h5 className="text-light fw-normal">Monday - Saturday</h5>
              <p className="text-light fw-normal">09AM - 09PM</p>
              <h5 className="text-light fw-normal">Sunday</h5>
              <p className="text-light fw-normal">10AM - 08PM</p>
            </div>
            <div class="col-lg-3 col-md-6">
              <h4 class="section-title ff-secondary text-start text-primary fw-normal mb-4">
                Newsletter
              </h4>
              <p className="text-light fw-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus, minima.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
