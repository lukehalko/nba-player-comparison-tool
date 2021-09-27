import { Button, Col } from 'react-bootstrap'
import { Player } from '../interfaces/player'
import PLAYERS from '../assets/players.json';
import { getRandomElement } from '../util/data';
var i = 0;
export function PlayerSelection({setPlayer}: {setPlayer: (p: Player)=>void}): JSX.Element {
    return(
        <Col>
        <h1>Select Player</h1>
        {setPlayer /*why is this here*/}
        <Button onClick={() =>
            setPlayer(PLAYERS[i++] as Player)
            }>Change Player</Button>
        </Col>
    )
}