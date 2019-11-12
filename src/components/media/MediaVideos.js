import React, {Component} from 'react';
import {Container, Col, Row, Collapse} from 'reactstrap';

/**
 * battleMETALsite
 * Peter Roohr
 * 
 * Page:Media
 * Sub-Page: Videos
 * 
 */

class MediaVideos extends Component{
  constructor(props){
    super(props);
    this.state = {collapse:false};
  }

  render(){
    return(
    <Collapse isOpen={this.props.open}>
      <Container>
        <Row>
          <MediaRowItem title="Beta v0.9.5 test" url="https://www.youtube.com/embed/RoHYqG4Kr_4" />
          <MediaRowItem title="Alpha v1.4 Overview" url="https://www.youtube.com/embed/Q5wf-UHg1Jk" />
          <MediaRowItem title="Alpha v1.4 Co-op test" url="https://www.youtube.com/embed/vAu2_383_sU" />
          <MediaRowItem title="Alpha v1.0 Mission Test" url="https://www.youtube.com/embed/2FPZoTN6C7Y" />
        </Row>
      </Container>
    </Collapse>
    );
  }
}

const MediaRowItem =(props)=>{
  return(
    <Col md={{size:6}}>
      <Container fluid className="panelMETAL">
        <Row>
          <Col md={{size:10}}><h4 className="cardTitleMETAL">{props.title}</h4></Col>
        </Row>
        <Row>
          <Col>
            <iframe width="400" height="315" src={props.url} allowFullScreen frameBorder="0"/>
          </Col>
        </Row>
      </Container>
    </Col>
  );
}

export default MediaVideos;