import React, { Component } from 'react';

/* 
  Class components:
    - require inheritance from Component
    - needs: constructor(props) and super(props)
    - constructor(props) is initializing props object (available to all components)
    - super(props) is calling the Component class constructor 
  JSX can only return one top level element
    - Fragments are used to return multiple top level elements (<>...</>)
*/

class App extends Component {
  constructor(props) {
    super(props);
      // initialize state property: displayName and name
      // state properties are immutable (only mutated by using setState)
      // only edited directly when you are in contructor function
      this.state = {
        displayName: '',
        name: ''
      }
  }

  /*
     React has its own event system with special event handlers called SyntheticEvent.
     This is due to cross-browser compatibility.
     SyntheticEvent API contains the same native events and methods like:
       - preventDefault(), stopPropagation(), target, currentTarget, etc.
       - https://reactjs.org/docs/events.html
  */
  handleChange = (event) => {
    // setState is a method that updates any state object property
    this.setState({
      name: event.target.value
    }); 

  }
  render() {
    /*
        Setting the input value to a state variable makes it a controlled component.
        The displayed value will be always set to the value of the state variable.
        This is called "single source of truth" (value is driven by the React state).
        The onChange event handler will update the state variable.
    */
    return (
      <>
        <h1>Welcome to the app</h1>
        <p>Hi there, {this.state.displayName}</p>
        <input value={this.state.name} onChange={this.handleChange} />
      </>
    );
  }
}

export default App;