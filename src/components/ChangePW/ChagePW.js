import React, { useState } from "react";
import Change from "./Change";
import Check from "./Check";

function ChangePW() {
  const [comp, setComp] = useState(false);
  const onClick = () => {
    setComp(!comp);
  };
  return (
    <>{comp ? <Change onClick={onClick} /> : <Check onClick={onClick} />}</>
  );
}

export default ChangePW;
