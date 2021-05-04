import React, { useEffect, useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {
  createMuiTheme,
  withStyles,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import GlobalStateContext from "../../global/GlobalStateContext";
import { primaryColor, mainGray } from "../../constants/colors";

const useStyles = makeStyles({});

const StyledToggleButtonGroup = withStyles((theme) => ({
  grouped: {
    margin: theme.spacing(0.5),
    border: "none",
  },
}))(ToggleButtonGroup);

const StyledToggleButton = withStyles((theme) => ({
  root: {
    height: 48,
    "&:hover": {
      color: primaryColor,
      backgroundColor: "#fff",
    },
    "&.Mui-selected": {
      color: primaryColor,
      backgroundColor: "#fff",
    },
    "&.Mui-selected:hover": {
      backgroundColor: "#fff",
    },
  },
}))(ToggleButton);

const CategoryCard = () => {
  const {
    categories,
    setCategories,
    selectedCategory,
    setSelectedCategory,
  } = useContext(GlobalStateContext);
  const classes = useStyles();

  console.log("selected:", selectedCategory);
  const handleChangeCategory = (event, newCategory) => {
    if (newCategory !== selectedCategory) {
      setSelectedCategory(newCategory);
    } else {
      setSelectedCategory("");
    }
  };

  const categoriesCards = categories.map((category) => {
    return (
      <StyledToggleButton
        className={classes.button}
        key={category}
        value={category}
        disableRipple
      >
        {category}
      </StyledToggleButton>
    );
  });
  return (
    <StyledToggleButtonGroup
      value={selectedCategory}
      exclusive
      onChange={handleChangeCategory}
      disableRipple
    >
      {categoriesCards}
    </StyledToggleButtonGroup>
  );
};

export default CategoryCard;
