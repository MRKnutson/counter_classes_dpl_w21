import React from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import Contacts from "./Contacts";
import SemanticDemo from "./SemanticDemo";
// import CounterFunc from "./CounterFunc";
// import CounterClass from "./CounterClass";

class App extends React.Component {
  state = {
    contacts: [
      { id: 1, name: "Jerry", phone: "801-121-5656" },
      { id: 2, name: "George", phone: "626-567-1872" },
      { id: 3, name: "Cosmo", phone: "802-134-9876" },
    ],
  };

  // one way to create initial state
  // constructor(props){
  //   super(props)
  //   this.state = {conacts:[]}
  // }
  render() {
    return (
      <Container>
        {/* <SemanticDemo /> */}
        <Contacts contacts={this.state.contacts} />
      </Container>
    );
  }
}

export default App;
