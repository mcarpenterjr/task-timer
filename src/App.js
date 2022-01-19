import 'bootstrap/dist/css/bootstrap.css';
import Timer from './Components/Timer/';
import Sprint from './Components/Sprint/';
import ShortBreak from './Components/ShortBreak/';
import LongBreak from './Components/LongBreak/';
import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Col,
  Row,
  Container
} from 'reactstrap';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sprint: {
        total: 4,
        isActive: false,
        duration: {
          min: 25,
          sec: 0
        }
      },
      short_break: {
        isActive: false,
        duration: {
          min: 5,
          sec: 0
        }
      },
      long_break: {
        isActive: false,
        duration: {
          min: 15,
          sec: 0
        }
      }
    }
  }

  render() {
    const sb = this.state.short_break,
      lb = this.state.long_break,
      s = this.state.sprint;
    return (
      <Container fluid>
        <Row>
          <Col 
            xs="12"
            sm={{ size: 10, offset: 1 }}
            md={{ size: 8, offset: 2 }}
          >
            <Card className="mt-3">
              <CardHeader>
                <CardTitle>
                  Pomodoro Timer
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Timer
                  short_break={sb}
                  long_break={lb}
                  sprint={s}
                ></Timer>
                <ShortBreak
                  short_break={sb}
                ></ShortBreak>
                <LongBreak
                  long_break={lb}
                ></LongBreak>
                <Sprint
                  sprint={s}
                ></Sprint>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
