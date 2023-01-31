import React, { useState } from "react";

import Form from "./Form";
import Team from "./Team";
import '../styles.css'

function App() {
  const [member, setMember] = useState([
    {
      name: "",
      lastn: "",
    },
  ]);
  return (
    <div className="App">
      <Form member={member} setMember={setMember}/>
     
      <Team mem={member} />
    </div>
  );
}

export default App;