import {
  connect
} from 'react-redux'
import {
  updateScore,
  saveRound
} from '../actions'
import GameScreen from '../screens/GameScreen'

const mapStateToProps = state => ({
  players: state.players,
  gameTitle: state.gameTitle,
})

const mapDispatchToProps = dispatch => ({
  onUpdateScore: (index, value) => dispatch(updateScore({
    index,
    value
  })),
  onSave: () => dispatch(saveRound()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameScreen)