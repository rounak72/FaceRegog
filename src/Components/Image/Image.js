import React from 'react';
import Tilt from 'react-tilt';
import '../../App.css';
import './image.css'
import 'tachyons';


const Image = ({ leftCol, topRow, rightCol, bottomRow, picture }) => {
    console.log(leftCol, topRow, rightCol, bottomRow)
    return (
        <div className='centre ma'>
            <Tilt className="Tilt" options={{ max: 25 }} style={{ height: 200, width: 200 }} >
                <div className='absolute mt2'>
                    <img id='inputImage' src={picture} alt='pic' />
                    <div className='bounding-box' style={{ top: topRow, right: rightCol, left: leftCol, bottom: bottomRow }}></div>
                </div>
            </Tilt>
        </div>
    )
}

export default Image;