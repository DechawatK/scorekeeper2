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

storiesOf('SummaryScreen', module).add('single user', () => (
  <GameScreen
    players={[
      {
        name: 'John',
        score: 0,
      },
    ]}
    RoundsBar={action('roundBar')}
    backToStart={action('backToStart')}
  />
))
