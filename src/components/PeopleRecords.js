import React from 'react';
import api from '../api/api';


class PeopleRecords extends React.Component {
    state = {
        people: []
    }

    componentDidMount() {
        api.get('/v2/people.json')
            .then(response => { console.log(response);})
    }

   

    peopleRecordsList = this.state.people.map((person) => {
        return(
            <div className="card" key={person.id}>
                <div className="content">
                <div className="header">{person.first_name} {person.last_name}</div>
                <div className="meta">{person.title}</div>
                <div className="ui list-group">
                    <h3 className="ui list-group-item">{person.email_address}</h3>
                    <h3 className="ui list-group-item">{person.city}, {person.state}</h3>
                </div>
                </div> 
            </div>
        ) 
    });

    render() {
        return (
            <div className= "ui container">
                <h1>List of People</h1>
                
            </div>
        )
    }
}

export default PeopleRecords;
