import React, { Component } from 'react';

class PatientCard extends Component { 
    render() {
        let state;
        if(parseFloat(this.props.state) > 30 && parseFloat(this.props.state) < 70){
            state = <p style={{ color: '#ffcc00'}} >{this.props.state}</p>
        }
        else if(parseFloat(this.props.state) > 70){
            state = <p style={{ color: '#ff3300' }} >{this.props.state}</p>
        }
        else{
            state = <p style={{ color: "#0a8a0e" }} >{this.props.state}</p>
        }
        return (
            <tr className='w-max'>   
                <td className='w-max  p-4'>{this.props.name}</td>
                <td className='w-max  p-4'>{this.props.age}</td> 
                <td className='w-max  p-4'>{state}</td>
            </tr>
        );
    }
}

export default PatientCard;
