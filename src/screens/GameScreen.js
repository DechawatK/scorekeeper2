import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import EditCard from '../components/EditCard'
import Button from '../components/Button'
import PropTypes from 'prop-types'

export default class GameScreen extends Component {
  static propTypes = {
    players: PropTypes.array.isRequired,
    onUpdateScore: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    gameTitle: PropTypes.string,
  }

  render() {
    const { players, onUpdateScore, onSave, gameTitle } = this.props
    return (
      <div>
        <h1>{gameTitle || 'Game Screen'}</h1>
        {players.map((player, index) => (
          <EditCard
            key={index}
            title={player.name}
            score={player.roundScore}
            onUpdate={score => onUpdateScore(index, score)}
          />
        ))}
        <Link to="/summary">
          <Button onClick={onSave}>Save</Button>
        </Link>
      </div>
    )
  }
}
