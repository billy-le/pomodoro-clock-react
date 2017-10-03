import React, { Component } from 'react';
import { Button, Col, Icon, Row } from 'react-materialize';

export default class BreakTimer extends Component {
  addBreakTime = (e) => {
    e.preventDefault();
    let time = this.props.breakTime; 
    this.props.addBreakTime(time);
  }

  subtractBreakTime = (e) => {
    e.preventDefault();
    let time = this.props.breakTime;
    this.props.subtractBreakTime(time);
  }

  render() {
    return(
      <div>
        <h2 className="sub-heading">{this.props.title}</h2>
        <span className="time">{this.props.convert(this.props.breakTime)}</span>
        {!this.props.isPaused ?
          <Row>
            <Col s={12} m={4} offset="m4" className="button-group">
              <Button
                floating
                large
                className="blue darken-4"
                waves="light"
                onClick={this.addBreakTime}
              >
                <Icon medium>add</Icon>
              </Button>
              <Button
                floating
                large
                className="blue darken-4"
                waves="light"
                onClick={this.subtractBreakTime}
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
              onClick={this.addBreakTime}
              disabled
            >
              <Icon medium>add</Icon>
            </Button>
            <Button
              floating
              large
              className="blue darken-4"
              waves="light"
              onClick={this.subtractBreakTime}
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
