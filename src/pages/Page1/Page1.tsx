import React from 'react';
import './Page1.scss'
import Header from "./blocks/Header/Header";
import Description from "./blocks/Description/Description";
import Heading from "./blocks/Heading/Heading";

function Page1() {
  return (
    <div className="Page1">
      <Header/>
      <Heading/>
      <Description/>
    </div>
  );
}

export default Page1;
