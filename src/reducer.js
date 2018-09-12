import ACTIONS from './actions'
import {
  load
} from './services'

const initialState = {
  players: load('players') || [],
}

export default function reducer(state = initialState, action = {}) {
  let index, players

  switch (action.type) {
  case ACTIONS.DELETE_ALL_PLAYERS:
    return {
      ...state,
      players: [],
    }
  case ACTIONS.ADD_PLAYER:
    return {
      ...state,
      players: [
        ...state.players,
        {
          name: action.payload.name,
          roundScore: 0,
          scores: []
        },
      ],
    }
  case ACTIONS.UPDATE_SCORE:
    index = action.payload.index
    players = state.players
    return {
      players: [
        ...players.slice(0, index),
        {
          ...players[index],
          roundScore: players[index].roundScore + action.payload.value,
        },
        ...players.slice(index + 1),
      ],
    }
  case ACTIONS.RESET_SCORES:
    return {
      players: state.players.map(player => ({
        ...player,
        scores: [],
      })),
    }
  case ACTIONS.DELETE_PLAYER:
    return {
      ...state,
      players: [
        ...state.players.slice(0, action.payload.index),
        ...state.players.slice(action.payload.index + 1),
      ],
    }
  case ACTIONS.SAVE_ROUND:
    return {
      ...state,
      players: state.players.map(player => {
        return {
          ...player,
          scores: [...player.scores, player.roundScore],
          roundScore: 0,
        }
      }),
    }
  default:
    return state
  }
}