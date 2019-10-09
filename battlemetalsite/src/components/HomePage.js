import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom'

/*
battleMETALsite
Peter Roohr
Overview:
    main page for the entire website.
*/
class HomePage extends Component{
    render(){
        return(
            <Container className="pageBackground">
                <Row>
                    <Col sm={{ size: 6, offset: 3 }}>
                        <h1>Roohr Orbital Yards</h1>
                    </Col>
                </Row>
                &nbsp;
                <Row>
                    <Col sm={{ size: 6, offset: 3 }}>
                        Hello and welcome to the Orbital Yards, here you can explore all the projects and endeavors that I embark on. Each icon below will take you to a different sector of the 
                        station, to read more about me specifically, just click <Link to="/about">Here</Link>
                    </Col>
                </Row>
                &nbsp;
                &nbsp;
                <Row>
                    <Col md={{ size: 4, offset:2 }}><HomePageButtonType link="/garage" alt="[Code Work]" src='/img/thumbs/codeThumb.png'/></Col>
                    <Col md={{ size: 4}}><HomePageButtonType link="/artwork/home" alt="[Artwork]" src='/img/thumbs/artThumb.png'/></Col>
                </Row>
                &nbsp;
                <Row>
                    <Col md={{ size: 4, offset:2 }}><HomePageButtonType link="/boardgames" alt="[Board Games]" src='/img/thumbs/tableThumb.png'/></Col>
                    <Col md={{ size: 4}}><HomePageButtonType link="/network" alt="[Other Sites]" src='/img/thumbs/netThumb.png'/></Col>
                </Row>
            </Container>
        );
    }
}
export default HomePage;

const HomePageButtonType = (props) =>{
    return(
        <Link to={props.link}><img className="img-fluid rounded" alt={props.alt} src={props.src} /></Link>
    );
}