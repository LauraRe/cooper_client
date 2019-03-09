import React, { Component } from 'react';
import { bmiCalculation } from '../Modules/BMICalculator';
import { Container, Form, Grid, Header, Input, Dropdown } from 'semantic-ui-react';

class DisplayBmi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      height: '',
      method: 'metric',
      weightLabel: 'Weight(kg)',
      heightLabel: 'Height(cm)',
      bmiMessage: ''
    }
  }

  async runCalculator(event) {
    console.log(event)
    await this.setState({
      [event.target.id]: event.target.value,
    });
    this.setState({
      bmiMessage: bmiCalculation(this.state.weight, this.state.height, this.state.method)
    })
  }

  render() {
    return (
      <>
        <Container>
          <Grid>
            <Grid.Column>
              <Header as="h1" textAlign="center" style={{marginTop:'20px', fontSize: '31px'}}>
                BMI Converter
              </Header>
              <select id="method" value={this.state.method} onChange={(e) => {
                const method = e.target.value
                let heightLabel
                let weightLabel

                if (method === "metric") {
                  weightLabel = "Weight(kg)"
                  heightLabel = "Height(cm)"
                } else if (method === "imperial") {
                  weightLabel = "Weight(lbs)"
                  heightLabel = "Height(inches)"
                }

                this.setState({
                  method: e.target.value,
                  weightLabel: weightLabel,
                  heightLabel: heightLabel
                })
              }
              }>
                <option value="metric" > Metric </option>
                <option value="imperial" > Imperial </option>
              </select>

              <Form>
                <Form.Field>
                  <Input placeholder={this.state.weightLabel} id="weight" name="weight" value={this.state.weight} onChange={(e) => { this.runCalculator(e) }} />
                </Form.Field>
                <Form.Field>
                  <Input placeholder={this.state.heightLabel} id="height" name="height" value={this.state.height} onChange={(e) => { this.runCalculator(e) }} />
                </Form.Field>
              </Form>

              <div id='response' style={{ paddingTop: '20px' }}>
                {this.state.bmiMessage}
              </div>
            </Grid.Column>
          </Grid>
        </Container>
      </>
    )
  }
}

export default DisplayBmi