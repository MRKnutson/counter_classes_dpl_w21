import React from "react";
import { Button, Card, Header, Table } from "semantic-ui-react";
import Contact from "./Contact";

class Contacts extends React.Component {
  renderContacts = () => {
    return this.props.contacts.map((c) => (
      <Contact deleteContact={this.props.deleteContact} {...c} />
    ));
  };
  render() {
    return (
      <div>
        <Header>Contacts</Header>
        {/* <Card.Group>{this.renderContacts()}</Card.Group> */}
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Phone</Table.HeaderCell>
              <Table.HeaderCell>Options</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>{this.renderContacts()}</Table.Body>
        </Table>
      </div>
    );
  }
}
export default Contacts;
