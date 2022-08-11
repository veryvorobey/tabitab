import React from 'react';
import './Heading.scss';
import safari from "../../../../images/safari.svg";
import {IMAGE_ALT} from "../../../../common/constants";

function Heading() {

  return (
    <div className="Heading">
      <div className="Heading-form">
        <div className="Heading-formContent">
          <span className="Heading-title">Heading</span>
          <span className="Heading-desktopDescription">
          Let’s talk a little about what symptoms a slow computer can have.
        </span>
          <span className="Heading-mobileDescription">
          Poster can be one of the effective marketing and advertising materials.
          It is also a great tool to use when you want to present your.
        </span>
          <div className="HeadingInputNameForm">
            <div className="Heading-inputs">
              <input className="Heading-input" placeholder="Name"/>
              <input className="Heading-input" placeholder="Email"/>
            </div>
            <input type="button" className="Heading-button" value="Subscribe"/>
            <span className="Heading-formInfo">
            No spam, notifications only about new products, updates and freebies.
          </span>
          </div>
        </div>
      </div>
      <img src={safari} className="Heading-image" alt={IMAGE_ALT}/>
    </div>
  );
}

export default Heading;
