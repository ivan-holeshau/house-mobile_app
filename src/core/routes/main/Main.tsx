import React from "react";
import Grid from '@material-ui/core/Grid';
import { Header } from "../../../shared/header";
import ViewNews from "./ViewNews";
import {typeNewsView} from '../../../core/constants/type'
import { style } from "../../constants/interface";
import PosterNews from './PosterNews'
interface MainProps {}
  
const styles:style= {
 
  itemGrid:{
    padding :"0",
  }

  
}


export const Main: React.FC<MainProps> = () => {
  return (
    <>
      <Header />
      <Grid container  justify='space-between' direction='row' spacing={1}>
      <Grid item xs={5} style={styles.itemGrid}>
        <Grid container direction="column">
          
          <Grid>
          <ViewNews type={typeNewsView.bigView}  alt='text' src='https://img3.goodfon.ru/original/3000x2000/6/5f/nebo-oblaka-gory-zakat-ozero.jpg' news={{}}  />
          </Grid>
          <Grid>
          <PosterNews posterListNow={[]} posterList={[]}/>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4} style={styles.itemGrid}>
      <ViewNews type={typeNewsView.smallView}  alt='text' src='https://img3.goodfon.ru/original/3000x2000/6/5f/nebo-oblaka-gory-zakat-ozero.jpg' news={{}}  />
      
      <ViewNews type={typeNewsView.smallView}  alt='text' src='https://img3.goodfon.ru/original/3000x2000/6/5f/nebo-oblaka-gory-zakat-ozero.jpg' news={{}}  />
      <ViewNews type={typeNewsView.smallView}  alt='text' src='https://img3.goodfon.ru/original/3000x2000/6/5f/nebo-oblaka-gory-zakat-ozero.jpg' news={{}}  />
      </Grid>
      <Grid item xs={3} style={styles.itemGrid}>
      <ViewNews type={typeNewsView.middleView}  alt='text' src='https://img3.goodfon.ru/original/3000x2000/6/5f/nebo-oblaka-gory-zakat-ozero.jpg' news={{}}  />
      </Grid>
      </Grid>
    
      
    </>
  );
};
