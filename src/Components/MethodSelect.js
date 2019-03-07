import React from 'react'

const MethodSelect = (props) => {
    return (
      <div>
        <h1>BMI Converter</h1>
        <select id="method" value={props.method} onChange={(e) => {
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
          <label>{props.weightLabel}</label>
          <input name="weight" value={props.weight} onChange={(e) => { this.setState({ weight: e.target.value }) }} />
        </div>

        <div>
          <label>{props.heightLabel}</label>
          <input name="height" value={props.height} onChange={(e) => this.setState({ height: e.target.value })} />
        </div>

      </div>
    )
}

export default MethodSelect