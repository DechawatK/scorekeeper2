import React, { Component } from 'react'
import Button from './Button'
import styled from 'styled-components'

const StyledButton = styled.button`
  font-size: 20px;
  cursor: pointer;
  background-color: yellow;
  color: red;

  &:hover {
    background: lightgray;
  }
`

export default class ScoreUpdate extends Component {
  render() {
    const { onClick } = this.props
    return (
      <div className="score-update">
        <StyledButton onClick={() => onClick(-10)} className="btn1">
          -10
        </StyledButton>
        <StyledButton onClick={() => onClick(-5)} className="btn2">
          -5
        </StyledButton>
        <StyledButton onClick={() => onClick(-1)} className="btn3">
          -1
        </StyledButton>
        <StyledButton onClick={() => onClick(1)} className="btn4">
          +1
        </StyledButton>
        <StyledButton onClick={() => onClick(5)} className="btn5">
          +5
        </StyledButton>
        <StyledButton onClick={() => onClick(10)} className="btn6">
          +10
        </StyledButton>
      </div>
    )
  }
}
