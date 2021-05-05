import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import back from '../../src/assets/images/back.svg'
import styled from 'styled-components'

export const BackImage = styled.img`
  width: 5vw;
  max-width: 50px;
`;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

const Header = () => {
    const classes = useStyles();

    return (<div className={classes.root}>
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton edge="start" className={classes.menuButton} color="paper" aria-label="menu">
                    <BackImage src={back} />
                </IconButton>
                <Typography variant="h6" color="inherit">
                    Nome
            </Typography>
            </Toolbar>
        </AppBar>
    </div>)
}

export default Header