import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: ""
  };

  onInput = e => {
    this.setState({ term: e.target.value });
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInput}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
