import React, { Component } from 'react';
import Form from '../components/Form';

class CalculatorContainer extends Component {
    constructor() {
        super();

        this.state = {
            salary: 0,
            results: 0,
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(submittedForm) {
        submittedForm.id = Date.now();
        const updatedSalary = submittedForm.salary
        this.setState({
            salary: updatedSalary
        })
    }

    render(){
        return(
            <div>
                <h2>Mortgage Calculator Container</h2>
                <Form onFormSubmit={this.handleFormSubmit} />
            </div>
        );
    }
}

export default CalculatorContainer;