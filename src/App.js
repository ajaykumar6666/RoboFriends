import React from "react";
import CardList from "./CardList";
import SearchBox from './SearchBox'

class app extends React.Component {
    constructor(){
        super()
        this.state={
            robots:[],
            searchfield:''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(respose=>{
            return respose.json();
        })
        .then(users => {
            this.setState({robots:users})
        });
  
    }
    onSearchChange=(event)=>{
        this.setState({searchfield: event.target.value})

    }
    render(){
        const filteredRobots=this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <div className="tc">
            <h1>Robo Friends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <CardList robots={filteredRobots}></CardList>
            </div>
        );
        }

    }


export default app;