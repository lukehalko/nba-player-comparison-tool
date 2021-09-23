import { Col } from 'react-bootstrap'
import { Player } from '../interfaces/player'
export function PlayerViewer({activePlayer}: {activePlayer: Player}): JSX.Element{
    return(
        <Col>
        <h1>Player Viewer</h1>
        <div>Current player</div>
        {activePlayer.Name}
        <br/>
        {"Per Game Stats"}
        <br/>
        {"Points: " + activePlayer.PTS}
        <br/>
        {"Assists: "+ activePlayer.AST}
        <br/>
        {"Rebounds: "+activePlayer.TRB}
        </Col>
    )
}