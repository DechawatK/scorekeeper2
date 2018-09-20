import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import GameInputContainer from '../containers/GameInputContainer'

export default class StartScreen extends Component {
  static propTypes = {
    previousGamesTitles: PropTypes.arrayOf(PropTypes.string),
    onStartGame: PropTypes.func.isRequired,
    gameTitle: PropTypes.string,
    onResetGame: PropTypes.func.isRequired,
    onFetchGames: PropTypes.func.isRequired,
    onCreateGame: PropTypes.func.isRequired,
  }

  render() {
    const {
      gameTitle,
      onStartGame,
      onResetGame,
      onFetchGames,
      onCreateGame,
    } = this.props
    return (
      <div className="startgameboard">
        <h1>{gameTitle || 'Welcome'}</h1>
        {this.renderGameList()}
        <GameInputContainer />
        <Link to="/setup">
          <Button onClick={onStartGame}> New Game </Button>
        </Link>
        <Button onClick={onResetGame}> Reset game </Button>
        <button onClick={onFetchGames}>Fetch games</button>
        <button onClick={() => onCreateGame('Hello world')}>
          Create new game
        </button>
      </div>
    )
  }

  renderGameList() {
    const { previousGamesTitles } = this.props
    return (
      <ul>
        {previousGamesTitles.map((title, index) => (
          <li key={index}> {title}</li>
        ))}
      </ul>
    )
  }
}
