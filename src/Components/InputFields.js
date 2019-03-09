import React from 'react';
import { Container, Form, Grid, Header, Input, Dropdown } from 'semantic-ui-react';

const InputFields = (props) => {
  return (
    <>
      <Container>
        <Grid>
          <Grid.Column>
            <Header as="h1" textAlign="center">
              Cooper test
            </Header>

            <Dropdown
              defaultValue='female'
              id="gender"
              selection
              onChange={(e, { value }) => props.inputGenderChangeHandler(value)}
              options={[{ text: "Female", value: "female" }, { text: "Male", value: "male" }]}
            />

            <Form>
              <Form.Field>
                <Input placeholder="Distance" id="distance" onChange={props.inputChangeHandler} />
              </Form.Field>
              <Form.Field>
                <Input placeholder="Age" id="age" onChange={props.inputChangeHandler} />
              </Form.Field>
            </Form>
          </Grid.Column>
        </Grid>
      </Container>
    </>
  )
}

export default InputFields;