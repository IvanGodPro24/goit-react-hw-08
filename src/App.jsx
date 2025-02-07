import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
import Loader from "./components/Loader/Loader";
import { selectError, selectLoading } from "./redux/selectors";

function App() {
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="general-container">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />

      {loading && <Loader />}
      {error && <p>{error}</p>}
      <ContactList />
    </div>
  );
}

export default App;
