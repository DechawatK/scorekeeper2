import ACTIONS from './actions'
import { load } from './services'

const initialState = load('app') || {
  gameTitle: null,
  previousGamesTitles: [],
  tempGameTitle: null,
  players: [],
}

export default function reducer(state = initialState, action = {}) {
  let index, players, value

  switch (action.type) {
  case ACTIONS.REPLACE_GAMES:
    return {
      ...state,
      games: action.payload.games,
    }

  case ACTIONS.SAVE_TEMP_GAME_TITLE:
    return {
      ...state,
      tempGameTitle: action.payload.tempGameTitle,
    }

  case ACTIONS.START_GAME:
    return {
      ...state,
      gameTitle: state.tempGameTitle,
      tempGameTitle: null,
    }

  case ACTIONS.RESET_GAME:
    return {
      ...state,
      gameTitle: null,
      players: [],
    }

  case ACTIONS.END_GAME:
    return {
      ...state,
      previousGamesTitles: [state.gameTitle, ...state.previousGamesTitles],
      gameTitle: null,
      players: [],
    }

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
          scores: [],
        },
      ],
    }
  case ACTIONS.UPDATE_SCORE:
    index = action.payload.index
    players = state.players
    value = action.payload.value
    return {
      ...state,
      players: [
        ...players.slice(0, index),
        {
          ...players[index],
          roundScore: players[index].roundScore + value,
        },
        ...players.slice(index + 1),
      ],
    }
  case ACTIONS.RESET_SCORES:
    return {
      ...state,
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
