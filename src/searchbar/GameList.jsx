import React, { Component } from 'react';

class GameList extends Component {
	render() {
    const { name } = this.props;
		return (
			<div className="GameList">
        <p>{name}</p>
			</div>
		);
	}
}

export default GameList;
