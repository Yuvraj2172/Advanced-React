import { useState } from "react";

const ToggleChallenge = () => {
  const [value, setValue] = useState(false);
  const changeState=()=>{
    setValue(!value);
    // console.log(value)
    return;
  }
  return (
    <div>
    <button className="btn" onClick={changeState}>Click me </button>
    {value && <ShowAlert name='Yuvraj' />}
    </div>
  );
};

  const ShowAlert=({name})=>{
    // console.log(name)
    return (
      <>
      <h2>Conditionally Rendered Component</h2>
      <h6>Built by {name} </h6>
      </>
    )
  }
export default ToggleChallenge;
