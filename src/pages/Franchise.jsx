import React from "react";

function Franchise() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 mt-3">
            <p>Be Your Own Boss</p>
            <h3 className="rocknroll-one-regular red">JOIN THE LA PINO'Z FAMILY</h3>
            <p>
              Are you looking for a franchise opportunity that focuses on good,
              quality food? If yes, then we are proud to offer pizza franchise
              opportunities across the states to people who have the same goals
              as we do: To serve great food made from fresh ingredients in a
              great atmosphere.
            </p>
            <p>
              Investing in La Pinoz franchise gives you the independence of
              being a business owner along with the support of our outstanding
              brand and experienced network. So be a part of the bigger network
              and a winning brand that keeps customers coming back for delicious
              Pizzas just the way they want!
            </p>
            <h6>For Franchise Query:</h6>
            <h6>8238235444</h6>
            <p>
              Joining our pizza franchise family lets you benefit from the
              amazing brand we have created and gives you the opportunity to
              gain the independence of being your own boss
            </p>
          </div>

          <div className="col-12 col-lg-6">
            <form className="row site-forms mt-5 mb-0" id="contact_form">
              <h4 className="rocknroll-one-regular red mb-4">
                Share Your Details
              </h4>

              <div className="col-xl-6 col-12">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Name"
                    id="first_name"
                    className="form-control mb-4"
                    required
                  />
                </div>
              </div>
              <div className="col-xl-6 col-12">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Last Name"
                    id="last_name"
                    className="form-control mb-4"
                    required
                  />
                </div>
              </div>
              <div className="col-xl-6 col-12">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="City"
                    id="contact_no"
                    className="form-control mb-4"
                    pattern="/^[0-9]{10}$/g"
                    required
                  />
                </div>
              </div>
              <div className="col-xl-6 col-12">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Contact Number"
                    id="email_id"
                    className="form-control mb-4"
                    required
                  />
                </div>
              </div>
              <div className="col-xl-6 col-12">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Email id"
                    id="email_id"
                    className="form-control mb-4"
                    required
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group mb-0">
                  <textarea
                    className="form-control mb-4"
                    id="message"
                    placeholder="Write your messages.."
                    required
                    rows={5}
                  ></textarea>
                </div>
              </div>
              <div className="col-12 mb-3">
                <div className="form-group text-center">
                  <button
                    name="submit"
                    className="btnAction btn btn-danger rounded-pill"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Franchise;
