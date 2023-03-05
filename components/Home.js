import css from '@/scss/Home.module.scss'
import { useState } from 'react'

export default function Home() {
  const [symbol, setSymbol] = useState('x')

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

    </div>
  )
}