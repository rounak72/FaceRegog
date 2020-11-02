import React  from 'react'
import Tilt from 'react-tilt';
import './brain.png';

const Logo = () => {

    return (
        <div>
            <Tilt className="Tilt br2 outline w-50 pa3 " options={{ max: 25 }} style={{ height: 200, width: 200 }} >
                <img src='https://static.vecteezy.com/system/resources/thumbnails/001/218/541/original/pink-human-brain-icon.jpg'alt='logo'/> 
            </Tilt>
        </div>
    )
}

export default Logo;