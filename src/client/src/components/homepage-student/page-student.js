import React, { Component } from "react";
import "./page-student.css";
import "../style.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Carousel from "react-bootstrap/Carousel";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import DialogBox from "../dialog/DialogBox";
import Button from "@material-ui/core/Button";
import FacebookIcon from "@material-ui/icons/Facebook";
import Collapsible from "react-collapsible";
import DialogSelect from "../dialog/DialogSelect";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import ItemsCarousel from "../items-carousel/items-carousel";
//import ShoppingCart from "../shopping-cart/shopping-cart";
import ShoppingCart2 from "../shopping-cart/shopping-cart2";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "auto",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    flexGrow: 1,
    marginTop: "2%",
    textAlign: "right",
  },
  content: {
    flexGrow: 1,
    height: "100%",
    overflow: "auto",
    backgroundImage: "url(bg.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
  },
  studentMain: {
    height: "auto",
    width: "100%",
    margin: "0 auto",
    marginTop: "2%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 320,
    width: 250,
    position: "relative",
  },
  control: {
    padding: theme.spacing(2),
  },

  contain: {
    backgroundColor: "white",
    opacity: 0.5,
    marginTop: "2%",
  },
  container: {
    paddingTop: "0",
    paddingBottom: "0",
    backgroundColor: "rgb(255,255,255,0.3)",
    marginTop: "2%",
    boxShadow: "0px 0px 50px 5px rgba(0, 0, 0, 0.71)",
    width: "auto",
    paddingLeft: "0",
    paddingRight: "0",
  },
  appBar: {
    backgroundColor: "#002346",
    bottom: 0,
    height: "auto",
    color: "white",
    padding: "1%",
    width: "100%",
  },
  dialogButton: {
    position: "absolute",
    right: 0,
    bottom: 0,
    marginRight: "4%",
    marginBottom: "4%",
    marginTop: "10%",
  },
}));

function FormRow() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Paper className={classes.paper}>item</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>item</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>item</Paper>
      </Grid>
    </React.Fragment>
  );
}

function getFunctionContent(func) {
  switch (func) {
    case 0:
      return (
        <div id="blur">
          <div className="studentMain">
            <Container
              className="container"
              style={{ paddingRight: "0", paddingLeft: "0" }}
            >
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="test3.png"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="test2.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Container>
          </div>
          <div id="items-carousel-title">
            {/*<h2 style={{ float: "right", marginBottom: "2%" }}>
              نظام الخدمات الإلكترونية للطلاب
      </h2>*/}
          </div>
          <div className="items-carousel">
            <ItemsCarousel />
          </div>
          <footer className="appBar">
            <FacebookIcon />
          </footer>
        </div>
      );

    case 1:
      return (
        <div>
          <ShoppingCart2 />
          <footer className="appBar">
            <FacebookIcon />
          </footer>
        </div>
      );
    default:
      return "Unknown step";
  }
}

