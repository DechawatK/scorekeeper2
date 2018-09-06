import React, { Component } from 'react'
import Score from './Score'
import PointButtonBar from './PointButtonBar'
import styled from 'styled-components'

const StyledBoard = styled.section`
  background-color: green;
  margin-bottom: 10px;
  padding: 20px 30px;
`

const BoardHeader = styled.header`
  display: flex;
  justify-content: space-between;
`

export default class ScoreBoard extends Component {
  render() {
    const { title, score, onUpdate } = this.props
    return (
      <StyledBoard>
        <BoardHeader>
          <span> {title} </span>
          <span>
            <Score value={score} />
          </span>
        </BoardHeader>
        <PointButtonBar onClick={onUpdate} />
      </StyledBoard>
    )
  }
}
