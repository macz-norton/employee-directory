import React from "react";
import Body from "./Body";
import Header from "./Header";
import API from "../utils/API";
// import testUsers from "../testUsers.json";

class RandomUserContainer extends React.Component {
  
    state = {
      data: [],
      search: ""
    }
  
    componentDidMount() {
      this.randomUser("");
    }
  
    randomUser = () => {
      API.getUsers(30)
        .then(employee => this.setState({ data: employee.data.results }))
        .catch(err => console.log(err))
    }
    
    render() {
      return (
        <div className="container">
          <Header />
          <Body data={this.state.data} />
        </div>
      );
    }
  
  }
  
  export default RandomUserContainer;