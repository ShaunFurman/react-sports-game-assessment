import React from 'react';
import Game from './components/game/Game';

import Logo1 from './components/assets/hound.png'
import Logo2 from './components/assets/bunny.png'
import Logo3 from './components/assets/Racoons.jpg'
import Logo4 from './components/assets/Squirrels.png'


import './App.css';

function App(props) {
  const raccoons = {
    name: 'Russiaville Raccoons',
    logoSrc: Logo3
  }

  const squirrels = {
    name: 'Sheridan Squirrels',
    logoSrc: Logo4
  }

  const bunnies = {
    name: 'Burlington Bunnies',
    logoSrc: Logo2
  }

  const hounds = {
    name: 'Hammond Hounds',
    logoSrc: Logo1
  }

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game
        venue="Sheridan Arena"
        homeTeam={bunnies}
        visitingTeam={hounds}
      />
    </div>
  )
}
export default App;
