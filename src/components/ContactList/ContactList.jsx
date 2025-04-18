import css from "./ContactList.module.css";
import Contact from "./Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/filters/selectors";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {contacts.map(({ _id, name, number }) => (
        <li className={css.item} key={_id}>
          <Contact id={_id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
