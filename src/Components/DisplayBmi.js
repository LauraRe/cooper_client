import React, { Component } from 'react';
import { bmiCalculation } from '../Modules/BMICalculator';

class DisplayBmi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight_one: '',
      height_one: '',
      method: 'metric',
      weightLabel: 'Weight(kg)',
      heightLabel: 'Height(cm)'
    }
    this.calculate = this.calculate.bind(this)
  }
  calculate() {
    let weight = this.props.weight;
    let height = this.props.height;
    let method = this.props.method;

    return bmiCalculation(weight, height, method);
  }

  render() {
    return (
      <>
        <div id='response'>
          {this.calculate}
        </div>
        <div>
          <h1>BMI Converter</h1>
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

          <div>
            <label>{this.state.weightLabel}</label>
            <input name="weight" value={this.state.weight} onChange={(e) => { this.setState({ weight: e.target.value }) }} />
          </div>

          <div>
            <label>{this.state.heightLabel}</label>
            <input name="height" value={this.state.height} onChange={(e) => this.setState({ height: e.target.value })} />
          </div>
        </div>

      </>
    )
  }
}

export default DisplayBmi