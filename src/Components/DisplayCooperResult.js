import React, { Component } from 'react';
import CooperCalculator from '../Modules/CooperCalculator';
import { saveData } from '../Modules/PerformanceData';
import { Form, Container, Grid } from 'semantic-ui-react';

class DisplayCooperResult extends Component {

  calculate() {
    return CooperCalculator(this.props.distance, this.props.gender, this.props.age);
  }

  async saveCooperData() {
    const result = this.calculate();
    try {
      await saveData(result);
      this.props.entryHandler();
    } catch(error) {
      console.log(error);
    }
  }

  render() {
    let results;
    let saveButton;

    if (this.props.authenticated === true && this.props.entrySaved === false) {
      saveButton = (
        <>
          <button id="save-result" onClick={this.saveCooperData.bind(this)}>Save entry</button>
        </>
      )
    } else if (this.props.authenticated === true && this.props.entrySaved === true) {
      saveButton = (
        <>
          <p>Your entry was saved</p>
        </>
      )
    }

    if (this.props.age !== '' && this.props.distance !== '') {
      results = (
      <>
        <p>{this.props.age} y/o {this.props.gender} running {this.props.distance} meters.</p>
        <p>Result: {this.calculate()}</p>
        {saveButton}
      </>
      )
    }
    return (
      <>
        <Container>
          <Grid centered columns={5}>
            <Grid.Column>
              <Form>
                <Form.Field>
                {results}
                </Form.Field>
              </Form>
            </Grid.Column>
          </Grid>
        </Container>
      </>
    )
  }
}

export default DisplayCooperResult