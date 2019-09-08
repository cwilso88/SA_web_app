import React from 'react';
import './peopleRecords.css';
import Header from './components/Header.js';
import PeopleRecords from './components/PeopleRecords.js';
import CharCountButton from './components/CharCountButton.js';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <PeopleRecords />
      <CharCountButton />
    </div>
  );
}

export default App;
