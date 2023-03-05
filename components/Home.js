import css from '@/scss/Home.module.scss'
import { useEffect, useState } from 'react'

export default function Home() {
  const [symbol, setSymbol] = useState(null)
  const [start, setStart] = useState(null)
  const [strength, setStrength] = useState(null)

  let strengthClass = symbol === 'x' ? css.red : css.blue

  useEffect(() => {
    setSymbol(localStorage.getItem('symbol') || 'x')
    setStart(localStorage.getItem('start') || 'x')
    setStrength(localStorage.getItem('strength') || 'easy')
  }, [])

  if (symbol === null) {
    return <></>
  }

  return (
    <div className={css.container}>
      <h1 className={css.title}>Connect 4</h1>
      <h2 className={css.heading}>Pick your Symbol</h2>
      <div className={css.symbols}>
        <div
          className={`${symbol === 'x' ? css.cross : css.off}`}
          onClick={() => { setSymbol('x'); localStorage.setItem('symbol', 'x') }}
        >
          x
        </div>
        <div
          className={`${symbol === 'o' ? css.circle : css.off}`}
          onClick={() => { setSymbol('o'); localStorage.setItem('symbol', 'o') }}
        >
          o
        </div>
      </div>
      <h2 className={css.heading}>Who starts?</h2>
      <div className={css.symbols}>
        <div
          className={`${start === 'x' ? css.cross : css.off}`}
          onClick={() => { setStart('x'); localStorage.setItem('start', 'x')  }}
        >
          x
        </div>
        <div
          className={`${start === 'o' ? css.circle : css.off}`}
          onClick={() => { setStart('o'); localStorage.setItem('start', 'o')  }}
        >
          o
        </div>
      </div>
      <h2>AI Strength</h2>
      <div className={css.strengthOptions}>
        <div
          className={`${strength === 'easy' ? strengthClass : css.notSelectedStrength}`}
          onClick={() => { setStrength('easy'); localStorage.setItem('strength', 'easy')  }}
        >
          easy
        </div>
        <div
          className={`${strength === 'medium' ? strengthClass : css.notSelectedStrength}`}
          onClick={() => { setStrength('medium'); localStorage.setItem('strength', 'medium') }}
        >
          medium
        </div>
        <div
          className={`${strength === 'hard' ? strengthClass : css.notSelectedStrength}`}
          onClick={() => { setStrength('hard'); localStorage.setItem('strength', 'hard') }}
        >
          hard
        </div>
        <div
          className={`${strength === 'tornado' ? strengthClass : css.notSelectedStrength}`}
          onClick={() => { setStrength('tornado'); localStorage.setItem('strength', 'tornado') }}
        >
          tornado
        </div>
      </div>
      <h2>Ready?</h2>
      <button className={css.start}>START</button>
    </div>
  )
}