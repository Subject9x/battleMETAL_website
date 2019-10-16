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
      </Container>
    </Collapse>
    );
  }
}

export default MediaVideos;