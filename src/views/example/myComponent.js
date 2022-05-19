import React from "react";

class MyComponent extends React.Component{
    state = {
        name : 'Tuấn Anh'
    }
    handleOnChangeName = (event) => {
        this.setState({
            name : event.target.value
        })
    }
    render(){
        
        return(
            <>
            <input value={this.state.name} type="text"
            onChange={(event) => this.handleOnChangeName(event)}/>
            <div>hello component của {this.state.name} </div>
            </>
        )
    }
}

export default MyComponent;