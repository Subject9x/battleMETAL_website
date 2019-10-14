import React, {Component} from 'react';
import {Container, Col, Row, Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import classnames from 'classnames';

import HeaderNews from './HeaderNews.js';
import AboutPage from '../about/AboutPage.js';
import DevelopPage from '../develop/DevelopPage.js';
import ModifyPage from '../modify/ModifyPage.js';
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
                Modify
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={classnames({active:this.state.activeTab ==='4'})} onClick={()=>{this.toggleTab('4');}}>
                FAQ
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={classnames({active:this.state.activeTab ==='5'})} onClick={()=>{this.toggleTab('5');}}>
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
              <ModifyPage />
            </TabPane>
            <TabPane tabId="4">
              <FAQPage />
            </TabPane>
            <TabPane tabId="5">
              <MediaPage />
            </TabPane>
          </TabContent>
        </Col>
      </Row>
      <Row><Col>(C) 2019 - Peter Roohr</Col></Row>
    </Container>);
  }
}
export default MainPage;
