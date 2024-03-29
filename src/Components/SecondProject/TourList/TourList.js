import React, { Component } from 'react'
import '../TourList/TourList.scss';
import Tour from '../Tour/Tour';
import {tourData} from '../TourData';

export default class TourList extends Component {
    state = {
        tours: tourData
    };
    removeTour = id => {
        console.log(id,this.state.tours);

            const {tours} = this.state;
            const sortedTours = tours.filter(tour=> tour.id !==id);
            this.setState({
                tours:sortedTours
            });
    };
    render() {
       const {tours} = this.state;
            
        return (
            <section className="tourlist">
             {tours.map(tour =>{
                 return(
                     <Tour key={tour.id} tour={tour} removeTours={this.removeTour}/>
                 )
             })}
            </section>
        )
    }
}
