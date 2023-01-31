import React, { useState } from "react";

const Form = (props) => {
  const [membe, setMembe] = useState({
    name: "",
    lastn: "",
  });

  const handleChange = (e) => {
    setMembe({
      ...membe,
      [e.target.name]: e.target.value,
    });
  };

  const hangleSubmit = (e) => {
    e.preventDefault();
    setMembe({
        name:"",
        lastn:""
    })
    if(!membe.name || !membe.lastn){

    }else{
    props.setMember([...props.member, membe]);
    }
  };

  return (
    <form onSubmit={hangleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="First Name"
        value={membe.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastn"
        placeholder="Last Name"
        value={membe.lastn}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
};

export default Form;