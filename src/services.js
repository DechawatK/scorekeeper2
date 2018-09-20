export function getGames() {
  return fetch('http://localhost:3001/games').then(res => res.json())
}

export function createGame(title) {
  return fetch('http://localhost:3001/games', {
    method: 'POST',
    body: JSON.stringify({ title }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json())
}

export function save(name, data) {
  localStorage.setItem(name, JSON.stringify(data))
}

export function load(name) {
  const dataString = localStorage.getItem(name)
  try {
    return JSON.parse(dataString)
  } catch (error) {
    return {
      error,
    }
  }
}
