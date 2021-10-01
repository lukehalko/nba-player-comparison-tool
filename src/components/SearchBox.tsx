import { useState } from "react";
import { Form, Button, Col } from 'react-bootstrap'
import { Player } from "../interfaces/player";
import PLAYERS from '../assets/players.json';


export function SearchBox({setPlayerOne, setPlayerTwo}: {setPlayerOne: (p: Player)=>void, setPlayerTwo: (p: Player)=>void}):JSX.Element{
    const [SearchTextA, setSearchTextA]=useState("");
    const [SearchTextB, setSearchTextB]=useState("");
    function doSearchA(){
        console.log(SearchTextA)
        console.log(PLAYERS[100].Name)
        for(const p in PLAYERS){
            if(PLAYERS[p].Name.toLowerCase()==SearchTextA.toLowerCase()){
                console.log("condition is true")
                console.log(PLAYERS[p])
                setPlayerOne(PLAYERS[p] as Player)
            }
    }
}
    function doSearchB(){
        console.log(SearchTextB)
        for(const p in PLAYERS){
        if(PLAYERS[p].Name.toLowerCase()==SearchTextB.toLowerCase()){
            console.log("condition is true")
            console.log(PLAYERS[p])
            setPlayerTwo(PLAYERS[p] as Player)
        }
    }
}

    return <div>
        <Col>
        <input placeholder="Select Player 1"type="textbox" value={SearchTextA} 
                onChange={(e) =>
                setSearchTextA(e.target.value)
                }/>
             <Button onClick={doSearchA}>Submit</Button>
        </Col>
        <Col>
             <input placeholder="Select Player 2"type="textbox" value={SearchTextB} 
                onChange={(e) =>
                setSearchTextB(e.target.value)
                }/>
             <Button onClick={doSearchB}>Submit</Button>
        </Col>
    </div>
    }
