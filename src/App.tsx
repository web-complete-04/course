import { Counter } from "./features/Counter/Counter";

export function App() {
  return (
    <>
     <Counter diff={5} initialCounterValue={3} />
     <Counter />
    </>
  )
}

// React.createElement(Counter, {initialCounterValue: 3, diff: 5});
