import React from 'react';
import Buttons from './components/buttons.js';
import Result from './components/result.js';
import History from './components/history.js';
import './index.css';

 class App extends React.Component{

constructor(props){
    super(props);
  this.Calculate = this.Calculate.bind(this);
}



Calculate(){

  alert(Buttons.e);
  if(Buttons === "="){
    alert("test");
  }

}


  render(){
    return(
      <div className="appdiv">
      <Result onChange={this.state}/>
      <Buttons onClick={this.Calculate}/>
      <History onChange={this.state}/>
      </div>
    );
  }
}

export default App;
