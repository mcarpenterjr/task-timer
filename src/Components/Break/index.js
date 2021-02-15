import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Col,
  Row,
  Input,
  InputGroup,
  InputGroupAddon
} from 'reactstrap';

class Break extends React.Component {
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
    );
  }
}

export default Break;
