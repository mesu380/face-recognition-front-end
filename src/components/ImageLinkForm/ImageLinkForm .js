import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm =({onInputChange,onButtonSubmit})=>{
    return (
        <div>
            <p className='f3'>
                {'enter a picture to detect the faces !!'}
            </p>
            <div className='center'>
                <div className=' pa4 br3 form'>
                <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
                <button 
                className='but w-30 grow f4 link ph3 pv2 dib white'
                onClick={onButtonSubmit}
                >detect</button>
                </div>
            </div>

        </div>
    );
}

export default ImageLinkForm;
 