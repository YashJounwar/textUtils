import React,{useState} from "react"


function TextFrom(props) {

    const [text,setText] = useState("");
    const [paragraph,setParagraph] = useState(0);
    let [count,setCount] = useState(0);


    function handleChange(event){
        // console.log("changed happened!");
        setText(event.target.value)

        // let val = event.target.val
        // val.toUpperCase();
        // setText(val); // changin the inner text of the textarea equals to value
    }

    function handleUpClick(){
        // console.log("you clicked!");
        
        let newText = text.toUpperCase();
        setText(newText);
        props.showalert("Converted to Uppercase", "success")
    }
    function handleLoClick(){
        // console.log("you clicked!");
        let newText = text.toLowerCase();
        setText(newText);
        props.showalert("Converted to Lowercase", "success")
    }
    function handleClear(){
        // console.log("you clicked!");
        let newText = "";
        setText(newText);
    }

    function handleKeyPress(e){

        if(e.code === "Enter"){
                setCount(++count);
                setParagraph(count)
        }
    }

    function handleCopy(){
        var copyText = document.getElementById("myBox");

        // Select the text field
        copyText.select();
        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
    }
    return (
        <>
        <div className = "container mt-4" style={{color:props.mode === 'light'?'black':'white'}}>
            <h1 >{props.heading}</h1>
            <div className="mb-3" >
            <textarea className="form-control"style = {{backgroundColor: props.mode === 'light'?'white':'#021732', color:props.mode==='light'?'dark':'white'}} onKeyDown ={handleKeyPress}  value={text}  onChange={handleChange} id="myBox" rows="8"></textarea>
            </div>
            <button className = " btn btn-primary mx-1" onClick={handleUpClick}>click to Uppercase</button>
            <button className = " btn btn-primary mx-1" onClick={handleLoClick}>click to Lowercase</button>
            <button className = " btn btn-primary mx-1" onClick={handleClear}>clear text</button>
            <button className = " btn btn-primary mx-1" onClick={handleCopy}>copy text</button>
            
        </div>
        <div className="container mt-2" style={{color:props.mode === 'light'?'black':'white'}}>
            <h2  >Your text summary</h2>
            {/* split method creates a new array and the " " is a separator here */}
            <p>{text.split(" ").length-1} words and {text.length} characters you have typed</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Your Text To Preview Here!"}</p>
            <h2 >paragraphs you entered {text.length > 0?paragraph:0}</h2>
        </div>
        </>
    )
}

export default TextFrom;