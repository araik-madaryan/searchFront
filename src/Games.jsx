import React, {Component} from 'react';
import ListGames from './ListGames';

class Games extends Component {
  render () {
    const { searchGames } = this.props;
    return (
      <div className = "Games">
        {searchGames.map((games, i) => <ListGames {...games} key = {i}/>)}
      </div>
        )
    }
}

export default Games;
