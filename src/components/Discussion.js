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
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolB: {
    backgroundImage: "linear-gradient(rgb(140, 202, 209), rgb(84, 170, 183))",
    height: 125,
  },
  paper1: {
    padding: theme.spacing(2),
    margin: "auto",
    marginTop: "2em",
    marginBottom: "1em",
    maxWidth: 940,
  },
  paper2: {
    padding: theme.spacing(3),
    marginLeft: "10.3em",
    minWidth: 450,
  },
  paper21: {
    padding: theme.spacing(3),
    marginLeft: "10.3em",
    minWidth: 450,
    marginTop: "1em",
    backgroundColor: "#00000000",
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
    minWidth: 200,
    minHeight: 25,
    marginLeft: "0.8em",
  },
  paper4: {
    padding: theme.spacing(3),
    minWidth: 200,
    minHeight: 250,
    marginLeft: "0.8em",
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
  searchPaper: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 600,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  btnTheme: {
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    border: 0,
    fontSize: 16,
    borderRadius: 3,
    boxShadow: theme.boxShadow,
    color: "white",
    height: 40,
    padding: "0 30px",
    margin: theme.spacing(1, 1, 1, 1),
  },
  forumScore: {
    color: "#ff7000",
  },
  forumLeaderboard: {
    color: "#8dc007",
  },
  allQuestion: {
    width: "10em",
  },
  formControl: {
    margin: theme.spacing(1),
  },
  discussionIcon: {
    marginTop: "3em",
    marginLeft: "-1.4em",
  },
  discussionReaction: {
    color: "#22af73",
  },
}));
const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 12,
    borderRadius: 5,
    width: 600,
    marginRight: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#1e5494;",
  },
  bar1: {
    borderRadius: 5,
    backgroundColor: "#4a90e2;",
  },
}))(LinearProgress);
const BorderLinearProgress1 = withStyles((theme) => ({
  root: {
    height: 12,
    borderRadius: 5,
    width: 600,
    marginRight: 5,
    marginTop: "3em",
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#4a90e2;",
  },
}))(LinearProgress);
let course_id;
let course_Name;
let module_name;
let user_id;
function Discussion(props) {
  const classes = useStyles();
  user_id = localStorage.getItem("User_Id");
  course_id = props.match.params.courseId;
  const [programs, setPrograms] = useState([]);
  const courseClicked = () => {
    // course_name = localStorage.getItem("Course_Name");
    // if (course_name) {
    //   localStorage.removeItem("Course_Name");
    // } else if (!course_name) {
    //   localStorage.setItem("Course_Name", courseList.course_name);
    window.location.href = "/course/" + course_id + "/module";
    // course/:courseId/module/
    // }
    // props.Module(courseList);
    // localStorage.setItem("Course_Id", courseList.course_id);
    // window.location.href = "/course/module";
  };
  const questionClicked = () => {
    window.location.href = "/course/" + course_id + "/discussion/question";
  };
  const discussionQuestion = (e) => {
    e.target.style.elevtion = 3;
  };
  useEffect(() => {
    // course_id = localStorage.getItem("Course_Id");
    // console.log(user_id);
    // console.log(course_id);
    if (user_id) {
      fetch(
        `${process.env.REACT_APP_GET_MODULE_BY_UID_AND_CID_API_URL}` +
          course_id +
          "/" +
          user_id,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((resp) => resp.json())
        .then((res) => {
          // console.log(res);
          course_Name = res.attributes.course_name;
          console.log(course_Name);
          setPrograms(res.responseList);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (!user_id) {
      window.location.href = "/";
    }
  }, []);
  console.log(course_Name);
  return (
    <React.Fragment>
      <CssBaseline />
      <AppAppBar />
      <Toolbar className={classes.toolB}>
        <Grid container>
          <Grid item xs={2} />
          <Grid item xs={8}>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
              <Link color="textPrimary" onClick={() => courseClicked()}>
                <Typography variant="body1">{course_Name}</Typography>
              </Link>
              {/* <Link color="inherit" underline="none">
                <Typography variant="caption">{module_num}</Typography>
              </Link> */}
            </Breadcrumbs>
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={2} />
          <Grid item xs={8}>
            <Typography variant="h5">{module_name}</Typography>
          </Grid>
          <Grid item xs={2} />
        </Grid>
      </Toolbar>
      <Container>
        <Box display="flex" component="span" m={1}>
          <Grid container>
            <Grid item xs={8}>
              <Paper className={classes.paper2}>
                <Typography variant="h5" gutterBottom>
                  Discussion Q & A's
                </Typography>
                <Paper component="form" className={classes.searchPaper}>
                  <InputBase
                    className={classes.input}
                    placeholder="Search for questions"
                    inputProps={{ "aria-label": "search google maps" }}
                  />
                  <IconButton
                    type="submit"
                    className={classes.iconButton}
                    aria-label="search"
                  >
                    <SearchIcon />
                  </IconButton>
                  <Button className={classes.btnTheme} variant="contained">
                    Ask
                  </Button>
                </Paper>
              </Paper>
              <Paper className={classes.paper21}>
                <Grid container spacing={1}>
                  <Grid item xs={12} sm container direction="row">
                    {/* <Grid item xs container direction="row"> */}
                    <Grid item xs={2} style={{ marginTop: "1.9em" }}>
                      <Typography
                        variant="caption"
                        display="block"
                        gutterBottom
                      >
                        Question Count
                      </Typography>
                    </Grid>
                    <Grid item xs={5}>
                      <FormControl
                        className={classes.formControl}
                        style={{ marginTop: "2em" }}
                      >
                        <Typography
                          variant="caption"
                          display="block"
                          gutterBottom
                        >
                          Topic
                        </Typography>
                      </FormControl>
                      <FormControl
                        variant="outlined"
                        className={classes.formControl}
                      >
                        <InputLabel id="demo-simple-select-outlined-label">
                          All Questions
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-outlined-label"
                          id="demo-simple-select-outlined"
                          autoWidth={true}
                          className={classes.allQuestion}
                          variant={"outlined"}
                          // value={age}
                          // onChange={handleChange}
                          // label="Age"
                        >
                          <MenuItem value="" disables>
                            <em>All Questions</em>
                          </MenuItem>
                          <MenuItem value={10}>Question 1</MenuItem>
                          <MenuItem value={20}>Question 2</MenuItem>
                          <MenuItem value={30}>Question 3</MenuItem>
                          <MenuItem value={20}>Question 4</MenuItem>
                          <MenuItem value={30}>Question 5</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={5}>
                      <FormControl
                        className={classes.formControl}
                        style={{ marginTop: "2em" }}
                      >
                        <Typography
                          variant="caption"
                          display="block"
                          gutterBottom
                        >
                          Sortby
                        </Typography>
                      </FormControl>
                      <FormControl
                        variant="outlined"
                        className={classes.formControl}
                      >
                        <InputLabel id="demo-simple-select-outlined-label">
                          Relevance
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-outlined-label"
                          id="demo-simple-select-outlined"
                          autoWidth={true}
                          className={classes.allQuestion}
                          variant={"outlined"}
                          // value={age}
                          // onChange={handleChange}
                          // label="Age"
                        >
                          <MenuItem value={11}>Relevance</MenuItem>
                          <Divider />
                          <MenuItem value={10}>Latest</MenuItem>
                          <Divider />
                          <MenuItem value={20}>Most Upvotes</MenuItem>
                          <Divider />
                          <MenuItem value={30}>Most Answers</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    {/* </Grid> */}
                  </Grid>
                </Grid>
              </Paper>
              <Paper className={classes.paper22} onClick={questionClicked}>
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
                </Grid>
              </Paper>
              <Paper className={classes.paper22} onClick={questionClicked}>
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
                </Grid>
              </Paper>
              <Paper className={classes.paper22} onClick={questionClicked}>
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
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper3}>
                <Grid container spacing={1}>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="row" spacing={2}>
                      <Grid item xs={1}>
                        <GroupIcon />
                      </Grid>
                      <Grid item xs={1} />
                      <Grid item xs={9}>
                        <Typography
                          variant="caption"
                          display="block"
                          gutterBottom
                        >
                          COMMUNITY GUIDELINES
                        </Typography>
                      </Grid>
                      <Grid item xs={1}>
                        <ArrowForwardIosIcon fontSize="small" />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
              <Paper className={classes.paper4}>
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
              <Paper className={classes.paper4}>
                <Grid container spacing={1}>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="row" spacing={2}>
                      <Grid item xs={1}>
                        <AssistantPhotoIcon />
                      </Grid>
                      <Grid item xs={1} />
                      <Grid item xs={10}>
                        <Typography
                          variant="caption"
                          display="block"
                          gutterBottom
                        >
                          FORUM LEADERBOARD
                        </Typography>
                      </Grid>
                      <List dense className={classes.root}>
                        {[0, 1, 2, 3].map((value) => {
                          const labelId = `checkbox-list-secondary-label-${value}`;
                          return (
                            <ListItem key={value} button>
                              <ListItemAvatar>
                                <Avatar
                                  alt={`Avatar n°${value + 1}`}
                                  src={`/static/images/avatar/${value + 1}.jpg`}
                                />
                              </ListItemAvatar>
                              <ListItemText
                                id={labelId}
                                primary={`${value + 1} Name`}
                              />
                              <ListItemSecondaryAction>
                                Points
                              </ListItemSecondaryAction>
                            </ListItem>
                          );
                        })}
                      </List>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Box>
        {/* INFO CARD */}
        {/* <Paper className={classes.paper1}>
          <Box justifyContent="center" ml={2} p={3}>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
              <Link color="inherit" href="/course/module">
                Text 1
              </Link>
              <Link color="inherit" href="/course/session/segment">
                Session 1
              </Link>
            </Breadcrumbs>
            <Grid container spacing={2}>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="h5">
                      Introduction to Marketing Analytics
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    endIcon={<ChevronRightIcon />}
                    className={classes.learnButton}
                    href="/course/session/segment"
                  >
                    Continue Learning
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <Divider />
          <Box justifyContent="center" ml={2} p={3}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Box display="flex" alignItems="center">
                      <Box width="20%" className={classes.overallProg}>
                        Your Progress:
                      </Box>
                      <Box width="100%">
                        <BorderLinearProgress
                          variant="determinate"
                          value={86}
                        />
                      </Box>
                      <Box minWidth={35}>
                        <Typography
                          variant="body2"
                          color="text"
                          className={classes.overallProg}
                        >
                          86%
                        </Typography>
                      </Box>
                    </Box>
                    <Box display="flex" alignItems="center">
                      <Box width="20%" className={classes.overallProg1}>
                        Batch Progress:
                      </Box>
                      <Box width="100%">
                        <BorderLinearProgress1
                          variant="determinate"
                          value={69}
                        />
                      </Box>
                      <Box minWidth={35}>
                        <Typography
                          variant="body2"
                          color="text"
                          className={classes.overallProg1}
                        >
                          69%
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Paper> */}
        {/* INFO CARD */}
        {/* <Box display="flex">
          <Paper className={classes.paper2}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="h6">
                      Recently Online
                    </Typography>
                    <Box>
                      <AvatarGroup max={5} spacing={3}>
                        <Avatar
                          variant="square"
                          alt="J"
                          src="/static/images/avatar/1.jpg"
                          className={classes.avtr}
                        />
                        <Avatar
                          variant="square"
                          alt="U"
                          src="/static/images/avatar/2.jpg"
                          className={classes.avtr}
                        />
                        <Avatar
                          variant="square"
                          alt="S"
                          src="/static/images/avatar/3.jpg"
                          className={classes.avtr}
                        />
                        <Avatar
                          variant="square"
                          alt="T"
                          src="/static/images/avatar/4.jpg"
                          className={classes.avtr}
                        />
                        <Avatar
                          variant="square"
                          alt=""
                          src="/static/images/avatar/5.jpg"
                          className={classes.avtr}
                        />
                      </AvatarGroup>
                    </Box>
                    <Box>
                      <AvatarGroup max={5} spacing={3}>
                        <Avatar
                          variant="square"
                          alt="D"
                          src="/static/images/avatar/1.jpg"
                          className={classes.avtr}
                        />
                        <Avatar
                          variant="square"
                          alt="O"
                          src="/static/images/avatar/2.jpg"
                          className={classes.avtr}
                        />
                        <Avatar
                          variant="square"
                          alt=""
                          src="/static/images/avatar/3.jpg"
                          className={classes.avtr}
                        />
                        <Avatar
                          variant="square"
                          alt="I"
                          src="/static/images/avatar/4.jpg"
                          className={classes.avtr}
                        />
                        <Avatar
                          variant="square"
                          alt="T"
                          src="/static/images/avatar/5.jpg"
                          className={classes.avtr}
                        />
                      </AvatarGroup>
                    </Box>
                  </Grid>
                </Grid>
                <Grid item xs>
                  <Link href="/dashboard">
                    <Typography variant="body2">View All</Typography>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
          <Paper className={classes.paper3}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="h6">
                      Forum this week
                    </Typography>
                  </Grid>
                  <Box display="flex" p={1}>
                    <Box p={3} order={1}>
                      <Typography variant="h4" align="center">
                        0
                      </Typography>
                      <Typography variant="subtitle1" gutterBottom>
                        Questions
                      </Typography>
                    </Box>
                    <Box p={3} order={2}>
                      <Typography variant="h4" align="center">
                        0
                      </Typography>
                      <Typography variant="subtitle1" gutterBottom>
                        Answers
                      </Typography>
                    </Box>
                    <Box p={3} order={3}>
                      <Typography variant="h4" align="center">
                        0
                      </Typography>
                      <Typography variant="subtitle1" gutterBottom>
                        Participants
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs>
                  <Link href="/dashboard">
                    <Typography variant="body2">Go to Forum</Typography>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Box> */}
      </Container>
    </React.Fragment>
  );
}
export default Discussion;
