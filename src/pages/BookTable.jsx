import React, { useState } from "react";
import './BookTable.css';


function BookTable() {
  const [userinfo, setUserinfo] = useState({
    name: "",
    email: "",
    datetime: "",
    select: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;

    setUserinfo((prvData) => ({
      ...prvData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(userinfo);
  }
  return (
    <>
      <div className="containor">
        <div className="row">
          <div className="col">
            <div
              className="container-xxl py-5 px-0 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="row g-0">
                <div className="col-md-6">
                  <div className="video">
                    <img className="" src="/src/assets/img/video.jpg" />
                  </div>
                </div>

                <div className="col-md-6 bg-dark d-flex align-items-center">
                  <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
                    <h5 className="section-title ff-secondary text-start text-primary fw-normal">
                      Reservation
                    </h5>
                    <h1 className="text-white mb-4">Book A Table Online</h1>
                    <form onSubmit={handleSubmit}>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <div className="form-floating">
                            <input
                              type="text"
                              name="name" // ← add this
                              className="form-control"
                              id="name"
                              placeholder="Your Name"
                              value={userinfo.name}
                              onChange={handleChange}
                            />
                            <label htmlFor="name">Your Name</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating">
                            <input
                              type="email"
                              name="email" // ← add this
                              className="form-control"
                              id="email"
                              placeholder="Your email"
                              value={userinfo.email}
                              onChange={handleChange}
                            />

                            <label htmlFor="email">Your Email</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div
                            className="form-floating date"
                            id="date3"
                            data-target-input="nearest"
                          >
                            <input
                              type="text"
                              name="datetime" // ← add this
                              className="form-control"
                              id="datetime"
                              placeholder="Your datetime"
                              value={userinfo.datetime}
                              onChange={handleChange}
                            />

                            <label htmlFor="datetime">Date & Time</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating">
                            <select
                              className="form-select"
                              id="select1"
                              name="select"
                              onChange={handleChange}
                              value={userinfo.select}
                            >
                              <option value="">Select People</option>
                              <option value="1">People 1</option>
                              <option value="2">People 2</option>
                              <option value="3">People 3</option>
                            </select>
                            <label htmlFor="select1">No Of People</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-floating">
                            <textarea
                              type="text"
                              name="message" // ← add this
                              className="form-control"
                              id="message"
                              placeholder="Your message"
                              value={userinfo.message}
                              onChange={handleChange}
                            ></textarea>
                            <label htmlFor="message">Special Request</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <button
                            className="btn btn-primary w-100 py-3"
                            type="submit"
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookTable;
