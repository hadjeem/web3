import { useState } from "react";

const ClickCounter = ({title,message }) => {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        console.log(`value of count before click: ${count}`);
        setCount(count + 1);
    }

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={handleClick}>
        count is {count}
      </button>
        {count>= 10 && <p >{message}</p>}
        
    </div>
  );
};

export default ClickCounter;