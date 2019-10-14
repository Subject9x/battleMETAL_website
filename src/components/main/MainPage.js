import React, {Component} from 'react';
import {Container, Col, Row, Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import classnames from 'classnames';

import HeaderNews from './HeaderNews.js';
import AboutPage from '../about/AboutPage.js';
import DevelopPage from '../develop/DevelopPage.js';
import MediaPage from '../media/MediaPage.js';
import FAQPage from '../faq/FAQPage.js';
/**
 * battleMETALsite
 * Peter Roohr
 * Main page to website, is shown when user first visits.
 * 
 */

 class MainPage extends Component{
  constructor(props){
    super(props);
    this.state={
      activeTab : '1',
    };
    this.toggleTab = this.toggleTab.bind(this);
  }

  toggleTab = (tab) =>{
    if(this.state.activeTab !== tab) this.setState({activeTab : tab});
  }

  render(){
    return(
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col md={{size:5}}><img className="img-fuild" src="/img/title.png" alt="battleMETAL:The Game"></img></Col>
      </Row>
      &nbsp;
      <HeaderNews />
      &nbsp;
      <Row>
        <Col lg={{size:10, offset:1}}>
          <h3><p>Strap into a multi-ton walking tank and blast your way through a war-torn world.</p>
          <p>A revenge weapon never meant to be activated, a war the population never saw coming.</p>
          <p>You are a DEAD HAND and your orders are clear.</p></h3>
        </Col>
      </Row>
      &nbsp;
      <Row >
        <Col md={{size:6, offset:4}}>
          <Nav tabs>
            <NavItem>
              <NavLink className={classnames({active:this.state.activeTab ==='1'} )} onClick={()=>{this.toggleTab('1');}}>
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={classnames({active:this.state.activeTab ==='2'})} onClick={()=>{this.toggleTab('2');}}>
                Develop
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={classnames({active:this.state.activeTab ==='3'})} onClick={()=>{this.toggleTab('3');}}>
                FAQ
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={classnames({active:this.state.activeTab ==='4'})} onClick={()=>{this.toggleTab('4');}}>
                Media
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
      </Row>
      &nbsp;
      <Row>
        <Col className="justify-content-md-center">
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <AboutPage />
            </TabPane>
            <TabPane tabId="2">
              <DevelopPage />
            </TabPane>
            <TabPane tabId="3">
              <FAQPage />
            </TabPane>
            <TabPane tabId="4">
              <MediaPage />
            </TabPane>
          </TabContent>
        </Col>
      </Row>
    </Container>);
  }
 }

 export default MainPage;
