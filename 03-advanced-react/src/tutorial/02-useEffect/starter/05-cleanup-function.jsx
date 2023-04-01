import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [value, setValue] = useState(false);
  console.log('render');
  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          setValue(!value);
        }}
      >
        Toggle
      </button>
      {value && <SecondComponent />}
    </div>
  );
};

const SecondComponent = () => {
  useEffect( () => {
    // console.log("Use Effect");
    const intId = setInterval(() => {
      // console.log('hello from interval');
    }, 1000);
    return ()=>{
      clearInterval(intId);
      console.log('clean up')
    }
  }, []);
  return <h2>this is second Component</h2>;
};
export default CleanupFunction;
