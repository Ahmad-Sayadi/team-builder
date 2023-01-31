import React from "react";
import reactDom from "react-dom";

const Team = (props) => {
  console.log(props);
  return (
    <>
      {props.mem.map((item) => (
        <div className="note" key={item.id}>
          <p>{item.name}</p>
          <p>{item.lastn}</p>
        </div>
      ))}
    </>
  );
};
export default Team;