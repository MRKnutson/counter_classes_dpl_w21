import React from "react";
import { Button, Form, Header } from "semantic-ui-react";

class ContactForm extends React.Component {
  state = {
    name: this.props.name ? this.props.name : "",
    phone: this.props.phone ? this.props.phone : "",
    show: true,
  };
  handleChange = (e) => {
    console.log("e.target.value:", e.target.value);
    console.log("e.target.name:", e.target.name);
    // if (e.target.name === "phone") {
    //   this.setState({ phone: e.target.value });
    // }
    // if (e.target.name === "name") {
    //   this.setState({ name: e.target.value });
    // }
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = () => {
    // ADD VALUES FROM FORM TO UI (SKIPPING DB STEP)
    if (!this.props.id) {
      let id = Math.ceil(Math.random() * 10000000);
      this.props.addContact({
        id: id,
        name: this.state.name,
        phone: this.state.phone,
      });
      this.setState({ name: "", phone: "" });
    } else {
      // update
      // this.props.updateContact({
      //   id: this.props.id,
      //   name: this.state.name,
      //   phone: this.state.phone,
      // });
    }
  };
  toggleForm = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div>
        <Header>Contact Form</Header>
        <Button onClick={this.toggleForm}>
          {this.state.show ? "Hide" : "Show"}
        </Button>
        {this.state.show && (
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <Form.Input
                name="name"
                label="Name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                name="phone"
                label="Phone"
                value={this.state.phone}
                onChange={this.handleChange}
              />
            </Form.Field>

            <Button type="submit">Submit</Button>
          </Form>
        )}
      </div>
    );
  }
}

export default ContactForm;
