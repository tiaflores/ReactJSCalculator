import React from 'react';
import { Button } from 'reactstrap';
import '../index.css';
export default class Buttons extends React.Component{




  render(){
    return(

      <div class="container">

            <div class="row">
              <div class="col-xs-3">
                <Button color="primary" value="7">7</Button>{' '}
              </div>
              <div class="col-xs-3">
                <Button color="primary" value="8">8</Button>{' '}
              </div>
              <div class="col-xs-3">
                <Button color="primary" value="9">9</Button>{' '}
              </div>
              <div class="col-xs-3">
                <Button color="warning" value="/">/</Button>{' '}
              </div>
            </div>

            <div class="row">
              <div class="col-xs-3">
                <Button color="primary" value="4">4</Button>{' '}
              </div>
              <div class="col-xs-3">
                <Button color="primary" value="5">5</Button>{' '}
              </div>
              <div class="col-xs-3">
                <Button color="primary" value="6">6</Button>{' '}
              </div>
              <div class="col-xs-3">
                <Button color="warning" value="*">x</Button>{' '}
              </div>
            </div>


            <div class="row">
              <div class="col-xs-3">
                <Button color="primary" value="1">1</Button>{' '}
              </div>
              <div class="col-xs-3">
                <Button color="primary" value="2">2</Button>{' '}
              </div>
              <div class="col-xs-3">
                <Button color="primary" value="3">3</Button>{' '}
              </div>
              <div class="col-xs-3">
                <Button color="warning" value="-">-</Button>{' '}
              </div>
            </div>


            <div class="row">
              <div class="col-xs-3">
                <Button color="primary" value="">0</Button>{' '}
              </div>
              <div class="col-xs-3">
                <Button color="success" value="">=</Button>{' '}
              </div>
              <div class="col-xs-3">
                <Button color="danger" value="">CE</Button>{' '}
              </div>
              <div class="col-xs-3">
                <Button color="warning" value="">+</Button>{' '}
              </div>
            </div>


      </div>
    );
  }

}
