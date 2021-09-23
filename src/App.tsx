import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PLAYERS from './assets/players.json';
import { PlayerSelection } from './components/PlayerSelection';
import { PlayerViewer } from './components/PlayerViewer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap'
import { Player } from './interfaces/player';

function App(): JSX.Element {
const [activePlayer, setActivePlayer] = useState<Player>(PLAYERS[0] as Player);

  return (
    <Container className="App">
      <Row>
        <PlayerSelection setPlayer={setActivePlayer}></PlayerSelection>
        <PlayerViewer activePlayer={activePlayer}></PlayerViewer>
      </Row>
    </Container>
  );
}

export default App;
