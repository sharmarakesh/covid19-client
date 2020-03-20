import React from 'react';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { MainList, SecondaryList } from 'components/List';
import { noop, isMobile } from 'utils';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
}));

export default function Menu({ isMenuOpen, handleMenuClose }) {
  const classes = useStyles();

  return (
    <Drawer
      variant={isMobile ? "temporary" : "permanent"}
      classes={{
        paper: clsx(classes.drawerPaper, !isMenuOpen && classes.drawerPaperClose),
      }}
      open={isMenuOpen}
      onClose={isMobile ? handleMenuClose : noop}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleMenuClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <MainList />
      <Divider />
      <SecondaryList />
    </Drawer>
  );
}
