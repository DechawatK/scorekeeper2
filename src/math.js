export function add(...summands) {
  return summands.reduce((acc, curr) => {
    return acc + curr
  })
}
export function multiply(...factors) {
  return factors.reduce((acc, curr) => acc * curr)
}
