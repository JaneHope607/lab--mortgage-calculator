import React, { Component } from 'react';

class Form extends Component {

    constructor() {
        super();
        this.state = {
            salary: 0,
            salary2: 0,
            deposit: 0,
            commitments: 0,
            term: 0,
            interest: 0.00,
            showing: false
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const salary = parseInt(this.state.salary);
        const salary2 = parseInt(this.state.salary2);
        const deposit = parseInt(this.state.deposit);
        const commitments = parseInt(this.state.commitments);
        const interest = parseFloat(this.state.interest);
        const term = parseInt(this.state.term);
        if (!salary || !deposit || !commitments || !term) {
            return;
        }

        this.props.onFormSubmit({
            salary,
            salary2,
            deposit,
            commitments,
            term,
            interest
        })

        this.setState({
            salary: 0,
            salary2: 0,
            deposit: 0,
            commitments: 0,
            term: 0,
            interest: 0.00
        });
    }
    
    render() {
        const { showing } = this.state;

        return (
          <form onSubmit={this.handleSubmit}>
              <label name="salary">Your annual salary</label>
              <input 
                  type="number"
                  placeholder="Your salary"
                  name="salary"
                  value={this.state.salary}
                  onChange={this.handleChange}
              />


            <div>
                <button onClick={() => this.setState({ showing: !showing })}>Add another salary</button>
                { showing 
                    ? <div>
                        <label name="salary2">Other salary</label>
                        <input 
                            type="number"
                            placeholder="Your other salary"
                            name="salary2"
                            value={this.state.salary2}
                            onChange={this.handleChange}
                        />   
                      </div>
                    : null
                }
            </div>  

              <label>Your deposit</label>
              <input 
                  type="number"
                  placeholder="Your deposit"
                  name="deposit"
                  value={this.state.deposit}
                  onChange={this.handleChange}
              />
              <label>Monthly commitments</label>
              <input 
                  type="number"
                  placeholder="Your monthly commitments"
                  name="commitments"
                  value={this.state.commitments}
                  onChange={this.handleChange}
              />
              <label>Mortgage term in years</label>
              <input 
                  type="number"
                  placeholder="Your mortgage term in years"
                  name="term"
                  value={this.state.term}
                  onChange={this.handleChange}
              />
              <label>Monthly interest rate %</label>
              <input 
                  type="number"
                  placeholder="Your interest rate"
                  name="interest"
                  value={this.state.interest}
                  onChange={this.handleChange}
              />
              
              <input className="calculate" type="submit" value="Calculate"/>
          </form>
        );
    }
}

export default Form;