import { useState } from "react";

const ClickCounter = ({title,message,showMessage}) => {

    const [count, setCount] = useState(0);
    const [ showOverMessgae, setShowOverMessage] = useState(false);

    const handleClick = () => {
        console.log(`value of count before click: ${count}`);
        setCount(count + 1);
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