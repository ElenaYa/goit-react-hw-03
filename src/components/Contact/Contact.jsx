import { FaPhoneAlt, FaUser } from "react-icons/fa";
import css from './Contact.module.css';

const Contact = ({ contact: { name, number, id }, onDelete }) => {

  return (
    <div className={css.contactContainer}>
      <div className={css.wrapper}>
        <p className={css.text}>
          <FaUser className={css.icon}/>
          {name}
        </p>
        <p className={css.text}>
          <FaPhoneAlt className={css.icon} />
          {number}
        </p>
      </div>
          <button type="button" className={css.button} onClick={() => { onDelete(id) }}>
        Delete
      </button>
    </div>
  );
};
export default Contact;