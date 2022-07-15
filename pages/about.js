import Image from 'next/image'
import Styles from '../styles/About.module.css'

export default function About() {
    return (
        <div className={Styles.about}>
            <h1>Sobre o projeto</h1>
            <p>Projeto desenvolvido em NEXT, com uso da PokeApi.</p>
            <div>
                <Image src='/images/charizard.png' width='300' height='300' alt='Charizard' />
            </div>
            <div>
                <Image src='/images/pokeapi.png' width='257' height='103' alt='PokeApi' />
            </div>
        </div>
    )
}