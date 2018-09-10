import React, { Component } from 'react'
import '../App.css'
import GameScreen from './GameScreen'
import Button from './Button'
import { load, save } from '../services'
import StartScreen from './StartScreen'
import SummaryScreen from './SummaryScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'

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
            roundScore: player.roundScore + value,
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

  resetScores = () => {
    this.setState(
      {
        players: this.state.players.map(player => ({ ...player, scores: 0 })),
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
            scores: [],
            roundScore: 0,
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

  renderActiveGame = () => {
    return (
      <GameScreen
        players={this.state.players}
        onSave={this.saveRound}
        backToStart={this.backToStart}
        resetScore={() => console.log('reseted')}
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

  renderSummaryScreen = () => {
    return (
      <div>
        <Route>
          <SummaryScreen
            onAddRound={this.startGame}
            players={this.state.players}
            onBack={this.backToStart}
          />
        </Route>
      </div>
    )
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={this.renderStartScreen} />
          <Route exact path="/summary" render={this.renderSummaryScreen} />
          <Route exact path="/game" render={this.renderActiveGame} />
          <h2> GAME OF NUMBER </h2>
        </div>
      </Router>
    )
  }
}

export default App
