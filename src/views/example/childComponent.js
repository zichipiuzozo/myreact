import React from "react";

class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };
  handleShowhide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };
  handleOnclickDelete = (job) => {
    console.log(">>>>job ", job);
    this.props.deleteJobs(job);
  };
  render() {
    console.log("rendering: ", this.state);
    let { arrJobs } = this.props;
    let { showJobs } = this.state;
    return (
      <>
        {showJobs === false && (
          <div>
            <button onClick={this.handleShowhide}>Show</button>
          </div>
        )}
        {showJobs === true && (
          <>
            <div className="job-lists">
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title}-{item.salary} <></>
                    <span onClick={() => this.handleOnclickDelete(item)}>
                      X
                    </span>
                  </div>
                );
              })}
            </div>

            <div>
              <button onClick={this.handleShowhide}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default ChildComponent;
