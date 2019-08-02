import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import './home.css'

export class Home extends Component {

    render(){
        return(
            <div id="homecontainer">
                
                <div>
                    <img id="amelogo" src={require('../assets/ame-logo.png')} />
                    <img id="b2wlogo" src={require('../assets/b2w-logo.png')} />
                </div>
                <div>
                    <h3 id="presents">Presents:</h3>
                </div>

                <div>
                    <img id="jedichallenge" src={require('../assets/jedichallenge.png')} />
                </div>
                
                <div>
                    <NavLink to="/challenge">
                    <Button renderAs="button" variant="outline-warning" size="lg">
                        <span>Go To Challenge</span>
                    </Button>
                    </NavLink>
                </div>

                
            </div>
        )
    }

}
