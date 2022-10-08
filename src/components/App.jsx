import { Component } from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { FormWrap, TitlePhone, TitleContact } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
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
  };

  componentDidUpdate() {
    const { contacts } = this.state;
    const contactsLS = JSON.stringify(contacts);
    localStorage.setItem('contacts', contactsLS);
  }
  componentDidMount() {
    const contFromLS = localStorage.getItem('contacts');
    const Parsedcontacts = JSON.parse(contFromLS);

    if (Parsedcontacts !== null) {
      this.setState({ contacts: Parsedcontacts });
    }
  }

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
