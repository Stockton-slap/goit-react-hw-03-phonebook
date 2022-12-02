import { Component } from 'react';

import PropTypes from 'prop-types';

import {
  AddContactBtn,
  ContactInfo,
  ContactInfoLabel,
  ContactInfoValues,
} from './ContactForm.styled';

class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
  };

  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    const { contacts, onSubmit } = this.props;

    const { name, number } = this.state;

    const contactNames = contacts.map(contact => contact.name);

    if (contactNames.includes(name)) {
      alert(`${name} is already in contacts.`);
    } else {
      onSubmit(name, number);
      this.reset();
    }
  };

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <ContactInfo>
          <ContactInfoLabel>
            Name
            <br />
            <ContactInfoValues
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
          </ContactInfoLabel>
          <br />
          <ContactInfoLabel>
            Number
            <br />
            <ContactInfoValues
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
            />
          </ContactInfoLabel>
          <br />
          <AddContactBtn type="submit">Add contact</AddContactBtn>
        </ContactInfo>
      </form>
    );
  }
}

export default ContactForm;
