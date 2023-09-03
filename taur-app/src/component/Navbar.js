import React , {useState} from 'react'



export default function Navbar(props){
    const [mode1,setmode1]=useState("light");
    const toggle = () => {
        console.log("Toggle funtion Called")
        if (mode1 === 'dark'){
            setmode1('light');
        }
        else{
            setmode1('dark')
        }


    }
    return(
    <>
        <nav className={`navbar navbar-expand-lg navbar-${mode1} bg-${mode1}`}>
        <div className="container-fluid">
            <a className="navbar-brand" href="/">TAUR</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/">About</a>
                </li>
                </ul>
                <div class="form-check form-switch mx-3">
                    <input className="form-check-input" onChange={toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark mode</label>
                </div>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
      </nav>
        <div className='container'>
        <br/>       
        </div>
    </>
    )
};