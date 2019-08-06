import React, { Component } from "react";
import Searchbar from "./Searchbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listGames: [],
    }
  }

  componentDidMount() {
    fetch('http://51.68.18.101:3002/echolux/api/games')
    .then(res => res.json())
    .then(data => {
      this.setState({
        listGames: data
      })
    })
  }

  render() {
    const { listGames } = this.state;
    return (
      <div className="App">
        <Searchbar listGames={listGames} />
      </div>
    );
  }
}

export default App;
