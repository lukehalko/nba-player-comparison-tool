import { Col, Container, Row, Table } from 'react-bootstrap'
import { Player } from '../interfaces/player'
export function PlayerViewer({firstPlayer, secondPlayer}: {firstPlayer: Player, secondPlayer:Player}): JSX.Element{
    return(
        <Col>
            <h1>Player Viewer</h1>
                <Table striped bordered hover>
                <h4>Per Game Stats</h4>
                <tr>
                    <th></th>
                    <th>Player 1</th>
                    <th>Player 2</th>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>{firstPlayer.Name}</td>
                    <td>{secondPlayer.Name}</td>
                </tr>
                <tr>
                    <td>Points</td>
                    <td>{firstPlayer.PTS}</td>
                    <td>{secondPlayer.PTS}</td>
                </tr>
                <tr>
                    <td>Assists</td>
                    <td>{firstPlayer.AST}</td>
                    <td>{secondPlayer.AST}</td>
                </tr>
                <tr>
                    <td>Rebounds</td>
                    <td>{firstPlayer.TRB}</td>
                    <td>{secondPlayer.TRB}</td>
                </tr>
            </Table>
        </Col>
    )
}