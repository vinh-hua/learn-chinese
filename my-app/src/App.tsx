import { Header } from './Components/Header';
import { Learn } from './Views/Learn';
import { Account } from './Views/Account';
import {useState } from 'react';
import './App.css';

function App() {
  const [onLearnView, setOnLearnView] = useState(true);

  return (
    <div className="App">
      <Header setOnLearnView={setOnLearnView}></Header>
      {onLearnView ? <Learn></Learn> : <Account></Account>}
    </div>
  );
}

export default App;
