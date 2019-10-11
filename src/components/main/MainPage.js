import React, {Component} from 'react';
import {Container, Col, Row} from 'reactstrap';

import HeaderNews from './HeaderNews.js';

/**
 * battleMETALsite
 * Peter Roohr
 * Main page to website, is shown when user first visits.
 * 
 */

 class MainPage extends Component{
  constructor(props){
    super(props);
      this.state = {
        toggle :[1, 0, 0, 0, 0]
      };
  
      this.toggleTab = this.toggleTab.bind(this);
    
    }

  maintainSwitch(value){
    let total = this.state.size;
    for(var i=0; i < total; i++){
      if(value === i){
        this.state.toggle[i] = 1;
      }
      else{
        this.state.toggle[i] = 0;
      }
    }
  }

  toggleTab(){

  }

  render(){
    return(
    <Container>
      <Row>
        <Col md={{size:10, offset:2}}><b><h1>battleMETAL</h1></b></Col>
      </Row>
        <HeaderNews />
      <Row>
        <Col md={{size:10, offset:2}}><p>Strap into a multi-ton walking tank and blast your way through a war-torn world.</p>
        <p>A revenge weapon never meant to be activated, a war the population never saw coming.</p>
        <p>You are a DEAD HAND and your orders are clear.</p>
        </Col>
      </Row>
      <Row>
        
      </Row>
    </Container>);
  }
 }



 export default MainPage;