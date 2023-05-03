import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ButtonItem } from './ElementContacts.styled';
import { deleteContact } from 'redux/operations';
export const ElementContacts = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <p>{name}:</p>
      <p>{number}</p>
      <ButtonItem
        type="button"
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </ButtonItem>
    </>
  );
};

ElementContacts.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
