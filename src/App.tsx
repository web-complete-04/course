import { BrowserRouter, Route, Routes } from "react-router";
import { Nav } from "./components/Nav/Nav";
import { Counter } from "./features/Counter/Counter";
import { Todos } from "./features/Todos/Todos";
import { Weather } from "./features/Weather/Weather";

export function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<h1>Homepage</h1>} />
        <Route path="todos" element={<Todos />} />
        <Route path="weather" element={<Weather />} />
        <Route path="counter" element={<Counter diff={5} initialCounterValue={3} />} />
      </Routes>
    </BrowserRouter>
  );
}

// React.createElement(Counter, {initialCounterValue: 3, diff: 5});
