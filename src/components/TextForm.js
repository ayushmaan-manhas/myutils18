import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=> {
    //console.log("UpperCase was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success");

  }
  const handleLowerClick = ()=> {
    //console.log("UpperCase was clicked"+text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success");
  }
  const handleOnChange = (event)=> {
    setText(event.target.value);
  }
  const handleClearClick = ()=> {
    //console.log("UpperCase was clicked"+text);
    let newText = "";
    setText(newText);
    props.showAlert("Text is Cleared", "success");
  }
  const [text,setText] = useState('');
  
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3"> 
        <label htmlFor="mybox" className="form-label"></label>
        <textarea className="form-control" id="mybox" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'black'}}  rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowerClick} >Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick} >Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words anad {text.length} characters</p>
      <p>{0.008* text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0? text : "Enter TEXT in Textbox to preview here"}</p>
    </div>
    </>
  )
}
