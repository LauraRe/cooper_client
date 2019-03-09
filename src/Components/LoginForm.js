import React from 'react';
import { Container, Form, Input, Header, Message, Button } from 'semantic-ui-react';

const LoginForm = (props) => {
  return (
    <Container>
      <Form>
        <Form.Field>
          <Input placeholder="Email" id="email" onChange={props.inputChangeHandler} />
        </Form.Field>
        <Form.Field>
          <Input placeholder="Password" id="password" onChange={props.inputChangeHandler} />
        </Form.Field>
        <Button primary onClick={(e) => props.loginHandler(e)} id="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default LoginForm;
