import React from 'react';
import { Container, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';

const LoginForm = (props) => {
  return (
    <Container centered columns={5}>
        <form>
          <div>
            <label >Email</label>
            <input id="email" onChange={props.inputChangeHandler}></input>
          </div>

          <div>
            <label>Password</label>
            <input id="password" onChange={props.inputChangeHandler}></input>
          </div>
          <button onClick={(e) => props.loginHandler(e)} id="submit">Submit</button>
        </form>
    </Container>
  )
}

export default LoginForm;
