import { useState } from 'react';
import './App.css';
import WeatherComp from './components/WeatherComp';

function App() {
  const [cityname, setCityname] = useState("ירושלים")

  return (
    <div className="App" >
      <header className="App-header">
        <p>התחזית היומית</p>
      </header>
      <main className='App-main'>
        <h1>תחזית מזג האויר היום ב{cityname}</h1>
        <WeatherComp city={(c => setCityname(c))} />
      </main>
    </div>
  );
}

export default App;
