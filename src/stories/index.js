import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, number, button } from '@storybook/addon-knobs/react'
import Button from '../components/Button'
import EditCard from '../components/EditCard'
import PointButtonBar from '../components/PointButtonBar'
import GameScreen from '../components/GameScreen'
import StartScreen from '../components/StartScreen'
import RoundsBar from '../components/RoundsBar'
import SummaryScreen from '../components/SummaryScreen'
import styled from 'styled-components'
import PlayerHeader from '../components/PlayerHeader'
import SummaryCard from '../components/SummaryCard'

const Wrapper = styled.section`
  width: ${props => (props.width ? props.width : '360')}px;
  margin: 0 auto;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 10px;
`

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('with text', () => (
    <Button onClick={action('clicked')}>
      {text('Button text', 'Click me')}
    </Button>
  ))

storiesOf('PointButtonBar', module).add('default', () => (
  <PointButtonBar onClick={action('onClick')} />
))

storiesOf('EditCard', module)
  .addDecorator(withKnobs)
  .add('with no points', () => (
    <EditCard
      title={text('Title', 'Some text')}
      score={number('Score', 0, {
        range: true,
        min: 0,
        max: 50,
        step: 1,
      })}
      onUpdate={action('onUpdate')}
    />
  ))
  .add('with many points', () => {
    return (
      <EditCard
        title="Some title"
        score={99999999}
        onUpdate={action('onUpdate')}
      />
    )
  })
  .add('with extra long title', () => (
    <EditCard
      title="Some suuuuuuuuuuper looooooooong title here"
      score={20}
      onUpdate={action('onUpdate')}
    />
  ))

storiesOf('StartScreen', module)
  .add('no players', () => (
    <StartScreen
      PlayersList={[{ name: 'John', score: 100 }]}
      startGame={action('startGame')}
      deleteAllPlayers={action('deleteAllPlayers')}
      addPlayer={action('addPlayer')}
      deletePlayer={action('deletePlayer')}
    />
  ))
  .add('default', () => (
    <StartScreen
      PlayersList={[
        {
          name: 'John',
          score: 100,
        },
      ]}
      startGame={action('startGame')}
      seleteAllPlayers={action('seleteAllPlayers')}
      onAddPlayer={action('onAddPlayer')}
      deletePlayer={action('deletePlayer')}
    />
  ))

storiesOf('GameScreen', module)
  .add('single user', () => (
    <GameScreen
      players={[
        {
          name: 'John',
          score: 0,
        },
      ]}
      updateScore={action('updateScore')}
      backToStart={action('backToStart')}
      resetScore={action('resetScore')}
    />
  ))
  .add('multiple users', () => (
    <GameScreen
      players={[
        {
          name: 'John',
          score: 0,
        },
        {
          name: 'Jane',
          score: 10,
        },
      ]}
      updateScore={action('updateScore')}
      backToStart={action('backToStart')}
      resetScore={action('resetScore')}
    />
  ))

storiesOf('PlayerHeader', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <PlayerHeader
      title={text('Title', 'Dechawat Kesornchan')}
      score={number('Score', 5)}
    />
  ))

storiesOf('RoundsBar', module)
  .add('no scores', () => (
    <Wrapper>
      <RoundsBar scores={[]} />
    </Wrapper>
  ))
  .add('some scores', () => (
    <Wrapper>
      <RoundsBar scores={[0, 20, 15, 10]} />
    </Wrapper>
  ))
  .add('many scores', () => (
    <Wrapper width={200}>
      <RoundsBar scores={[0, 20, 15, 10, 10, 0, -5, 60, 10, 30]} />
    </Wrapper>
  ))

storiesOf('SummaryCard', module)
  .addDecorator(withKnobs)
  .add('no scores', () => (
    <SummaryCard title={text('Name', 'John Doe')} scores={[0]} />
  ))
  .add('some scores', () => (
    <SummaryCard
      title={text('Title', 'John Doe')}
      scores={[10, 20, 30, 40, 10, -5, 20, 15]}
    />
  ))
  .add('lots of scores', () => (
    <Wrapper width={200}>
      <SummaryCard
        title={text('Title', 'John Doe')}
        scores={[10, 20, 30, 40, 10, -5, 20, 15]}
      />
    </Wrapper>
  ))

storiesOf('SummaryScreen', module)
  .addDecorator(withKnobs)
  .add('no players', () => (
    <SummaryScreen
      players={[]}
      onAddRound={action('onAddRound')}
      onBack={action('onBack')}
    />
  ))
  .add('some players', () => (
    <SummaryScreen
      players={[
        { name: 'John', scores: [10, 20, 30] },
        { name: 'Jane', scores: [20, 30, -3] },
      ]}
      onAddRound={action('onAddRound')}
      onBack={action('onBack')}
    />
  ))
