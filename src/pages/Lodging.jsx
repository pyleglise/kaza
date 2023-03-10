import React from "react";
import { useParams } from "react-router-dom";
// import { useState } from "react";
import lodgingList from "../data/lodging.json";
import Error from '../pages/Error'
import "../utils/style/_lodging.scss";


export default function Lodging() {
  // const [visible, setVisible] = useState(false);
  // const display = () => {
  //   setVisible((prevVisible) => !prevVisible);
  // };
  const { id } = useParams();
  console.log(id);
  const lodging = lodgingList.find((lodge) => lodge.id === id);
  if (!lodging) {
    return <Error />;
  }

  console.log(lodging);
  return (
      <div>
          <h1>{lodging.title}</h1>
          <p>{lodging.location}</p>
          <p>{lodging.host.name}</p>
      </div>
  )
}
