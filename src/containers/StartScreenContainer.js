import { connect } from 'react-redux'
import StartScreen from '../screens/StartScreen'
import { startGame, resetGame, fetchGames, postNewGame } from '../actions'

const mapStateToProps = state => ({
  gameTitle: state.gameTitle,
  previousGamesTitles: state.previousGamesTitles,
})

const mapDispatchToProps = dispatch => ({
  onStartGame: () => dispatch(startGame()),
  onResetGame: () => dispatch(resetGame()),
  onFetchGames: () => dispatch(fetchGames()),
  onCreateGame: title => dispatch(postNewGame(title)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartScreen)
