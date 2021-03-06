import React, { Component } from 'react';
import { getData } from '../Modules/PerformanceData';
import { Line } from 'react-chartjs-2';
import { Container, Grid } from 'semantic-ui-react';


class DisplayPerformanceData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      performanceData: null
    }
  }
  componentDidMount() {
    this.getPerformanceData()
  }

  async getPerformanceData() {
    let result = await getData();
    this.setState({ performanceData: result.data.entries }, () => {
      this.props.indexUpdated();
    })
  }

  render() {
    let dataIndex;

    if (this.props.updateIndex === true) {
      this.getPerformanceData();
    }
    if (this.state.performanceData != null) {
      const distances = []
      const labels = []
      this.state.performanceData.forEach(entry => {
        distances.push(entry.data.distance)
        labels.push(entry.data.message)
      })

      const data = {
        datasets: [{
          data: distances,
          label: "My progress"
        }],

        labels: labels
      };
      dataIndex = (
        <>
          <Line ref='chart' data={data} />
        </>
      )
    }

    return (
      <>
        <Container>
          <Grid>
            {dataIndex}
          </Grid>
        </Container>
      </>
    )
  }
}

export default DisplayPerformanceData
