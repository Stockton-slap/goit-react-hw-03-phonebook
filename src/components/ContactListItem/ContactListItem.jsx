import { Item, DeleteBtn } from './ContactListItem.styled';

import PropTypes from 'prop-types';

const ContactListItem = ({ id, name, number, deleteContact }) => {
  return (
    <Item>
      {name}: {number}
      <DeleteBtn type="button" name={name} onClick={() => deleteContact(id)}>
        Delete
      </DeleteBtn>
    </Item>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  deleteContact: PropTypes.func,
};

export default ContactListItem;
