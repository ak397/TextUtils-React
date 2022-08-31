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
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied To ClipBoard", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove Extra Spaces!", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  let zero=()=>{
    if(text.split(" ").length!==1){
      return text.trim().split(" ").length
    }
    else{
      return 0
    }
  }

  const [text, setText] = useState("Enter Your Text Here");
  // text = "new text"; // Wrong way to change the state
  // setText("new text"); // Correct way to change the state
  return (
    <>
      <div className="container" style={{color: props.mode==="dark"?"white":"black"}}>
        <div className="mb-3">
          <h2>{props.heading}</h2>
          <textarea
            className="form-control" style={{backgroundColor: props.mode==="dark"?"#042743":"white",color: props.mode==="dark"?"white":"black"}} 
            onChange={handleOnChange}
            id="myBox"
            value={text}
            rows="6"
          ></textarea>
        </div>
        <button className="btn btn-dark mx-1" onClick={handleUpperCaseClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-dark mx-1" onClick={handleLowerCaseClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-dark mx-1" onClick={handleSentenceCaseClick}>
          Sentence Case
        </button>
        <button className="btn btn-dark mx-1" onClick={handleClearTextClick}>
          Clear
        </button>
        <button className="btn btn-dark mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-dark mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces
        </button>
      </div>
      <div className="container my-1" style={{color: props.mode==="dark"?"white":"black"}}>
        <h3>Your Text Summary</h3>
        <p>
          {/* {text.split(" ").length} words and {text.length} characters <br /> */}
          {zero()} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}
