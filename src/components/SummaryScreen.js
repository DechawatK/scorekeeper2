import React, { Component } from 'react'
import SummaryCard from './SummaryCard'
import Button from './Button'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default class SummaryScreen extends Component {
  render() {
    const { players, onAddRound, onBack } = this.props
    return (
      <div>
        <h1> Summary Screen </h1>
        {players.map((player, i) => (
          <SummaryCard
            key={i}
            title={player.name}
            scores={player.scores || []}
          />
        ))}
        <Button onClick={onBack}>
          <Link to="/">Back</Link>
        </Button>
        {players.length ? (
          <Button onClick={onAddRound}>
            <Link to="/game">Add Round</Link>
          </Button>
        ) : (
          <div>
            <strong> Please add players </strong>{' '}
          </div>
        )}{' '}
      </div>
    )
  }
}
