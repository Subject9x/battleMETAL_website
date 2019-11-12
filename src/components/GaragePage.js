import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

import NavHeader from '../NavHeader'
import CommonProjectPanel from '../common/CommonProjectPanel';
import CommonHeaderSpanner from '../common/CommonHeaderSpanner';
/*
WebsiteReact
Peter Roohr
Overview:
    Garage page is the main entry point for all the projects, users can browse by project. Each project is 
*/

class GaragePage extends Component{
    render(){
        return(
        <Container>
            <NavHeader/>
            <CommonHeaderSpanner />
            &nbsp;
            <Row>
                <Col md={{size:4}}><img className="img-fluid rounded" src='/img/thumbs/codeThumb.png' alt=''></img></Col>
                <Col md={{size:6}}>
                    <p>Here you will find all the freelance and hobby projects I've worked on so far. My main focus for this coding work is on video game
                        design and programming. However, I also engage in web and UI design as well, I enjoy making smooth functioning UIX designs. For code 
                        style, I emphasize maintainable, configurable, and generic code wherever possible. The game project <i>battleMETAL</i> is a great
                        example of this with multiple systems added to the Quake engine that can be extended easily.
                    </p>
                </Col>
            </Row>
            &nbsp;
            <Row>
                <Col md={{size:4}} color="info">
                    <CommonProjectPanel  clazz="btn btn-primary codePanel" imagePath='/img/projectsCode/thumbs/thumb_battlemetal.png' projectName="battleMETAL" linkPath="/garage/project/" linkVar="0" />
                </Col>
                <Col md={{size:4}}>
                    <CommonProjectPanel clazz="btn btn-primary codePanel" imagePath='/img/projectsCode/thumbs/thumb_battlemetalweb.png' projectName="Website: battleMETAL" linkPath="/garage/project/" linkVar="1" />
                </Col>
                <Col md={{size:4}}>
                    <CommonProjectPanel clazz="btn btn-primary codePanel" projectName="LANDWAR Unit Calculator" linkPath="/garage/project/" linkVar="2" />
                </Col>
                <Col md={{size:4}}>
                    <CommonProjectPanel clazz="btn btn-primary codePanel" projectName="Website: LANDWAR" linkPath="/garage/project/" linkVar="3" />
                </Col>
                <Col md={{size:4}}>
                    <CommonProjectPanel clazz="btn btn-primary codePanel" imagePath='/img/projectsCode/thumbs/thumb_website2019.png' linkPath="/garage/project/" linkVar="9" projectName='Website: 2019' />                
                </Col>
                <Col md={{size:4}}>
                    <CommonProjectPanel clazz="btn btn-success commonProjectPanelSucces" imagePath='/img/projectsCode/thumbs/thumb_zond1.png' linkPath="/garage/project/" linkVar="4" projectName="Zond 1"/>
                </Col>
                <Col md={{size:4}}>
                    <CommonProjectPanel clazz="btn btn-success commonProjectPanelSucces" imagePath='/img/projectsCode/thumbs/thumb_website2015.png' linkPath="/garage/project/" linkVar="5" projectName="Website - 2015" />
                </Col>
                <Col md={{size:4}}>
                    <CommonProjectPanel clazz="btn btn-success commonProjectPanelSucces" imagePath='/img/projectsCode/thumbs/thumb_strikeralpha.png' linkPath="/garage/project/" linkVar="6" projectName="App - Striker Alpha"/>
                </Col>
                <Col md={{size:4}}>
                    <CommonProjectPanel clazz="btn btn-secondary" imagePath='/img/projectsCode/thumbs/thumb_rigs.png' linkPath="/garage/project/" linkVar="7" projectName="BattleRigs" />
                </Col>
                <Col md={{size:4}}>
                    <CommonProjectPanel clazz="btn btn-secondary" imagePath='/img/projectsCode/thumbs/thumb_mw2d.png' linkPath="/garage/project/" linkVar="8" projectName='MW2D:Mercs' />
                </Col>
            </Row>
            &nbsp;
        </Container>
        );
    }
}

export default GaragePage;