import React, {Component} from 'react';
import {Container, Col, Row, Button} from 'reactstrap';

import MediaConcepts from './MediaConcepts.js';
import MediaArt from './MediaArt.js';
import MediaVideos from './MediaVideos.js';
import MediaDev from './MediaDev.js';
/**
 * battleMETALsite
 * Peter Roohr
 * 
 * The fun bits, this page will show off the various screenshots, concept art, and videos.

 */

 class MediaPage extends Component{
  constructor(props){
    super(props);
    this.state ={
      openVideo : true,
      openArt : false,
      openConcept : false,
      openDev : false
    }
    this.toggleVideo = this.toggleVideo.bind(this);
    this.toggleArt = this.toggleArt.bind(this);
    this.toggleConcept = this.toggleConcept.bind(this);
    this.toggleDev = this.toggleDev.bind(this);
  }

  toggleVideo(){
    this.setState({openVideo : true, openArt : false, openConcept : false, openDev : false});
  }

  toggleArt(){
    this.setState({openVideo : false, openArt : true, openConcept : false, openDev : false});
  }

  toggleConcept(){
    this.setState({openVideo : false, openArt : false, openConcept : true, openDev : false});
  }

  toggleDev(){
    this.setState({openVideo : false, openArt : false, openConcept : false , openDev : true});
  }

  render(){
    return(
    <Container>
      <Row className="justify-content-md-center">
        <Col md={{size:3}}><Button onClick={this.toggleVideo} color="info" style={{marginBottom: '1rem'}}>Videos</Button></Col>
        <Col md={{size:3}}><Button onClick={this.toggleArt} color="info" style={{marginBottom: '1rem'}}>Official Artwork</Button></Col>
        <Col md={{size:3}}><Button onClick={this.toggleDev} color="info" style={{marginBottom: '1rem'}}>Dev Art</Button></Col>
        <Col md={{size:3}}><Button onClick={this.toggleConcept} color="info" style={{marginBottom: '1rem'}}>Concept Art</Button></Col>
      </Row>
      <Row>
        <Col md={{size:10, offset:1}}><MediaVideos open={this.state.openVideo}/></Col>
      </Row>
      <Row>
        <Col md={{size:10, offset:1}}><MediaArt open={this.state.openArt}/></Col>
      </Row>
      <Row>
        <Col md={{size:10, offset:1}}><MediaDev open={this.state.openDev}/></Col>
      </Row>
      <Row>
        <Col md={{size:10, offset:1}}><MediaConcepts open={this.state.openConcept}/></Col>
      </Row>
    </Container>
    );
  }
 }

 export default MediaPage;