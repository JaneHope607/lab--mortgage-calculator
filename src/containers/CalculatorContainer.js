import React, { Component } from 'react';
import Form from '../components/Form';
import Result from '../components/Result';

class CalculatorContainer extends Component {
    constructor() {
        super();
        this.state = {
            results: 0,
            repaymentResults: 0
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(formData) {
        const updatedSalary = formData.salary + formData.salary2;
        const maxHouseValue = (updatedSalary * 3) + formData.deposit;
        const finalValue = maxHouseValue - formData.commitments;

        // e.g 75,000 - £1 = £74,999
        const outstandingDebt = finalValue - formData.deposit;
   
        // e.g £75,000 / 30 years = £2500
        const outstandingDebtDividedByTerm = outstandingDebt / formData.term;
   
        // e.g 2.56% / 100 = 0.0256 <<  this was the problem because it wasn't floatParsed
        const interestAmount = formData.interest / 100;
  
        // e.g 0.0256 * £75,000 = £1920 + £2500 = £4420 < yearly
        const yearPayment = (interestAmount * outstandingDebt) + outstandingDebtDividedByTerm;
        
        // e.g £4420 / 12 = £368 monthly payments for the next 30 years m8
        const finalPayments = yearPayment / 12; 
    
        this.setState({
            results: finalValue,
            repaymentResults: finalPayments
        });
    }

    render(){
        return(
            <div className="calculator-container">
                <h1 className="header">Mortgage Calculator</h1>
                <Form onFormSubmit={this.handleFormSubmit} />
                <Result results={this.state.results} repaymentResults={this.state.repaymentResults}/>
           
            </div>
        );
    }
}

export default CalculatorContainer;