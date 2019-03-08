import React from 'react';
import { Container, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';

const LoginForm = (props) => {
  return (
    <Container centered columns={5}>
      <Form>
        <Form.Field>
          <label >Email</label>
          <input id="email" onChange={props.inputChangeHandler}></input>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input id="password" onChange={props.inputChangeHandler}></input>
          </Form.Field>
          <button onClick={(e) => props.loginHandler(e)} id="submit">Submit</button>
      </Form>
    </Container>
  )
}

export default LoginForm;
