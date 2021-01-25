import 'bootstrap/dist/css/bootstrap.css';
import Timer from './Components/Timer/';
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
                <Timer
                  break={this.state.break}
                  sprint={this.state.sprint}
                ></Timer>
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

export default App;
