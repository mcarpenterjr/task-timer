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
        sec: 59
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
                <Time></Time>
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
                          <Input value={this.state.sprints} placeholder="Sprint" />
                        </InputGroup>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col xs="6">
                        <InputGroup size="sm">
                          <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                          <Input value={this.state.time.min} placeholder="Minutes" />
                        </InputGroup>
                      </Col>
                      <Col xs="6">
                        <InputGroup size="sm">
                          <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                          <Input value={this.state.time.sec} placeholder="Seconds" />
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
        min: 25,
        sec: 59
      }
    }
  }

  componentDidMount() {
    this.countDown = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillMount() {
    clearInterval(this.countDown);
  }

  tick() {
    let sec = this.state.time.sec,
      min = this.state.time.min;
    if (!min) {
      min = this.props.sprint - 1;
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
      
    this.setState({
      time: {
        min: min,
        sec: sec
      },
    });
  }

  render() {
    return (
      <p>{this.state.time.min}:{this.state.time.sec}</p>
    );
  }
}

export default App;
