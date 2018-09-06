import React, { Component } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  font-size: 20px;
  cursor: pointer;
  background-color: hotpink;

  &:hover {
    background: lightblue;
  }
`

export default class Button extends Component {
  render() {
    const { onClick, text } = this.props
    return (
      <div>
        <StyledButton onClick={onClick}>{this.props.children}</StyledButton>
      </div>
    )
  }
}
