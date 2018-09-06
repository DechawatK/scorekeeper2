import React, { Component } from 'react'
import styled from 'styled-components'

const StyledComponent = styled.section`
  display: flex;
`

const StyledBar = styled.section`
  display: flex;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  background-color: yellow;
  color: red;
  height: 40px;
  width: 30px;
  border: 1px solid gray;

  &:hover {
    background: lightgray;
  }
`

export default class RoundsBar extends Component {
  render() {
    const {} = this.props
    return (
      <StyledComponent>
        <StyledBar className="round1">45</StyledBar>
        <StyledBar className="round2">32</StyledBar>
        <StyledBar className="round3">21</StyledBar>
        <StyledBar className="round4">6</StyledBar>
        <StyledBar className="round5">30</StyledBar>
      </StyledComponent>
    )
  }
}
