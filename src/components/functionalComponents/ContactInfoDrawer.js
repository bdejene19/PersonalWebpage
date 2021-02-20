/** React component holds animated svg avatar, and all necessary contact info to reach me and a downloadable CV
 * Includes: phone, email, linkedin, github and CV
 * 
 */

import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import styled from 'styled-components'
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import ContactToolTip from './ContactToolTip';


// the clicking of the buttons 'why programming" and "downlaod resume" in contact drawer
// opens modal box and downloads resume retrosepctively
function handleClick(text) {
  let modalBox = document.getElementById("modal");
  if (text === "Why programming") {
    modalBox.style.display = "block";
  } else if (text === "Download Resume") {
    window.location.href = process.env.PUBLIC_URL + "/finalBemnetDejeneDevResume.PDF"
  }
}

const Avatar = styled.img`
  width: 15vw;
`;

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

export default function PersistentDrawerRight() {
  const classes = useStyles();
  const theme = useTheme();

  // state of contact drawer
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* nav bar */}
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* open contact drawer  */}
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
        paper: classes.drawerPaper,
        }}
      >
        {/* close contact drawer */}
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />

          {/* Contact drawer content */}
          <div style={{textAlign: "center"}}>
            <Avatar src="https://www.iconfinder.com/data/icons/diversity-avatars-volume-01-v2/64/man-beard-glasses-african-512.png" alt="avatar" className="profile-photo"></Avatar>
            <div className='immediate-contact'>
              Phone: 519-619-3930<br></br>
              Email: bdejene19@gmail.com<br></br>
            </div>
            <br></br>
            {/* tool tipped contact info */}
            <ContactToolTip></ContactToolTip>
          </div>

          {/* conditoinal rendering  */}
          <List>
            {['Download Resume', 'Why programming'].map((text, index) => {
              if (index === 3) {
                return (
                  <ListItem button key={text} onClick={() => handleClick(text)} id={text}>
                    <ListItemIcon> <LiveHelpIcon></LiveHelpIcon></ListItemIcon>
                    <ListItemText primary={text}></ListItemText>
                  </ListItem>
                )
              }

              else {
                return (
                  <ListItem button key={text} onClick={() => handleClick(text)} id={text}>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
                )
              
              }
            })}
          </List>
        <Divider />
        <List>
          
        </List>
      </Drawer>
    </div>
  );
}
