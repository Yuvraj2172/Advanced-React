import { React,useState } from "react";

const ControlledInputs = () => {
  const [name , setName]=useState('');
  const [email, setEmail] = useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
    //do something 
    console.log(name, email);
  }
  const handleNameChange=(e)=>{
    // console.log(e.target.name);
    // console.log(e.target.value);

    setName(e.target.value);
    // console.log(name)
    
  }

  const handleEmailChange=(e)=>{
    setEmail(e.target.value);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4>controlled inputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label" >
          name
        </label>
        <input type="text" name="" id="name" className="form-input" value={name} onChange={handleNameChange}/>
      </div>

      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input type="email" name="" id="email" className="form-input" value={email} onChange={handleEmailChange}/>
      </div>
      <button type="submit" className="btn btn-block" >submit</button>
    </form>
  );
};
export default ControlledInputs;
