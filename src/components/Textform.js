import React from 'react';
import { useState } from 'react';

export default function Textform(props) {
    const [GIVENTEXT, CHANGETEXT] = useState("");

    const UPPERaction = () => {
        CHANGETEXT(GIVENTEXT.toUpperCase())
        props.alert("success", "Text changed into upper case")

    }

    const LOWERaction = () => {
        CHANGETEXT(GIVENTEXT.toLowerCase())
        props.alert("success", "Text changed into lower case")

    }

    const cleartext = () => {
        CHANGETEXT("")
        props.alert("success", "All text removed")

    }

    const reversetext = () => {
        let length = GIVENTEXT.length;
        let element = ""
        for (let index = length - 1; index >= 0; index--) {
            element = element + GIVENTEXT[index]
        }
        CHANGETEXT(element)
        props.alert("success", "All text arranged in reverse order")

    }

    const copytext = () => {
        navigator.clipboard.writeText(GIVENTEXT)
        props.alert("success", "Text copied to clipboard")

    }

    const removeextraspaces = () => {
        let newtext = GIVENTEXT.split(/[ ]+/)
        CHANGETEXT(newtext.join(" "))
        props.alert("success", "Extra spaces removed")

    }

    const onchangemethod = function myfun1(event) {
        CHANGETEXT(event.target.value)
        // console.log(CHANGETEXT);
    }

    return (
        <>
            <div className='container my-0 py-0' >
                <h1 className='text-center'>{props.title}</h1>
                <div className="my-3" >
                    <textarea className="form-control" value={GIVENTEXT} onChange={onchangemethod} id="exampleFormControlTextarea1" rows="5" style={props.txtmode}></textarea>
                </div>
                <button type="button" disabled={GIVENTEXT.length === 0 ? true : false} onClick={UPPERaction} className="btn btn-primary mx-1 my-1">Change to UPPERCASE</button>
                <button type="button" disabled={GIVENTEXT.length === 0 ? true : false} onClick={LOWERaction} className="btn btn-primary mx-1 my-1">Change to lowercase</button>
                <button type="button" disabled={GIVENTEXT.length === 0 ? true : false} onClick={cleartext} className="btn btn-primary mx-1 my-1">Clear</button>
                <button type="button" disabled={GIVENTEXT.length === 0 ? true : false} onClick={reversetext} className="btn btn-primary mx-1 my-1">Reverse</button>
                <button type="button" disabled={GIVENTEXT.length === 0 ? true : false} onClick={copytext} className="btn btn-primary mx-1 my-1">Copy Text</button>
                <button type="button" disabled={GIVENTEXT.length === 0 ? true : false} onClick={removeextraspaces} className="btn btn-primary mx-1 my-1">Remove Spaces</button>

            </div>

            <div className='container my-3'>
                <h3>Text Summary</h3>
                <div>Total words = {GIVENTEXT.split(/\s+/).filter((element) => { return element.length !== 0 }).length} and Total characters ={GIVENTEXT.length}</div>
                <div>Time taken to read the words ={0.0076 * GIVENTEXT.split(/\s+/).filter((element) => { return element.length !== 0 }).length} </div>
                <h3 className='my-3'>Preview</h3>
                <div>{GIVENTEXT.length === 0 ? "---Write above first and find preview here---" : GIVENTEXT}</div>
            </div>
        </>
    )
}
