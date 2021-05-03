import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { DivDetailsRestaurant, StyledCard }from "./styled"

const useStyles = makeStyles({
  media: {
    height: 150,
    width: "100%",
    
  },
  title: {
    color: "#E86E5A",
  },
});

export default function RestaurantCardDetails(props) {
  const classes = useStyles();
  const time2 = Number(props.deliveryTime) + 10;
  return (
    <StyledCard
      style={{
        border: "none",
        boxShadow: "none",

      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.name}
          image={props.logoUrl}
          title={props.name}
        />
        <CardContent>
          <Typography className={classes.title} gutterBottom variant="h5">
            {props.name}
          </Typography>
          <DivDetailsRestaurant>
          <Typography variant="body2" color="textSecondary">
              {props.category} 
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {props.deliveryTime} - {time2} min
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Frete R${props.shipping}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {props.address}
            </Typography>
          </DivDetailsRestaurant>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
}