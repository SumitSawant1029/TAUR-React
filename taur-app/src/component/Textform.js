import React ,{useState} from 'react'


export default function Textform(props){
    const [Text , setText] = useState('Enter Text here');
    const handler = (event) => {
        setText(event.target.value);
    }
    
    const handler1L =()=>{
        setText(Text.toUpperCase());
    }
    const handler1U =()=>{
        setText(Text.toLowerCase());
    }
    return(
        <>
            
            <div className='container'>
                <textarea style={{ width: '90%' }} value={Text} onChange={handler} id="exampleFormControlTextare a1" rows="18" ></textarea><br></br><br></br>
                <button className="btn btn-primary mx-2" onClick={handler1L} >Convert To Upper Case</button>
                <button className="btn btn-primary mx-2" onClick={handler1U} >Convert To Lower Case</button>
            
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