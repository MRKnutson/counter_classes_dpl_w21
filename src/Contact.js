import React from "react";
import { Button, Table, Card } from "semantic-ui-react";

class Contact extends React.Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.name}</Table.Cell>
        <Table.Cell>{this.props.phone}</Table.Cell>
        <Table.Cell>
          <Button color="red">delete</Button>
          <Button color="blue">edit</Button>
        </Table.Cell>
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
