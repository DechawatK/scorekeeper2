import {
  createAction
} from 'redux-actions'

const ACTIONS = {
  DELETE_ALL_PLAYERS: 'DELETE_ALL_PLAYERS',
  ADD_PLAYER: 'ADD_PLAYER',
  UPDATE_SCORE: 'UPDATE_SCORE',
  RESET_SCORES: 'RESET_SCORES',
  DELETE_PLAYER: 'DELETE_PLAYER',
  SAVE_ROUND: 'SAVE_ROUND',
}

export const deleteAllPlayers = createAction(ACTIONS.DELETE_ALL_PLAYERS)
export const addPlayer = createAction(ACTIONS.ADD_PLAYER)
export const updateScore = createAction(ACTIONS.UPDATE_SCORE)
export const resetScores = createAction(ACTIONS.RESET_SCORES)
export const deletePlayer = createAction(ACTIONS.DELETE_PLAYER)
export const saveRound = createAction(ACTIONS.SAVE_ROUND)

export default ACTIONS