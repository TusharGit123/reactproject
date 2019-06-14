import React, { Component } from 'react'
import FriendList from './FriendList';
import '../../Assets/css/friendlist.css';
import person from '../../Assets/images/person1.png';
import person1 from '../../Assets/images/person2.png';
import person2 from '../../Assets/images/person3.png';

export class FirstProjectMain extends Component {
    render() {
        return (
            <React.Fragment>
            <FriendList
                image={person}
                name={'TUSHAR'}
                job={'developer'}
              />
              <FriendList
                image={person1}
                name={'MONIKA'}
                job={'developer'}
                >
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                </FriendList>
              <FriendList
                image={person2}
                name={'POOJA'}
                job={'developer'}
              />  
            </React.Fragment>
        )
    }
}

export default FirstProjectMain
