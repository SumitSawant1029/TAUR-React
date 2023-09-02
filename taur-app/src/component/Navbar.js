import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props){
    return(
        <div>
        Hello World {props.tittle}
        {props.apptext}
        </div>
    )
}
Navbar.propTypes = {tittle : PropTypes.string.isRequired,
                        apptext : PropTypes.string}

Navbar.defaultProps = {
    tittle: 'Set title here',
    apptext: 'About Text here'
}