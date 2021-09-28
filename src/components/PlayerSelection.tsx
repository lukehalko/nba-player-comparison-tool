import { Button, Col, Container, Row } from 'react-bootstrap'
import { Player } from '../interfaces/player'
import PLAYERS from '../assets/players.json';
import { getRandomElement } from '../util/data';
import { findRenderedDOMComponentWithTag } from 'react-dom/test-utils';
let i = 0;
export function PlayerSelection({setPlayerOne, setPlayerTwo}: {setPlayerOne: (p: Player)=>void, setPlayerTwo: (p: Player)=>void}): JSX.Element {
    return(
    <Col>
    <h1>Select Player</h1>
            {setPlayerOne /*why is this here*/}
        <Row md={3}>
            Player 1
            <Button onClick={() =>
                i>0 ?
                setPlayerOne(PLAYERS[i--] as Player)
                :
                setPlayerOne(PLAYERS[i] as Player)  
                }> {'<'}--
            </Button>
            <Button onClick={() =>
                i<=502 ?
                setPlayerOne(PLAYERS[i++] as Player)
                :
                setPlayerOne(PLAYERS[i] as Player)
                }> --{'>'}
            </Button>
        </Row>
            <Row md={3}>
            Player 2
            <Button onClick={() =>
                i>0 ?
                setPlayerTwo(PLAYERS[i--] as Player)
                :
                setPlayerTwo(PLAYERS[i] as Player)  
                }> {'<'}--
            </Button>
            <Button onClick={() =>
                i<=502 ?
                setPlayerTwo(PLAYERS[i++] as Player)
                :
                setPlayerTwo(PLAYERS[i] as Player)
                }> --{'>'}
            </Button>
        </Row>
    </Col>
    )
}