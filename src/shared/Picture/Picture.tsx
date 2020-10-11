import React from 'react'
import {style} from '../../core/constants/interface'

interface PictureProps{
src:string,
alt:string,
}

interface PicturePrivateProps extends PictureProps{}


const styled:style = {
    img:{
        width: "100%",
    height: "100%",
    }
} 

export const Picture:React.FC<PicturePrivateProps> = ({ src, alt}) =>{
return (
        <img src= {src} alt={alt} style={styled.img}/>
)
}