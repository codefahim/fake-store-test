import React from "react";
import Nati from "../Naji/Nati";

const Babu = (props) => {
  const { count } = props;
  return (
    <div>
      <Nati count={count}></Nati>
    </div>
  );
};

export default Babu;
