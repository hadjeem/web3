import { useState } from "react";

const ClickCounter = ({title,message,showMessage}) => {

    const [count, setCount] = useState(JSON.parse(localStorage.getItem('count')) || 0);
    const [ showOverMessgae, setShowOverMessage] = useState(false);

    const handleClick = () => {
        console.log(`value of count before click: ${count}`);
        const newCount = count + 1;
        setCount(newCount);
        localStorage.setItem("count", JSON.stringify(newCount));
    }

    const handleMouseEnter = () => {
        setShowOverMessage(true);
    }

    const handleMouseLeave = () => {
        setShowOverMessage(false);
    }


  return (
    <div>
      <h1>{title}</h1>
        {showOverMessgae && <p>{showMessage}</p>}
      <button 
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
        count is {count}
      </button>
        {count>= 10 && <p >{message}</p>}
        
    </div>
  );
};

export default ClickCounter;