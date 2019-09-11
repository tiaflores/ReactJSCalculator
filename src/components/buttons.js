import React from 'react';
import { Button } from 'reactstrap';
import '../index.css';
export default class Buttons extends React.Component{

constructor(props){
  super(props)
      this.state = {
          operations: []
      }
}

handleInput(e) {
    //const buttonvalue={" "} this.props.value;
    console.log(e.target.value)

}

getE(e){
  return e;
}

  render(){
    return(

      <div className="container">

            <div className="row">
              <div className="col-xs-3">
                <Button color="primary" value={"7"} onClick={(e) => this.handleInput(e,'value')}>7</Button>{' '}
              </div>
              <div className="col-xs-3">
                <Button color="primary" value={"8"} onClick={(e) => this.handleInput(e,'value')}>8</Button>{' '}
              </div>
              <div className="col-xs-3">
                <Button color="primary" value={"9"} onClick={(e) => this.handleInput(e,'value')}>9</Button>{' '}
              </div>
              <div className="col-xs-3">
                <Button color="warning" value={"/"} onClick={(e) => this.handleInput(e,'value')}>/</Button>{' '}
              </div>
            </div>

            <div className="row">
              <div className="col-xs-3">
                <Button color="primary" value={"4"} onClick={(e) => this.handleInput(e,'value')}>4</Button>{' '}
              </div>
              <div className="col-xs-3">
                <Button color="primary" value={"5"} onClick={(e) => this.handleInput(e,'value')}>5</Button>{' '}
              </div>
              <div className="col-xs-3">
                <Button color="primary" value={"6"} onClick={(e) => this.handleInput(e,'value')}>6</Button>{' '}
              </div>
              <div className="col-xs-3">
                <Button color="warning" value={"*"} onClick={(e) => this.handleInput(e,'value')}>x</Button>{' '}
              </div>
            </div>


            <div className="row">
              <div className="col-xs-3">
                <Button color="primary" value={"1"} onClick={(e) => this.handleInput(e,'value')}>1</Button>{' '}
              </div>
              <div className="col-xs-3">
                <Button color="primary" value={"2"} onClick={(e) => this.handleInput(e,'value')}>2</Button>{' '}
              </div>
              <div className="col-xs-3">
                <Button color="primary" value={"3"} onClick={(e) => this.handleInput(e,'value')}>3</Button>{' '}
              </div>
              <div className="col-xs-3">
                <Button color="warning" value={"-"} onClick={(e) => this.handleInput(e,'value')}>-</Button>{' '}
              </div>
            </div>


            <div className="row">
              <div className="col-xs-3">
                <Button color="primary" value={"0"}>0</Button>{' '}
              </div>
              <div className="col-xs-3">
                <Button color="success" value={"="}>=</Button>{' '}
              </div>
              <div className="col-xs-3">
                <Button color="danger" value={"CE"}>CE</Button>{' '}
              </div>
              <div className="col-xs-3">
                <Button color="warning" value={"+"}>+</Button>{' '}
              </div>
            </div>


      </div>
    );
  }

}
