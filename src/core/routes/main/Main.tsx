import React from "react";
import Grid from '@material-ui/core/Grid';
import { Header } from "../../../shared/header";
import BigNews from "./bigNews";
interface MainProps {}

export const Main: React.FC<MainProps> = () => {
  return (
    <>
      <Header />
      <Grid container  justify='space-between' direction='row'>
      <Grid item xs={5}>
      <BigNews alt='text' src='https://img3.goodfon.ru/original/3000x2000/6/5f/nebo-oblaka-gory-zakat-ozero.jpg' news={{}}/>
      </Grid>
      <Grid item xs={7}></Grid>
      </Grid>
      
    </>
  );
};
