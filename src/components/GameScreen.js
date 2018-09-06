import React, { Component } from 'react'
import EditCard from './EditCard'
import Button from './Button'

export default class GameScreen extends Component {
  render() {
    const { players, updateScore, backToStart, onSave } = this.props
    return (
      <React.Fragment>
        {players.map((player, index) => (
          <EditCard
            title={player.name}
            score={player.score}
            onUpdate={score => updateScore(index, score)}
          />
        ))}
        <Button onClick={onSave.bind(this)}> SAVE </Button>
        <Button onClick={backToStart}> First page </Button>
      </React.Fragment>
    )
  }
}
