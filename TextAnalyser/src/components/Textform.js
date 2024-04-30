import React, { useState } from 'react'



export default function Textform(props) {
    const Handleclick = () => {
        console.log('Welcome' + text);
        let newText = text.toUpperCase();
        props.showAlert('Uppper case converted','success');
        setText(newText)

    }

    const HandleLoclick = () => {
        console.log('Welcome' + text);
        let newText = text.toLowerCase();
        setText(newText)

    }

    const handleOnChange = (event) => {
        console.log('Onchange');
        setText(event.target.value)

    }

    const HandleCopyText = () => {
        var text = document.getElementById("TextBox");
        text.select()
        navigator.clipboard.writeText(text.value);
    }

    const HandleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));     
    }





    const [text, setText] = useState('Enter here');
    


    return (
        <>
            
                <div className="container" style={{color : props.mode==='dark'?'white':'black'}}>
                <div class="form" >
             
                    <div class="mb-3">
                        <h2>Enter Text To Analyse</h2>
                    {/*
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" style={{backgroundColor : props.mode==='dark'?'grey':'white'}} aria-describedby="emailHelp" />
                        <p></p>!<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.1/css/all.css" integrity="sha384-O8whS3fhG2OnA5Kas0Y9l3cfpmYjapjI0E4theH4iuMD+pLhbf6JI0jIMfYcK3yZ" crossorigin="anonymous">
                         */}
                        <textarea class="form-control" value={text} style={{backgroundColor : props.mode==='dark'?'skyblue':'white'}} onChange={handleOnChange} id="TextBox" rows="10"></textarea>
                    </div>
    
                    
                    <button type="button" disabled={text.length===0} class="mx-1 my-1" onClick={Handleclick}>Convert to upper Case</button>
                    <button type="button" disabled={text.length===0} class="mx-1 my-1" onClick={Handleclick}>Convert to upper Case</button>
                    <button type="button" disabled={text.length===0} class="mx-1 my-1" onClick={HandleLoclick}>Convert to Lower Case</button>
                    <button type="button" disabled={text.length===0} class="mx-1 my-1" onClick={HandleCopyText}>Copy Text</button>
                    <button type="button" disabled={text.length===0} class="mx-1 my-1" onClick={HandleExtraSpace}>Remove Extra Space</button>
                
                </div>

            </div>

            <div class="container my-3" style={{color : props.mode==='dark'?'white':'black'}}>
                <h1>Text Summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something"}</p>
            </div>
        </>


    )
}
