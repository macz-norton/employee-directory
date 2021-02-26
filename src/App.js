import React from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import API from "./utils/API";
// import testUsers from "./testUsers.json";

class App extends React.Component {
  
  state = {
    users: []
  }

  componentDidMount() {
    this.randomUser("");
  }

  randomUser = query => {
    API.getUsers(query)
      .then(users => this.setState({ users: users.data }))
      .catch(err => console.log(err))
  }

  // handleInputChange = event => {
  //   const value = event.target.value;
  //   const name = event.target.name;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   this.randomUser(this.state.search);
  // }
  
  render() {
    return (
      <div className="container">
        <Header />
        <Body users={this.state.users} />
      </div>
    );
  }

}

export default App;
