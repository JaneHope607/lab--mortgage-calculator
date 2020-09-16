import React, { Component } from 'react';

class Form extends Component {

    constructor() {
        super();
        this.state = {
            salary: 0
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
        const salary = this.state.salary.trim();
        if (!salary) {
            return;
        }

        this.props.onFormSubmit({
            salary
        })

        this.setState({
            salary: 0,
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
              <input type="submit" value="Post"/>
          </form>
        );
    }
}

export default Form;