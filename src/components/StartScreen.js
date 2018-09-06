import React, { Component } from 'react'
import PlayerInput from './PlayerInput'
import Button from './Button'

export default class StartScreen extends Component {
  render() {
    return this.renderStartScreen()
  }

  renderUsers = () => {
    return this.props.PlayersList.map((player, i) => (
      <div key={i}>
        {player.name}
        <button onClick={() => this.props.deletePlayer(i)}> X </button>
      </div>
    ))
  }

  renderWarningOrPlayButton() {
    return (
      <React.Fragment>
        <Button onClick={this.props.startGame}> Play! </Button>
        <Button onClick={this.props.deleteAllPlayers}>Delete all player</Button>
        <p> Please add player </p>
      </React.Fragment>
    )
  }

  renderStartScreen() {
    return (
      <div>
        <h1> StartScreen </h1> {this.renderUsers()}
        <PlayerInput onSubmit={this.props.addPlayer} />
        {this.renderWarningOrPlayButton()}
      </div>
    )
  }
}
