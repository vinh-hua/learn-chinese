import { useEffect, useState } from 'react';
import { Header } from './Components/Header';
import { Learn } from './Views/Learn';
import './App.css';

function App() {
  /*const [welcome, setWelcome] = useState("Default");

  const getWelcomeMessage = async() => {
    const response = await fetch("http://localhost:5000", {
      method: "GET"
    });
    if (response.status >= 400) {
      console.log("Error!");
      return;
    }
    const message = await response.text();
    setWelcome(message);
  }

  useEffect(() => {
    getWelcomeMessage();
  });*/

  return (
    <div className="App">
      <Header></Header>
      <Learn></Learn>
    </div>
  );
}

export default App;
