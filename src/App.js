import React, { Component } from 'react';
import DisplayCooperResult from './Components/DisplayCooperResult';
import InputFields from './Components/InputFields';
import LoginForm from './Components/LoginForm';
import { authenticate } from './Modules/Auth';
import DisplayPerformanceData from './Components/DisplayPerformanceData';
import DisplayBmi from './Components/DisplayBmi';
import { Container, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: '',
      gender: 'female',
      age: '',
      renderLoginForm: false,
      authenticated: false,
      email: '',
      password: '',
      message: '',
      entrySaved: false,
      renderIndex: false,
    }
  }

  async onLogin(e) {
    e.preventDefault();
    let resp = await authenticate(this.state.email, this.state.password)
    if (resp.authenticated === true) {
      this.setState({ authenticated: true });
    } else {
      this.setState({ message: resp.message, renderLoginForm: false })
    }
  }

  onChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
      entrySaved: false
    })
  }

  entryHandler() {
    this.setState({ entrySaved: true, updateIndex: true });
  }

  indexUpdated() {
    this.setState({ updateIndex: false });
  }

  render() {
    let renderLogin;
    let user;
    let performanceDataIndex;

    if (this.state.authenticated === true) {
      user = JSON.parse(sessionStorage.getItem('credentials')).uid;
      renderLogin = (
        <Container>
          <Grid centered columns={5}>
            <Grid.Column>
              <p>Hi {user}</p>
            </Grid.Column>
          </Grid>
        </Container>
      )
      if (this.state.renderIndex === true) {
        performanceDataIndex = (
          <>
            <Container>
              <Grid centered columns={5}>
                <Grid.Column>
                  <DisplayPerformanceData
                    updateIndex={this.state.updateIndex}
                    indexUpdated={this.indexUpdated.bind(this)}
                  />
                  <button onClick={() => this.setState({ renderIndex: false })}>Hide past entries</button>
                </Grid.Column>
              </Grid>
            </Container>
          </>
        )
      } else {
        performanceDataIndex = (
          <Container>
            <Grid centered columns={5}>
              <Grid.Column>
                <button id="show-index" onClick={() => this.setState({ renderIndex: true })}>Show past entries</button>
              </Grid.Column>
            </Grid>
          </Container>
        )
      }
    } else {

      if (this.state.renderLoginForm === true) {
        renderLogin = (
          <>
            <Container>
              <Grid centered columns={5}>
                <Grid.Column>
                  <LoginForm
                    loginHandler={this.onLogin.bind(this)}
                    inputChangeHandler={this.onChange.bind(this)}
                  />
                </Grid.Column>
              </Grid>
            </Container>
          </>
        )
      } else {
        renderLogin = (
          <>
            <Container>
              <Grid centered columns={5}>
                <Grid.Column>
                  <button id="login" onClick={() => this.setState({ renderLoginForm: true })}>Login</button>
                  <p>{this.state.message}</p>
                </Grid.Column>
              </Grid>
            </Container>
          </>
        )
      }
    }
    return (
      <>
        <Container>
          <Grid>
            <Grid.Column>
              <div>
                <InputFields
                  inputChangeHandler={this.onChange.bind(this)}
                />

                <DisplayCooperResult
                  distance={this.state.distance}
                  gender={this.state.gender}
                  age={this.state.age}
                  authenticated={this.state.authenticated}
                  entrySaved={this.state.entrySaved}
                  entryHandler={this.entryHandler.bind(this)}
                />

                {renderLogin}
                {performanceDataIndex}
              </div>
              <div>
                <DisplayBmi />
              </div>
            </Grid.Column>
          </Grid>
        </Container>
      </>
    );
  }
}

export default App;
