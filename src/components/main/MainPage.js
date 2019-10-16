import React, {Component} from 'react';
import {Container, Col, Row, Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import classnames from 'classnames';

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
    <Container fluid={true}>
      <Row className="justify-content-lg-center">
        <Col lg={{size:8, offset:2}}><img src="/img/title.png" alt="battleMETAL:The Game" /></Col>
      </Row>
      <Row >
        <Col md={{size:5,offset:1}}>
          <iframe title="foo" />
        </Col>
        <Col md={{size:5}}>
          <div className="panelMETAL">
            <div className="panelMETALTitle"><h4>News</h4></div>
            <div>
              <ul>
                <li>Beta v1.0.0 Release - TBD Dec 2019</li>
                <li><a href="" target="...">Beta v1.0.0 Changelog</a></li>
              </ul>
            </div>
          </div>
          <div></div>
        </Col>
      </Row>
      &nbsp;
      <Row>
        <Col md={{size:8}}>
          <Nav tabs={true}>
            <NavItem className="navButton">
              <NavLink className={classnames({active:this.state.activeTab ==='1'} )} onClick={()=>{this.toggleTab('1');}}>
                <h4>About</h4>
              </NavLink>
            </NavItem>
            <NavItem className="navButton">
              <NavLink className={classnames({active:this.state.activeTab ==='2'})} onClick={()=>{this.toggleTab('2');}}>
                <h4>Develop</h4>
              </NavLink>
            </NavItem>
            <NavItem className="navButton">
              <NavLink className={classnames({active:this.state.activeTab ==='3'})} onClick={()=>{this.toggleTab('3');}}>
                <h4>Modify</h4>
              </NavLink>
            </NavItem>
            <NavItem className="navButton">
              <NavLink className={classnames({active:this.state.activeTab ==='4'})} onClick={()=>{this.toggleTab('4');}}>
                <h4>FAQ</h4>
              </NavLink>
            </NavItem>
            <NavItem className="navButton">
              <NavLink className={classnames({active:this.state.activeTab ==='5'})} onClick={()=>{this.toggleTab('5');}}>
                <h4>Media</h4>
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
