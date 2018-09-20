import React, { Component } from 'react'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import PlayerInputContainer from '../containers/PlayerInputContainer'
import PropTypes from 'prop-types'

export default class SetupScreen extends Component {
  static propTypes = {
    onDeletePlayer: PropTypes.func.isRequired,
    onDeleteAllPlayers: PropTypes.func.isRequired,
    players: PropTypes.arrayOf(PropTypes.object).isRequired,
    gameTitle: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div>
        <h1>{this.props.gameTitle}</h1>
        {this.renderPlayers()}
        <PlayerInputContainer />
        {this.renderWarningOrPlayButton()}
        <Link to="/">
          <Button>Home</Button>
        </Link>
      </div>
    )
  }

  renderPlayers() {
    const { onDeletePlayer } = this.props

    return this.props.players.map((player, i) => (
      <div data-test-id="StartScreen-player" key={i}>
        <span>{player.name}</span>
        <span onClick={() => onDeletePlayer(i)}>&times;</span>
      </div>
    ))
  }

  renderWarningOrPlayButton() {
    const { players, onDeleteAllPlayers } = this.props
    return players.length ? (
      <footer data-test-id="Startscreen-footer">
        <Link to="/summary">
          <Button>Play!</Button>
        </Link>
        <Button onClick={onDeleteAllPlayers}>or delete all players</Button>
      </footer>
    ) : (
      <div data-test-id="StartScreen-hint">Please add some players.</div>
    )
  }
}
