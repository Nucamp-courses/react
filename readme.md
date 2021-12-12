### React

#### Week 1

  * Template Literals
  * Objects
  * Classes
  * Inheritance
  * Callbacks and Higher Order Functions
  * Array HOF methods: forEach, map, filter, reduce

#### Week 2

  * What is React?
  * JSX: 
    * Syntax extension to JavaScript (describes what the UI should look like)
    * Gets transpiled to React.createElement methods (syntactic sugar)
    * React.createElement => returns a React element
    * React element(s) gets rendered to root DOM nodes via ReactDOM.render()
    * React elements are immutable; changes made during reconciliation (i.e. Diffing)

  * Components:
    * UI building blocks (reusable UI elements for your app)
    * Combining HTML, CSS and JavaScript <ComponentName />
    * Can be nested just like regular HTML
    * If needed, multiple components can be defined in one file (tightly coupled)
    * React uses a declarative way to manipulate the UI

  * State:
    * State behaves like a snapshot
    * Changing state triggers a re-render
    * During "re-render" a new "snapshot" is created (JSX)
    * This new snapshot is what gets updated to the screen (Virtual DOM => Browser DOM)
    * Class components store state in an object, function components use hooks
    * React batches state updates (waits until all code in event handlers has run)
    * State can hold any data (primitive or non-primitive)
    * React recommends treating all state as non-primitive data (state == read only)
    * Treating all state as read-only (non-mutable) guarantees a re-render
    * A common pattern is to use the spread operator (...) to copy arrays or objects

#### Week 3



  