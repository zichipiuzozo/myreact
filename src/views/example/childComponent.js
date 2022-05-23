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
  render() {
    console.log("rendering: ", this.state);
    let { arrJobs } = this.props;
    let { showJobs } = this.state;
    return (
      <>
        {showJobs === false && (
          <div>
            <button>Show</button>
          </div>
        )}
        {showJobs && (
          <>
            <div className="job-lists">
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title}-{item.salary} $
                  </div>
                );
              })}
            </div>
            <div>
              <button>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default ChildComponent;
