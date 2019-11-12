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
          <Col md={{size:8}}>
            <div className="cardMETAL">
              <div><b><h4>Frequently Asked Questions:</h4></b></div>
              <FAQRowItem question="Where is the download again?" 
                answer={<p>Game is hosted on <a href="itch.io">itch.io</a></p>}/>
              <FAQRowItem question="What platforms are supported?" 
                answer="Windows 7, 8, 10 and there are plans for Linux, possibly Mac OS."/>
              <FAQRowItem question="How do I report a bug?" 
                answer={<p>Send an email to <a href="mailto: battleMETAL.qa@gmail.com"> battleMETAL.qa@gmail.com</a> or fill out a bug report using the following link.</p>}/>
              <FAQRowItem question="How do I edit controls?" 
                answer="You can modify the controls in a few ways; using the menu in-game, or the config.cfg file, the README.txt will have more info."/>
              <FAQRowItem question="Will the game have Multiplayer?" 
                answer={<p>Although the <i>Quake</i> engine is fully capable of networked play, <i>battleMETAL</i> is a single-player only experience. The engine is not optimized for large, outdoor, levels nor for game objects with sub-components.</p>}/>
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
      <div className="cardTitleMETAL"><b><h4>{props.question}</h4></b></div>
      <div><ul><li>{props.answer}</li></ul></div>
    </div>
  );
}

export default FAQPage;
