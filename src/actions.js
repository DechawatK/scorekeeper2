import { createAction } from 'redux-actions'
import { getGames, createGame } from './services'

const ACTIONS = {
  DELETE_ALL_PLAYERS: 'DELETE_ALL_PLAYERS',
  ADD_PLAYER: 'ADD_PLAYER',
  UPDATE_SCORE: 'UPDATE_SCORE',
  RESET_SCORES: 'RESET_SCORES',
  DELETE_PLAYER: 'DELETE_PLAYER',
  SAVE_ROUND: 'SAVE_ROUND',
  START_GAME: 'START_GAME',
  SAVE_TEMP_GAME_TITLE: 'SAVE_TEMP_GAME_TITLE',
  END_GAME: 'END_GAME',
  RESET_GAME: 'RESET_GAME',
  LOAD_PLAYERS_FROM_SERVER: 'LOAD_PLAYERS_FROM_SERVER',
  REPLACE_GAMES: 'REPLACE_GAMES',
  GAME_CREATED: 'GAME_CREATED',
}

export const deleteAllPlayers = createAction(ACTIONS.DELETE_ALL_PLAYERS)
export const addPlayer = createAction(ACTIONS.ADD_PLAYER)
export const updateScore = createAction(ACTIONS.UPDATE_SCORE)
export const resetScores = createAction(ACTIONS.RESET_SCORES)
export const deletePlayer = createAction(ACTIONS.DELETE_PLAYER)
export const saveRound = createAction(ACTIONS.SAVE_ROUND)
export const startGame = createAction(ACTIONS.START_GAME)
export const saveTempGameTitle = createAction(ACTIONS.SAVE_TEMP_GAME_TITLE)
export const resetGame = createAction(ACTIONS.RESET_GAME)
export const endGame = createAction(ACTIONS.END_GAME)
export const replaceGames = createAction(ACTIONS.REPLACE_GAMES)
export const gameCreated = createAction(ACTIONS.GAME_CREATED)

export const fetchGames = () => dispatch => {
  getGames().then(games => dispatch(replaceGames({ games })))
}

export const postNewGame = title => dispatch => {
  createGame(title).then(game => dispatch(gameCreated({ game })))
}

export default ACTIONS
