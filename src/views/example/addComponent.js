import React from "react";

class AddComponent extends React.Component {
  state = {
    title: "",
    salary: "",
  };
  handleChangeTitleJobs = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleChangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };
  handleOnclick = (event) => {
    event.preventDefault();
    console.log(">>>> check data render:", this.state);
    if (this.state.title == "" || this.state.salary == "") {
      alert("Chua nhap du lieu");
      return;
    }
    this.props.addNewJobs({
      id: Math.floor(Math.random() * 11),
      title: this.state.title,
      salary: this.state.salary,
    });
    this.setState({
      title: "",
      salary: "",
    });
  };
  render() {
    return (
      <div>
        <form>
          <label htmlFor="fname">Jobs:</label>
          <br />
          <input
            type="text"
            value={this.state.title}
            onChange={(event) => this.handleChangeTitleJobs(event)}
          />
          <br />
          <label htmlFor="lname">Salary:</label>
          <br />
          <input
            type="text"
            value={this.state.salary}
            onChange={(event) => this.handleChangeSalary(event)}
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
    );
  }
}

export default AddComponent;
