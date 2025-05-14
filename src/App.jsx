import GuestList from "./guest/GuestList";
import useQuery from "./api/useQuery";
import "./index.css";

export default function App() {
  const { data: guests, loading, error } = useQuery("/guests");

  if (loading) return <p>Loading...</p>;
  if (error || !guests) return <p>{error}</p>;

  return <GuestList guests={guests}/>;
}
