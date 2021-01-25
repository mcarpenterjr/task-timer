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

class Timer extends React.Component {
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
        type: false,
        min: null,
        sec: null,
        total: null
      }
    }
    this.toggleTimer = this.toggleTimer.bind(this);
  }

  tick() {
    let sec, min;
    if (!this.state.activeTimer.min
      && !this.state.activeTimer.sec
    ) {
      
    }
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

export default Timer;