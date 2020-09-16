import React, { Component } from 'react';

class Form extends Component {

    constructor() {
        super();
        this.state = {
            salary: 0,
            deposit: 0
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
        const deposit = parseInt(this.state.deposit);
        if (!salary || !deposit) {
            return;
        }

        this.props.onFormSubmit({
            salary,
            deposit
        })

        this.setState({
            salary: 0,
            deposit: 0
        });
    }
    
    render() {
        return (
          <form onSubmit={this.handleSubmit}>
              <input 
                  type="number"
                  placeholder="Your salary"
                  name="salary"
                  value={this.state.salary}
                  onChange={this.handleChange}
              />
              <input 
                  type="number"
                  placeholder="Your deposit"
                  name="deposit"
                  value={this.state.deposit}
                  onChange={this.handleChange}
              />
              <input type="submit" value="Post"/>
          </form>
        );
    }
}

export default Form;