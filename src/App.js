import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Data App</h1>
      <input
        className="input"
        type="text"
        name="name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <textarea
        className="input"
        name="address"
        rows="4"
        onChange={(e) => setAddress(e.target.value)}
        cols="22"
      />
      <br />
      <button type="submit">submit</button>
    </div>
  );
}

export default App;
