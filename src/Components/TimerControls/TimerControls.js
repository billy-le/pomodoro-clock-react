import React, { Component } from "react";
import { Button, Col } from "react-materialize";

export default class TimerControls extends Component {
  resetTimer = e => {
    e.preventDefault();
    this.props.resetTimer();
  };

  render() {
    return (
      <Col s={12} m={4} offset="m4" className="button-group">
        {this.props.isPaused ? (
          <Button
            large
            className="blue darken-4"
            waves="light"
            onClick={this.props.stopTimer}
          >
            Stop
          </Button>
        ) : (
          <Button
            large
            className="blue darken-4"
            waves="light"
            onClick={this.props.startTimer}
          >
            Start
          </Button>
        )}
        <Button
          large
          className="blue darken-4"
          waves="light"
          onClick={this.resetTimer}
        >
          Reset
        </Button>
      </Col>
    );
  }
}
