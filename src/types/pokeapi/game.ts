import type { NamedAPIResource, Name } from 'types/pokeapi/utility'

export interface Generation {
  id: number
  name: string
  abilities: NamedAPIResource[]
  names: Name[]
  main_region: NamedAPIResource[]
  moves: NamedAPIResource[]
  pokemon_species: NamedAPIResource[]
  types: NamedAPIResource[]
  version_groups: NamedAPIResource[]
}
