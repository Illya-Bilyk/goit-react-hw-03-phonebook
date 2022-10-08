import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { FormWrap, TitlePhone, TitleContact } from './App.styled';

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
  handleSubmit = newContact => {
    this.setState(({ contacts }) =>
      contacts.find(contact => contact.name === newContact.name)
        ? alert(`This contact ${newContact.name} is already exist`)
        : { contacts: [newContact, ...contacts] }
    );
  };

  deleteContact = contact => {
    const { contacts } = this.state;
    const index = contacts.findIndex(cont => cont.id === contact.id);
    contacts.splice(index, 1);
    this.setState({ contacts: [...contacts] });
  };

  filterContacs = keyWord => {
    this.setState({ filter: keyWord });
    // console.log(this.newContactList());
  };

  newContactList = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) => {
      const searchingName = name.toLowerCase();
      return searchingName.includes(normalizedFilter);
    });
  };

  render() {
    const list = this.newContactList();
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          backgroundColor: '#010101',
        }}
      >
        <FormWrap>
          <TitlePhone>Phonebook</TitlePhone>
          <ContactForm onSubmit={this.handleSubmit} />

          <TitleContact>Contacts</TitleContact>
          <Filter onFilter={this.filterContacs} />
          <ContactList contacts={list} onDelete={this.deleteContact} />
        </FormWrap>
      </div>
    );
  }
}
