import React from 'react';
import Buttons from './components/buttons.js';
import Result from './components/result.js';
import History from './components/history.js';
import './index.css';


class App extends React.Component{

  render(){

    return(

      <div className="appdiv">
      <Result onChange={this.state}/>
      <Buttons onClick={this.onClick}/>
      <History onChange={this.state}/>
      </div>
    );

  }

}



export default App;
