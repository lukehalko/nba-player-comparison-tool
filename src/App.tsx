import React from 'react';
import logo from './logo.svg';
import './App.css';
import PLAYERS from './assets/players.json';
import { PlayerSelection } from './components/PlayerSelection';
import { PlayerViewer } from './components/PlayerViewer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap'

function App(): JSX.Element {
  return (
    <Container className="App">
      <Row>
        <PlayerSelection></PlayerSelection>
        <PlayerViewer></PlayerViewer>
      </Row>
    </Container>
  );
}

export default App;
