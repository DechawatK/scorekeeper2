import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { applyMiddleware, createStore } from 'redux'
import {
  addPlayer,
  deleteAllPlayers,
  deletePlayer,
  saveRound,
  updateScore,
} from '../actions'
import { saveToLocalStorage } from '../middlewares'
import reducer from '../reducer'
import GameScreen from './GameScreen'
import StartScreen from './StartScreen'
import SummaryScreen from './SummaryScreen'

const store = createStore(reducer, applyMiddleware(saveToLocalStorage))

class App extends Component {
  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate()
    })
  }

  renderGameScreen = () => {
    const { dispatch, getState } = store
    return (
      <GameScreen
        players={getState().players}
        onUpdateScore={(index, value) =>
          dispatch(updateScore({ index, value }))
        }
        onSave={() => dispatch(saveRound())}
      />
    )
  }

  renderStartScreen = () => {
    const { dispatch, getState } = store
    return (
      <StartScreen
        players={getState().players}
        onDeleteAllPlayers={() => dispatch(deleteAllPlayers())}
        onAddPlayer={name => dispatch(addPlayer({ name }))}
        onDeletePlayer={index => dispatch(deletePlayer({ index }))}
      />
    )
  }

  renderSummaryScreen = () => {
    const { players } = store.getState()
    return <SummaryScreen players={players} />
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={this.renderStartScreen} />
          <Route path="/summary" render={this.renderSummaryScreen} />
          <Route path="/game" render={this.renderGameScreen} />
        </div>
      </Router>
    )
  }
}

export default App
