import React, {Component} from 'react';
import {Container, Col, Row, Collapse} from 'reactstrap';

import CommonImagePanel from '../main/CommonImagePanel.js';
/**
 * battleMETALsite
 * Peter Roohr
 * 
 * Page:Media
 * Sub-Page: Artwork
 * 
 */

class MediaDev extends Component{
  constructor(props){
    super(props);
    this.state = {collapse:false};
  }

  render(){
    return(
    <Collapse isOpen={this.props.open}>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={{size:4}}><CommonImagePanel src="./img/dev/dev (1).png" alt="some alt" className="mw-100"/></Col>
          <Col md={{size:4}}><CommonImagePanel src="./img/dev/dev (2).png" alt="some alt" className="mw-100"/></Col>
          <Col md={{size:4}}><CommonImagePanel src="./img/dev/dev (3).png" alt="some alt" className="mw-100"/></Col>
          <Col md={{size:4}}><CommonImagePanel src="./img/dev/dev (4).png" alt="some alt" className="mw-100"/></Col>
          <Col md={{size:4}}><CommonImagePanel src="./img/dev/dev (5).png" alt="some alt" className="mw-100"/></Col>
          <Col md={{size:4}}><CommonImagePanel src="./img/dev/dev (6).png" alt="some alt" className="mw-100"/></Col>
          <Col md={{size:4}}><CommonImagePanel src="./img/dev/dev (7).png" alt="some alt" className="mw-100"/></Col>
          <Col md={{size:4}}><CommonImagePanel src="./img/dev/dev (8).png" alt="some alt" className="mw-100"/></Col>
          <Col md={{size:4}}><CommonImagePanel src="./img/dev/dev (9).png" alt="some alt" className="mw-100"/></Col>
          <Col md={{size:4}}><CommonImagePanel src="./img/dev/dev (10).png" alt="some alt" className="mw-100"/></Col>
          <Col md={{size:4}}><CommonImagePanel src="./img/dev/dev (11).png" alt="some alt" className="mw-100"/></Col>
          <Col md={{size:4}}><CommonImagePanel src="./img/dev/dev (12).png" alt="some alt" className="mw-100"/></Col>
          <Col md={{size:4}}><CommonImagePanel src="./img/dev/dev (13).png" alt="some alt" className="mw-100"/></Col>
          <Col md={{size:4}}><CommonImagePanel src="./img/dev/dev (14).png" alt="some alt" className="mw-100"/></Col>
          <Col md={{size:4}}><CommonImagePanel src="./img/dev/dev (15).png" alt="some alt" className="mw-100"/></Col>
          <Col md={{size:4}}><CommonImagePanel src="./img/dev/dev (16).png" alt="some alt" className="mw-100"/></Col>
          <Col md={{size:4}}><CommonImagePanel src="./img/dev/dev (17).png" alt="some alt" className="mw-100"/></Col>
          <Col md={{size:4}}><CommonImagePanel src="./img/dev/dev (18).png" alt="some alt" className="mw-100"/></Col>
          <Col md={{size:4}}><CommonImagePanel src="./img/dev/dev (19).png" alt="some alt" className="mw-100"/></Col>
        </Row>
      </Container>
    </Collapse>
    );
  }
}

export default MediaDev;