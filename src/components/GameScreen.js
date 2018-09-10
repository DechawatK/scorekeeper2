import React, { Component } from 'react'
import EditCard from './EditCard'
import Button from './Button'
import { Link } from 'react-router-dom'

export default class GameScreen extends Component {
  render() {
    const { players, updateScore, backToStart, resetScore, onSave } = this.props
    return (
      <React.Fragment>
        {players.map((player, index) => (
          <EditCard
            title={player.name}
            score={player.roundScore}
            onUpdate={score => updateScore(index, score)}
          />
        ))}
        <Button onClick={onSave}>Save</Button>
        <Button onClick={resetScore}>reset</Button>
        <Button onClick={backToStart}>
          <Link to="/summary">Go Back </Link>
        </Button>
      </React.Fragment>
    )
  }
}
