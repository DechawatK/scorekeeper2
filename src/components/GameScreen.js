import React, { Component } from 'react'
import EditCard from './EditCard'
import Button from './Button'
import { Link } from 'react-router-dom'

export default class GameScreen extends Component {
  render() {
    const {
      players,
      onUpdateScore,
      backToStart,
      resetScore,
      onSave,
    } = this.props
    return (
      <React.Fragment>
        {players.map((player, index) => (
          <EditCard
            key={index}
            title={player.name}
            score={player.roundScore}
            onUpdate={score => onUpdateScore(index, score)}
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
