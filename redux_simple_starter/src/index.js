import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';

const API_KEY = "AIzaSyB_y41M_1_Kx2sFdzXuRqWOOcqketLWWA0";

// Create a new component that produces HTML
// Const is ES6 similar to var
// JSX is a HTML-like JS
// Golden rule is one file per container


// Downwards data flow, a parent component should
// be responsible for getting data that is needed
// by child components
class App extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null 
    };


    // When the incoming parameter is coming in
    // You can omit the this.val : val syntax and just
    // have val inside curly brackets
    YTSearch({key: API_KEY, term : 'surfboards'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  };

  render() {
    return <div>
            <SearchBar />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList videos={this.state.videos} />
           </div>;
  };
};

// Second argument is targetElmement location
ReactDOM.render(<App />, document.querySelector('.container'));