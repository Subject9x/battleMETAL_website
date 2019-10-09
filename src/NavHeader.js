import React, { Component } from 'react';
import {Row, Container, Col, Button, Nav, Navbar, NavbarBrand, NavItem} from 'reactstrap';
import { Link } from 'react-router-dom';
/*
WebsiteReact
Peter Roohr
Overview:
    Header Nav sits atop all pages EXCEPT home page.
    maintains buttons for quick navigation.

    this is meant to be included in a parent component's Container stack.

    TODO - make sure this is stickied at the top
*/

class NavHeader extends Component{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render(){
        return(
        <Row>
        <Col md={{size:12}}>
            <Container id='fixed-top' fixed='top' className="container-fluid">
                <Navbar color="secondary" light fixed='top' expand="md">
                    <NavbarBrand href="/">battleMETAL: The Game</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link to="/"><Button>Home</Button></Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/develop"><Button>Develop</Button></Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/faq"><Button>FAQ</Button></Link> 
                        </NavItem>
                        <NavItem>
                            <Link to="/media"><Button>Media</Button></Link>
                        </NavItem>
                    </Nav>
                </Navbar>
            </Container>
         </Col>
         </Row>
        );
    }
}

export default NavHeader;