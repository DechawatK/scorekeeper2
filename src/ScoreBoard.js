import React, { Component } from 'react'
import Score from './Score'
import ScoreUpdate from './ScoreUpdate'

export default class ScoreBoard extends Component {
  render() {
    const { title, score, onUpdate } = this.props
    return (
      <div className="score-board">
        <span> {title} </span>
        <Score value={score} />
        <ScoreUpdate onClick={onUpdate} />
      </div>
    )
  }
}
