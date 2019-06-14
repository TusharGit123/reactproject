import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import FirstProject from './FirstProject/FirstProjectMain';
import SecondProject from './SecondProject/SecondProjectMain';
import ThirdProject from './ThirdProject/ThirdProjectMain';
import FourthProject from './FourthProject/FourthProjectMain';
import FifthProject from './FifthProject/FifthProjectMain';
import Header from './Header';


export class MainProject extends Component {
    render() {
        return (
            <React.Fragment>
            <Router>
                <Header/>
                <Route exact path="/" component={FirstProject}/>
                <Route exact path="/secondproject" component={SecondProject}/>
                <Route exact path="/thirdproject" component={ThirdProject}/>
                <Route exact path="/fourthproject" component={FourthProject}/>
                <Route exact path="/fifthproject" component={FifthProject}/>
            </Router>
            </React.Fragment>
           
        )
    }
}

export default MainProject
