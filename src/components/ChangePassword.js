import React, { Component } from "react";

import axios from "axios";
class ChangePassword extends Component {
  constructor() {
    super();
    this.state = {
        currentPassword: "",
        newPassword: "",
        emailId: "saikumar@digital-lync.com"
    };
  }
  handleOnChange = (event) => {
    var name = event.target.name;
    var value = event.target.value;
    this.setState({
      [name]: value,
    });
  };
  changePassword = (event) => {
    event.preventDefault();
    console.log(this.state);
    axios.post("http://localhost:9014/changePassword",this.state,{ headers: {"authorization" : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoiNjI0YmMzNjZjN2Y5NmQyMTNiNGIyYzMwIiwiaWF0IjoxNjQ5NjUxMDYyfQ.D-uVywwZU4vfDOFkfNW0_ujY0cFMiGmwaLfYKSxoWRA`} } ).then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  };
  render() {
    return (
      <div>
        <div className="container">
          <form onSubmit={this.changePassword}>
            <div className="form-group">
              <label className="text-left" for="pwd">
                Current Password:
              </label>
              <input
                type="password"
                name="currentPassword"className="form-control"
                placeholder="Enter password"
                onChange={this.handleOnChange}
                id="currentPassword"
              />
            </div>
            <div className="form-group">
              <label className="text-left" for="pwd">
                New Password:
              </label>
              <input
                type="password"
                name="newPassword"
                className="form-control"
                placeholder="Enter password"
                onChange={this.handleOnChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default ChangePassword;