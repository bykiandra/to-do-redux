import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount,
} from './counterSlice'
import styles from './Counter.module.css'

export function Counter() {
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')

  const incrementValue = Number(incrementAmount) || 0

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <button
          className={styles.button}
          aria-label='Increment value'
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label='Set increment amount'
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
      </div>
    </div>
  )
}
