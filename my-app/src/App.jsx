import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";
import { setMessage } from "./messageSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const message = useSelector((state) => state.message.text);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>

      <h2>Message: {message}</h2>
      <input
        type="text"
        onChange={(e) => dispatch(setMessage(e.target.value))}
        placeholder="Type message"
      />
    </div>
  );
}

export default App;
