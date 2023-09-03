import React ,{useState} from 'react'


export default function Textform(props){
    const [Text , setText] = useState('Enter Text here');
    const handler = (event) => {
        setText(event.target.value);
    }
    
    const TextClear =()=>{
        setText('');
    }
    const UppercaseConverter =()=>{
        setText(Text.toUpperCase());
    }
    const LowerCaseConvertor =()=>{
        setText(Text.toLowerCase());
    }
    const copyTextToClipboard = () => {
        // Use the Clipboard API to copy text to the clipboard
        navigator.clipboard.writeText(Text);
      };
    return(
        <>
            
            <div className='container'>
                <textarea style={{backgroundColor:props.mode1==='dark'?'grey':'white',width: '90%'}} value={Text} onChange={handler} id="exampleFormControlTextare a1" rows="18" ></textarea><br></br><br></br>
                <button className="btn btn-primary mx-2" onClick={UppercaseConverter} >Convert To Upper Case</button>
                <button className="btn btn-primary mx-2" onClick={LowerCaseConvertor} >Convert To Lower Case</button>
                <button className="btn btn-primary mx-2" onClick={TextClear} >Clear</button>
                <button className="btn btn-primary mx-2" onClick={copyTextToClipboard} >Copy Text</button>
            
                <div>
                    {Text.length} Characters , {Text.split(" ").length} Words<br/>
                    {0.008 * Text.split("").length} Minutes Read
                </div>
                <div>
                    <h3>Preview</h3>
                    <p>{Text}</p>
                </div>
            </div>
        </>
    )
}