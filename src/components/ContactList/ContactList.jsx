import PropTypes from 'prop-types';

import ContactListItem from 'components/ContactListItem';

import { List } from './ContactList.styled';

const ContactList = ({ visibleContacts, deleteContact }) => {
  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            deleteContact={deleteContact}
          />
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  visibleContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
