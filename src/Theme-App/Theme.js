import React, { useState } from 'react';

function Theme() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isBtnMoved, setIsBtnMoved] = useState(false);

  const changeBgTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    setIsBtnMoved(!isBtnMoved);

    document.body.style.backgroundColor = !isDarkTheme ? "Black" : "White";
  };

  return (
    <section>
      <h1 className='heading'>Theme Change</h1>
      <div className="btn-body">
        <button className={`btn ${isBtnMoved ? "btn-move" : ""}`} onClick={changeBgTheme}></button>
      </div>
    </section>
  );
}

export default Theme;
