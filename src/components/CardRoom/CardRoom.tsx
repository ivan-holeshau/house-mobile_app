import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import React from "react";
import CardRoomPicture from "./CardRoomPicture";
import RadiusPictureMode from "./RadiusPictureMode";

interface CardRoomProps {
  title: string;
  picture: string;
  listModes: any;
}

const CardRoom: React.FC<CardRoomProps> = () => {
  return (
    <Grid
      container
      direction="column"
      style={{ height: "30%", marginTop: "2%", minHeight: "200px" }}
    >
      <Card style={{ height: "100%" }}>
        <Grid item style={{ padding: "1%", color: "#a8a8a8" }}>
          Title
        </Grid>
        <Grid item xs style={{ height: "65%" }}>
          <CardRoomPicture />
        </Grid>

        <Grid item style={{ height: "25%"}}>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            style={{ height: "100%" }}
          >
            <RadiusPictureMode />
            <RadiusPictureMode />
            <RadiusPictureMode />
            <RadiusPictureMode />
            <RadiusPictureMode />
            <RadiusPictureMode />
            <RadiusPictureMode />
            <RadiusPictureMode />
            <RadiusPictureMode />
            <RadiusPictureMode />
            <RadiusPictureMode />
            <RadiusPictureMode />
            <RadiusPictureMode />
            <RadiusPictureMode />
            <RadiusPictureMode />
            <RadiusPictureMode />
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default CardRoom;
