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
      sprint: {
        total: 4,
        duration: {
          min: 25,
          sec: 0
        }
      },
      break: {
        total: 4,
        duration: {
          min: 5,
          sec: 0
        }
      }
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
                  sprint={this.state.sprint}
                  break={this.state.break}
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
                          <InputGroupAddon
                            addonType="prepend"
                          >Sprints</InputGroupAddon>
                          <Input
                            defaultValue={this.state.sprint.total}
                            placeholder="Sprint"
                          />
                        </InputGroup>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col xs="6">
                        <InputGroup size="sm">
                          <InputGroupAddon addonType="prepend">Minutes</InputGroupAddon>
                          <Input
                            defaultValue={this.state.sprint.duration.min}
                            placeholder="Minutes"
                          />
                        </InputGroup>
                      </Col>
                      <Col xs="6">
                        <InputGroup size="sm">
                          <InputGroupAddon addonType="prepend">Seconds</InputGroupAddon>
                          <Input
                            defaultValue={this.state.sprint.duration.sec}
                            placeholder="Seconds"
                          />
                        </InputGroup>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                <Card>
                  <CardHeader>
                    <Row>
                      <Col xs="9">
                        <CardTitle>
                          Break
                        </CardTitle>
                      </Col>
                      <Col xs="3">
                        <InputGroup size="sm">
                          <InputGroupAddon
                            addonType="prepend"
                          >Breaks</InputGroupAddon>
                          <Input
                            defaultValue={this.state.break.total}
                            placeholder="Breaks"
                          />
                        </InputGroup>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col xs="6">
                        <InputGroup size="sm">
                          <InputGroupAddon addonType="prepend">Minutes</InputGroupAddon>
                          <Input
                            defaultValue={this.state.break.duration.min}
                            placeholder="Minutes"
                          />
                        </InputGroup>
                      </Col>
                      <Col xs="6">
                        <InputGroup size="sm">
                          <InputGroupAddon addonType="prepend">Seconds</InputGroupAddon>
                          <Input
                            defaultValue={this.state.break.duration.sec}
                            placeholder="Seconds"
                          />
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
      sprint: props.sprint,
      break: props.break,
      activateButton: {
        text: 'Start'
      },
      activeTimer: {
        active: false,
        min: null,
        sec: null,
        total: null
      }
    }
    this.toggleTimer = this.toggleTimer.bind(this);
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
      <Card>
        <CardBody>
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
        </CardBody>
      </Card>
    );
  }
}

export default App;
