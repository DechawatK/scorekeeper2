import React, { Component } from 'react'
import Score from './Score'
import PointButtonBar from './PointButtonBar'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledBoard = styled.section`
  background-image: linear-gradient(white, lightblue);
  width: 80vh;
  height: 10vh;
  margin-bottom: 20px;
  padding: 20px 30px;
`

const BoardHeader = styled.header`
  display: flex;
  justify-content: space-between;
`

export default class ScoreBoard extends Component {
  static propTypes = {
    title: PropTypes.string,
    score: PropTypes.number,
    onUpdate: PropTypes.func,
  }

  render() {
    const { title, score, onUpdate } = this.props
    return (
      <div className="score-container">
        <StyledBoard>
          <BoardHeader>
            <span> {title} </span>
            <span>
              <Score value={score} />
            </span>
          </BoardHeader>
          <PointButtonBar onClick={onUpdate} />
        </StyledBoard>
      </div>
    )
  }
}
