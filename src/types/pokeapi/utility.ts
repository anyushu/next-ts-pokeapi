export interface Pagination {
  count: number
  next: string | null
  previous: boolean | null
}

export interface ResourceLists extends Pagination {
  results: NamedAPIResource[]
}

export interface NamedAPIResource {
  name: string
  url: string
}

export interface Name {
  name: string
  language: NamedAPIResource
}

export interface VersionEncounterDetail {
  version: NamedAPIResource[]
  max_chance: number
  encounter_details: Encounter[]
}

export interface VersionGameIndex {
  game_index: number
  version: Encounter[]
}

export interface Encounter {
  min_level: number
  max_level: number
  condition_values: NamedAPIResource[]
}

export interface GenerationGameIndex {
  game_index: number
  generation: NamedAPIResource[]
}

export interface VersionGroupFlavorText {
  text: string
  language: NamedAPIResource
  version_group: NamedAPIResource
}
