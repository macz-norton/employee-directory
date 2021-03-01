import React from "react";
import Body from "./Body";
import Filters from "./Filters";
import Header from "./Header";
import API from "../utils/API";
// import testUsers from "../testUsers.json";

class RandomUserContainer extends React.Component {
  
    state = {
      users: [],
      search: ""
    }
  
    componentDidMount() {
      this.randomUser("");
    }
  
    randomUser = () => {
      API.getUsers(30)
        .then(employee => this.setState({ users: employee.data.results }))
        .catch(err => console.log(err))
    }
  
    handleInputChange = event => {
      const value = event.target.value;
      const name = event.target.name;
  
      this.setState({
        [name]: value
      });
    };
    
    render() {
      return (
        <div className="container">
          <Header />
          <Filters handleInputChange={this.handleInputChange}/>
          {this.state.search}
          <Body users={this.state.users} search={this.state.search}/>
        </div>
      );
    }
  
  }
  
  export default RandomUserContainer;