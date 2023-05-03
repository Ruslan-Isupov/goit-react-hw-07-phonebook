import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { Blocks } from 'react-loader-spinner';

export const App = () => {
  const dispatch = useDispatch();

  const { items, isLoading, error } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm />

      <h2>Contacts</h2>

      <Filter />
      {isLoading && !error && (
        <Blocks
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
        />
      )}
      {items.length > 0 && <ContactList />}
    </>
  );
};
