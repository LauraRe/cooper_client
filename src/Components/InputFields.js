import React from 'react';
import { Container, Form, Grid, Header } from 'semantic-ui-react';

const InputFields = (props) => {
  let gender_option = [{ text: "Female", value: "female"}, { text: "Male", value: "male"}]
  return (
    <>
      <Container>
        <Grid centered columns={5}>
          <Grid.Column>
            <Header as="h1" textAlign="center">
              Cooper test
            </Header>

            <select id="gender" onChange={props.inputChangeHandler}>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>

            <Form>
              <Form.Field>
                <label>Distance</label>
                <input id="distance" onChange={props.inputChangeHandler}></input>
              </Form.Field>
              <Form.Field>
                <label>Age</label>
                <input id="age" onChange={props.inputChangeHandler}></input>
              </Form.Field>
            </Form>
          </Grid.Column>
        </Grid>
      </Container>
    </>
  )
}

export default InputFields;