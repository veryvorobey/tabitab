import React from 'react';
import './Heading.scss';
import safari from "../../../../images/safari.svg";
import {IMAGE_ALT} from "../../../../common/constants";

function Heading() {

  return (
    <div className="Heading">
      <div className="HeadingForm">
        <span className="HeadingTitle">Heading</span>
        <span className="Heading-description">
          Let’s talk a little about what symptoms a slow computer can have.
        </span>
        <span className="Heading-Input-Mobile">
          Poster can be one of the effective marketing and advertising materials.
          It is also a great tool to use when you want to present your.
        </span>
        <div className="HeadingInputNameForm">
          <input className="Heading-input" placeholder="Name"/>
          <input className="Heading-input" placeholder="Email"/>
          <input type="button" className="Heading-button" value="Subscribe"/>
          <span className="Heading-formInfo">
            No spam, notifications only about new products, updates and freebies.
          </span>
        </div>
      </div>
      <img src={safari} className="Heading-image" alt={IMAGE_ALT}/>
    </div>
  );
}

export default Heading;
