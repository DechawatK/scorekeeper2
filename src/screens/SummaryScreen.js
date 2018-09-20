import React, { Component } from 'react'
import SummaryCard from '../components/SummaryCard'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default class SummaryScreen extends Component {
  static propTypes = {
    players: PropTypes.arrayOf(PropTypes.object).isRequired,
    onResetScores: PropTypes.func.isRequired,
    onEndGame: PropTypes.func.isRequired,
    gameTitle: PropTypes.string,
  }

  render() {
    const { players, onResetScores, onEndGame, gameTitle } = this.props
    return (
      <div>
        <h1> {gameTitle || 'Summary Screen'} </h1>
        {players.map((player, i) => (
          <SummaryCard
            key={i}
            title={player.name}
            scores={player.scores || []}
          />
        ))}
        <Button>
          <Link to="/setup"> Back </Link>
        </Button>
        {players.length ? (
          <React.Fragment>
            <Button>
              <Link to="/game"> Add Round </Link>
            </Button>
            <Button onClick={onResetScores}>Clear scores</Button>
            <Link to="/">
              <Button onClick={onEndGame}>End game</Button>
            </Link>
          </React.Fragment>
        ) : (
          <div>
            <strong> Please add players </strong>
          </div>
        )}
      </div>
    )
  }
}
