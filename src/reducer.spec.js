import ACTIONS from './actions'
import reducer from './reducer'

describe('reducer', () => {
  it('always returns a state', () => {
    const state = {
      players: [{
        foo: 'bar'
      }],
    }

    expect(reducer(state, {
      type: 'foo'
    })).toBe(state)
    expect(reducer(state, {})).toBe(state)
    expect(reducer(state)).toBe(state)
  })

  describe(ACTIONS.SAVE_ROUND, () => {
    it('saves a round: sets roundscore 0 and adds a score', () => {
      const state = {
        players: [{
          name: 'Johanna',
          scores: [4, 10, 90],
          roundScore: 8
        }],
      }
      const action = {
        type: ACTIONS.SAVE_ROUND,
      }
      expect(reducer(state, action)).toEqual({
        players: [{
          name: 'Johanna',
          scores: [4, 10, 90, 8],
          roundScore: 0
        }],
      })
    })
  })

  describe(ACTIONS.DELETE_PLAYER, () => {
    it('deletes a single user', () => {
      const state = {
        players: [{
          name: 'Lewis',
          roundScore: 0,
          scores: [],
        },
        {
          name: 'Lara',
          roundScore: 10,
          scores: [],
        },
        ],
      }
      const action = {
        type: ACTIONS.DELETE_PLAYER,
        payload: {
          index: 1,
        },
      }

      expect(reducer(state, action)).toEqual({
        players: [{
          name: 'Lewis',
          roundScore: 0,
          scores: [],
        }, ],
      })
    })
  })

  describe(ACTIONS.RESET_SCORES, () => {
    it('resets scores in every player object to empty array', () => {
      const state = {
        players: [{
          name: 'Player 1',
          scores: [20],
          roundScore: 3
        },
        {
          name: 'Player 2',
          scores: [13],
          roundScore: 4
        },
        {
          name: 'Player 3',
          scores: [15],
          roundScore: 2
        },
        ],
      }
      const action = {
        type: ACTIONS.RESET_SCORES,
      }

      expect(reducer(state, action)).toEqual({
        players: [{
          name: 'Player 1',
          scores: [],
          roundScore: 3
        },
        {
          name: 'Player 2',
          scores: [],
          roundScore: 4
        },
        {
          name: 'Player 3',
          scores: [],
          roundScore: 2
        },
        ],
      })
    })
  })

  describe(ACTIONS.UPDATE_SCORE, () => {
    it('adds value to roundScore in one player array', () => {
      const state = {
        players: [{
          name: 'Player 1',
          scores: [20],
          roundScore: 3
        },
        {
          name: 'Player 2',
          scores: [13],
          roundScore: 4
        },
        {
          name: 'Player 3',
          scores: [15],
          roundScore: 2
        },
        ],
      }
      const action = {
        type: ACTIONS.UPDATE_SCORE,
        payload: {
          index: 1,
          value: 7,
        },
      }

      expect(reducer(state, action)).toEqual({
        players: [{
          name: 'Player 1',
          scores: [20],
          roundScore: 3
        },
        {
          name: 'Player 2',
          scores: [13],
          roundScore: 11
        },
        {
          name: 'Player 3',
          scores: [15],
          roundScore: 2
        },
        ],
      })
    })
  })

  describe(ACTIONS.ADD_PLAYER, () => {
    it('creates a player with a name', () => {
      const state = {
        players: [],
      }
      const action = {
        type: ACTIONS.ADD_PLAYER,
        payload: {
          name: 'Foobar',
        },
      }

      expect(reducer(state, action)).toEqual({
        players: [{
          name: 'Foobar',
          roundScore: 0,
          scores: [],
        }, ],
      })
    })
  })

  describe(ACTIONS.DELETE_ALL_PLAYERS, () => {
    it('empties array for players', () => {
      const state = {
        players: [{
          foo: 'bar'
        }, {
          baz: 'foobar'
        }],
      }
      const action = {
        type: ACTIONS.DELETE_ALL_PLAYERS
      }

      expect(reducer(state, action)).toEqual({
        players: [],
      })
      expect(reducer(state, action)).not.toBe(state)
    })
  })
})