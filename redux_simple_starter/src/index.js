import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';


const API_KEY = "AIzaSyB_y41M_1_Kx2sFdzXuRqWOOcqketLWWA0";


// Create a new component that produces HTML
// Const is ES6 similar to var
// JSX is a HTML-like JS
// Golden rule is one file per container

const App = () => {

  return <div>Hi!</div>;

};

// Second argument is targetElmement location
ReactDOM.render(<App />, document.querySelector('.container'));