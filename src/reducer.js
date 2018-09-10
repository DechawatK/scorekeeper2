export default function reducer(state, action = {}) {
  if (action.type === 'DELETE_ALL_PLAYERS') {
    return {
      ...state,
      players: [],
    }
  } else if (action.type === 'ADD_PLAYER') {
    return {
      ...state,
      players: [
        ...state.players,
        {
          name: action.payload.name,
          roundScore: 0,
          scores: []
        },
      ]
    }
  } else if (action.type === 'DELETE_PLAYER') {
    const index = action.payload.index
    return {
      ...state,
      players: [
        ...state.players.slice(0, index),
        ...state.players.slice(index + 1),
      ],
    }
  } else if (action.type === 'UPDATE_SCORE') {
    const value = action.payload.value
    const index = action.payload.index

    return {
      ...state,
      players: [
        ...state.players.slice(0, index),
        {
          ...state.players[index],
          roundScore: state.players[index].roundScore + value,
        },
        ...state.players.slice(index + 1),
      ]
    }
  }
  return state
}