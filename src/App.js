import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [InputUser, setInputUser] = useState("bonjour");

  function handleClick() {
    console.log("btn connecté");
  }

  return (
    <div>
      <h1>ToDo List</h1>
      <div>Form</div>
      <form>
        <p>
          {" "}
          Taches à faire :{" "}
          <input type="text" placeholder="Ecrire à tache à faire" />
          <button type="submit" onClick={handleClick}>
            Submit
          </button>
        </p>
      </form>
    </div>
  );
}

export default App;
