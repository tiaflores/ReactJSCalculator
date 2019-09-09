import React from 'react';
import Buttons from './components/buttons.js';

class App extends React.Component{



  render(){
    return(

      <Buttons onClick={this.onClick}/>

    );
  }

}



export default App;
