import React from 'react';
import './Description.scss';
import Graphics from "../../../../images/Graphics.svg";
import {IMAGE_ALT} from "../../../../common/constants";

function Description() {
    return (
        <div className="Description">
            <img src={Graphics} className="Description-Graphics" alt={IMAGE_ALT}/>
            <div className="Description-over92computer">
                Over 92% of computers are infected with Adware and spyware. Such software is rarely accompanied by uninstall utility and even when it is it almost always leaves broken Windows Registry keys behind it. Even if you have an anti-spyware tool your Windows Registry might be broken.
            </div>
        </div>
    );
}

export default Description;