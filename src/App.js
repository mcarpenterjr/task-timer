import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import {
  Button,
  ButtonGroup,
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

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sprint: 25,
      sprints: 4,
      break: 15,
      rest: 5,
      time: {
        min: 24,
        sec: 59
     },
      paused: true,
    }
  }

  thisOnClick(i) {
    console.log(i);
  }

  componentDidMount() {
    this.countDown = setInterval(() => {
      this.tick();
    }, 1000);
  }

  UNSAFE_componentWillMount() {
    clearInterval(this.countDown);
  }

  tick() {
    
    let sec = this.state.time.sec,
      min = this.state.time.min,
      running = !this.state.paused;
    // Are we running?
    if (running) {
      if (!min) {
        min = this.state.sprint - 1;
      } else {
        sec = --sec;
        if (!sec) {
          sec = 59;
          min = --min;
          if (min < 0) {
            clearInterval(this.countDown);
          }
        }
  
      }
      // Update timer
      this.setState({
        time: {
          min: min,
          sec: sec
        },
      });
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
                <p>{this.state.time.min}:{this.state.time.sec}</p>
                <Card>
                  <CardHeader>
                    <Row>
                      <Col xs="12">
                        <CardTitle>
                          Pomodoro Setup
                        </CardTitle>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col xs="3">
                        <InputGroup size="sm">
                          <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                          <Input value={this.state.sprint} placeholder="Minutes" />
                        </InputGroup>
                      </Col>
                      <Col xs="3">
                        <InputGroup size="sm">
                          <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                          <Input value={this.state.break} placeholder="Break" />
                        </InputGroup>
                      </Col>
                      <Col xs="3">
                        <InputGroup size="sm">
                          <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                          <Input value={this.state.break} placeholder="Break" />
                        </InputGroup>
                      </Col>
                      <Col xs="3">
                        <InputGroup size="sm">
                          <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                          <Input value={this.state.rest} placeholder="Rest" />
                        </InputGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="6">
                        <ButtonGroup>
                          <Button outline color="success" onClick={
                            () => { this.setState({paused: false}) }
                          }>Start</Button>
                          <Button outline color="warning" onClick={
                            () => { this.setState({paused: true}) }
                          }>Pause</Button>
                          <Button outline color="danger" onClick={
                            () => {
                              console.warn('Reseting to original state.')
                            }
                          }>Stop</Button>
                        </ButtonGroup>
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

export default Timer;
