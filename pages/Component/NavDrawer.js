import { useState } from 'react';
import {
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  Typography,
  makeStyles,
  SwipeableDrawer,
  IconButton,
  Box,
  Divider,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FolderIcon from '@material-ui/icons/Folder';

const useStyles = makeStyles(theme => ({
  root: {},
  paper: {
    background: '	#F5F5F5',
  },
  list: {
    width: 240,
  },
}));

function NavDrawer({ projectsClick, thingsIcanDoClick, contactClick }) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const gotoProjects = () => {
    setOpen(false);
    projectsClick();
  };

  const gotoProjects2 = () => {
    projectsClick();
  };

  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        open={open}
        onClose={() => setOpen(false)}
        classes={{ paper: classes.paper }}
      >
        <Box className={classes.list}>
          <Box textAlign="center" p={1.5}>
            <Typography variant="h6">Navigate</Typography>
          </Box>
          <Divider />
          <List>
            <ListItem onClick={gotoProjects} button>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText primary="Projects" />
            </ListItem>
            <ListItem onClick={gotoProjects2} button>
              <ListItemIcon>
                <FormatListBulletedIcon />
              </ListItemIcon>
              <ListItemText primary="Things I Can Do" />
            </ListItem>
            <ListItem
              onClick={() => {
                gotoProjects2();
                setOpen(false);
              }}
              button
            >
              <ListItemIcon>
                <ContactPhoneIcon />
              </ListItemIcon>
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </Box>
      </SwipeableDrawer>
    </div>
  );
}

export default NavDrawer;
