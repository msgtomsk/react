import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person'

class App extends Component {
  state = {
    person: [
      { id: 'jdshgjks', name: "df", age: 20 },
      { id: 'jdshgs', name: "ddsff", age: 21 },
      { id: 'jdsjks', name: "dfdjshjfg", age: 22 }
    ],
    showStatus: false
  }

  TogglePerson = () => {
    const toggleStatus = this.state.showStatus;
    this.setState({showStatus: !toggleStatus});
  }

  InputChangeHandler = ( event ,id) => {
    const personIndex = this.state.person.findIndex(per => {
      return id === per.id;
    })
    const person = {...this.state.person[personIndex]}
    person.name = event.target.value;
    const persons = [...this.state.person];
    persons[personIndex] = person;
    this.setState({person: persons})
    // this.setState()
    // this.setState({this.state.person.name[0] : event.target.value})
  }

  DeletePersonHandler = (ind) => {
    const persons = [...this.state.person]
    persons.splice(ind,1);
    this.setState({person:persons});
  }

  render() {
    const style = {
      padding: '6px',
      backgroundColor: 'green',
      border: '1px solid green'
    }
    const pers = (<div>
      {/* <Person
        name={this.state.person[0].name}
        age={this.state.person[0].age} 
        clicked = {this.InputChangeHandler}/>
      <Person
        name={this.state.person[1].name}
        age={this.state.person[1].age} />
      <Person
        name={this.state.person[2].name}
        age={this.state.person[2].age} /> */}
        {this.state.person.map((persons,index) => {
          return (<Person 
            name = {persons.name}
            age = {persons.age}
            key = {persons.id}
            clicked = {() => this.DeletePersonHandler(index)}
            click = {(event) => this.InputChangeHandler(event, persons.id)}
          />);
          
        })}
    </div>
    );
    return (
      <div className="App">
        <h1>My First Page</h1>
        <button style = {style} onClick={this.TogglePerson}>Toggle</button>
        {this.state.showStatus ? pers : null}

      </div>
    );
  }
}

export default App;
