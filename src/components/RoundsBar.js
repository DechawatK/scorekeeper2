import React, { Component } from 'react'
import styled from 'styled-components'

const StyledComponent = styled.section`
  display: flex;
`

const StyledBar = styled.section`
  display: flex;
  justify-content: center;
  font-size: 20px;
  background-color: gray;
  color: yellow;
  height: 30px;
  width: 30px;
  border: 1px solid gray;
`

export default class RoundsBar extends Component {
  scrollerRef = React.createRef()

  componentDidUpdate() {
    const scroller = this.scrollerRef.current
    scroller.scrollLeft = scroller.scrollWidth
  }

  render() {
    let { scores } = this.props
    scores = scores.length ? scores : [0]
    return (
      <StyledComponent innerRef={this.scrollerRef}>
        {scores.map((score, i) => (
          <StyledBar key={i}>{score}</StyledBar>
        ))}
      </StyledComponent>
    )
  }
}
