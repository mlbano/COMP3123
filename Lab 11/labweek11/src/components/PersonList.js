// src/components/PersonList.js
import React, { Component } from 'react';
import axios from 'axios';

class PersonList extends Component {
  // Define state default values
  state = {
    persons: [],
  };

  // Component Lifecycle Callback
  componentDidMount() {
    axios
      .get(`https://randomuser.me/api/?results=10`)
      .then((res) => {
        console.log(res.data);
        const persons = res.data.results;
        this.setState({ persons });
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }

  render() {
    return (
      <div>
        <h2>User List</h2>
        <ul>
          {this.state.persons.map((person) => (
            <li key={person.login.uuid}>
              <img
                src={person.picture.large}
                alt={`${person.name.first} ${person.name.last}`}
              />
              <div className="text-container">
              <strong>Name: </strong>{person.name.first} {person.name.last} <br/>
              <strong>Gender: </strong>{person.gender} <br />
              <strong>Time Zone Description: </strong>{person.location.timezone.description} <br/>
              <strong>Address: </strong>{person.location.number} {person.location.name} {person.location.city}, {person.location.state}, {person.location.country}, {person.location.postcode}<br/>
              <strong>Email: </strong>{person.email} <br/>
              <strong>Birth Date and Age: </strong>{person.dob.date} ({person.dob.age}) <br/>
              <strong>Register Date: </strong>{person.registered.date} ({person.registered.age}) <br/>
              <strong>Phone#: </strong>{person.phone} <br/>
              <strong>Cell#: </strong>{person.cell} <br/>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PersonList;