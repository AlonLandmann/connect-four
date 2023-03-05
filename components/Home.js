import css from '@/scss/Home.module.scss'
import { useState } from 'react'

export default function Home() {
  const [symbol, setSymbol] = useState('x')
  const [start, setStart] = useState('o')
  const [strength, setStrength] = useState('hard')

  return (
    <div className={css.container}>
      <h1 className={css.title}>Connect 4</h1>
      <h2 className={css.heading}>Pick your Symbol</h2>
      <div className={css.symbols}>
        <div
          className={`${symbol === 'x' ? css.cross : css.off}`}
          onClick={() => { setSymbol('x') }}
        >
          x
        </div>
        <div
          className={`${symbol === 'o' ? css.circle : css.off}`}
          onClick={() => { setSymbol('o') }}
        >
          o
        </div>
      </div>
      <h2 className={css.heading}>Who starts?</h2>
      <div className={css.symbols}>
        <div
          className={`${start === 'x' ? css.cross : css.off}`}
          onClick={() => { setStart('x') }}
        >
          x
        </div>
        <div
          className={`${start === 'o' ? css.circle : css.off}`}
          onClick={() => { setStart('o') }}
        >
          o
        </div>
      </div>
      <h2>AI Strength</h2>
      <div className={css.strengthOptions}>
        <div
          className={`${strength === 'easy' ? css.selectedStrength : css.notSelectedStrength}`}
          onClick={() => { setStrength('easy') }}
        >
          easy
        </div>
        <div
          className={`${strength === 'medium' ? css.selectedStrength : css.notSelectedStrength}`}
          onClick={() => { setStrength('medium') }}
        >
          medium
        </div>
        <div
          className={`${strength === 'hard' ? css.selectedStrength : css.notSelectedStrength}`}
          onClick={() => { setStrength('hard') }}
        >
          hard
        </div>
        <div
          className={`${strength === 'tornado' ? css.selectedStrength : css.notSelectedStrength}`}
          onClick={() => { setStrength('tornado') }}
        >
          tornado
        </div>
      </div>
      <h2>Ready?</h2>
      <button className={css.start}>START</button>
    </div>
  )
}