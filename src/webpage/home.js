import "./style/home.css";
import seatpng from "./png/seat.png";
import { useEffect, useState } from "react";

export default function Home() {
  const [val, setVal] = useState(1);

  //!alredy booked seats

  const confirmedSeats = [];

  //!toggle
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (e) => {
    const seatNo = e.target.id;
    const result = document.getElementById(e.target.id);
    if (selectedSeats.includes(seatNo)) {
      const index = selectedSeats.indexOf(seatNo);
      result.style.backgroundColor = "lightgreen";
      selectedSeats.splice(index, 1);
    } else if (
      selectedSeats.length < val &&
      confirmedSeats.indexOf(seatNo) === -1
    ) {
      //* console.log(confirmedSeats.indexOf(seatNo));
      selectedSeats.push(seatNo);
      confirmedSeats.push(seatNo);
      //* console.log(confirmedSeats);

      result.style.backgroundColor = "blue";
    } else if (result.style.backgroundColor === "red") {
      alert(" Red Indicated Seats Already Booked...");
    } else if (val === 0) {
      alert("Select No Of Seats You Want At The Bottom");
    } else alert(`You Can Select ${val} Seats Only`);

    //* console.log(selectedSeats);
  };

  // !button onclick handler
  useEffect(() => {
    const handleClick = (event) => {
      //* console.log(selectedSeats);

      //* console.log("button cicked");
      const isBooked = [];
      for (let i = 0; i < selectedSeats.length; i++) {
        //* console.log(selectedSeats[i]);
        const isResult = document.getElementById(selectedSeats[i]);
        if (isResult.style.backgroundColor === "blue") {
          isResult.style.backgroundColor = "red";
          isResult.cursor = "no-drop";
          const sibling = isResult.parentElement.id;
          //* console.log(sibling);
          isBooked.push(sibling);
          //isResult.id = "booked";
        }
      }
      //! isBooked value is Booked Successfully
      //* console.log(isBooked);
      selectedSeats.splice(0, selectedSeats.length);
      //* console.log(selectedSeats);
      setVal(0);
      alert("booked seats No's:" + isBooked);
    };

    const element = document.getElementById("booknowbtn");
    element.addEventListener("click", handleClick);
    //dummy handler
    return () => {
      element.removeEventListener("click", handleClick);
    };
  });

  //!button onclick  to change color
  const [emparr, setEmp] = useState([]);
  const changeColor = (event) => {
    const getId = document.getElementById(event.target.id);
    const btId = getId.id;

    if (emparr.length < 2) {
      console.log(emparr.length);
      const getColor = document.getElementById(btId);
      getColor.style.backgroundColor = "red";
      emparr.push(btId);
      console.log(emparr.length);
    }
    if (emparr.length > 1) {
      console.log(emparr.length);
      const delcolor = document.getElementById(emparr[0]);
      delcolor.style.backgroundColor = "bisque";
      console.log(delcolor);
      emparr.splice(0, 1);
    }
  };

  return (
    <div className="content">
      <div className="train-content" onClick={toggleSeat}>
        <div className="seats1">
          <div className="seatno" id="A1">
            <h4>A1</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-1"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="A2">
            <h4>A2</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-2"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="A3">
            <h4>A3</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-3"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="A4">
            <h4>A4</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-4"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="A5">
            <h4>A5</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-5"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="A6">
            <h4>A6</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-6"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="A7">
            <h4>A7</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-7"
              alt="seatpng"
            ></img>
          </div>
        </div>
        <div className="seats2">
          <div className="seatno" id="B1">
            <h4>B1</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-8"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="B2">
            <h4>B2</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-9"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="B3">
            <h4>B3</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-10"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="B4">
            <h4>B4</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-11"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="B5">
            <h4>B5</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-12"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="B6">
            <h4>B6</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-13"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="B7">
            <h4>B7</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-14"
              alt="seatpng"
            ></img>
          </div>
        </div>
        <div className="seats3">
          <div className="seatno" id="C1">
            <h4>C1</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-15"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="C2">
            <h4>C2</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-16"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="C3">
            <h4>C3</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-17"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="C4">
            <h4>C4</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-18"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="C5">
            <h4>C5</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-19"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="C6">
            <h4>C6</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-20"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="C7">
            <h4>C7</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-21"
              alt="seatpng"
            ></img>
          </div>
        </div>
        <div className="seats4">
          <div className="seatno" id="D1">
            <h4>D1</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-22"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="D2">
            <h4>D2</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-23"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="D3">
            <h4>D3</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-24"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="D4">
            <h4>D4</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-25"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="D5">
            <h4>D5</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-26"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="D6">
            <h4>D6</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-27"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="D7">
            <h4>D7</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-28"
              alt="seatpng"
            ></img>
          </div>
        </div>
        <div className="seats5">
          <div className="seatno" id="E1">
            <h4>E1</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-29"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="E2">
            <h4>E2</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-30"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="E3">
            <h4>E3</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-31"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="E4">
            <h4>E4</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-32"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="E5">
            <h4>E5</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-33"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="E6">
            <h4>E6</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-34"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="E7">
            <h4>E7</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-35"
              alt="seatpng"
            ></img>
          </div>
        </div>
        <div className="seats6">
          <div className="seatno" id="F1">
            <h4>F1</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-36"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="F2">
            <h4>F2</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-37"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="F3">
            <h4>F3</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-38"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="F4">
            <h4>F4</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-39"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="F5">
            <h4>F5</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-40"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="F6">
            <h4>F6</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-41"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="F7">
            <h4>F7</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-42"
              alt="seatpng"
            ></img>
          </div>
        </div>
        <div className="seats7">
          <div className="seatno" id="G1">
            <h4>G1</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-43"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="G2">
            <h4>G2</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-44"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="G3">
            <h4>G3</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-45"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="G4">
            <h4>G4</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-46"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="G5">
            <h4>G5</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-47"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="G6">
            <h4>G6</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-48"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="G7">
            <h4>G7</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-49"
              alt="seatpng"
            ></img>
          </div>
        </div>
        <div className="seats8">
          <div className="seatno" id="H1">
            <h4>H1</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-50"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="H2">
            <h4>H2</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-51"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="H3">
            <h4>H3</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-52"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="H4">
            <h4>H4</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-53"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="H5">
            <h4>H5</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-54"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="H6">
            <h4>H6</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-55"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="H7">
            <h4>H7</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-56"
              alt="seatpng"
            ></img>
          </div>
        </div>
        <div className="seats9">
          <div className="seatno" id="I1">
            <h4>I1</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-57"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="I2">
            <h4>I2</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-58"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="I3">
            <h4>I3</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-59"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="I4">
            <h4>I4</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-60"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="I5">
            <h4>I5</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-61"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="I6">
            <h4>I6</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-62"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="I7">
            <h4>I7</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-63"
              alt="seatpng"
            ></img>
          </div>
        </div>
        <div className="seats10">
          <div className="seatno" id="J1">
            <h4>J1</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-64"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="J2">
            <h4>J2</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-65"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="J3">
            <h4>J3</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-66"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="J4">
            <h4>J4</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-67"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="J5">
            <h4>J5</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-68"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="J6">
            <h4>J6</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-69"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="J7">
            <h4>J7</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-70"
              alt="seatpng"
            ></img>
          </div>
        </div>
        <div className="seats11">
          <div className="seatno" id="K1">
            <h4>K1</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-71"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="K2">
            <h4>K2</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-72"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="K3">
            <h4>K3</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-73"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="K4">
            <h4>K4</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-74"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="K5">
            <h4>K5</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-75"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="K6">
            <h4>K6</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-76"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="K7">
            <h4>K7</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-77"
              alt="seatpng"
            ></img>
          </div>
        </div>
        <div className="seats12">
          <div className="seatno" id="L1">
            <h4>L1</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-78"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="L2">
            <h4>L2</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-79"
              alt="seatpng"
            ></img>
          </div>
          <div className="seatno" id="L3">
            <h4>L3</h4>
            <img
              src={seatpng}
              className="seatimg"
              id="seatid-80"
              alt="seatpng"
            ></img>
          </div>
        </div>
      </div>

      <div className="book-seat" onClick={changeColor}>
        <h4>Select No Of Seats : </h4>
        <button id="tik-1" className="seat-but" onClick={() => setVal(1)}>
          1
        </button>
        <button id="tik-2" className="seat-but" onClick={() => setVal(2)}>
          2
        </button>
        <button id="tik-3" className="seat-but" onClick={() => setVal(3)}>
          3
        </button>
        <button id="tik-4" className="seat-but" onClick={() => setVal(4)}>
          4
        </button>
        <button id="tik-5" className="seat-but" onClick={() => setVal(5)}>
          5
        </button>
        <button id="tik-6" className="seat-but" onClick={() => setVal(6)}>
          6
        </button>
        <button id="tik-7" className="seat-but" onClick={() => setVal(7)}>
          7
        </button>
        <button className="booknow" id="booknowbtn">
          Book Now
        </button>
      </div>
    </div>
  );
}
