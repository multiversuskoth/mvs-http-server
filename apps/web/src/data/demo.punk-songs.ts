import { createServerFn } from '@tanstack/react-start'
import { PlayerModel } from "@mvsi/database/models/Player"

export const getPunkSongs = createServerFn({
  method: 'GET',
}).handler(async () => [
  { id: 1, name: 'Teenage Dirtbag', artist: 'Wheatus' },
  { id: 2, name: 'Smells Like Teen Spirit', artist: 'Nirvana' },
  { id: 3, name: 'The Middle', artist: 'Jimmy Eat World' },
  { id: 4, name: 'My Own Worst Enemy', artist: 'Lit' },
  { id: 5, name: 'Fat Lip', artist: 'Sum 41' },
  { id: 6, name: 'All the Small Things', artist: 'blink-182' },
  { id: 7, name: 'Beverly Hills', artist: 'Weezer' },
])


export const getPlayers = createServerFn({
  method: 'GET',
}).handler(async () => {

  const players = await PlayerModel.find({})
  return players.map(p => p.name)
}
)
