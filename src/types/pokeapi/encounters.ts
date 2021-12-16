import { Name, NamedAPIResource } from 'types/pokeapi/utility'

export interface EncounterMethods {
  id: number
  name: string
  order: number
  names: Name[]
}

export interface EncounterConditions {
  id: number
  name: string
  names: Name[]
  values: NamedAPIResource[]
}

export interface EncounterConditionValues {
  id: number
  name: string
  condition: NamedAPIResource[]
  names: Name[]
}
