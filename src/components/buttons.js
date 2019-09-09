import React from 'react';
import { Container, Row, Col, Button, ButtonGroup } from 'reactstrap';
import '../index.css';
export default class Buttons extends React.Component{




  render(){
    return(




      <Container>

            <div class="row">
              <div class="col-xs-3">
                <Button color="primary">7</Button>{' '}
              </div>
              <div class="col-xs-3">
                <Button color="primary">8</Button>{' '}
              </div>
              <div class="col-xs-3">
                <Button color="primary">9</Button>{' '}
              </div>
              <div class="col-xs-3">
                <Button color="warning">x</Button>{' '}
              </div>
            </div>

            <div class="row">
              <Button color="primary">4</Button>{' '}
              <Button color="primary">5</Button>{' '}
              <Button color="primary">6</Button>{' '}
              <Button color="warning">-</Button>{' '}
            </div>
            <div class="row">
              <Button color="primary">1</Button>{' '}
              <Button color="primary">2</Button>{' '}
              <Button color="primary">3</Button>{' '}
              <Button color="warning">+</Button>{' '}
            </div>
            <div class="row">
              <Button color="primary">1</Button>{' '}
              <Button color="success">=</Button>{' '}
              <Button color="danger">CE</Button>{' '}
              <Button color="warning">/</Button>{' '}
            </div>


      </Container>
    );
  }

}
