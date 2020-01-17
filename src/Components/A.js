import React from "react";

const A = props => {
  return (
    <div>
      <button onClick={props.clickHandler}>Click Me</button>
    </div>
  );
};

export default A;
