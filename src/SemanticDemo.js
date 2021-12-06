import React from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";

const SemanticDemo = () => {
  return (
    <div>
      <h1>Semantic Demo</h1>
      <Button onClick={() => alert("clicked")} content="Click Here" />
      <Button icon labelPosition="right">
        Next
        <Icon name="right arrow" />
      </Button>
      <Card>
        <Image
          src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>Matthew</Card.Header>
          <Card.Meta>
            <span className="date">Joined in 2015</span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            22 Friends
          </a>
        </Card.Content>
      </Card>
    </div>
  );
};

export default SemanticDemo;
