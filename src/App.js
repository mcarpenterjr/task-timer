import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Col,
  Row,
  Container,
  Input,
  InputGroup,
  InputGroupAddon
} from 'reactstrap';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sprint: 25,
      sprints: 4,
      break: 15,
      rest: 5,
      time: {
        min: 25,
        sec: 0
      },
    }
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs="12" md={{ size: 6, offset: 3 }}>
            <Card className="mt-3">
              <CardHeader>
                <CardTitle>
                  Pomodoro Timer
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Time 
                  minutes={this.state.time.min}
                  seconds={this.state.time.sec}
                  sprints={this.state.sprints}
                ></Time>
                <Card>
                  <CardHeader>
                    <Row>
                      <Col xs="9">
                        <CardTitle>
                          Sprint
                        </CardTitle>
                      </Col>
                      <Col xs="3">
                        <InputGroup size="sm">
                          <InputGroupAddon addonType="prepend">Sprints</InputGroupAddon>
                          <Input defaultValue={this.state.sprints} placeholder="Sprint" />
                        </InputGroup>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col xs="6">
                        <InputGroup size="sm">
                          <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                          <Input defaultValue={this.state.time.min} placeholder="Minutes" />
                        </InputGroup>
                      </Col>
                      <Col xs="6">
                        <InputGroup size="sm">
                          <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                          <Input defaultValue={this.state.time.sec} placeholder="Seconds" />
                        </InputGroup>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

class Time extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: {
        min: props.minutes,
        sec: props.seconds,
        total: null
      },
      activateButton: {
        text: 'Start'
      },
      activeTimer: {
        active: false,
        min: props.minutes,
        sec: props.seconds,
        total: null
      }
    }
    this.toggleTimer = this.toggleTimer.bind(this);
  }

  componentDidMount() {
    
  }

  componentWillMount() {
    
  }

  tick() {
    let sec = this.state.activeTimer.sec,
      min = this.state.activeTimer.min;
    if (sec !== 0) {
      sec = --sec;
    }
    if (!sec) {
      sec = 59;
      min = --min;
      if (min <= 0) {
        clearInterval(this.countDown);
        this.countDown = false;
      }
    }
    this.setState({
      activeTimer: {
        min: min,
        sec: sec,
        total: `${min}:${sec}`
      },
    });
  }

  toggleTimer() {
    // console.log(this.state);
    if (this.countDown) {
      this.setState({
        activateButton: {
          text: 'Resume'
        }
      });
      clearInterval(this.countDown);
      this.countDown = false;
    } else {
      this.setState({
        activateButton: {
          text: 'Pause'
        }
      });
      this.countDown = setInterval(() => {
        this.tick();
      }, 1000);
    }
  }

  resetTimer() {
    console.log(this.state);
    if (this.state.timerActive) {
      this.setState({
        activateButton: {
          text: 'Start'
        },
        timerActive: false
      });
    } 
  }

  render() {
    return (
      <div>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <Button
              color="primary"
              onClick={this.toggleTimer}
            >{this.state.activateButton.text}</Button>
          </InputGroupAddon>
          <Input defaultValue={this.state.activeTimer.total} readOnly={true} />
          <InputGroupAddon addonType="append">
            <Button color="warning">Skip</Button>
            <Button color="danger">Reset</Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  }
}

export default App;
