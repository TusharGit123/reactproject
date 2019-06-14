import React, { Component } from 'react'
import Navbar from './Navbar/Navbar';
import '../../Assets/css/citytour.scss';
import TourList from './TourList/TourList';

export class SecondProjectMain extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <TourList/>
            </React.Fragment>
        )
    }
}

export default SecondProjectMain
