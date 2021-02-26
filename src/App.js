import React from "react";
import Body from "./components/Body";
import Header from "./components/Header";

class App extends React.Component {
  
  state = {
    users: []
  }
  
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
