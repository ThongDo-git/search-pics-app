import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: ""
  };

  constructor() {
    super();
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInput = e => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit(e) {
    e.preventDefault();

    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
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
