import { Button, Col } from 'react-bootstrap'
import { Player } from '../interfaces/player'
import PLAYERS from '../assets/players.json';

export function PlayerSelection({setPlayer}: {setPlayer: (p: Player)=>void}): JSX.Element {
    var i=0;
    return(
        <Col>
        <h1>Select Player</h1>
        <form>
            <label>
                Name (this doesn't work right now):
                <input type="text" name="name" />
            </label>
                <input type="submit" value="Submit" />
        </form>
        {setPlayer}
        <Button onClick={() => setPlayer(PLAYERS[i++] as Player)}>Change Player</Button>
        </Col>
    )
}