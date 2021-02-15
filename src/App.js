import 'bootstrap/dist/css/bootstrap.css';
import Timer from './Components/Timer/';
import Sprint from './Components/Sprint/';
import Break from './Components/Break/';
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
    const b = this.state.break,
      s = this.state.sprint;
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
                  break={b}
                  sprint={s}
                ></Timer>
                <Break></Break>
                <Sprint></Sprint>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
