import React, { Component } from 'react';  
import Cardlist from '../components/Cardlist';  
import Searchbox from '../components/Searchbox'; 
//import { robots } from './robots'; 
import Scroll from '../components/Scroll'; 
import './App.css'; 


class App extends Component { //smart components 
    constructor() { 
        super(); 
        this.state = {  //this describes our app 
        robots: [],    //robots here 
        searchfield: '' 
        }
    } 

    componentDidMount() {  
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => { 
           return response.json(); 
        })
        .then(users => {
           this.setState({ robots: users });  
         })
     }

    onSearchChange = (event) => {   
        this.setState({ searchfield: event.target.value }); 
        
        //console.log(filteredRobots); 
    } 

    render() {  
        const filteredRobots = this.state.robots.filter(robots => { 
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase()); 
    }) 
        return (  
            <div className='tc'>
            <h1 className='f1'>RoboFriends</h1> 
            <Searchbox searchChange={this.onSearchChange} /> 
            <Scroll>
            <Cardlist robots={filteredRobots} /> 
            </Scroll>
            </div>
        ); 
    }
}

export default App; 