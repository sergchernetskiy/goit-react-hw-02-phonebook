import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Box } from '../components/Box';
import Form from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactsList/ContactsList';
import { Title, TitleContacts } from './Title/StyledTitle';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'qwe', number: '123-456' },
    ],
    filter: '',
  };

  addContacts = (name, number, e) => {
    const { contacts } = this.state;
    const notifyParams = {
      position: 'center-top',
      useIcon: false,
      fontSize: '18px',
      cssAnimationStyle: 'from-bottom',
      closeButton: false,
      background: '#e100ff',
    };
    const isNameAdded = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    const isNumberAdded = contacts.find(contact => contact.number === number);

    if (isNameAdded) {
      Notify.failure(`${name} is already in contacts`, notifyParams);

      e.preventDefault();
      return;
    }
    if (isNumberAdded) {
      Notify.failure(`${number} is already in contacts`, notifyParams);

      e.preventDefault();
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [...contacts, { id: nanoid(), name, number }],
    }));
  };

  deleteContacts = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilterContact = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = this.getFilterContact();

    return (
      <Box p={[4]}>
        <Title>Phonebook</Title>
        <Form onSubmit={this.addContacts} />
        <TitleContacts>Contacts</TitleContacts>
        <Filter onChangeFilter={this.changeFilter} value={filter} />
        <>
          {contacts.length > 0 ? (
            <ContactList
              contacts={filteredContacts}
              onDelete={this.deleteContacts}
            />
          ) : (
            <TitleContacts>Phonebook is empty</TitleContacts>
          )}
        </>
      </Box>
    );
  }
}

export default App;
