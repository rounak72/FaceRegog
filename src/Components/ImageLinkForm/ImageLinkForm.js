import React from 'react';
import Tilt from 'react-tilt';
import '../../App.css'
import 'tachyons';


const ImageLinkForm = ({OnInputChange , OnSumbit}) => {

    return (
        <div>
            <div className='centre'>
                <Tilt className="Tilt" options={{ max: 5 }} style={{ height: 200, width: 200 }} >
                    <p className='tc'>
                        {'Input an Image URL from the web'}
                    </p>
                    <div className='Tilt-inner tc'>
                        <input className='f4 pa2 w-70' type='text' onChange={OnInputChange} />
                        <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple tc' onClick={OnSumbit}>Go</button>
                    </div>
                </Tilt>

            </div>
        </div>
    )
}

export default ImageLinkForm;