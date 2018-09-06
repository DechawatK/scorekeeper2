import React, { Component } from 'react'
import SummaryCard from './SummaryCard'
import Button from './Button'
import styled from 'styled-components'

export default class SummaryScreen extends Component {
  render() {
    const { players, onAddRound, onBack } = this.props
    return (
      <div>
        <h1>Summary Screen</h1>
        {players.map(player => (
          <SummaryCard title={player.name} scores={player.scores || []} />
        ))}
        <Button onClick={onBack}>Back</Button>
        {players.length ? (
          <Button onClick={onAddRound}>Add Round</Button>
        ) : (
          <div>
            <strong>Please add players</strong>
          </div>
        )}
      </div>
    )
  }
}
