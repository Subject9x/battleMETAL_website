import React, {Component} from 'react';
import {Container, Col, Row} from 'reactstrap';

/**
 * battleMETALsite
 * Peter Roohr
 * 
 * Frequently Asked Question; 
 * maybe have this updated programmatically.
 */

 class FAQPage extends Component{
  render(){
    return(
      <Container fluid={true}>
        <Row className="justify-content-md-center">
          <Col md={{size:10}}>
            <div className="panelMETAL">
              <div className="panelMETALTitle"><b><h4>Frequently Asked Questions:</h4></b></div>
              <FAQRowItem question="where to download?" answer="in heck"/>
            
            + what platforms are supported?
            + how do I edit controls?
            + how do I report a bug?
            + how do I 
            + Will this game have Multiplayer?
            + 
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

const FAQRowItem =(props)=>{
  return(
    <div>
      <div><b>{props.question}</b></div>
      <div><ul><li>{props.answer}</li></ul></div>
    </div>
  );
}

export default FAQPage;
