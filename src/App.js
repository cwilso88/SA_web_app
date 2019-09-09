import React from 'react';
import './peopleRecords.css';
import Header from './components/Header.js';
import PeopleRecords from './components/PeopleRecords.js';
import CharCountButton from './components/CharCountButton.js';
import Menu from './components/Menu';


class App extends React.Component {
  

  render () {
    return (
      <div className="App">
            <Menu />
            <Header />
            <PeopleRecords records={this.onFetchPeopleRecords} people={this.state.people}/>
            <CharCountButton />
        </div>
      )
    }
}

export default App;
