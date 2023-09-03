
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import React ,{useState} from 'react'

function App() {
  const [mode1,setmode1]=useState("light");
    const toggle = () => {
       
        if (mode1 === 'dark'){
            setmode1('light');
            document.body.style.backgroundColor='white'
        }
        else{
            setmode1('dark')
            document.body.style.backgroundColor='grey'
        }


    }
  return (
    <>
    <Navbar mode1={mode1} toggle1={toggle}/>
    <Textform heading="Place Your Text Here:-"/>

    </>
  );
}

export default App;
