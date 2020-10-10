import React from 'react'
import picture from '../../../static/picture/room1/room.jpg'

interface CardRoomPictureProps {
    picture:string
}

const CardRoomPicture:React.FC = ()=>{
    
 return (
    // <div style={{backgroundImage:`url(${picture})`, backgroundSize:'cover', backgroundRepeat:'no-repeat'}}></div>
//     height: 0;
// padding-top: 130%;
// position: relative;
// display: block;


// position: absolute;
// top: 50%;
// left: 50%;
// transform: translate(-50%, -50%);
// max-height: 100%;
// max-width: 100%;
 //<div style={{backgroundImage:`url(${picture})`, backgroundSize:'cover',backgroundRepeat: 'no-repeat'}}></div>
<img src={picture} style={{width:'100%' , height:'100%'}}></img>
 )
}
export default CardRoomPicture
