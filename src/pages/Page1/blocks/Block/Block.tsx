import React from 'react';
import './Block.scss';
import safari from "../../../../images/safari.svg";
import {IMAGE_ALT} from "../../../../common/constants";

// переименуй папку и все файлы с Block на Heading
function Block() {

  return (
    <div className="Block">
      <div className="BlockInputName">
        <span className="BlockInputNameTitle">Heading</span>
        <span className="BlockInputNameInfo">
          Let’s talk a little about what symptoms a slow computer can have.
        </span>
        <span className="BlockInputNameInfoMobile">
          Poster can be one of the effective marketing and advertising materials.
          It is also a great tool to use when you want to present your.
        </span>
        <div className="BlockInputNameForm">
          <input className="BlockInputNameFormName" placeholder="Name"/>
          <input className="BlockInputNameFormName" placeholder="Email"/>
          <input type="button" className="BlockInputNameFormButton" value="Subscribe"/>
          <span className="BlockInputNameFormInfo">
            No spam, notifications only about new products, updates and freebies.
          </span>
        </div>
      </div>
      <img src={safari} className="BlockSafari" alt={IMAGE_ALT}/>
    </div>
  );
}

export default Block;
