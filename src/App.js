import './App.css';
import React, { useState } from 'react';

function App() {
  const [progress, setProgress] = useState();
  const numRegex = "/^-?\d[.]?\d$/"

  const handleInputChange = (event) => {
    const value = event.target.value;

    setProgress(value);
  };
  const [selected, setSelected] = useState(85);
  const Hanldedate = (e) => {
    if (e.target.value.includes("-")) {
      return
    } else if (e.target.value <= 100) {
      setSelected(Number(e.target.value).toFixed().toString());
    }
  }

  const getColor = () => {
    if (selected >= 0 && selected < 44) {
      return "#FB6061"
    } else if (selected >= 44 && selected < 56) {
      return "#fc8441"
    } else if (selected >= 56 && selected < 67) {
      return "#ffd140"
    } else if (selected >= 67 && selected < 78) {
      return "#0095fc"
    } else if (selected >= 78 && selected <= 100) {
      return "#3ada98"
    } else {
      return "#FB6061"
    }
  }

  return (
    <>
      <div className="App">
        <ul class="chart-skills">
          <li>
            <span className='span1'></span>
          </li>
          <li>
            <span className='span2'></span>
            <span className='span1_2'></span>
          </li>
          <li>
            <span className='span3'></span>
            <span className='span1_3'></span>
          </li>
          <li>
            <span className='span4'></span>
            <span className='span1_4'></span>
          </li>
          <li>
            <span className='span5'></span>
          </li>
        </ul>
        <span className='span1_5'></span>

        <h2>
          {selected} <br /> <span>{selected <= 40 ? "Poor" : selected > 40 && selected <= 70 ? "Average" : "Excellent"}</span>
        </h2>
        <span className='span1_1'></span>

        <p className='Txt0'>0</p>
        <p className='Txt50'>50</p>
        <p className='Txt60'>60</p>
        <p className='Txt70'>70</p>
        <p className='Txt80'>80</p>
        <p className='Txt100'>100</p>

        <li
          style={{
            transform: `rotate(${selected * 1.95}deg)`,
            position: "relative",
            zIndex: "9999",
            marginTop: "-11px"
          }}
        >
          <span
            style={{
              width: "9px",
              height: "9px",
              border: `10px solid ${getColor()}`,
              borderRadius: "50%",
              position: "absolute",
              left: "-10px",
              top: "8px",
              background: "#fff",
              zIndex: "999",
            }}
          ></span>
        </li>
      </div>
      <div className='progressBox'>
      </div>

      <input
        className='progressBar'
        type="number"
        name="text"
        value={selected >= 100 ? 100 : selected}
        onChange={(e) => {
          handleInputChange(e);
          Hanldedate(e);
        }}
      />
    </>

  );
}

export default App;
