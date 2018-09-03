import React, { Component } from 'react'
import './App.css'
import ScoreBoard from './ScoreBoard'
import Button from './Button'

class App extends Component {
  state = {
    users: [
      { name: 'Jan', score: 0 },
      { name: 'Sven', score: 0 },
      { name: 'Jojo', score: 0 },
      { name: 'Isabella', score: 0 },
    ],
  }

  updateScore(index, value) {
    const users = this.state.users
    const user = users[index]
    this.setState({
      users: [
        ...users.slice(0, index),
        { ...user, score: user.score + value },
        ...users.slice(index + 1),
      ],
    })
  }

  resetScore() {
    this.setState({
      users: this.state.users.map(user => ({ ...user, score: 0 })),
    })
  }

  render() {
    return (
      <div className="App">
        <h2>GAME OF NUMBER</h2>
        {this.state.users.map((user, index) => (
          <ScoreBoard
            title={user.name}
            score={user.score}
            onUpdate={score => this.updateScore(index, score)}
          />
        ))}
        <Button onClick={this.resetScore.bind(this)}>Reset</Button>
      </div>
    )
  }
}

export default App
