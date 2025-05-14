import { useState } from "react";
import Guest from "./Guest";

export default function GuestList({ guests }) {
  const [selectedGuest, setSelectedGuest] = useState(null);

  if (selectedGuest) {
    return (
      <>
        <section id="guestCard">
            <h1>{selectedGuest.name} - {selectedGuest.job}</h1>
            <h3>Bio: {selectedGuest.bio}</h3>
            <h3>Phone: {selectedGuest.phone}</h3>
            <h4>Email: {selectedGuest.email}</h4>
            <button onClick={() => setSelectedGuest(null)}>Go Back</button>
        </section>
      </>
    );
  }

  return (
    <>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
        {guests.map((guest) => (
          <Guest key={guest.id} guest={guest} setSelectedGuest={setSelectedGuest}/>
        ))}
        <tr>Select a guest to see more details.</tr>
      </table>
    </>
  );
}
