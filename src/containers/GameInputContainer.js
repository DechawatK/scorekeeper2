import {
  connect
} from 'react-redux'
import Input from '../components/Input'
import {
  startGame,
  saveTempGameTitle
} from '../actions'
import {
  withRouter
} from 'react-router-dom'

const mapStateToProps = () => ({
  placeholder: 'Enter game name',
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: () => {
    dispatch(startGame())
    ownProps.history.push('/setup')
  },
  onChange: tempGameTitle => dispatch(saveTempGameTitle({
    tempGameTitle
  })),
})
const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Input)

export default withRouter(container)