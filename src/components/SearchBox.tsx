import { useState } from "react";
import { Form, Button } from 'react-bootstrap'
import { Player } from "../interfaces/player";
import PLAYERS from '../assets/players.json';


export function SearchBox({setPlayerOne, setPlayerTwo}: {setPlayerOne: (p: Player)=>void, setPlayerTwo: (p: Player)=>void}):JSX.Element{
    const [SearchText, setSearchText]=useState("");
    function doSearch(){
        for(const p in PLAYERS){
        }
    }
    return <div>
        <input type="textbox" value={SearchText} 
                onChange={(e) =>
                setSearchText(e.target.value)
                }/>
             <Button onClick={doSearch}>Submit</Button>
    </div>
}