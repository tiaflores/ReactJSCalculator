import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Button extends React.Component{

  render(){
    return(
      <Container>
        <Row>
          <Col><Button variant="primary">Primary</Button></Col>
          <Col>...</Col>
          <Col>...</Col>
          <Col>...</Col>
        </Row>
        <Row>
          <Col>...</Col>
          <Col>...</Col>
          <Col>...</Col>
          <Col>...</Col>
        </Row>
        <Row>
          <Col>...</Col>
          <Col>...</Col>
          <Col>...</Col>
          <Col>...</Col>
        </Row>
        <Row>
          <Col>...</Col>
          <Col>...</Col>
          <Col>...</Col>
          <Col>...</Col>
        </Row>
      </Container>
    );
  }

}
