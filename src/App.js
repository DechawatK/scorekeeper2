import React, { Component } from 'react'
import './App.css'
import Score from './Score'
import ScoreUpdate from './ScoreUpdate'
import Button from './Button'

class App extends Component {
  state = {
    score: 0,
  }

  updateScore(value) {
    this.setState({
      score: this.state.score + value,
    })
  }

  resetScore() {
    this.setState({
      score: 0,
    })
  }

  render() {
    return (
      <div className="App">
        <h2>GAME OF NUMBER</h2>
        <Score value={this.state.score} />
        <ScoreUpdate onClick={this.updateScore.bind(this)} />
        <Button text="Reset" onClick={this.resetScore.bind(this)} />
      </div>
    )
  }
}

export default App
