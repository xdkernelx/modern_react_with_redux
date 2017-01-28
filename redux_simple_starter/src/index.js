import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component that produces HTML
// Const is ES6 similar to var
// JSX is a HTML-like JS

const App = function() {

  return <div>Hi!</div>;

}

// Second argument is targetElmement location
ReactDOM.render(<App />, document.querySelector('.container'));