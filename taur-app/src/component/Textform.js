import React ,{useState} from 'react'


export default function Textform(props){
    const [Text , setText] = useState('Enter Text here ');
    const handler = (event) => {
        setText(event.target.value);
    }
    
    const handler1 =()=>{
        setText(Text.toUpperCase());
    }
    return(

        <div>
            <div classname ="container">
                <h1>{props.heading}</h1>
                <textarea classname ="form-control" value={Text} onChange={handler} id="exampleFormControlTextare a1" rows="8" ></textarea>
            </div>
            <button classname="btn btn-primary" onClick={handler1} >Convert To Upper Case</button>
        </div>
        
    )
}