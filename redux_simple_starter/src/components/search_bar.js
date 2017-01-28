import React, { Component } from 'react';


class SearchBar extends Component {

  constructor(props) {
    super(props);


    // You can only change the state like this only here
    this.state = { term: 'Starting value' };
  };
  
  // When this changes, run specified method
  // This basically prints out what you are 
  // typing into the console
  render() {
    return  <div className='search-bar'>
              <input 
                value={this.state.term} 
                onChange={event => this.onInputChange(event.target.value)} />;
            </div>
  };

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  };

};

export default SearchBar;