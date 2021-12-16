import type {
  NamedAPIResource,
  Name,
  GenerationGameIndex,
  VersionEncounterDetail,
} from 'types/pokeapi/utility'

export interface Location {
  id: number
  name: string
  region: NamedAPIResource
  names: Name[]
  main_generation: NamedAPIResource
  game_indices: GenerationGameIndex[]
  areas: NamedAPIResource[]
}

export interface LocationArea {
  id: number
  name: string
  game_index: number
  encounter_method_rates: EncounterMethodRate[]
  main_generation: NamedAPIResource
  game_indices: GenerationGameIndex[]
  areas: NamedAPIResource[]
}

export interface EncounterMethodRate {
  rate: number
  version: NamedAPIResource[]
}

export interface EncounterVersionDetails {
  encounter_method: NamedAPIResource[]
  version_details: EncounterVersionDetails[]
}

export interface PokemonEncounter {
  pokemon: NamedAPIResource[]
  version_details: VersionEncounterDetail[]
}

export interface Region {
  id: number
  locations: NamedAPIResource[]
  name: string
  names: Name[]
  main_generation: NamedAPIResource
  pokedexes: NamedAPIResource[]
  version_groups: NamedAPIResource[]
}
