import Image from 'next/image'
import Styles from '../styles/Home.module.css'
import Card from './components/card'

export async function getStaticProps() {
  const maxPokemon = 200
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}/?limit=${maxPokemon}`)
  const data = await res.json()

  //add pokemon index
  data.results.forEach((item, index) => {
    item.id = index + 1
  });

  return {
    props: {
      pokemons: data.results,
    }
  }

}

export default function Home({pokemons}) {
  return (
    <>
      <div className={Styles.title_container}>
        <h1 className={Styles.title}>Poke<span>Next</span></h1>
        <Image src='/images/pokeball.png' width='50' height='50' alt='Pokeball' />
      </div>
      <div className={Styles.pokemon_container}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  )
}
