import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

interface PosterNewsProps {
  posterList: any[];
  posterListNow: any[];
}




export const PosterNews: React.FC<PosterNewsProps> = ({}) => {
  return (
  <>
  <Grid container>
      <Grid item xs={1}></Grid>
      <Grid item xs={11}>
      <div style={{backgroundColor:'#b8ab96', display:"flex", justifyContent:"space-between", padding:'0.5rem', color:"white"} }  >
         <span><u>1</u></span>
         <span><u>2</u></span>
        </div>
        <div style={{backgroundColor:'#b8ab96', display:"flex", flexDirection:"column"}}>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", padding:"1rem", alignItems:"center", color:"white"}}>
            <span style={{backgroundColor:"white", height:"40px", width:"40px", borderRadius:"20px",}}></span>
                <span>fwfwfergfhuijkjhyughijtfr67uij</span>
            </div>
        </div>
      </Grid>
  </Grid>
 
    </>
  );
};
