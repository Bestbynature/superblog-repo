import { useState } from "react";

const Contact = () => {
  const [count, setCount] = useState(0);
  const [school, setSchool] = useState("First School");

  

  const handleHover = () => {
    console.log("Mouse has entered");
  };

  const handleLeave = () => {
    console.log("Mouse has left");
  };

  const handleClick = () => {
    setSchool("Second School");
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      console.log(e.key);
    }
  };

  const handleIncrease = () => {
    if (count === 10) {
      return;
    }
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="wrapper">
      This is the template for contact page
      <button
        id="btn"
        className="btnclass"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        onClick={handleClick}
      >
        click me please
      </button>
      <div className="school">{school}</div>
      
      <p>{count}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <br />
      <br />
      <input
        onKeyDown={(e) => {
          handleKey(e);
        }}
      />
    </div>
  );
};

export default Contact;
