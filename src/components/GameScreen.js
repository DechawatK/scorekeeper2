import React, { Component } from 'react'
import EditCard from './EditCard'
import Button from './Button'

export default class GameScreen extends Component {
  render() {
    const { players, updateScore, backToStart, resetScore } = this.props
    return (
      <React.Fragment>
        {players.map((player, index) => (
          <EditCard
            title={player.name}
            score={player.score}
            onUpdate={score => updateScore(index, score)}
          />
        ))}
        <Button onClick={resetScore.bind(this)}> Reset </Button>
        <Button onClick={backToStart}> First page </Button>
      </React.Fragment>
    )
  }
}
