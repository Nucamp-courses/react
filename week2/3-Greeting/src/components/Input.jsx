import React, {Component} from "react";

class Input extends Component {
   constructor(props) {
     super(props);
     this.state = {
         name: ''
     };
   };

   handleChange = (event) => {
    // setState is a method that updates any state object property
    this.setState({
      name: event.target.value
     })
   }; 

  render() {
  /*
     Setting the input value to a state variable makes it a "controlled" component.

     The displayed value will be always set to the value of the state variable.
     This is called "single source of truth" (value is driven by the React state).
     
     The onChange event handler will update the state variable.
  */
    return (
        <> 
           <input value={this.state.name} onChange={this.handleChange} />
           <button onClick={()=>this.props.handleClick(this.state.name)}>Update Name</button>
        </>         
    );
  };
};

export default Input;