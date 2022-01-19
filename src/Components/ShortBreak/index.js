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

class ShortBreak extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.short_break;
  }

  render() {
    return (
      <Card>
        <CardHeader className={this.state.isActive ? 'text-white bg-success' : ''}>
          <Row>
            <Col xs="6">
              <CardTitle>
                Short Breaks
              </CardTitle>
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          <Row>
            <Col xs="6">
              <InputGroup size="sm">
                <InputGroupAddon addonType="prepend">Minutes</InputGroupAddon>
                <Input
                  defaultValue={this.state.duration.min}
                  placeholder="Minutes"
                />
              </InputGroup>
            </Col>
            <Col xs="6">
              <InputGroup size="sm">
                <InputGroupAddon addonType="prepend">Seconds</InputGroupAddon>
                <Input
                  defaultValue={this.state.duration.sec}
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

export default ShortBreak;
