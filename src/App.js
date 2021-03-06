import React, { Component } from 'react';
import DisplayCooperResult from './Components/DisplayCooperResult';
import InputFields from './Components/InputFields';
import LoginForm from './Components/LoginForm';
import { authenticate } from './Modules/Auth';
import DisplayPerformanceData from './Components/DisplayPerformanceData';
import DisplayBmi from './Components/DisplayBmi';
import { Container, Form, Grid, Header, Message, Segment, Button } from 'semantic-ui-react';

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

  onGenderChange(value) {
    this.setState({
      gender: value
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
            <Message positive size='large'>
              <p>Hi {user}</p>
            </Message>
        </Container>
      )
      if (this.state.renderIndex === true) {
        performanceDataIndex = (
          <>
            <Container>
              <Grid>
                <Grid.Column>
                  <DisplayPerformanceData
                    updateIndex={this.state.updateIndex}
                    indexUpdated={this.indexUpdated.bind(this)}
                  />
                  <Button primary style={{marginTop:'15px'}} onClick={() => this.setState({ renderIndex: false })}>Hide past entries</Button>
                </Grid.Column>
              </Grid>
            </Container>
          </>
        )
      } else {
        performanceDataIndex = (
          <Container>
            <Grid>
              <Grid.Column>
                <Button primary id="show-index" onClick={() => this.setState({ renderIndex: true })}>Show past entries</Button>
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
              <Grid>
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
              <Grid>
                <Grid.Column>
                  <Button 
                    primary
                    id="login" 
                    onClick={() => this.setState({ renderLoginForm: true })}>
                    Login
                  </Button>
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
              {renderLogin}
                <InputFields
                  inputChangeHandler={this.onChange.bind(this)}
                  inputGenderChangeHandler={this.onGenderChange.bind(this)}
                />

                <DisplayCooperResult
                  distance={this.state.distance}
                  gender={this.state.gender}
                  age={this.state.age}
                  authenticated={this.state.authenticated}
                  entrySaved={this.state.entrySaved}
                  entryHandler={this.entryHandler.bind(this)}
                />
               
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
