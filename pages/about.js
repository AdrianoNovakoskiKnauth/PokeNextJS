import Image from 'next/image'
import Styles from '../styles/About.module.css'

export default function About() {
    return (
        <div className={Styles.about}>
            <h1>Sobre o projeto</h1>
            <p>Projeto desenvoldo em NEXT, com uso da API Pokemon.</p>
            <Image src='/images/charizard.png' width='300' height='300' alt='Charizard' />
        </div>
    )
}