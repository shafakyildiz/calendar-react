import "./App.css";
import { useState } from "react";

function App() {
  let checkinDate = document.getElementById("checkin");
  let checkoutDate = document.getElementById("checkout");

  const [startDate, setStartDate] = useState(
    document.getElementById("checkin").value
  );

  const [endDate, setEndDate] = useState(
    document.getElementById("checkout").value
  );

  setInterval(() => {
    console.log(startDate);
    console.log(endDate);
  }, 2000);

  return (
    <div className="App">
      <div className="container">
        <label htmlFor="checkin">Check-in: </label>
        <input type="date" id="checkin" name="checkin" />
      </div>
      <div className="container">
        <label htmlFor="checkout">Check-out: </label>
        <input type="date" id="checkout" name="checkout" />
      </div>
    </div>
  );
}

export default App;
