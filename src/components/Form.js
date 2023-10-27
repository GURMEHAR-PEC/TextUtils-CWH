import React, { useState } from "react";

export default function Form(props) {
  
  const handleUpClick = () => {
    console.log("uppercase was clicked");
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to upper case","success");
  };
  const handleLowClick=()=>{
    let newtext=text.toLowerCase();
    setText(newtext)
    props.showAlert("Converted to lower case","success");
  };
  const handleClearClick=()=>{
    let newtext=""
    setText(newtext);
    props.showAlert("The text has been cleared","success");
  };
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const handleCopy=()=>{
    var text=document.getElementById("exampleFormControlTextarea1");
    
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
  }
  const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1 mb-4>{props.heading}</h1>

      <div className="form-group" style={{color:props.mode==='dark'?'white':'black'}}>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.mode==='dark'?'#042743':'white' , color:props.mode==='dark'?'white':'#042743'}}
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>
        Convert to UpperCase
      </button>
      <button disabled={text.length===0} className="btn btn-primary my-3 mx-1" onClick={handleLowClick}>
        Convert to LowerCase
      </button>
      <button disabled={text.length===0} className="btn btn-primary my-3 mx-1" onClick={handleClearClick}>
        Clear
      </button>
      <button disabled={text.length===0} className="btn btn-primary my-3 mx-1" onClick={handleCopy}>
        CopyText
      </button>
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>
            Your text summary
        </h2>
        <p>{(text.split(/ \s+/)).filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!=0}).length} Minutes Read</p>
        <h2>Preview </h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>

    </div>
    </>
  );
}
