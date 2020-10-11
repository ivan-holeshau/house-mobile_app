import React from 'react'
import Grid from '@material-ui/core/Grid';
import {style} from '../../../constants/interface'
interface BigNewsProps {
src:string;
alt:string;
news:any;
}


interface BigNewsPrivateProps extends BigNewsProps {

}


const styles:style= {
    picture :{
        width: '100%',
        height:'100%'
    },
    title:{
        fontWeight:"bold",
    },
    text:{},
    autorContainer:{},
    autor:{},
    date:{},
    container:{
        height:'430px'
    },
    pictureContainer:{
        height:'45%'
    },
    containerText:{
        height:'55%'
    }

}


export const BigNews:React.FC<BigNewsPrivateProps> = ({src, alt, news})=>{
    return (
        <Grid container direction="row" justify="center" style={styles.container}>
            <Grid item xs={12} style={styles.pictureContainer} >
                <img src={src} alt={alt} style={styles.picture}></img>
            </Grid>
            <Grid item xs={10} style={styles.containerText}>
                <div style={styles.title}><h1>title</h1></div>
                <div style={styles.text}>text</div>
                <div style={styles.autorContainer}> 
                <span style= {styles.autor}>autor</span>
                <span style= {styles.date}>data</span>
                </div>
            </Grid>
        </Grid>
    )
}