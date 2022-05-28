import React from "react";
import ChildComponent from "./childComponent";
import AddComponent from "./addComponent";

class MyComponent extends React.Component {
  state = {
    arrJobs: [
      { id: "J1", title: "Developer", salary: "1000" },
      { id: "J2", title: "Tester", salary: "400" },
      { id: "J3", title: "Staff Manager", salary: "5000" },
    ],
  };
  addNewJobs = (job) => {
    console.log("check job from parent", job);
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };
  deleteJobs = (job) => {
    let currentJobs = this.state.arrJobs;
    currentJobs = currentJobs.filter((item) => item.id !== job.id);
    this.setState = {
      arrJobs: currentJobs,
    };
  };
  render() {
    console.log("rendering: ", this.state);
    return (
      <>
        <AddComponent addNewJobs={this.addNewJobs} />

        <ChildComponent
          arrJobs={this.state.arrJobs}
          deleteJobs={this.deleteJobs}
        />
      </>
    );
  }
}

export default MyComponent;
