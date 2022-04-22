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
    //this.interval = setInterval(() => this.getPatients(), 300);
    this.getPatients();
    this.interval = setInterval(() => this.generateData(), 2000);
  }
  componentWillUnmount(){
    clearInterval(this.interval)
  }
  generateData() { 
    this.setState(prevState => {
      let patients = [...prevState.patients]
      patients.forEach(patient => {
        patient.state = Math.random() * 100
      })
      return patients;
      //return patients 
    })
  }
  async getPatients() {
    await fetch("http://localhost:3000/patients")
      .then(data => data.json())
      .then(json => {
        this.setState({
          patients: json
        })
      })
  }

  render() {
    return (
      <div className='m-20 text-center'>
        <table className=' w-max m-auto'> 
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>State</th>
          </tr>   
            {this.state.patients.sort((a,b) => b.state - a.state).map(patient => {
              return <PatientCard
                key={patient.id}
                name={patient.name}
                age={patient.age}
                state={patient.state}
              />
            })}
        </table>
      </div>
    );
  }
}
export default App;