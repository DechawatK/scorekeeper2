import { add, multiply } from './math'

describe('internal math library', () => {
  describe('add', () => {
    it('adds two numbers', () => {
      expect(add(3, 5)).toEqual(8)
    })
    it('works with just one number', () => {
      expect(add(5)).toEqual(5)
    })
    it('works with just any number of argumenbts', () => {
      expect(add(1, 2, 3, 4)).toEqual(10)
    })
  })
  describe('multiply', () => {
    it('multiplies two numbers', () => {
      expect(multiply(3, 5)).toEqual(15)
    })

    it('works with just one number', () => {
      expect(multiply(5)).toEqual(5)
    })
    it('works with just any number of argumenbts', () => {
      expect(multiply(1, 2, 3, 4)).toEqual(24)
    })
  })
})
