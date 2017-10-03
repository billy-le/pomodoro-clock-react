import React, { Component } from "react";
import { Row, Col } from "react-materialize";
import Timer from "./Components/Timer/Timer";
import BreakTimer from "./Components/BreakTimer/BreakTimer";
import TimerControls from "./Components/TimerControls/TimerControls";
import MainFooter from "./Components/MainFooter/MainFooter";
import ProgressBar from "react-progressbar.js";

import "./App.css";

class App extends Component {
  state = {
    workTime: 25 * 60 * 1000,
    breakTime: 5 * 60 * 1000,
    isPaused: false,
    isSameSession: false,
    progressTotal: 0,
    progress: 0
  };

  startTimer = () => {
    this.runTimer();
    this.setState({
      isPaused: true
    });
  };

  stopTimer = () => {
    this.stopTime();
    this.setState({
      isPaused: false
    });
  };

  startBreakTimer = () => {
    this.runBreakTimer();
    this.setState({
      isPaused: true
    });
  };

  runTimer = () => {
    let time = this.state.workTime;
    this.startProgressbar();
    window.timer = setInterval(() => {
      if (time > 0) {
        time -= 1000;
        this.setState({
          workTime: time,
          progress: (this.state.progressTotal - time) / this.state.progressTotal
        });
      } else {
        clearInterval(window.timer);
        this.startBreakTimer();
      }
    }, 1000);
  };

  runBreakTimer = () => {
    let time = this.state.breakTime;
    window.timer = setInterval(() => {
      if (time > 0) {
        time -= 1000;
        this.setState({
          breakTime: time
        });
      } else {
        clearInterval(window.timer);
      }
    }, 1000);
  };

  stopTime = () => {
    let time = this.state.workTime;
    clearInterval(window.timer);
    this.setState({
      workTime: time
    });
  };

  resetTimer = () => {
    if (window.timer) {
      clearInterval(window.timer);
    }
    this.setState({
      workTime: 25 * 60 * 1000,
      breakTime: 5 * 60 * 1000,
      isPaused: false,
      isSameSession: false,
      progress: 0
    });
  };

  startProgressbar = () => {
    if (!this.state.isSameSession) {
      this.setState({
        isSameSession: true,
        progressTotal: this.state.workTime
      });
      return;
    }
    return;
  };

  convertTime = time => {
    let minutes = Math.floor(time / 1000 / 60);
    let seconds = Math.floor((time / 1000) % 60);
    let displayTime = "";
    if (seconds >= 10) {
      displayTime = minutes + ":" + seconds;
    } else if (seconds > 0) {
      displayTime = minutes + ":0" + seconds;
    } else {
      displayTime = minutes + ":" + seconds + "0";
    }
    return displayTime;
  };

  addWorkTime = value => {
    let convertToNum = parseInt(value, 10);
    this.setState({
      workTime: convertToNum + 60000
    });
  };

  subtractWorkTime = value => {
    let convertToNum = parseInt(value, 10);
    convertToNum > 60000
      ? this.setState({
          workTime: convertToNum - 60000
        })
      : this.setState({
          workTime: convertToNum
        });
  };

  addBreakTime = value => {
    let convertToNum = parseInt(value, 10);
    this.setState({
      breakTime: convertToNum + 60000
    });
  };

  subtractBreakTime = value => {
    let convertToNum = parseInt(value, 10);
    convertToNum > 60000
      ? this.setState({
          breakTime: convertToNum - 60000
        })
      : this.setState({
          breakTime: convertToNum
        });
  };

  render() {
    const Circle = ProgressBar.Circle;
    const options = {
      strokeWidth: 5,
      from: { color: "#FC466B" },
      to: { color: "#3F5EFB" },
      step: (state, bar) => {
        bar.path.setAttribute("stroke", state.color);
      }
    };

    const containerStyle = {
      width: "300px",
      height: "300px"
    };
    return (
      <div className="App">
        <Row className="title">
          <Col s={12}>
            <h1 className="heading">Pomodoro Clock</h1>
          </Col>
        </Row>
        {this.state.isPaused ? (
          <Row>
            <Col s={12}>
              <div className="center-content">
                {this.state.workTime > 0 ? (
                  <div>
                    <h3>Currently in Session</h3>
                    <Circle
                      progress={this.state.progress}
                      initialAnimate={true}
                      text={this.convertTime(this.state.workTime)}
                      options={options}
                      containerStyle={containerStyle}
                      containerClassName={"progressbar"}
                    />
                  </div>
                ) : (
                  <div>
                    <h3>Go on a Break!</h3>
                    <Circle
                      progress={this.state.progress}
                      initialAnimate={true}
                      text={this.convertTime(this.state.breakTime)}
                      options={options}
                      containerStyle={containerStyle}
                      containerClassName={"progressbar"}
                    />
                  </div>
                )}
              </div>
            </Col>
          </Row>
        ) : (
          <Row>
            <Col s={12}>
              <Timer
                title="Session Length"
                convert={this.convertTime}
                workTime={this.state.workTime}
                addWorkTime={this.addWorkTime}
                subtractWorkTime={this.subtractWorkTime}
                startState={this.state.workTime}
                isPaused={this.state.isPaused}
              />
            </Col>
            <Col s={12}>
              <BreakTimer
                title="Break Length"
                convert={this.convertTime}
                breakTime={this.state.breakTime}
                addBreakTime={this.addBreakTime}
                subtractBreakTime={this.subtractBreakTime}
                startBreak={this.state.breakTime}
                isPaused={this.state.isPaused}
              />
            </Col>
          </Row>
        )}
        <Row>
          <TimerControls
            startTimer={this.startTimer}
            stopTimer={this.stopTimer}
            isPaused={this.state.isPaused}
            resetTimer={this.resetTimer}
          />
        </Row>
        <MainFooter />
      </div>
    );
  }
}

export default App;
