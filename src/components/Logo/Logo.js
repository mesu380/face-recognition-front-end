import React from 'react';
import Tilt from 'react-tilt';
//import { ReactComponent as Monster} from './monster.svg';
import './Logo.css';

const Logo =()=>{
    return (
        <div className='ma4 mt0'>
            <Tilt style={{ height: 150, width: 150 }} className="Tilt br2 shadow-2 " options={{ max : 55 }} >
              <div className="Tilt-inner" style={{paddingBottom:'10px'}}>
                  <span style={{fontSize:'130px', color:'white', fontFamily:'ariel' ,fontStyle:'italic'}}>M</span>
              </div>
            </Tilt>
        </div>
    );
}

export default Logo;
 