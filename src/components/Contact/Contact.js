export default function Contact({ contact, onDelete }) {
  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.number}</td>
      <td>
        <button onClick={onDelete}>Delete</button>
      </td>
    </tr>
  );
}
