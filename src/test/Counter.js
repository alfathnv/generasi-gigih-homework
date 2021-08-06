import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../redux/counterSlice'
import CreateModal from '../components/CreateModal'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const [amount, setAmount] = useState(0)
  const dispatch = useDispatch()
  const handle = (e) => {
    e.preventDefault()
    setAmount(parseInt(e.target.value))
  }
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <input type="number" name="amount" onChange={handle}></input>
        <button onClick={() => dispatch(incrementByAmount(amount))}>
          input
        </button>
      </div>
      <hr />
      <CreateModal />
    </div>
  )
}
