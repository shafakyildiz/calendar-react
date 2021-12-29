import "./App.css";
import { useState } from "react";

function App() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const handleSelectStart = () => {
    console.log("checkin date is : ", document.getElementById("checkin").value);
    setStartDate(document.getElementById("checkin").value);
    setEndDate(document.getElementById("checkin").value);
    document.getElementById("checkout").value =
      document.getElementById("checkin").value;
  };
  const handleSelectEnd = () => {
    console.log(
      "checkout date is : ",
      document.getElementById("checkout").value
    );
    setEndDate(document.getElementById("checkout").value);
  };
  return (
    <div className="App">
      <div className="container">
        <label htmlFor="checkin">Check-in: </label>
        <input
          type="date"
          id="checkin"
          name="checkin"
          onSelect={handleSelectStart}
        />
        <div>{startDate}</div>
      </div>
      <div className="container">
        <label htmlFor="checkout">Check-out: </label>
        <input
          type="date"
          id="checkout"
          name="checkout"
          onSelect={handleSelectEnd}
        />
        <div>{endDate}</div>
      </div>
    </div>
  );
}

export default App;
