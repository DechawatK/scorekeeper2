import React, { Component } from 'react'
import '../App.css'
import GameScreen from './GameScreen'
import Button from './Button'
import { load, save } from '../services'
import StartScreen from './StartScreen'
import SummaryScreen from './SummaryScreen'

class App extends Component {
  state = {
    showStartScreen: true,
    players: load('players') || [],
  }

  updateScore(index, value) {
    const players = this.state.players
    const player = players[index]
    this.setState(
      {
        players: [
          ...players.slice(0, index),
          {
            ...player,
            score: player.score + value,
          },
          ...players.slice(index + 1),
        ],
      },
      this.savePlayer
    )
  }

  savePlayer() {
    save('players', this.state.players)
  }

  resetScore() {
    this.setState(
      {
        players: this.state.players.map(player => ({
          ...player,
          score: 0,
        })),
      },
      this.savePlayer
    )
  }

  startGame = () => {
    if (this.state.players.length) {
      //or != ''
      this.setState({
        showStartScreen: false,
      })
    }
  }

  addPlayer = value => {
    this.setState(
      {
        players: [
          ...this.state.players,
          {
            name: value,
            score: 0,
          },
        ],
      },
      this.savePlayer
    )
  }

  deletePlayer = index => {
    this.setState(
      {
        players: [
          ...this.state.players.slice(0, index),
          ...this.state.players.slice(index + 1),
        ],
      },
      this.savePlayer
    )
  }

  deleteAllPlayers = () => {
    this.setState(
      {
        players: [],
      },
      this.savePlayer
    )
  }

  backToStart = () => {
    this.setState({
      showStartScreen: true,
    })
  }

  renderActiveGame() {
    return (
      <GameScreen
        players={this.state.players}
        backToStart={this.backToStart}
        resetScore={this.resetScore}
        updateScore={this.updateScore}
      />
    )
  }

  render() {
    const { showStartScreen } = this.state
    return (
      <div className="App">
        <h2> GAME OF NUMBER </h2>

        {showStartScreen ? (
          <StartScreen
            PlayersList={this.state.players}
            deletePlayer={this.deletePlayer}
            startGame={this.startGame}
            deleteAllPlayers={this.deleteAllPlayers}
            addPlayer={this.addPlayer}
          />
        ) : (
          this.renderActiveGame()
        )}

        <SummaryScreen />
      </div>
    )
  }
}

export default App
