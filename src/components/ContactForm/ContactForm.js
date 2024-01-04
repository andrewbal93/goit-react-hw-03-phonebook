import React, { Component } from 'react';
import './ContactForm.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    if (!name.trim() || !number.trim()) {
      alert('Please enter a valid name and phone number.');
      return;
    }

    this.props.onFormSubmit({ name, number });

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={name}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label>Number:</label>
          <input
            type="tel"
            name="number"
            placeholder="Enter phone number"
            value={number}
            onChange={this.handleInputChange}
          />
        </div>
        <button className="add-btn" type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
