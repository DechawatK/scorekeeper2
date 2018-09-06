import React, { Component } from 'react'
import styled from 'styled-components'
import Score from './Score'

const BoardHeader = styled.header`
  display: flex;
  justify-content: space-between;
`

export default class PlayerHeader extends Component {
  render() {
    const { title, score } = this.props
    return (
      <div>
        <BoardHeader>
          <span> {title} </span>
          <span>
            <Score value={score} />
          </span>
        </BoardHeader>
      </div>
    )
  }
}
