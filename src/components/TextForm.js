import React, { useState } from "react";
// import { useState } from "react";

export default function TextForm(props) {
  const handleUpperCaseClick = () => {
    // console.log("Uppercase was clicked: " +  text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };
  const handleLowerCaseClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };
  const handleSentenceCaseClick = () => {
    let newText = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newText);
    props.showAlert("Converted to Sentencecase!", "success");
  };
  const handleClearTextClick = () => {
    setText("");
    props.showAlert("Clear Text!", "success");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text); 
    props.showAlert("Copied to Clipboard!", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove Extra Spaces!", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // text = "new text"; // Wrong way to change the state
  // setText("new text"); // Correct way to change the state
  return (
    <>
      <div className="container" style={{color: props.mode==="dark"?"white":"042743"}}>
        <div className="mb-3">
          <h2>{props.heading}</h2>
          <textarea
            className="form-control" style={{backgroundColor: props.mode==="dark"?"#13466e":"white",color: props.mode==="dark"?"white":"black"}} 
            onChange={handleOnChange}
            id="myBox"
            value={text}
            rows="6"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleUpperCaseClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleLowerCaseClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleSentenceCaseClick}>
          Sentence Case
        </button>
        <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleClearTextClick}>
          Clear
        </button>
        <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces
        </button>
      </div>
      <div className="container my-1" style={{color: props.mode==="dark"?"white":"black"}}>
        <h3>Your Text Summary</h3>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to Preview!"}</p>
      </div>
    </>
  );
}
