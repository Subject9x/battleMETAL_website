import React, { Component } from 'react';
import { createBrowserHistory } from "history";
import { Route, Router, Switch } from 'react-router-dom';

import DevelopPage from './components/develop/DevelopPage';
import FAQPage from './components/faq/FAQPage';
import MediaPage from './components/media/MediaPage';
import MainPage from './components/main/MainPage';

/*
battleMETALsite
Peter Roohr
Overview:
    main js entry point
*/

const history= createBrowserHistory();

const Routing= (props) =>{
    return(
    <Router history={history} >
        <Switch>
            <Route path="/" exact component={MainPage}/>
            <Route path="/develop" exact component={DevelopPage}/>
            <Route path="/faq" exact component={FAQPage}/>
            <Route path="/media" exact component={MediaPage} />
        </Switch>
    </Router>
    );
}

class Main extends Component{
    render(){
        return(
            <Routing />
        );
    }
}

export default Main;