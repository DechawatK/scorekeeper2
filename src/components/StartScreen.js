import React, { Component } from 'react'

import Button from './Button'
import PlayerInput from './PlayerInput'
import { Link } from 'react-router-dom'

export default class StartScreen extends Component {
  render() {
    const { onAddPlayer } = this.props

    return (
      <div>
        <h1>StartScreen</h1>
        {this.renderPlayers()}
        <PlayerInput onSubmit={onAddPlayer} />
        {this.renderWarningOrPlayButton()}
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
