import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <div className={css["contact-container"]}>
        <div className={css.container}>
          <FaUser />
          <p>{name}</p>
        </div>

        <div className={css.container}>
          <FaPhoneAlt />
          <p>{number}</p>
        </div>
      </div>

      <button
        type="button"
        className={css["delete-btn"]}
        onClick={handleDelete}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
