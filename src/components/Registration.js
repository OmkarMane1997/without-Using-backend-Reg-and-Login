import React, { useState } from "react";

function Registration() {
  const [regUser, setRegUser] = useState({
    name: "",
    email: "",
    phone: "",
    designation: "",
    password: "",
  });

  const [buttonStatus, setButtonStatus] = useState(false);

  const readValue = (e) => {
    const { name, value } = e.target;
    setRegUser({ ...regUser, [name]: value });
  };


  const submitHandler = async (e) => {
    e.preventDefault();

    console.log("Insert data:-", regUser);
    localStorage.setItem("Registration", JSON.stringify(regUser));
    setRegUser({
      name: "",
      email: "",
      phone: "",
      designation: "",
      password: "",
    });
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="offset-md-3 col-md-6 my-2">
          <div className="card">
            <div className="card-header text-center">
              <b>Registration</b>
            </div>
            <div className="card-body">
              <form autoComplete="off" onSubmit={submitHandler}>
                <div className="input-group my-3 ">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="User Name"
                    onChange={readValue}
                    value={regUser.name}
                    required
                  />
                </div>
                <div className="input-group my-3 ">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="User Email"
                    onChange={readValue}
                    value={regUser.email}
                    required
                  />
                </div>
                <div className="input-group my-3 ">
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    className="form-control"
                    placeholder="User phone"
                    onChange={readValue}
                    value={regUser.phone}
                    required
                  />
                </div>
                <div className="input-group my-3">
                  <select
                    className="form-select form-select- mby-3"
                    onChange={readValue}
                    value={regUser.designation}
                    id="designation"
                    name="designation"
                  >
                    <option value="">Select Profession</option>
                    <option value="ReactJs">ReactJs</option>
                    <option value="NodeJs">NodeJs</option>
                  </select>
                </div>
                <div className="input-group my-3 ">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="User Password"
                    onChange={readValue}
                    value={regUser.password}
                    required
                  />
                </div>

                <div className="input-group my-3 d-flex justify-content-center">
                  <button
                    disabled={buttonStatus}
                    type="submit"
                    className="btn btn-outline-success "
                  >
                    <i className="bi bi-door-open-fill mx-1"></i> Registration
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
