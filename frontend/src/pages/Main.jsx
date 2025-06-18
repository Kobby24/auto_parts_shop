// In Main.js (or wherever your Main component is defined)
import { useParams } from "react-router-dom";

function Main() {
  const { brandName } = useParams(); // brandName will match the :brandName in your route

  return (
    <div>
      <h1>Brand {brandName.toUpperCase()}</h1>
      {/* Use brandName as needed */}
    </div>
  );
}

export default Main;