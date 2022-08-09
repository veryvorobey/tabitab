import React from 'react';
import './Page1.scss'
import Header from "./blocks/Header/Header";
import Block from "./blocks/Block/Block";
import Description from "./blocks/Description/Description";

function Page1() {
  return (
    <div className="Page1">
      <Header/>
      <Block/>
        <Description/>
    </div>
  );
}

export default Page1;
