import React, { Component } from 'react';
import { Button, Col, Icon, Row } from 'react-materialize';

export default class Timer extends Component {
  addWorkTime = (e) => {
    e.preventDefault();
    let time = this.props.workTime;
    this.props.addWorkTime(time);
  }

  subtractWorkTime = (e) => {
    e.preventDefault();
    let time = this.props.workTime;
    this.props.subtractWorkTime(time);
  }

  render() {
    return (
      <div>
        <h2 className="sub-heading">{this.props.title}</h2>
        <span className="time">{this.props.convert(this.props.workTime)}</span>
          {!this.props.isPaused ?
            <Row>
              <Col s={12} m={4} offset="m4" className="button-group">
                <Button
                  floating
                  large
                  className="blue darken-4"
                  waves="light"
                  onClick={this.addWorkTime}
                >
                  <Icon medium>add</Icon>
                </Button>
                <Button
                  floating
                  large
                  className="blue darken-4"
                  waves="light"
                  onClick={this.subtractWorkTime}
                >
                  <Icon medium>remove</Icon>
                </Button>
              </Col>
            </Row>
          :
            <Row>
              <Col s={12} m={4} offset="m4" className="button-group">
                <Button
                  floating
                  large
                  className="blue darken-4"
                  waves="light"
                  onClick={this.addWorkTime}
                  disabled
                >
                  <Icon medium>add</Icon>
                </Button>
                <Button
                  floating
                  large
                  className="blue darken-4"
                  waves="light"
                  onClick={this.subtractWorkTime}
                  disabled
                >
                  <Icon medium>remove</Icon>
                </Button>
              </Col>
            </Row>
          }
      </div>
    );
  }
}
