import React, { Component } from 'react';
import Search from './Search';
import GameList from './GameList';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      search: ''
    }
  }

  componentDidMount() {
    fetch('http://51.68.18.101:3002/echolux/api/games')
    .then(res => res.json())
    .then(data => {
      this.setState({
        games: data
      })
    })
  }

  updateSearch = (event) => {
    this.setState({
      search: event.target.value
    })
  }

	render() {
    const { games, search } = this.state;
    const gamesFilter = games.filter(game => game.name.toLowerCase().includes(search.toLocaleLowerCase()))
		return (
			<div className="Game">
        <Search search={search} updateSearch={this.updateSearch} />
        {
          (search === '')
          ?
          games.map((game, i) => <GameList name={game.name} key={i} />)
          :
          gamesFilter.map((game, i) => <GameList name={game.name} key={i} />)
        }
			</div>
		);
	}
}

export default Game;
