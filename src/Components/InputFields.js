import React from 'react';
import { Container, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';

const InputFields = (props) => {
  return (
    <>
      <Container>
        <Grid centered columns={5}>
          <Grid.Column>
            <Header as="h1" textAlign="center">
              Cooper test
            </Header>
            <label>Distance</label>
            <input id="distance" onChange={props.inputChangeHandler}></input>

            <select id="gender" onChange={props.inputChangeHandler}>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>

            <label>Age</label>
            <input id="age" onChange={props.inputChangeHandler}></input>
          </Grid.Column>
        </Grid>
      </Container>
    </>
  )
}

export default InputFields;