import logo from './logo.svg';
import './App.css';
import PatientCard from './components/PatientCard';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: [],
    }
  }
  componentDidMount() {
    fetch("http://localhost:3000/patients")
      .then(data => data.json())
      .then(json => {
        this.setState({
          patients: json
        }) 
      })
  }
  render() { 
    console.log(this.state.patients)
    return (
      <div className='m-20'>
        <div className='flex space-x-3'>
          <p>Name</p>
          <p>Age</p>
          <p>State</p>
        </div>
        <div className='flex flex-col'>
          {this.state.patients.map(patient => {
            return <PatientCard
                     key={patient.id}
                     name={patient.name}
                     age={patient.age}
                     state={patient.state}
                   />
          })}
        </div>
      </div>
    );
  }
}
export default App;
