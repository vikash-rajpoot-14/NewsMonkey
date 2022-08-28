import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState("Enter text here");
   const handleOnClick = () => {
        console.log("clicked");
        let newtext=text.toUpperCase();
        setText(newtext)

    }
   const handleOnChange = (event) => {
        console.log("changed");
        setText(event.target.value)

    }
    return (
        <>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter text below</label>
                <textarea className="form-control "value={text} onChange={handleOnChange}id="exampleFormControlTextarea1"  rows="8"></textarea>
            </div>
            <button type="button" onClick={handleOnClick} className="btn btn-primary">Uppercase</button>

        </>
    )
}
