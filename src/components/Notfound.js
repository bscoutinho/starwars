import React, { Component } from 'react'
import './Notfound.css'

export class Notfound extends Component {

    render(){
        return(
            <div id="nfcontainer">
                <img src={require('../assets/error404.png')} />
            </div>
        )
    }

}