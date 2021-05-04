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

const CategoryCard = () => {
  const {categories, setCategories, selectedCategory, setSelectedCategory} = useContext(GlobalStateContext);
/* 
  const useStyles = makeStyles({
    button: {
      "&.active": {
        background:'black',
      },
    },
  }); */

  console.log("selected:", selectedCategory)
  const handleChangeCategory = (event, newCategory) => {
    if(newCategory !== selectedCategory) {
        setSelectedCategory(newCategory);
    } else {
        setSelectedCategory("")
    }
  };

  const categoriesCards = categories.map((category) => {
    return <ToggleButton key={category} value={category}>{category}</ToggleButton>;
  });
  return (
    <ToggleButtonGroup value={selectedCategory} exclusive onChange={handleChangeCategory}>
      {categoriesCards}
    </ToggleButtonGroup>
  );
}

export default CategoryCard