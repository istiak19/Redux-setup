import { Button } from './components/ui/button';
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
        <Button onClick={() => handleIncrement(1)}>Increment By 1</Button>
        <Button onClick={() => handleIncrement(5)}>Increment By 5</Button>
      </div>
      <div>
        {count}
      </div>
      <div>
        <Button onClick={handleDecrement}>Decrement</Button>
      </div>
    </>
  )
}

export default App
