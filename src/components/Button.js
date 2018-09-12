import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledButton = styled.button`
  font-size: 20px;
  cursor: pointer;
  background-color: hotpink;

  &:hover {
    background: lightblue;
  }
`

export default class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.any,
  }

  render() {
    const { onClick } = this.props
    return (
      <div>
        <StyledButton onClick={onClick}>{this.props.children}</StyledButton>
      </div>
    )
  }
}
