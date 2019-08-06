import React, { Component } from "react";
import InputForm from "./InputForm";
import ListGames from "./ListGames";
import Games from "./Games";

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
  }

change = (event) => {
  this.setState ({
    search: event.target.value,
  });
}

searchGames = () => {
  const { listGames } = this.props;
  let gameList = listGames.filter(x => x.name.toLowerCase().includes(this.state.search)) 
  return gameList = [...gameList]
}

  render() {
    const { search } = this.state;
    const { listGames } = this.props;
    return (
      <div className="Searchbar">
        <InputForm
          search={search}
          change={this.change}  
        />
        {
          (search.length !== 0) 
          ?
          <Games searchGames={this.searchGames()} />
          :
          listGames.map((games, i) => <ListGames {...games} key={i} />)
        }
      </div>
    );
  }
}

export default Searchbar;
