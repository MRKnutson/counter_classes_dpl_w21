import React from "react";
import { Button, Table, Card } from "semantic-ui-react";
import ContactForm from "./ContactForm";

class Contact extends React.Component {
  render() {
    const { name, phone, deleteContact, id } = this.props;
    return (
      <Table.Row>
        <Table.Cell>{name}</Table.Cell>
        <Table.Cell>{phone}</Table.Cell>
        <Table.Cell>
          <Button color="red" onClick={() => deleteContact(id)}>
            delete
          </Button>
          <Button color="blue">edit</Button>
        </Table.Cell>
        <ContactForm name={name} id={id} phone={phone} />
      </Table.Row>
      // <Card>
      //   <Card.Content>
      //     <Card.Header>{this.props.name}</Card.Header>
      //     <Card.Meta>
      //       <span className="date">{this.props.phone}</span>
      //     </Card.Meta>
      //   </Card.Content>
      // </Card>
    );
  }
}

export default Contact;
