import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ColorBox.scss';

ColorBox.propTypes = {
    
};

function getRandomColor(){
    const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue'];
    const randomIndex = Math.trunc(Math.random() * 5);
    return COLOR_LIST[randomIndex];
}

function ColorBox() {
    
    const [color, setColor] = useState(() => {
        const intiColor = localStorage.getItem('box_color') || 'deeppink';
        console.log(intiColor);
        return intiColor;
    });

    function handleClickBox(){
        // get random color -> set color
        const newColor = getRandomColor();
        setColor(newColor);
        localStorage.setItem('box_color', newColor);
    }

    return (
        <div className="color-box"
        style={{backgroundColor: color}}
        onClick={handleClickBox}>
            Color Box
        </div>
    );
}

export default ColorBox;