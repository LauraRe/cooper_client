import React, { Component } from 'react';
import { getData } from '../Modules/PerformanceData';
import { Form, Container, Grid } from 'semantic-ui-react';


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
      dataIndex = (
        <div>
          {this.state.performanceData.map(item => {
            return <div key={item.id}>{item.data.message}</div>
          })}
        </div>
      )
    }

    return (
      <>
        <Container>
          <Grid>
            <Grid.Column>
              <Form>
                <Form.Field>
                  {dataIndex}
                </Form.Field>
              </Form>
            </Grid.Column>
          </Grid>
        </Container>
      </>
    )
  }
}

export default DisplayPerformanceData
