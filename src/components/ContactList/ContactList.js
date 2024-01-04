import './ContactList.css';
import Contact from 'components/Contact/Contact';

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            onDelete={() => onDeleteContact(contact.id)}
          />
        ))}
      </tbody>
    </table>
  );
}
