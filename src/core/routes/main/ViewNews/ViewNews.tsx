import React from "react";
import Grid from "@material-ui/core/Grid";
import { style } from "../../../constants/interface";
import Picture from "../../../../shared/Picture";
import { typeNewsView } from "../../../constants/type";
import {BigViewNews} from '../../../reducer'
//import {} from '../../../../static/picture/bigPicture/'
interface BigNewsProps {
  src?: string;
  alt: string;
  news: any;
  type: string;
}

interface BigNewsPrivateProps extends BigNewsProps {
  bigNews:BigViewNews;
}

const styles: style = {
  picture: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
  text: {
    fontSize: "1.1rem",
    color:'rgb(140 137 137)'
  },
  autorContainer: {
    fontSize: "1rem",
    color:'rgb(140 137 137)'
  },
  autor: {},
  date: {},

  pictureContainer: {
    height: "50%",
  },
  containerText: {
    height: "50%",
  },
  containerBig: {
    minHeight: "300px",
    width: "100%",
    height:"100%"
  },
  containerMiddle: {
    height: "420px",
    width: "100%",
  },
  containerSmall: {
    height: "120px",
    width: "100%",
  },
};

export const BigNews: React.FC<BigNewsPrivateProps> = ({
  src,
  alt,
  news,
  type,
  bigNews,
}) => {
  if (type === typeNewsView.bigView) {
    return (
      <Grid
        container
        direction="row"
        justify="center"
        style={styles.containerBig}
        spacing={2}
      >
        <Grid item xs={12} style={styles.pictureContainer}>
          <Picture src={'./static/picture/bigPicture/1.png'} alt={bigNews.alt} />
        </Grid>
        <Grid item xs={10} style={styles.containerText}>
          <Grid
            container
            direction="column"
            justify="space-between"
            style={{ height: "100%" }}
            alignItems="flex-start"
          >
            <Grid item style={styles.title}>
              {bigNews.title}
            </Grid>
            <Grid item style={styles.text}>
              {bigNews.text}
            </Grid>
            <Grid item style={styles.autorContainer}>
            {bigNews.readTime}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
  if (type === typeNewsView.middleView) {
    return (
      <Grid
        container
        direction="row"
        justify="center"
        style={styles.containerMiddle}
      >
        <Grid item xs={12} style={styles.pictureContainer}>
          {/* <Picture src={src} alt={alt} /> */}
        </Grid>
        <Grid item xs={10} style={styles.containerText}>
          <Grid
            container
            direction="column"
            justify="space-between"
            style={{ height: "100%" }}
            alignItems="center"
          >
            <Grid item style={styles.title}>
              title
            </Grid>
            <Grid item style={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              dolorum.
            </Grid>
            <Grid item style={styles.autorContainer}>
              <div style={styles.autor}>Lorem, ipsum.</div>
              <div style={styles.date}>Lorem, ipsum dolor.</div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
  return (
    <Grid
      container
      direction="row"
      justify="center"
      style={styles.containerSmall}
    >
      <Grid item xs={2} style={styles.containerSmall}>
        {/* <Picture src={src} alt={alt} /> */}
      </Grid>
      <Grid item xs={10} >
        <Grid container justify="space-between" direction="column" alignItems="center" spacing={1} style={{height:'100%'}}>
        <Grid item  style={styles.title}>
          title
        </Grid>
        <Grid item  style={styles.autorContainer}>
          <div style={styles.autor}>Lorem, ipsum.</div>
          <div style={styles.date}>Lorem, ipsum dolor.</div>
        </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
