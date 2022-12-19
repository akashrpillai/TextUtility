import React, { useState } from 'react'

export default function TextForm(prop) {
    const [text, setText] = useState('');
    // text = "hello" => wrong way to set text
    // setText("Right Way") // right way to set text
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        prop.showAlert("Converted to UpperCase", "success");
    }

    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        prop.showAlert("Converted to LowerCase", "success");
    }

    // onchange  is important to write in the textarea 
    function handleOnChange(event) {
        setText(event.target.value);
    }
    // to convert first letter to capital.
    const capitalFirstLetter = () => {
        let lowertext = text.toLowerCase()
        // console.log(lowertext)
        let newText = lowertext.split(" ").map((currentValue) => {
            // console.log(newText)
            // console.log(text)
            let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
            // console.log(newText)
            return newText;
        });
        setText(newText.join(" "));
        prop.showAlert("Capitialized First letter of Every Word", "success");
    }

    // to clear screen 
    const clearScreen = () => {
        let newText = "";
        setText(newText);
        prop.showAlert("Screen Cleared", "success");
    }
    // to copy text
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        prop.showAlert("Text Copied.", "success");
    }
    // to show no of words 
    let words = text.split(/\s+/).filter((element) => { return element.length !== 0 }).length
    return (
        <>
            <div className='container' style={{ color: prop.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{prop.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" onChange={handleOnChange} value={text} style={{ backgroundColor: prop.mode === 'dark' ? 'rgb(3 26 47)' : 'white', color: prop.mode === 'dark' ? 'white' : 'black' }}></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-3 my-2" onClick={handleUpClick}>convert ToupperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-3 my-2" onClick={handleDownClick}>convert ToLowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-3 my-2" onClick={capitalFirstLetter}>FirstLetter Capital</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-3 my-2" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-danger mx-3 my-2 " onClick={clearScreen}>Clear Screen</button>
            </div>

            <div className="container my-3" style={{ color: prop.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text Has.</h2>
                <p>{words} Words and {text.length} Characters</p>
                <p>{(0.008) * (text.split(/\s+/).filter((element) => { return element.length !== 0 }).length)} minutes to Read..</p>
                <h3>Privew Of Your Text.</h3>
                <p>{text.length > 0 ? text : "Nothing To Preview, Enter Some Text.."}</p>
            </div>
        </>
    );
}
