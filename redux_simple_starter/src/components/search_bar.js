import React, { Component } from 'react';


class SearchBar extends Component {

  constructor(props) {
    super(props);


    // You can only change the state like this only here
    this.state = { term: 'Starting value' };
  }
  
  // When this changes, run specified method
  // This basically prints out what you are 
  // typing into the console
  render() {
    return  <div>
              <input value={this.state.term} onChange={event => this.setState({ term : event.target.value })} />;
            </div>
  }

}

export default SearchBar;