import React from "react";
import AppAppBar from "./modules/AppAppBar";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
// import LinearProgress from "@material-ui/core/LinearProgress";
// import ChevronRightIcon from "@material-ui/icons/ChevronRight";
// import Link from "@material-ui/core/Link";
// import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
// import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
// import AvatarGroup from "@material-ui/lab/AvatarGroup";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListSubheader from "@material-ui/core/ListSubheader";
import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from "prop-types";
// import ButtonBase from "@material-ui/core/ButtonBase";
//icons
import FacebookIcon from "@material-ui/icons/Facebook";
import CreateIcon from "@material-ui/icons/Create";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import WorkIcon from "@material-ui/icons/Work";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import RoomIcon from "@material-ui/icons/Room";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import AssessmentIcon from "@material-ui/icons/Assessment";
import LocalActivityIcon from "@material-ui/icons/LocalActivity";
import AssistantPhotoIcon from "@material-ui/icons/AssistantPhoto";
import ForumIcon from "@material-ui/icons/Forum";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Link from "@material-ui/core/Link";
import LabelIcon from "@material-ui/icons/Label";
import Button from "@material-ui/core/Button";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

//icons
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper1: {
    padding: theme.spacing(1),
    margin: "auto",
    marginTop: "1em",
    marginBottom: "1em",
    maxWidth: 970,
    maxHeight: 250,
  },
  tabPanel: {
    marginTop: "-1em",
    marginBottom: "-2em",
    // backgroundColor: theme.palette.background.paper,
    // width: 970,
  },
  paper2: {
    padding: theme.spacing(3),
    marginLeft: "6.6em",
    minWidth: 450,
  },
  paper22: {
    padding: theme.spacing(3),
    marginLeft: "10.3em",
    minWidth: 450,
    marginTop: "1em",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  paper3: {
    padding: theme.spacing(3),
    maxWidth: 280,
    marginLeft: "0.3em",
    marginBottom: "0.5em",
  },
  paper4: {
    padding: theme.spacing(3),
    minWidth: 450,
    maxHeight: 150,
    marginLeft: "6.6em",
    marginTop: "0.5em",
    marginBottom: "0.5em",
  },
  paper41: {
    padding: theme.spacing(3),
    minWidth: 200,
    maxWidth: 280,
    minHeight: 250,
    marginLeft: "0.3em",
    // marginTop: "0.5em",
    marginBottom: "0.5em",
  },
  paper5: {
    padding: theme.spacing(3),
    minWidth: 450,
    maxHeight: 150,
    marginLeft: "6.6em",
    marginTop: "0.5em",
    marginBottom: "0.5em",
  },
  heading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginLeft: 12,
    marginBottom: -60,
    padding: 0,
  },
  overallProg: {
    fontWeight: 600,
  },
  overallProg1: {
    marginTop: "3em",
    fontWeight: 600,
  },
  learnButton: {
    backgroundColor: " #22af73",
    color: "#fff",
    "&:hover": {
      backgroundColor: " #22af73",
      color: "#fff",
    },
  },
  avtr: {
    height: 56,
    width: 55,
    marginRight: "0.7em",
    marginBottom: "0.3em",
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  forumScore: {
    color: "#ff7000",
  },
  forumLeaderboard: {
    color: "#8dc007",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  discussionIcon: {
    marginTop: "3em",
    marginLeft: "-1.4em",
  },
  discussionReaction: {
    color: "#22af73",
  },
}));
// const BorderLinearProgress = withStyles((theme) => ({
//   root: {
//     height: 12,
//     borderRadius: 5,
//     width: 600,
//     marginRight: 5,
//   },
//   colorPrimary: {
//     backgroundColor:
//       theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
//   },
//   bar: {
//     borderRadius: 5,
//     backgroundColor: "#1e5494;",
//   },
//   bar1: {
//     borderRadius: 5,
//     backgroundColor: "#4a90e2;",
//   },
// }))(LinearProgress);
// const BorderLinearProgress1 = withStyles((theme) => ({
//   root: {
//     height: 12,
//     borderRadius: 5,
//     width: 600,
//     marginRight: 5,
//     marginTop: "3em",
//   },
//   colorPrimary: {
//     backgroundColor:
//       theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
//   },
//   bar: {
//     borderRadius: 5,
//     backgroundColor: "#4a90e2;",
//   },
// }))(LinearProgress);
function CircularProgressWithLabel(props) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="static" {...props} />
      <Box
        top={1}
        left={1}
        bottom={1}
        right={1}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="caption"
          component="div"
          color="textSecondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}
CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and static variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};
function CircularProgressWithLabel1(props) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="static" {...props} />
      <Box
        top={1}
        left={1}
        bottom={1}
        right={1}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="caption"
          component="div"
          color="textSecondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}
CircularProgressWithLabel1.propTypes = {
  /**
   * The value of the progress indicator for the determinate and static variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
let user_full_name;
function Profile() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  user_full_name = localStorage.getItem("User_Full_Name");

  // const [progress, setProgress] = React.useState(10);
  return (
    <React.Fragment>
      <CssBaseline />
      <AppAppBar />
      <Container>
        {/* INFO CARD */}
        <Paper className={classes.paper1} square>
          <Box justifyContent="center" ml={4} p={4}>
            <Grid container spacing={2}>
              <Grid item xs={5} />
              <Grid item xs={4}>
                <Avatar alt="AL" variant="square" className={classes.large} />
              </Grid>
              <Grid item xs={3} />
              <Grid item xs={5} />
              <Grid item xs={4}>
                <Typography variant="h6" align="left">
                  {user_full_name}
                  <CreateIcon fontSize={"small"} />
                </Typography>
                <Typography
                  variant="caption"
                  align="center"
                  gutterBottom={true}
                >
                  Kolkata
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Box display="flex" flexDirection="row" p={1} m={1}>
                  <Box p={1}>
                    <TwitterIcon />
                  </Box>
                  <Box p={1}>
                    <FacebookIcon />
                  </Box>
                  <Box p={1}>
                    <LinkedInIcon />
                  </Box>
                  <Box p={1}>
                    <CreateIcon />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Paper>
        {/* INFO CARD */}
        {/* <Box justifyContent="center" ml={2} p={3}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm container>
              <Grid item xs container spacing={2}>
                <Grid item xs={6}>
                  <Grid item xs={12}> */}
        <div className={classes.tabPanel}>
          <Tabs
            value={value}
            variant="fullWidth"
            onChange={handleChange}
            aria-label="simple tabs example"
            style={{
              marginLeft: "9.4em",
              maxWidth: "69.4em",
              backgroundColor: "#bdbdbd",
            }}
          >
            <Tab
              label="About"
              {...a11yProps(0)}
              // style={{
              //   color: "#fff",
              //   backgroundColor: "#4847a4",
              // }}
            />
            <Tab
              label="Discussion"
              {...a11yProps(1)}
              // style={{
              //   color: "#fff",
              //   backgroundColor: "#4847a4",
              // }}
            />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Box display="flex">
              <Grid container>
                <Grid item xs={8}>
                  <Paper className={classes.paper2}>
                    <List
                      subheader={
                        <ListSubheader>
                          <AssignmentIndIcon fontSize={"small"} />
                          ABOUT
                        </ListSubheader>
                      }
                      className={classes.root}
                    >
                      <ListItem alignItems="flex-start">
                        <ListItemText />
                        <Typography variant="subtitle1" gutterBottom>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Quos blanditiis tenetur.
                        </Typography>
                      </ListItem>
                    </List>
                    <List
                      subheader={
                        <ListSubheader>
                          <WorkIcon fontSize={"small"} />
                          WORK
                        </ListSubheader>
                      }
                      className={classes.root}
                    >
                      <ListItem alignItems="flex-start">
                        <ListItemText />
                        <Typography variant="subtitle1" gutterBottom>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Quos blanditiis tenetur.
                        </Typography>
                      </ListItem>
                    </List>
                    <List
                      subheader={
                        <ListSubheader>
                          <AccountBalanceIcon fontSize={"small"} /> EDUCATION
                        </ListSubheader>
                      }
                      className={classes.root}
                    >
                      <ListItem alignItems="flex-start">
                        <ListItemText />
                        <Typography variant="subtitle1" gutterBottom>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Quos blanditiis tenetur.
                        </Typography>
                      </ListItem>
                    </List>
                  </Paper>
                  <Paper className={classes.paper4}>
                    <List
                      subheader={
                        <ListSubheader>
                          <RoomIcon fontSize={"small"} />
                          ALSO FROM KOLKATA
                        </ListSubheader>
                      }
                      className={classes.root}
                    >
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar
                            variant="square"
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"
                          />
                        </ListItemAvatar>
                      </ListItem>
                    </List>
                  </Paper>
                  <Paper className={classes.paper5}>
                    <List
                      subheader={
                        <ListSubheader>
                          <VerifiedUserIcon fontSize={"small"} />
                          BADGES
                        </ListSubheader>
                      }
                      className={classes.root}
                    >
                      <ListItem alignItems="flex-start">
                        <Typography variant="subtitle1" gutterBottom>
                          Coming Soon.
                        </Typography>
                      </ListItem>
                    </List>
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper3}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm container>
                        <Grid item xs container direction="row" spacing={2}>
                          <Grid item xs={1}>
                            <DonutLargeIcon />
                          </Grid>
                          <Grid item xs={1} />
                          <Grid item xs={10}>
                            <Typography variant="subtitle1">
                              COURSE PROGRESS
                            </Typography>
                          </Grid>
                          <Grid item xs={1} />
                          <Grid item xs={4}>
                            <CircularProgressWithLabel
                              value={96}
                              thickness={7}
                            />
                          </Grid>
                          <Divider
                            orientation="vertical"
                            variant="middle"
                            flexItem
                          />
                          <Grid item xs={1}>
                            <CircularProgressWithLabel
                              value={67}
                              thickness={7}
                            />
                          </Grid>
                          {/* <Grid item xs={1} />
                      <Grid item xs={4}>
                        <CircularProgressWithLabel value={47} thickness={7} />
                      </Grid>
                      <Grid item xs={1} /> */}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                  <Paper className={classes.paper41}>
                    <Grid container spacing={1}>
                      <Grid item xs={12} sm container>
                        <Grid item xs container direction="row" spacing={2}>
                          <Grid item xs={1}>
                            <AssessmentIcon />
                          </Grid>
                          <Grid item xs={1} />
                          <Grid item xs={10}>
                            <Typography
                              variant="caption"
                              display="block"
                              gutterBottom
                            >
                              YOUR FORUM STATS
                            </Typography>
                          </Grid>
                          <Grid item xs={1}>
                            <LocalActivityIcon
                              fontSize="small"
                              className={classes.forumScore}
                            />
                          </Grid>
                          <Grid item xs={1} />
                          <Grid item xs={10}>
                            <Typography
                              variant="caption"
                              display="block"
                              gutterBottom
                            >
                              <b>Forum Score :</b> 0 points
                            </Typography>
                          </Grid>
                          <Grid item xs={1}>
                            <AssistantPhotoIcon
                              fontSize="small"
                              className={classes.forumLeaderboard}
                            />
                          </Grid>
                          <Grid item xs={1} />
                          <Grid item xs={10}>
                            <Typography
                              variant="caption"
                              display="block"
                              gutterBottom
                            >
                              <b>Forum Leaderboard Rank :</b>18
                            </Typography>
                          </Grid>
                          <Grid item xs={1}>
                            <ForumIcon fontSize="small" />
                          </Grid>
                          <Grid item xs={1} />
                          <Grid item xs={10}>
                            <Typography
                              variant="caption"
                              display="block"
                              gutterBottom
                            >
                              <b>Question Asked :</b> 0
                            </Typography>
                          </Grid>
                          <Grid item xs={1}>
                            <ModeCommentIcon fontSize="small" />
                          </Grid>
                          <Grid item xs={1} />
                          <Grid item xs={10}>
                            <Typography
                              variant="caption"
                              display="block"
                              gutterBottom
                            >
                              <b>Response Added:</b> 4
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={8}>
                  {/* <Paper className={classes.paper4}>
                <List
                  subheader={
                    <ListSubheader>
                      <RoomIcon fontSize={"small"} />
                      ALSO FROM KOLKATA
                    </ListSubheader>
                  }
                  className={classes.root}
                >
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar
                        variant="square"
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                      />
                    </ListItemAvatar>
                  </ListItem>
                </List>
              </Paper>
              <Paper className={classes.paper5}>
                <List
                  subheader={
                    <ListSubheader>
                      <RoomIcon fontSize={"small"} />
                      ALSO FROM KOLKATA
                    </ListSubheader>
                  }
                  className={classes.root}
                >
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar
                        variant="square"
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                      />
                    </ListItemAvatar>
                  </ListItem>
                </List>
              </Paper> */}
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Box display="flex">
              <Grid container>
                <Grid item xs={8}>
                  <Paper className={classes.paper2}>
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
                            primary={user_full_name}
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
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper41}>
                    <Grid container spacing={1}>
                      <Grid item xs={12} sm container>
                        <Grid item xs container direction="row" spacing={2}>
                          <Grid item xs={1}>
                            <AssessmentIcon />
                          </Grid>
                          <Grid item xs={1} />
                          <Grid item xs={10}>
                            <Typography
                              variant="caption"
                              display="block"
                              gutterBottom
                            >
                              YOUR FORUM STATS
                            </Typography>
                          </Grid>
                          <Grid item xs={1}>
                            <LocalActivityIcon
                              fontSize="small"
                              className={classes.forumScore}
                            />
                          </Grid>
                          <Grid item xs={1} />
                          <Grid item xs={10}>
                            <Typography
                              variant="caption"
                              display="block"
                              gutterBottom
                            >
                              <b>Forum Score :</b> 0 points
                            </Typography>
                          </Grid>
                          <Grid item xs={1}>
                            <AssistantPhotoIcon
                              fontSize="small"
                              className={classes.forumLeaderboard}
                            />
                          </Grid>
                          <Grid item xs={1} />
                          <Grid item xs={10}>
                            <Typography
                              variant="caption"
                              display="block"
                              gutterBottom
                            >
                              <b>Forum Leaderboard Rank :</b>18
                            </Typography>
                          </Grid>
                          <Grid item xs={1}>
                            <ForumIcon fontSize="small" />
                          </Grid>
                          <Grid item xs={1} />
                          <Grid item xs={10}>
                            <Typography
                              variant="caption"
                              display="block"
                              gutterBottom
                            >
                              <b>Question Asked :</b> 0
                            </Typography>
                          </Grid>
                          <Grid item xs={1}>
                            <ModeCommentIcon fontSize="small" />
                          </Grid>
                          <Grid item xs={1} />
                          <Grid item xs={10}>
                            <Typography
                              variant="caption"
                              display="block"
                              gutterBottom
                            >
                              <b>Response Added:</b> 4
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={8}>
                  {/* <Paper className={classes.paper4}>
                <List
                  subheader={
                    <ListSubheader>
                      <RoomIcon fontSize={"small"} />
                      ALSO FROM KOLKATA
                    </ListSubheader>
                  }
                  className={classes.root}
                >
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar
                        variant="square"
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                      />
                    </ListItemAvatar>
                  </ListItem>
                </List>
              </Paper>
              <Paper className={classes.paper5}>
                <List
                  subheader={
                    <ListSubheader>
                      <RoomIcon fontSize={"small"} />
                      ALSO FROM KOLKATA
                    </ListSubheader>
                  }
                  className={classes.root}
                >
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar
                        variant="square"
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                      />
                    </ListItemAvatar>
                  </ListItem>
                </List>
              </Paper> */}
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
        </div>
        {/* </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box> */}
      </Container>
    </React.Fragment>
  );
}
export default Profile;
