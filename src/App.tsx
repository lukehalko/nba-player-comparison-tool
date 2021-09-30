import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PLAYERS from './assets/players.json';
import { PlayerSelection } from './components/PlayerSelection';
import { PlayerViewer } from './components/PlayerViewer';
import { SearchBox } from './components/SearchBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap'
import { Player } from './interfaces/player';

function App(): JSX.Element {
const [activePlayerOne, setActivePlayerOne] = useState<Player>(PLAYERS[0] as Player);
const [activePlayerTwo, setActivePlayerTwo] = useState<Player>(PLAYERS[1] as Player);

  return (
    <Container>
        <Row>
          <PlayerSelection setPlayerOne={setActivePlayerOne} setPlayerTwo={setActivePlayerTwo}></PlayerSelection>
          <SearchBox></SearchBox>
          <PlayerViewer firstPlayer={activePlayerOne} secondPlayer={activePlayerTwo}></PlayerViewer>
        </Row>
    </Container>
  );
}

export default App;