import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import backImg from "../../src/assets/images/back.svg";
import styled from "styled-components";
import { goToPreviousPage } from "../routes/coordinator";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../global/GlobalStateContext";

export const BackImage = styled.img`
  width: 5vw;
  max-width: 50px;
`;

const useStyles = makeStyles((theme) => ({
  appBarMod: {
    backgroundColor: "#FFFF",
    boxShadow: "0 0.5px 0 0 rgba(0, 0, 0, 0.25)",
    height: '8vh',
    display: 'flex',
    justifyContent: 'center',
  },
  typography: {
    flexGrow: 1,
    textAlign: "center",
    paddingRight: 30.75,
  },
  typographywithoutBack: {
    flexGrow: 1,
    textAlign: "center",
  },
}));

const Header = () => {
  const history = useHistory();
  const classes = useStyles();
  const { actualPage, back } = useContext(GlobalStateContext);

  console.log("back", back);
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBarMod}>
        <Toolbar variant="dense">
          {back === false ? (
            <></>
          ) : (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="paper"
              aria-label="menu"
              onClick={() => goToPreviousPage(history)}
            >
              <BackImage src={backImg} />
            </IconButton>
          )}

          {back === false ? (
            <Typography
              variant="h6"
              color="inherit"
              className={classes.typographywithoutBack}
            >
              {actualPage}
            </Typography>
          ) : (
            <Typography
              variant="h6"
              color="inherit"
              className={classes.typography}
            >
              {actualPage}
            </Typography>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
