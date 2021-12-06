import logo from "./logo.svg";
import "./App.css";
import CounterFunc from "./CounterFunc";
import CounterClass from "./CounterClass";

function App() {
  return (
    <div className="App">
      <CounterFunc header="Counter 1 (functional)" />
      <CounterFunc header="Counter 2 (functional)" />
      <CounterClass header="Counter 3 (Class)" />
      <CounterClass header="Counter 4 (Class)" />
    </div>
  );
}

export default App;
