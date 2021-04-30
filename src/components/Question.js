import React, { useState, useEffect } from "react";
import AppAppBar from "./modules/AppAppBar";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import LinearProgress from "@material-ui/core/LinearProgress";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Link from "@material-ui/core/Link";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MessageIcon from "@material-ui/icons/Message";
import GroupIcon from "@material-ui/icons/Group";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import AssessmentIcon from "@material-ui/icons/Assessment";
import LocalActivityIcon from "@material-ui/icons/LocalActivity";
import AssistantPhotoIcon from "@material-ui/icons/AssistantPhoto";
import ForumIcon from "@material-ui/icons/Forum";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Toolbar from "@material-ui/core/Toolbar";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import LabelIcon from "@material-ui/icons/Label";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import NotificationsIcon from "@material-ui/icons/Notifications";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import AppAppBar from "./modules/AppAppBar";
// import Container from "@material-ui/core/Container";
// import Paper from "@material-ui/core/Paper";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(12),
    fontWeight: theme.typography.fontWeightRegular,
  },
  calendarPaper: {
    height: "30.5em",
  },
  calendarStyle: {
    height: "35em",
  },
  paper22: {
    padding: theme.spacing(3),
    //marginLeft: "10.3em",
    // minWidth: "45em",
    minHeight: "45em",
    marginTop: "1em",
  },
  discussionIcon: {
    marginTop: "3em",
    marginLeft: "-1.4em",
  },
}));

function Question() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppAppBar />
      <Container>
        <Box justifyContent="center" m={1} p={1}>
          <Grid container wrap="nowrap">
            <Grid item xs={1} />

            <Grid item xs={10}>
              <Button
                // color="secondary"
                // className={classes.button}
                startIcon={<ArrowBackIcon />}
              >
                <Link
                  component="button"
                  variant="body2"
                  onClick={() => {
                    window.history.back();
                  }}
                >
                  RETURN TO PREVIOUS PAGE
                </Link>
              </Button>
              <Paper className={classes.paper22}>
                <Grid item xs={12}>
                  <List className={classes.root}>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar
                          alt="Remy Sharp"
                          src="/static/images/avatar/1.jpg"
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary="Sidhesh Shinde"
                        secondary={
                          <React.Fragment>
                            <Typography
                              component="span"
                              variant="body2"
                              className={classes.inline}
                              color="textPrimary"
                            >
                              2 months ago
                            </Typography>
                          </React.Fragment>
                        }
                      />
                      <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete">
                          <AssistantPhotoIcon />
                        </IconButton>
                        <React.Fragment>
                          <IconButton
                            edge="end"
                            aria-label="delete"
                            className={classes.discussionIcon}
                          >
                            <CheckCircleIcon />
                          </IconButton>
                        </React.Fragment>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </List>
                </Grid>
                <Grid item>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    whenever I try to calculate Rank F in Excel what about
                    data_array,bins_array)
                  </Typography>
                </Grid>
                <Grid item>
                  <Link
                    component="button"
                    variant="body2"
                    className={classes.discussionReaction}
                    // onClick={() => {
                    //   console.info("I'm a button.");
                    // }}
                  >
                    1 upvotes
                  </Link>{" "}
                  {"-"}{" "}
                  <Link
                    component="button"
                    variant="body2"
                    className={classes.discussionReaction}
                    // onClick={() => {
                    //   console.info("I'm a button.");
                    // }}
                  >
                    1 answers
                  </Link>{" "}
                  {
                    <LabelIcon
                      style={{ marginBottom: "-0.35em", color: "#22af73" }}
                    />
                  }{" "}
                  <Link
                    component="button"
                    variant="body2"
                    className={classes.discussionReaction}
                    // onClick={() => {
                    //   console.info("I'm a button.");
                    // }}
                  >
                    Segmentation
                  </Link>
                </Grid>
                <Divider variant="middle" style={{ marginTop: "1em" }} />
                <Grid item>
                  <Button
                    // color="secondary"
                    // className={classes.button}
                    startIcon={<ThumbUpIcon />}
                  >
                    <Link
                      component="button"
                      variant="body2"
                      // onClick={() => {
                      //   console.info("I'm a button.");
                      // }}
                    >
                      Upvote
                    </Link>
                  </Button>
                  <Button
                    // color="secondary"
                    // className={classes.button}
                    startIcon={<NotificationsIcon />}
                  >
                    <Link
                      component="button"
                      variant="body2"
                      // onClick={() => {
                      //   console.info("I'm a button.");
                      // }}
                    >
                      Follow
                    </Link>
                  </Button>
                  {/* <Grid item xs={5} /> */}
                  <Button
                    variant="outlined"
                    // color="secondary"
                    // className={classes.button}
                    startIcon={<MessageIcon />}
                    style={{ marginLeft: "40em", marginTop: "1em" }}
                  >
                    Answer
                  </Button>
                </Grid>

                <Divider variant="middle" style={{ marginTop: "1em" }} />
                <Typography variant="h5" color="textSecondary" gutterBottom>
                  Answer(s)
                </Typography>
                <Grid item xs={12}>
                  <List className={classes.root}>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar
                          alt="Khyati Patel"
                          src="/static/images/avatar/1.jpg"
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary="Khyati Patel"
                        secondary={
                          <React.Fragment>
                            <Typography
                              component="span"
                              variant="body2"
                              className={classes.inline}
                              color="textPrimary"
                            >
                              2 months ago
                            </Typography>
                          </React.Fragment>
                        }
                      />

                      <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete">
                          <AssistantPhotoIcon />
                        </IconButton>
                        <React.Fragment>
                          <IconButton
                            edge="end"
                            aria-label="delete"
                            className={classes.discussionIcon}
                          >
                            <CheckCircleIcon />
                          </IconButton>
                        </React.Fragment>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </List>
                </Grid>
                <Grid item>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    whenever I try to calculate Rank F in Excel what about
                    data_array,bins_array)
                  </Typography>
                </Grid>
                <Grid item>
                  <Link
                    component="button"
                    variant="body2"
                    className={classes.discussionReaction}
                    // onClick={() => {
                    //   console.info("I'm a button.");
                    // }}
                  >
                    1 upvotes
                  </Link>{" "}
                  {"-"}{" "}
                  <Link
                    component="button"
                    variant="body2"
                    className={classes.discussionReaction}
                    // onClick={() => {
                    //   console.info("I'm a button.");
                    // }}
                  >
                    1 answers
                  </Link>{" "}
                  {
                    <LabelIcon
                      style={{ marginBottom: "-0.35em", color: "#22af73" }}
                    />
                  }{" "}
                  <Link
                    component="button"
                    variant="body2"
                    className={classes.discussionReaction}
                    // onClick={() => {
                    //   console.info("I'm a button.");
                    // }}
                  >
                    Segmentation
                  </Link>
                </Grid>
                <Divider variant="middle" style={{ marginTop: "1em" }} />
                <Grid item>
                  <Button
                    // color="secondary"
                    // className={classes.button}
                    startIcon={<ThumbUpIcon />}
                  >
                    <Link
                      component="button"
                      variant="body2"
                      // onClick={() => {
                      //   console.info("I'm a button.");
                      // }}
                    >
                      Upvote
                    </Link>
                  </Button>
                  <Button
                    // color="secondary"
                    // className={classes.button}
                    startIcon={<MessageIcon />}
                  >
                    <Link
                      component="button"
                      variant="body2"
                      // onClick={() => {
                      //   console.info("I'm a button.");
                      // }}
                    >
                      Comment
                    </Link>
                  </Button>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={1} />
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Question;
