import React from "react";
import Grid from "@material-ui/core/Grid";
import { style } from "../../../constants/interface";
import Picture from "../../../../shared/Picture";
import { typeNewsView } from "../../../constants/type";
import { BigViewNews } from "../../../reducer";
//import {} from '../../../../static/picture/bigPicture/'
interface BigNewsProps {
  src?: string;
  alt: string;
  news: any;
  type: string;
}

interface BigNewsPrivateProps extends BigNewsProps {
  bigNews: BigViewNews;
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
    fontSize: "1rem",
    marginTop: "0.8rem",
    color: "rgb(140 137 137)",
  },
  autorContainer: {
    fontSize: "1rem",
    marginTop: "1rem",
    color: "rgb(140 137 137)",
  },
  autor: {},
  date: {},

  pictureContainer: {
    height: "60%",
  },
  containerText: {
    height: "40%",
  },
  containerBig: {
    minHeight: "300px",
    width: "100%",
    height: "100%",
  },
  containerMiddle: {
    height: "220px",
    width: "100%",
  },
  containerSmall: {
    height: "80px",
    width: "100%",
    marginBottom:'1rem',
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
        
      >
        <Grid item xs={12} style={styles.pictureContainer}>
          <Picture
            src={"./static/picture/bigPicture/1.png"}
            alt={bigNews.alt}
          />
        </Grid>
        <Grid item xs={12} style={styles.containerText} justify="flex-end">
          <Grid container>
            <Grid xs={2}></Grid>
            <Grid item xs={10}>
              <div style={styles.title}>{bigNews.title}</div>
              <div style={styles.text}>{bigNews.text}</div>
              <div style={styles.autorContainer}> {bigNews.readTime}</div>
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
        {" "}
        <Grid item xs={12}>
          <Grid container direction="row">
            <Grid item xs={10} style={styles.pictureContainer}>
              <Picture
                src={"./static/picture/bigPicture/1.png"}
                alt={bigNews.alt}
              />
            </Grid>
            <Grid xs={2}></Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container direction="row">
            <Grid item xs={10} style={styles.pictureContainer}>
              <div style={styles.title}>{bigNews.title}</div>
              <div style={styles.text}>{bigNews.text}</div>
              <div style={styles.autorContainer}> {bigNews.readTime}</div>
            </Grid>
            <Grid xs={2}></Grid>
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
      <Grid item xs={3} style={styles.containerSmall}>
        <Picture src={"./static/picture/bigPicture/1.png"} alt={alt} />
      </Grid>
      <Grid item xs={9} style={{height:"100%"}}>
        <div style={{display:'flex',justifyContent:"space-between", alignItems:"self-start", marginLeft:'1rem', flexDirection:'column', height:"100%"}}>
          <div style={styles.title}>{bigNews.title}</div>

          <div style={styles.autorContainer}> {bigNews.readTime}</div>
        </div>
      </Grid>
    </Grid>
  );
};
