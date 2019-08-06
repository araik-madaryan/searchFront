import React, {Component} from "react";

class InputForm extends Component {
  render() {
    const { searchGames, change } = this.props;
    return (
      <div className ="InputForm">
        <center>
          <input
            id="searchbar"
            name="searchbar"
            value={searchGames}
            placeholder="Rechercher"
            onChange={change}
          />
        </center>
      </div>
        );
    }
}

export default InputForm;