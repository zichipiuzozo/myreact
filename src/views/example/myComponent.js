import React from "react";
import ChildComponent from "./childComponent";

class MyComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    arrJobs: [
      { id: "J1", title: "Developer", salary: "1000$" },
      { id: "J2", title: "Tester", salary: "400$" },
      { id: "J3", title: "Staff Manager", salary: "5000$" },
    ],
  };
  handleChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  handleChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  handleOnclick = (event) => {
    event.preventDefault();
    console.log(">>>> check data render:", this.state);
  };

  render() {
    console.log("rendering: ", this.state);
    return (
      <>
        <div>
          <form>
            <label htmlFor="fname">First name:</label>
            <br />
            <input
              type="text"
              value={this.state.firstName}
              onChange={(event) => this.handleChangeFirstName(event)}
            />
            <br />
            <label htmlFor="lname">Last name:</label>
            <br />
            <input
              type="text"
              value={this.state.lastName}
              onChange={(event) => this.handleChangeLastName(event)}
            />
            <br />
            <br />
            <input
              type="submit"
              value="submit"
              onClick={(event) => this.handleOnclick(event)}
            />
          </form>
        </div>
        <ChildComponent
          name={this.state.firstName}
          age={25}
          arrJobs={this.state.arrJobs}
        />
      </>
    );
  }
}

export default MyComponent;
