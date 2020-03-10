import React from 'react';
import './App.scss';
import Result from './Result'
import Header from './Header'

function App() {
  return (
    <div className="App">
		<Header />
		<Result />
		<footer>Created by <a rel="noopener noreferrer" target="_blank" href="http://andrzejmusiol.pl/">andrzejmusiol.pl</a></footer>
    </div>
  );
}

export default App;
