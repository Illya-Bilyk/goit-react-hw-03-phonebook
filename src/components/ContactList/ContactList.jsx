import { List } from './ContactList.styled';
import PropTypes from 'prop-types';
import { Contact } from './ContactItem';

export const ContactList = ({ contacts, onDelete }) => {
  const deleteContact = e => {
    const deletingName = contacts.find(
      contact => contact.name === e.target.name
    );

    onDelete(deletingName);
  };

  return (
    <List>
      {contacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <Contact
            key={id}
            name={name}
            number={number}
            onClick={deleteContact}
          />
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
