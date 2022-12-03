import { Component } from 'react';

import { FormField, Label, Input, Button } from './StyledForm';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { name, number } = this.state;

    e.preventDefault();
    this.props.onSubmit(name, number);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <FormField onSubmit={this.handleSubmit}>
        <Label htmlFor="nameId">
          Name
          <Input
            id="nameId"
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces."
            required
            onChange={this.handleChange}
            placeholder="Enter contact name"
          />
        </Label>

        <Label htmlFor="telId">
          Number
          <Input
            id="telId"
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
            placeholder="Enter phone number"
          />
        </Label>

        <Button type="submit">Add contact</Button>
      </FormField>
    );
  }
}

export default Form;
