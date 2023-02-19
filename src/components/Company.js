import React from "react";

function Company() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="offset-md-3 col-md-6">
          <div className="card">
            <div className="card-header text-center">
              <b>Company Info</b>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <b>Company :-</b>
                <p>Sanjayanagar, Bengaluru-56</p>
              </div>
              <div className="d-flex justify-content-between">
                <b>Address :-</b>
                <p>Geeksynergy Technologies Pvt Ltd</p>
              </div>
              <div className="d-flex justify-content-between">
                <b>Phone :-</b>
                <p> XXXXXXXXX09</p>
              </div>
              <div className="d-flex justify-content-between">
                <b>Email :-</b>
                <p>XXXXXX@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
