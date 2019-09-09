import React from 'react';
import Button from './components/buttons.js';

class App extends React.Component{



  render(){
    return(

      <Button onClick={this.onClick}/>

    );
  }

}



export default App;
