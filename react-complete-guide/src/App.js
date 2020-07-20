import React, { Component } from "react";

import classes from "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "asdbb33", name: "Joey", age: 34 },
      { id: "ajdj4kd", name: "Shteve", age: 43 },
      { id: "a8sd88j", name: "Audrey", age: 30 },
    ],
    otherState: "Some other value",
    showPersons: false,
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    // Alternative method to that just above
    // const person = Object.assign({}, this.state.persons[personIndex])

    person.name = e.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;
    let btnClass = [classes.Button];

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(e) => this.nameChangedHandler(e, person.id)}
              />
            );
          })}
        </div>
      );
      btnClass = classes.Red;
    }

    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hello, I'm a React App</h1>
        <p style={{ fontSize: "20px" }} className={assignedClasses.join(" ")}>
          And I was built for gaining a more developed grasp of React
        </p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
