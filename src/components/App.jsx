import { Component } from 'react';
import { nanoid } from 'nanoid';
import { NotificationManager } from 'react-notifications';
import { Box } from '../components/Box';
import Form from './Form/Form';
import { Title } from './Title/StyledTitle';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContacts = (name, number) => {
    const { contacts } = this.state;

    if (contacts.some(contact => contact.name === name)) {
      NotificationManager.error(`${contacts.name} is already in contacts`);
    }

    this.setState(({ contacts }) => ({
      contacts: [...contacts, { id: nanoid(), name, number }],
    }));
  };
  render() {
    return (
      <Box p={[4]}>
        <Title>Phonebook</Title>
        <Form onSubmit={this.addContacts()} />
      </Box>
    );
  }
}

export default App;
