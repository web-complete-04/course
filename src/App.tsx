import { Counter } from "./features/Counter/Counter";
import { Weather } from "./features/Weather/Weather";

export function App() {
  return (
    <>
     <Weather />
     <Counter diff={5} initialCounterValue={3} />
     <Counter />
    </>
  )
}

// React.createElement(Counter, {initialCounterValue: 3, diff: 5});
