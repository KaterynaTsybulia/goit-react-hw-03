import { MdPerson, MdPhone } from "react-icons/md";

export default function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <>
      <div>
        <p><MdPerson />{name}</p>
        <p><MdPhone /> {number}</p>
      </div>
      <button onClick={() => onDelete(id)}> Delete </button>
    </>
  );
}