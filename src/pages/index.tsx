import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import {
  useGenerationsList,
  useGeneration,
  useRegionsList,
  useRegion,
  usePokemonsList,
  usePokemon,
} from 'lib/pokeapi'

const Home: NextPage = () => {
  const { pokemon, isLoading, isError } = usePokemon(1)
  console.log(pokemon)

  return (
    <>
      <Head>
        <title>Next.js Boilerplate</title>
        <meta name="description" content="Next.js Boilerplate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  )
}

export default Home
