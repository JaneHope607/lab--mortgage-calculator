import React, { Component } from 'react';
import Form from '../components/Form';
import Result from '../components/Result';

class CalculatorContainer extends Component {
    constructor() {
        super();

        this.state = {
            salary: 0,
            results: 0,
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(salary) {
        salary.id = Date.now();
        const updatedSalary = salary.salary
        const maxHouseValue = updatedSalary * 3;
        this.setState({
            salary: updatedSalary,
            results: maxHouseValue  
        });
    }

    render(){
        return(
            <div>
                <h2>Mortgage Calculator Container</h2>
                <Form onFormSubmit={this.handleFormSubmit} />
                <Result results={this.state.results}/>
            </div>
        );
    }
}

export default CalculatorContainer;