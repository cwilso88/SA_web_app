import React from 'react';
import './peopleRecords.css';
import Header from './components/Header.js';
import PeopleRecords from './components/PeopleRecords.js';
import CharCountButton from './components/CharCountButton.js';

function App() {
  return (
    <div className="App">
      <Header />
      <PeopleRecords />
      <CharCountButton />
    </div>
  );
}

export default App;
