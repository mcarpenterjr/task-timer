import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import {
  Button,
  Card,
  CardBody,
  Input,
  InputGroup,
  InputGroupAddon
} from 'reactstrap';

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: '00:00:00'
    };
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props.time, prevProps, prevState);
    if (this.props.time != prevProps.time) {
      this.setState({ time: this.props.time });
    }
  }

  render() {
    return (
      <Input
        value={this.state.time}
        readOnly={true} />
    );
  }
}

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sprint: props.sprint,
      short_break: props.short_break,
      long_break: props.long_break,
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
    };
    this.toggleTimer = this.toggleTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.tick = this.tick.bind(this);
  }

  tick() {
    // If there is no active timer and there are no minutes or seconds left
    // create a new timer
    if (this.state.timerON && !this.state.activeTimer.active) {
      let min = this.state.sprint.duration.min,
        sec = this.state.sprint.duration.sec === 0 ? 60 : this.state.sprint.duration.sec;
      this.setState({
        activeTimer: {
          active: true,
          min: --min,
          sec: --sec,
          total: `${min}:${sec}`
        }
      });
    } else if (this.state.timerON && this.state.activeTimer.active) {
      let min = this.state.activeTimer.min,
        sec = this.state.activeTimer.sec,
        total = this.state.activeTimer.total;
      if (min > 0 && sec > 0) {
        this.setState({
          activeTimer: {
            active: true,
            type: this.state.activeTimer.type,
            min: min,
            sec: --sec,
            total: `${min}:${sec}`
          }
        });
      } else if (min > 0 && sec === 0) {
        this.setState({
          activeTimer: {
            active: true,
            type: this.state.activeTimer.type,
            min: --min,
            sec: 59,
            total: `${min}:${sec}`
          }
        });
      } else if (min === 0 && sec === 0) {
        this.setState({
          activeTimer: {
            active: false,
            type: false,
            min: null,
            sec: null,
            total: null
          },
          timerON: false
        });
      }
    }
  }

  toggleTimer() {
    console.log(this.state);
    if (this.countDown) {
      this.setState({
        activateButton: {
          text: 'Resume'
        },
        timerON: false
      });
      clearInterval(this.countDown);
      this.countDown = false;
    } else {
      this.setState({
        activateButton: {
          text: 'Pause'
        },
        timerON: true
      });
      this.countDown = setInterval(() => {
        this.tick();
      }, 1000);
    }
  }

  resetTimer() {
    console.log(this.state);
    if (this.state.activeTimer) {
      this.setState({
        activateButton: {
          text: 'Start'
        },
        timerActive: false
      });
      clearInterval(this.countDown);
      this.countDown = false;
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
            <Clock time={this.state.activeTimer.total || false}></Clock>
            <InputGroupAddon addonType="append">
              <Button color="warning">Skip</Button>
              <Button
                onClick={this.resetTimer}
                color="danger">Reset</Button>
            </InputGroupAddon>
          </InputGroup>
        </CardBody>
      </Card>
    );
  }
}

export default Timer;