import Contact from "../Contact/Contact";
import css from "./ContactList.module.css"


export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.ulList}>
      {contacts.map(contact => (
        <li key={contact.id} className={css.liList}>
          <Contact contact={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
