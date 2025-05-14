export default function Guest({ guest, setSelectedGuest }) {
  return (
    <tr onClick={() => {
        setSelectedGuest(guest);
    }}>
      <td>{guest.name}</td>
      <td>{guest.email}</td>
      <td>{guest.phone}</td>
    </tr>
  );
}
