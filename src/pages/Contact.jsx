import React from "react";

function Contact() {
  return (
    <div className="mt-5 text-center container mb-5">
      <h4 className="rocknroll-one-regular red">Contact Us</h4>
      {/* <div id="form-status" className="form-submit-success mt-2"></div> */}
      <form className="row site-forms mt-5 mb-0" id="contact_form">
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
              placeholder="Contact Number"
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
              placeholder="Email id"
              id="email_id"
              className="form-control mb-4"
              required
            />
            <span id="email_id-info" className="info"></span>
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
        <div className="col-12">
          <div className="form-group text-center">
            <button name="submit" className="btnAction btn btn-danger">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
