import './App.css';
import { decrement, increment } from './redux/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from './redux/hooks';

function App() {
  const count = useAppSelector(state => state.counter.count)
  const dispatch = useAppDispatch();
  const handleIncrement = (payLoad: number) => {
    dispatch(increment(payLoad))
  };
  const handleDecrement = () => {
    dispatch(decrement())
  };



  return (
    <>
      <div>
        <button onClick={() => handleIncrement(1)}>Increment By 1</button>
        <button onClick={() => handleIncrement(5)}>Increment By 5</button>
      </div>
      <div>
        {count}
      </div>
      <div>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </>
  )
}

export default App
