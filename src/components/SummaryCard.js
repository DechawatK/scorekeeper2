import React, { Component } from 'react'
import styled from 'styled-components'
import PlayerHeader from './PlayerHeader'
import RoundsBar from './RoundsBar'
import PropTypes from 'prop-types'

const StyledBoard = styled.section`
  background-color: lightgray;
  margin-bottom: 10px;
  height: 100px;
  width: 320px;
  padding: 3px 10px;
  border: 1px solid gray;
`

export default class SummaryCard extends Component {
  static propTypes = {
    title: PropTypes.string,
    scores: PropTypes.arrayOf(PropTypes.number),
  }
  render() {
    const { title, scores } = this.props
    const total =
      scores.reduce((prev, curr) => Number(prev) + Number(curr), 0) || 0
    return (
      <StyledBoard>
        <PlayerHeader title={title} score={total} />
        <RoundsBar scores={scores} />
      </StyledBoard>
    )
  }
}
