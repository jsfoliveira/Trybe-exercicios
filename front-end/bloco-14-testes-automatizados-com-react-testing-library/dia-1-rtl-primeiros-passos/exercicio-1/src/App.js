import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Character from './pages/Character';
import Location from './pages/Location';
import Episodes from './pages/Episodes';

class App extends React.Component{

  render(){
    
    return (
      <div>
        <BrowserRouter>
             <Switch>
                <Route path="/characters" component={ Character } />
                <Route path="/locations"
                component={ Location } />
                <Route path="/episodes" 
                component={ Episodes }/>
             </Switch>
             </BrowserRouter>
      </div>
    );
  }
  
}

export default App;
