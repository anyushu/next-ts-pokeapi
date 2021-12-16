import useSWR from 'swr'
import type { Generation } from 'types/pokeapi/game'
import type { Region } from 'types/pokeapi/locations'
import type { Pokemon } from 'types/pokeapi/pokemon'
import type { ResourceLists } from 'types/pokeapi/utility'

export const apiUrl = 'https://pokeapi.co/api/v2'

export const fetcher = (url: string) => fetch(url).then((res) => res.json())

/**
 * 世代の一覧取得
 */
export const useGenerationsList = () => {
  const { data, error } = useSWR(`${apiUrl}/generation`)

  return {
    generations: data as ResourceLists,
    isLoading: !error && !data,
    isError: error,
  }
}

/**
 * 世代の取得
 */
export const useGeneration = (id: number) => {
  const { data, error } = useSWR(`${apiUrl}/generation/${id}`)

  return {
    generation: data as Generation,
    isLoading: !error && !data,
    isError: error,
  }
}

/**
 * 地方の一覧取得
 */
export const useRegionsList = () => {
  const { data, error } = useSWR(`${apiUrl}/region`)

  return {
    regions: data as ResourceLists,
    isLoading: !error && !data,
    isError: error,
  }
}

/**
 * 地方の取得
 */
export const useRegion = (id: number) => {
  const { data, error } = useSWR(`${apiUrl}/region/${id}`)

  return {
    region: data as Region,
    isLoading: !error && !data,
    isError: error,
  }
}

/**
 * ポケモンの一覧取得
 */
export const usePokemonsList = () => {
  const { data, error } = useSWR(`${apiUrl}/pokemon`)

  return {
    pokemons: data as ResourceLists,
    isLoading: !error && !data,
    isError: error,
  }
}

/**
 * ポケモンの取得
 */
export const usePokemon = (id: number) => {
  const { data, error } = useSWR(`${apiUrl}/pokemon/${id}`)

  return {
    pokemon: data as Pokemon,
    isLoading: !error && !data,
    isError: error,
  }
}
