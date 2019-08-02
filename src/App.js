import React from 'react';
import './App.css';


import {Home} from './components/Home'
import {Challenge} from './components/Challenge'
import {Notfound} from './components/Notfound'


import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        
        <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/challenge' component={Challenge} />
        <Route path='*' component={Notfound} />
        </Switch>

      </div>
    </BrowserRouter>
    
  );
}

export default App;
