import React, { Component } from 'react'
import styled from 'styled-components'
import PlayerHeader from './PlayerHeader'
import RoundsBar from './RoundsBar'
import PropTypes from 'prop-types'

const StyledBoard = styled.section`
  background-color: green;
  margin-bottom: 10px;
  padding: 20px 30px;
`

export default class SummaryCard extends Component {
  static propTypes = {
    title: this.propTypes.string,
    scores: PropTypes.arrayOf(PropTypes.number),
  }
  render() {
    const { title, score } = this.props
    const total =
      score.reduce((prev, curr) => Number(prev) + Number(curr), 0) || 0
    return (
      <StyledBoard>
        <PlayerHeader title={title} score={total} />
        <RoundsBar score={score} />
      </StyledBoard>
    )
  }
}
