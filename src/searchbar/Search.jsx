import React, { Component } from 'react';
import { Input } from 'semantic-ui-react'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
  }

	render() {
    const { search, updateSearch } = this.props;
		return (
			<div className="Search">
        <Input
          icon='search'
          placeholder='Rechercher'
          id='search'
          name='search'
          value={search}
          onChange={updateSearch}
        />
			</div>
		);
	}
}

export default Search;
