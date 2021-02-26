import React from "react";
import Body from "./components/Body";
import Filters from "./components/Filters";
import Header from "./components/Header";
import API from "./utils/API";
// import testUsers from "./testUsers.json";

class App extends React.Component {
  
  state = {
    users: [],
    search: ""
  }

  componentDidMount() {
    this.randomUser("");
  }

  randomUser = query => {
    API.getUsers(query)
      .then(users => this.setState({ users: users.data }))
      .catch(err => console.log(err))
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   this.randomUser(this.state.search);
  // }
  
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

export default App;
