import React, { Component } from 'react'
import Button from './Button'

export default class ScoreUpdate extends Component {
  render() {
    const { onClick } = this.props
    return (
      <div className="score-update">
        <button onClick={() => onClick(-10)} className="btn1">
          -10
        </button>
        <button onClick={() => onClick(-5)} className="btn2">
          -5
        </button>
        <button onClick={() => onClick(-1)} className="btn3">
          -1
        </button>
        <button onClick={() => onClick(1)} className="btn4">
          +1
        </button>
        <button onClick={() => onClick(5)} className="btn5">
          +5
        </button>
        <button onClick={() => onClick(10)} className="btn6">
          +10
        </button>
      </div>
    )
  }
}
