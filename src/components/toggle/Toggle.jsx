import React from 'react'
import './toggle.css';
import Sun from '../../img/sun.png'
import Moon from '../../img/moon.png'

const Toggle = () => {
    return (
        <div className="toggle">
            <img src={Sun} alt="" className="toggle__icon" />
            <img src={Moon} alt="" className="toggle__icon" />
            <div className="toggle__button"></div>
        </div>
    )
}

export default Toggle
