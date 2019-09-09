import React from 'react';
import './peopleRecords.css';
import Header from './components/Header.js';
import PeopleRecords from './components/PeopleRecords.js';
import CharCountButton from './components/CharCountButton.js';
import Menu from './components/Menu';
import api from './api/api.js';


class App extends React.Component {
  state = {
    people: []
}

componentDidMount() {
 api.get('/v2/people.json');

}


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
