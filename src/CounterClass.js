// import React, { useState } from "react";

// const CounterFunc = (props) => {
//   const [count, setCount] = useState(0);
//   const add = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <h1>{props.header}</h1>
//       <p>count: {count}</p>
//       <button onClick={add}>add</button>
//       {/* <button onClick={() => setCount(count + 1)}>add</button> */}
//     </div>
//   );
// };

// export default CounterFunc;

import React from "react";

class CounterClass extends React.Component {
  // one way a little more code
  // constructor is like the intialize method in ruby
  // it gets when the Component is created(not mounted)
  constructor(props) {
    // this will call contructor in React.Component class
    super(props);
    console.log("constructor called");
    // setup initial state
    this.state = { count: 0 };
  }
  add = () => {
    console.log("add called");
    // when you call this method it changes
    // and re calls the render function
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    console.log("render called");
    return (
      <div>
        <h1>{this.props.header}</h1>
        <p>count: {this.state.count}</p>
        <button onClick={this.add}>add</button>
      </div>
    );
  }
}

export default CounterClass;

// Before hooks On February 16, 2019, React 16.8 was released to the public.
// if you wanted state, or lifecycle methods
// componentDidMOunt, UPdate etc
// you had to us a class component

// hooks can only be used in functional components
