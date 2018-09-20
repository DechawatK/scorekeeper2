import {
  connect
} from 'react-redux'
import {
  addPlayer
} from '../actions'
import Input from '../components/Input'

const mapDispatchToProps = dispatch => ({
  onSubmit: name => dispatch(addPlayer({
    name
  })),
})

export default connect(
  null,
  mapDispatchToProps
)(Input)