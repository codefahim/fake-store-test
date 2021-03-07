import React, { useContext } from "react";
import { providerFahim } from "../../App";

const Nati = (props) => {
  const name = useContext(providerFahim);

  const { count } = props;
  return <div>name </div>;
};

export default Nati;
