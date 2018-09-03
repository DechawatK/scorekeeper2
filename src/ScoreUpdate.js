import React, { Component } from 'react'

export default class ScoreUpdate extends Component {
  render() {
    const { onClick } = this.props
    return (
      <div className="score-update">
        <div onClick={() => onClick(-10)} className="btn1">
          -10
        </div>
        <div onClick={() => onClick(-5)} className="btn2">
          -5
        </div>
        <div onClick={() => onClick(-1)} className="btn3">
          -1
        </div>
        <div onClick={() => onClick(1)} className="btn4">
          +1
        </div>
        <div onClick={() => onClick(5)} className="btn5">
          +5
        </div>
        <div onClick={() => onClick(10)} className="btn6">
          +10
        </div>
      </div>
    )
  }
}
