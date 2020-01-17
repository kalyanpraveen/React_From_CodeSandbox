import React, { useState } from "react";
import A from "./A";
import B from "./B";
import C from "./C";
import D from "./D";

const P = () => {
  const [state, setState] = useState(0);
  const [bIs55, setBis55] = useState(false);

  const clickHandler = () => {
    let random = Math.floor(Math.random() * 20 + 1);
    setState(() => random, state === 15 && console.log(`state: ${state}`));
  };

  return (
    <div>
      <A clickHandler={clickHandler} />
      <B state={state} setBis55={setBis55} />
      {bIs55 ? (
        <>
          <C />
          <D />
        </>
      ) : null}
    </div>
  );
};

export default P;
