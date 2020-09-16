import React, { Component } from 'react';

class Form extends Component {

    constructor() {
        super();
        this.state = {
            salary: 0,
            salary2: 0,
            deposit: 0,
            commitments: 0,
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
        if (!salary || !deposit || !commitments) {
            return;
        }

        this.props.onFormSubmit({
            salary,
            salary2,
            deposit,
            commitments
        })

        this.setState({
            salary: 0,
            salary2: 0,
            deposit: 0,
            commitments: 0,
        });
    }
    
    render() {
        const { showing } = this.state;

        return (
          <form onSubmit={this.handleSubmit}>
              <label name="salary">Your salary</label>
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
              <input type="submit" value="Calculate"/>
          </form>
        );
    }
}

export default Form;