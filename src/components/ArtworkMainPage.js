import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import NavHeader from '../NavHeader';
import CommonProjectPanel from '../common/CommonProjectPanel';
import CommonHeaderSpanner from '../common/CommonHeaderSpanner';

/*
WebsiteReact
Peter Roohr
Overview:  
    The entry/main page to the Artwork section of the site.
        Artwork contains the following sub sections:
            Miniatures
            3D Renders
            Recoil
            Concept Art
    TODO - 
*/

class ArtworkMainPage extends Component{
    render(){
        return(
        <Container >
            <NavHeader />
            <CommonHeaderSpanner />
            <Row>
                <Col md={{size:4}}><img className="img-fluid rounded" src='/img/thumbs/artThumb.png' alt=''></img></Col>
                <Col md={{size:6}}>
                    <p>
                    This section details the many art projects I've undertaken across a wide selection of mediums; from concept art, 3D modeling, to painting
                    miniatures for tabletop wargaming. Majority of my artwork is in a hobby capacity, or with the case of Concetp art; in-service to another
                    project that I am working on.</p>
                </Col>
            </Row>
            &nbsp;
            <Row>
                <Col md={{size:4, offset:2}}>
                    <CommonProjectPanel clazz="btn btn-info artworkTitlePanel" linkPath="/artwork/recoil" linkVar="" projectName="Recoil" imagePath="placeholder" />
                </Col>
                <Col md={{size:4}}>
                    <CommonProjectPanel clazz="btn btn-info artworkTitlePanel" linkPath="/artwork/concepts" linkVar="" projectName="Concept Art" imagePath="placeholder"/>
                </Col>
            </Row>
            &nbsp;
            <Row>
                <Col md={{size:4, offset:2}}>
                    <CommonProjectPanel clazz="btn btn-info artworkTitlePanel" linkPath="/artwork/3d" linkVar="" projectName="3D Work" imagePath="placeholder"/>
                </Col>
                <Col md={{size:4}}>
                    <CommonProjectPanel clazz="btn btn-info artworkTitlePanel" linkPath="/artwork/minis" linkVar="" projectName="Miniatures" imagePath="placeholder"/>
                </Col>
            </Row>
        </Container>
        );
    }
}

export default ArtworkMainPage;
