import React from "react";
import { Container, Divider } from "semantic-ui-react";
import "./App.css";
import ContactForm from "./ContactForm";
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

  addContact = (contact) => {
    const newContants = [contact, ...this.state.contacts];
    this.setState({
      contacts: newContants,
    });
  };

  deleteContact = (id) => {
    const filteredContacts = this.state.contacts.filter((c) => c.id !== id);
    this.setState({
      contacts: filteredContacts,
    });
  };

  // one way to create initial state
  // constructor(props){
  //   super(props)
  //   this.state = {conacts:[]}
  // }
  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        {/* <SemanticDemo /> */}
        <ContactForm addContact={this.addContact} />
        <Divider />
        <Contacts
          contacts={this.state.contacts}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
