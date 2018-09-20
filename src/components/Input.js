import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledInput = styled.input`
  border: 1px solid #333;
  height: 48px;
  border-radius: 3px;
  font-size: 1em;
  margin: 20px 20px 20px 0;
`

export default class Input extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
  }

  state = {
    inputValue: '',
  }

  updateInputValue = event => {
    const input = event.target
    const { onChange } = this.props
    this.setState({
      inputValue: input.value,
    })
    onChange && onChange(input.value)
  }

  checkForEnterButton = event => {
    const { inputValue } = this.state
    if (event.key === 'Enter' && inputValue) {
      this.props.onSubmit(inputValue)
      this.setState({
        inputValue: '',
      })
    }
  }

  render() {
    return (
      <StyledInput
        onChange={this.updateInputValue}
        onKeyUp={this.checkForEnterButton}
        placeholder={this.props.placeholder || 'Player name'}
        autoFocus
        value={this.state.inputValue}
        type="text"
      />
    )
  }
}
