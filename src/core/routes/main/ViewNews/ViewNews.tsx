import React from "react";
import Grid from "@material-ui/core/Grid";
import { style } from "../../../constants/interface";
import Picture from "../../../../shared/Picture";
import { typeNewsView } from "../../../constants/type";
interface BigNewsProps {
  src: string;
  alt: string;
  news: any;
  type: string;
}

interface BigNewsPrivateProps extends BigNewsProps {}

const styles: style = {
  picture: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: "24px",
  },
  text: {},
  autorContainer: {},
  autor: {},
  date: {},

  pictureContainer: {
    height: "45%",
  },
  containerText: {
    height: "55%",
  },
  containerBig: {
    height: "420px",
    width: "100%",
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
}) => {
  if (type === typeNewsView.bigView) {
    return (
      <Grid
        container
        direction="row"
        justify="center"
        style={styles.containerBig}
      >
        <Grid item xs={12} style={styles.pictureContainer}>
          {/* <img src={src} alt={alt} style={styles.picture}></img> */}
          <Picture src={src} alt={alt} />
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
  if (type === typeNewsView.middleView) {
    return (
      <Grid
        container
        direction="row"
        justify="center"
        style={styles.containerMiddle}
      >
        <Grid item xs={12} style={styles.pictureContainer}>
          <Picture src={src} alt={alt} />
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
        <Picture src={src} alt={alt} />
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