export default function StudentHome(props) {
  const classes = useStyles();
  const anchorRef = React.useRef(null);
  const [openM, setOpenM] = React.useState(false);
  const [activeFunc, setActiveFunc] = React.useState(0);

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpenM(false);
    }
  }

  const handleToggle = () => {
    setOpenM((prevOpenM) => !prevOpenM);
  };

  const handleCart = () => {
    setActiveFunc(1);
  };

  const handleHome = () => {
    setActiveFunc(0);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpenM(false);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar variant="dense" className="student-toolbar">
          <Button
            ref={anchorRef}
            aria-controls={openM ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            color="inherit"
            size="small"
            edge="false"
            style={{ padding: "0px" }}
          >
            <AccountBoxIcon id="account-icon" />
          </Button>
          <Divider orientation="vertical" flexItem id="vertical-div" />
          <Button
            onClick={handleCart}
            color="inherit"
            size="small"
            edge="false"
            style={{ padding: "0px" }}
          >
            <ShoppingCartIcon id="cart-icon" />
          </Button>

          <Link
            component="button"
            variant="h5"
            style={{
              marginLeft: "auto",
              fontWeight: "bold",
              color: "white",
              fontFamily: "Cairo",
              fontSize: "18px",
            }}
            className={classes.title}
            underline="none"
            onClick={handleHome}
          >
            نظام الخدمات الإلكترونية للطلاب
          </Link>
          <Popper
            open={openM}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={openM}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem onClick={handleClose}>My account</MenuItem>
                      <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Toolbar>
      </AppBar>
      <main className={classes.content} id="main-content">
        {getFunctionContent(activeFunc)}
        {/*<ShoppingCart />*/}

        {/* <Container maxWidth="lg" className={classes.container}>
          <div className={classes.root}>
            <h2
              style={{
                color: "#003366",
                fontWeight: "bold",
                marginRight: "2%"
              }}
            >
              الخدمات الإلكترونية
            </h2>

            <Divider
              style={{
                marginBottom: "5%",
                backgroundColor: "#003366"
              }}
            />
            <Grid container className={classes.root} spacing={2}>
              <Grid item xs={12}>
                <Grid container justify="center" spacing={4}>
                  <Grid key="1" item>
                    <Paper className={classes.paper}>
                      <div id="paper-icons">
                        <FileCopyIcon id="inside-paper-icon" />
                      </div>
                      <DialogBox />
                    </Paper>
                  </Grid>
                  <Grid key="2" item>
                    <Paper className={classes.paper}>
                      <div id="paper-icons">
                        <FileCopyIcon id="inside-paper-icon" />
                      </div>
                      <DialogSelect />
                    </Paper>
                  </Grid>
                  <Grid key="3" item>
                    <Paper className={classes.paper}>
                      <div id="paper-icons">
                        <FileCopyIcon id="inside-paper-icon" />
                      </div>
                      <Button variant="contained" id="inside-paper-button">
                        Choose
                      </Button>
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Container>

        <Container maxWidth="lg" className={classes.container}>
          <div className={classes.root}>
            <h2
              style={{
                color: "#003366",
                fontWeight: "bold",
                marginRight: "2%"
              }}
            >
              الخدمات الإلكترونية
            </h2>

            <Divider
              style={{
                marginBottom: "5%",
                backgroundColor: "#003366"
              }}
            />
            <Grid container className={classes.root} spacing={2}>
              <Grid item xs={12}>
                <Grid container justify="center" spacing={4}>
                  <Grid key="1" item>
                    <Paper className={classes.paper}>
                      <div id="paper-icons">
                        <FileCopyIcon id="inside-paper-icon" />
                      </div>
                      <Button variant="contained" id="inside-paper-button">
                        Choose
                      </Button>
                    </Paper>
                  </Grid>
                  <Grid key="2" item>
                    <Paper className={classes.paper}>
                      <div id="paper-icons">
                        <FileCopyIcon id="inside-paper-icon" />
                      </div>
                      <Button variant="contained" id="inside-paper-button">
                        Choose
                      </Button>
                    </Paper>
                  </Grid>
                  <Grid key="3" item>
                    <Paper className={classes.paper}>
                      <div id="paper-icons">
                        <FileCopyIcon id="inside-paper-icon" />
                      </div>
                      <Button variant="contained" id="inside-paper-button">
                        Choose
                      </Button>
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Container>
        <Container maxWidth="lg" className={classes.container}>
          <div className={classes.root}>
            <h2
              style={{
                color: "#003366",
                fontWeight: "bold",
                marginRight: "2%"
              }}
            >
              الخدمات الإلكترونية
            </h2>

            <Divider
              style={{
                marginBottom: "5%",
                backgroundColor: "#003366"
              }}
            />
            <Grid container className={classes.root} spacing={2}>
              <Grid item xs={12}>
                <Grid container justify="center" spacing={4}>
                  <Grid key="1" item>
                    <Paper className={classes.paper}>
                      <div id="paper-icons">
                        <FileCopyIcon id="inside-paper-icon" />
                      </div>
                      <Button variant="contained" id="inside-paper-button">
                        Choose
                      </Button>
                    </Paper>
                  </Grid>
                  <Grid key="2" item>
                    <Paper className={classes.paper}>
                      <div id="paper-icons">
                        <FileCopyIcon id="inside-paper-icon" />
                      </div>
                      <Button variant="contained" id="inside-paper-button">
                        Choose
                      </Button>
                    </Paper>
                  </Grid>
                  <Grid key="3" item>
                    <Paper className={classes.paper}>
                      <div id="paper-icons">
                        <FileCopyIcon id="inside-paper-icon" />
                      </div>
                      <Button variant="contained" id="inside-paper-button">
                        Choose
                      </Button>
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Container>
            */}
      </main>
    </React.Fragment>
  );
}
