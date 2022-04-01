import React, { Component } from 'react';

class PatientCard extends Component {
    render() {
        return (
            <div>  
                <div className='flex space-x-7'>
                    <p>{this.props.name}</p>
                    <p>{this.props.age}</p>
                    <p>{this.props.state}</p>
                </div>
            </div>
        );
    }
}

export default PatientCard;