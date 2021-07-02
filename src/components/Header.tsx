import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import Link from "@/components/Link";
import Button from "@material-ui/core/Button"
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  navbarSpaced: {
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navList: {
    width: "70vw",
  },
  drawerPaper: {
    background: theme.palette.primary.main,
  },
  navListItemText: {
    fontSize: theme.typography.h6.fontSize,
  },
}));

const navLinks = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Kontakt",
    href: "/contact",
  },
];

function ListItemLink(props: any) {
  return <ListItem button component="a" {...props} />;
}

export default function Header(): ReactElement {
  const classes = useStyles();
  const [drawerOpen, setState] = React.useState(false);

  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up("md"));

  const toggleDrawer = () => {
    setState(!drawerOpen);
  };

  return (
    <React.Fragment>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        classes={mdUp ? { root: classes.navbarSpaced } : {}}
      >
        <Container maxWidth="md" disableGutters>
          <Toolbar>
            <Hidden mdUp>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Hidden smDown>
              <Typography variant="h5" className={classes.title}>
                <Box display="flex">
                  {navLinks.map(({ text, href }) => (
                    <Box key={href} mr={8}>
                      <Link href={href} color="textPrimary">
                        {text}
                      </Link>
                    </Box>
                  ))}
                </Box>
              </Typography>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
      <Hidden mdUp>
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer}
          classes={{ paper: classes.drawerPaper }}
        >
          <Typography color="textSecondary">
            <List component="nav" className={classes.navList}>
              {navLinks.map(({ text, href }) => (
                <ListItem button key={href}>
                  <ListItemLink href={href}>
                    <ListItemText
                      primary={text}
                      classes={{ primary: classes.navListItemText }}
                    />
                  </ListItemLink>
                </ListItem>
              ))}
            </List>
          </Typography>
        </Drawer>
      </Hidden>
    </React.Fragment>
  );
}
