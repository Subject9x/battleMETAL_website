import React, {Component} from 'react';
import {Container, Col, Row, Collapse} from 'reactstrap';

import CommonImagePanel from '../main/CommonImagePanel.js';

/**
 * battleMETALsite
 * Peter Roohr
 * 
 * Page:Media
 * Sub-Page: Concept Art
 * 
 */

 
class MediaConcepts extends Component{
  constructor(props){
    super(props);
    this.state = {collapse:false};
  }
  render(){
    return(
    <Collapse isOpen={this.props.open}>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={{size:4}}><CommonImagePanel src="./img/concept/concept_lightmechs.jpg" alt="some alt" className="mw-100"/></Col>
          <Col md={{size:4}}><CommonImagePanel src="./img/concept/concept_details.jpg" alt="some alt" className="mw-100"/></Col>
          <Col md={{size:4}}><CommonImagePanel src="./img/concept/concept_details_blk.jpg" alt="some alt" className="mw-100"/></Col>
          <Col md={{size:4}}><CommonImagePanel src="./img/concept/concept_mediummech.jpg" alt="some alt" className="mw-100"/></Col>
          <Col md={{size:4}}><CommonImagePanel src="./img/concept/concept_monitor.jpg" alt="some alt" className="mw-100"/></Col>
          <Col md={{size:4}}><CommonImagePanel src="./img/concept/concept_details_matok.jpg" alt="some alt" className="mw-100"/></Col>
          <Col md={{size:4}}><CommonImagePanel src="./img/concept/concept_foslager.jpg" alt="some alt" className="mw-100"/></Col>
          <Col md={{size:4}}><CommonImagePanel src="./img/concept/concept_heav_tank.jpg" alt="some alt" className="mw-100"/></Col>
          <Col md={{size:4}}><CommonImagePanel src="./img/concept/concept_onnek.jpg" alt="some alt" className="mw-100"/></Col>
          <Col md={{size:4}}><CommonImagePanel src="./img/concept/concepts.jpg" alt="some alt" className="mw-100"/></Col>
          <Col md={{size:4}}><CommonImagePanel src="./img/concept/concept_hud.jpg" alt="some alt" className="mw-100"/></Col>
          <Col md={{size:4}}><CommonImagePanel src="./img/concept/concept_weapons.jpg" alt="some alt" className="mw-100"/></Col>
          <Col md={{size:4}}><CommonImagePanel src="./img/concept/alpha_weps.png" alt="some alt" className="mw-100"/></Col>
          <Col md={{size:4}}><CommonImagePanel src="./img/concept/proto_buildings.png" alt="some alt" className="mw-100"/></Col>
        </Row>
      </Container>
    </Collapse>
    );
  }
}

export default MediaConcepts;