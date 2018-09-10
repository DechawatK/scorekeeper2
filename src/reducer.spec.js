import reducer from './reducer'

describe('reducer', () => {

  it('always returns a state', () => {
    const state = {
      players: [{
        foo: 'bar'
      }]
    }
    const action = {
      type: 'I do not really exits'
    }
    expect(reducer(state, {
      type: 'foo'
    })).toBe(state)
  })

  describe('UPDATE_SCORE', () => {
    it('update score', () => {
      const state = {
        players: [{
            name: 'John Doe',
            roundScore: 0,
            score: []
          },
          {
            name: 'Jojo',
            roundScore: 0,
            score: []
          },
        ]
      }
      const action = {
        type: 'UPDATE_SCORE',
        payload: {
          index: 1,
          value: 10
        }
      }
      expect(reducer(state, action)).toEqual({
        players: [{
            name: 'John Doe',
            roundScore: 0,
            score: []
          },
          {
            name: 'Jojo',
            roundScore: 10,
            score: []
          },
        ]
      })
    })
  })

  describe('DELETE_PLAYER', () => {
    it('deletes a player', () => {
      const state = {
        players: [{
            name: 'John Doe',
            roundScore: 0,
            score: []
          },
          {
            name: 'Jojo',
            roundScore: 0,
            score: []
          },
          {
            name: 'Lionell',
            roundScore: 0,
            score: []
          },
        ],
      }
      const action = {
        type: 'DELETE_PLAYER',
        payload: {
          index: 0
        }
      }
      expect(reducer(state, action)).toEqual({
        players: [{
            name: 'Jojo',
            roundScore: 0,
            score: []
          },
          {
            name: 'Lionell',
            roundScore: 0,
            score: []
          },
        ]
      })
    })
  })

  describe('ADD_PLAYER', () => {
    it('creates a players with name', () => {
      const state = {
        players: [],
      }
      const action = {
        type: 'ADD_PLAYER',
        payload: {
          name: 'John Doe'
        }
      }
      expect(reducer(state, action)).toEqual({
        players: [{
          name: 'John Doe',
          roundScore: 0,
          scores: []
        }, ]
      })
    })
  })

  describe('DELETE_ALL_PLAYERS', () => {
    it('makes the players an empty array', () => {
      const state = {
        players: [{
          foo: 'bar'
        }, {
          baz: 'foobar'
        }]
      }
      const action = {
        type: 'DELETE_ALL_PLAYERS'
      }

      expect(reducer(state, action)).toEqual({
        players: []
      })
    })
  })
})