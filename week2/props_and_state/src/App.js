import React, { Component } from 'react';
import Title from './components/Title';
import Greeting from './components/Greeting';
import Input from './components/Input';  
import './styles.css';

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
      // Initialize state property: displayName and name
      // State properties are immutable (only mutated by using setState)
      // Only edited directly when you are in contructor function
      this.state = {
        displayName: "",
      }
  }
   /*
     React has its own event system with special event handlers called SyntheticEvent.
     This is due to cross-browser compatibility.

     SyntheticEvent API contains the same native events and methods like:
       - preventDefault(), stopPropagation(), target, currentTarget, etc.
       - https://reactjs.org/docs/events.html

    Class components need to 'bind' their methods in the constructor:

         this.handleClick = this.handleClick.bind(this);

    Because JavaScript determines the value of 'this' at runtime, based on 
    the current context. Which means “this” holds the reference to the current 
    execution context in javascript. But depending how a function is called,
    it can refer to different objects.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
     
    When class components are rendered, the new instance of the component 
    has a new context (classes are just functions - aka syntactic sugar). 

    So the new instance of the component will not have a reference to 'this' anymore.

    So the bind method was created to a create a new function that is "bound" to the 
    original function (i.e. class).

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind

    With React the issue still exists, so for class components you either need to use the 
    bind method or use arrow functions when you define your class methods.

    handleClick = (name) => { 
      this.setState({
          displayName: name
      })
    };

    An arrow function maintains the context of 'this' inside the function it is used.

    Great explanation:
    https://medium.com/@rajwar67/a-guide-to-bind-this-keyword-in-react-js-256c7ee39970
     
   */
  
    handleClick = (name) => { 
      this.setState({
          displayName: name
      })
    };

  render() {
   // Props can hold be variables, state properties and even functions
    return (
      <>
        <Title title = "Welcome to the app" />
        <Greeting name = {this.state.displayName} />
        <p>Enter your name below so we can get better acquainted</p>
        <Input handleClick = {this.handleClick} />
      </>
    );
  }
}

export default App;