import React, { Component } from 'react'
import '../App.css'
import GameScreen from './GameScreen'
import Button from './Button'
import { load, save } from '../services'
import StartScreen from './StartScreen'
import SummaryScreen from './SummaryScreen'

class App extends Component {
  state = {
    showStartScreen: 'start',
    players: load('players') || [],
  }

  updateScore = (index, value) => {
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

  resetScore = () => {
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

  saveRound = () => {
    const { players } = this.state
    this.setState(
      {
        showScreen: 'summary',
        players: players.map(player => ({
          ...player,
          scores: [...player.scores, player.roundScore],
          roundScore: 0,
        })),
      },
      this.savePlayers
    )
  }

  startGame = () => {
    if (this.state.players.length) {
      this.setState({
        showStartScreen: 'game',
      })
    }
  }

  startSummary = () => {
    if (this.state.players.length) {
      this.setState({
        showStartScreen: 'summary',
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
            scores: 0,
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
      showStartScreen: 'start',
    })
  }

  renderActiveGame() {
    return (
      <GameScreen
        players={this.state.players}
        backToStart={this.backToStart}
        onSave={this.resetScore}
        updateScore={this.updateScore}
      />
    )
  }

  renderStartScreen = () => {
    return (
      <div>
        <StartScreen
          PlayersList={this.state.players}
          deletePlayer={this.deletePlayer}
          startGame={this.startSummary}
          deleteAllPlayers={this.deleteAllPlayers}
          addPlayer={this.addPlayer}
        />
      </div>
    )
  }

  renderSummaryScreen() {
    return (
      <div>
        <SummaryScreen
          players={this.state.players}
          onAddRound={this.startGame}
          onBack={this.backToStart}
        />
      </div>
    )
  }

  renderScreen = () => {
    const { showStartScreen } = this.state

    if (showStartScreen === 'start') {
      return this.renderStartScreen()
    } else if (showStartScreen === 'game') {
      return this.renderActiveGame()
    } else if (showStartScreen === 'summary') {
      return this.renderSummaryScreen()
    }
  }

  render() {
    return (
      <div className="App">
        <h2> GAME OF NUMBER </h2>
        {this.renderScreen()}
      </div>
    )
  }
}

export default App
