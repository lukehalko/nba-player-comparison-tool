import { useState } from "react";
import { Form, Button } from 'react-bootstrap'

export function SearchBox():JSX.Element{
    const [SearchText, setSearchText]=useState("");
    function doSearch(){
        console.log(SearchText)
    }
    return <div>
        <input type="textbox" value={SearchText} 
                onChange={(e) =>
                setSearchText(e.target.value)
                }/>
             <Button onClick={doSearch}>Submit</Button>
    </div>
}