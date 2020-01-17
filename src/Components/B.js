import React from "react";

const B = props => {
  props.state === 15 ? props.setBis55(true) : props.setBis55(false);
  return <div>B has value : {props.state}</div>;
};

export default B;
