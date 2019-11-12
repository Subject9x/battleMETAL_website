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

class MediaArt extends Component{
  constructor(props){
    super(props);
    this.state = {collapse:false};
  }

  render(){
    return(
    <Collapse isOpen={this.props.open}>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={{size:4}}><CommonImagePanel src="./img/art/art (1).jpg" alt="some alt" className="mw-100"/></Col>
          <Col md={{size:4}}><CommonImagePanel src="./img/art/art (2).png" alt="some alt" className="mw-100"/></Col>
          <Col md={{size:4}}><CommonImagePanel src="./img/art/art (3).png" alt="some alt" className="mw-100"/></Col>
          <Col md={{size:4}}><CommonImagePanel src="./img/art/art (4).png" alt="some alt" className="mw-100"/></Col>
          <Col md={{size:4}}><CommonImagePanel src="./img/art/art (5).png" alt="some alt" className="mw-100"/></Col>
          <Col md={{size:4}}><CommonImagePanel src="./img/art/art (6).png" alt="some alt" className="mw-100"/></Col>
          <Col md={{size:4}}><CommonImagePanel src="./img/art/art (7).png" alt="some alt" className="mw-100"/></Col>
          <Col md={{size:4}}><CommonImagePanel src="./img/art/art (8).png" alt="some alt" className="mw-100"/></Col>
          <Col md={{size:4}}><CommonImagePanel src="./img/art/art (9).png" alt="some alt" className="mw-100"/></Col>
          <Col md={{size:4}}><CommonImagePanel src="./img/art/art (10).png" alt="some alt" className="mw-100"/></Col>
          <Col md={{size:4}}><CommonImagePanel src="./img/art/art (11).png" alt="some alt" className="mw-100"/></Col>
          <Col md={{size:4}}><CommonImagePanel src="./img/art/art (12).png" alt="some alt" className="mw-100"/></Col>
        </Row>
      </Container>
    </Collapse>
    );
  }
}

export default MediaArt;