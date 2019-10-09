import React, { Component } from 'react';
import { Route } from 'react-router';

import ArtworkPageRecoilMain from './ArtworkPageRecoilMain';
import ArtworkPageMinisMain from './ArtworkPageMinisMain';
import ArtworkMainPage from './ArtworkMainPage';
import ArtworkPageConceptsMain from './ArtworkPageConcepts';
import ArtworkPageModelsMain from './ArtworkPageModels';

/*
WebsiteReact
Peter Roohr
Overview:  
  Artwork section - dead-simple navigation
  this preserves NavHeader has the primary Router component without spamming it with
  bespoke sub-pages.
*/

class ArtworkNav extends Component{
  render(){
    return(
      <>
        <Route path="/artwork/home" exact render={(props)=>{return(<ArtworkMainPage {...props}/>);}} />
        <Route path="/artwork/recoil" exact render={(props)=>{return(<ArtworkPageRecoilMain {...props}/>);}} />
        <Route path="/artwork/minis" exact render={(props)=>{return(<ArtworkPageMinisMain {...props}/>);}} />
        <Route path="/artwork/concepts" exact render={(props)=>{return(<ArtworkPageConceptsMain {...props}/>);}} />
        <Route path="/artwork/3d" exact render={(props)=>{return(<ArtworkPageModelsMain {...props}/>);}} />
      </>
    );
  }
}

export default ArtworkNav;