import React from 'react';

import About from './About';
import Exp from './Exp';
import Resume from './Resume';
import Eats from './Eats';
import Landing from './Landing';

import { Switch, Route } from 'react-router-dom';


const Main =  () => (
    <Switch>
        <Route exact path = "/" component = {Landing} />
        <Route exact path = "/About" component = {About} />
        <Route exact path = "/Exp" component = {Exp} />
        <Route exact path = "/Resume" component = {Resume} />
        <Route exact path = "/Eats" component = {Eats} />
    </Switch>
)

export default Main