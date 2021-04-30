import React from "react";
import AppAppBar from "./modules/AppAppBar";
import { makeStyles, withStyles } from "@material-ui/core/styles";
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
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import "react-circular-progressbar/dist/styles.css";
import PropTypes from "prop-types";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Chip from "@material-ui/core/Chip";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
    minWidth: 400,
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
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  dashboardProgress: {
    height: 100,
    width: 135,
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
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData(
    "Module: L'Oréal Case Study",
    "Text",
    "4th May '20",
    <Chip label="Non-Graded" variant="outlined" />,
    "4 Months ago"
  ),
];
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
let course_id;
function Dashboard(props) {
  course_id = props.match.params.courseId;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const your_overall_progress = 92;
  const batch_overall_progress = 66;
  const bi_weekly_progress = 0;
  const discussionForum = () => {
    window.location.href = "/course/" + course_id + "/discussion";
  };
  const studentDirectory = () => {
    window.location.href =
      "/course/" + course_id + "/dashboard/student-directory";
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <AppAppBar />
      <Container>
        {/* INFO CARD */}
        <Paper className={classes.paper1}>
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
                <Grid item xs container spacing={2}>
                  <Grid item xs={6}>
                    <Grid item xs={12}>
                      <div className={classes.root}>
                        <Tabs
                          value={value}
                          onChange={handleChange}
                          aria-label="simple tabs example"
                        >
                          <Tab
                            label="Bi-weekly Progress"
                            {...a11yProps(0)}
                            style={{
                              color: "#fff",
                              backgroundColor: "#769bf8",
                            }}
                          />
                          <Tab
                            label="Overall Progress"
                            {...a11yProps(1)}
                            style={{
                              color: "#fff",
                              backgroundColor: "#4847a4",
                            }}
                          />
                        </Tabs>
                        <TabPanel value={value} index={0}>
                          <Box display="flex" alignItems="center" m={1}>
                            {/* <Box width="20%" className={classes.overallProg}>
                        Your Progress:
                      </Box> */}
                            <Box width="50%">
                              <CircularProgressbarWithChildren
                                value={bi_weekly_progress}
                                // text={`${percentage}%`}
                                styles={buildStyles({
                                  // rotation: 0.25,
                                  strokeLinecap: "butt",
                                  // textSize: "6px",
                                  // pathTransitionDuration: 0.5,
                                  pathColor: `rgb(255, 156, 164, ${
                                    bi_weekly_progress / 100
                                  })`,
                                  // textColor: "#f88",
                                  // trailColor: "#d6d6d6",
                                  // backgroundColor: "#3e98c7",
                                })}
                              >
                                <div style={{ fontSize: 30, marginTop: -5 }}>
                                  {bi_weekly_progress} %
                                </div>
                                <div
                                  style={{
                                    fontSize: 10,
                                    marginTop: -5,
                                    color: "#769bf8",
                                  }}
                                >
                                  Goal : 0 Modules
                                </div>
                              </CircularProgressbarWithChildren>
                            </Box>
                            <Box width="39%" style={{ marginLeft: "-9.4em" }}>
                              <CircularProgressbar
                                value={bi_weekly_progress}
                                styles={buildStyles({
                                  // rotation: 0.25,
                                  strokeLinecap: "butt",
                                  textSize: "6px",
                                  // pathTransitionDuration: 0.5,
                                  pathColor: `rgba(62, 152, 199, ${
                                    bi_weekly_progress / 100
                                  })`,
                                  // textColor: "#f88",
                                  // trailColor: "#d6d6d6",
                                  // backgroundColor: "#3e98c7",
                                })}
                              />
                            </Box>
                            {/* <Box minWidth={35}>
                        <Typography
                          variant="body2"
                          color="text"
                          className={classes.overallProg}
                        >
                          86%
                        </Typography>
                      </Box> */}
                          </Box>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                          <Box display="flex" alignItems="center" m={1}>
                            {/* <Box width="20%" className={classes.overallProg}>
                        Your Progress:
                      </Box> */}
                            <Box width="50%">
                              <CircularProgressbarWithChildren
                                value={batch_overall_progress}
                                // text={`${percentage}%`}
                                styles={buildStyles({
                                  // rotation: 0.25,
                                  strokeLinecap: "butt",
                                  // textSize: "6px",
                                  // pathTransitionDuration: 0.5,
                                  pathColor: `rgb(255, 156, 164, ${
                                    batch_overall_progress / 100
                                  })`,
                                  // textColor: "#f88",
                                  // trailColor: "#d6d6d6",
                                  // backgroundColor: "#3e98c7",
                                })}
                              >
                                <div style={{ fontSize: 30, marginTop: -5 }}>
                                  {your_overall_progress} %
                                </div>
                                <div
                                  style={{
                                    fontSize: 10,
                                    marginTop: -5,
                                    color: "#4847a4",
                                  }}
                                >
                                  Your Progress
                                </div>
                              </CircularProgressbarWithChildren>
                            < /Box>
                            <Box width="39%" style={{ marginLeft: "-9.4em" }}>
                              <CircularProgressbar
                                value={your_overall_progress}
                                styles={buildStyles({
                                  // rotation: 0.25,
                                  strokeLinecap: "butt",
                                  textSize: "6px",
                                  // pathTransitionDuration: 0.5,
                                  pathColor: `rgba(72, 71, 164, ${
                                    your_overall_progress / 100
                                  })`,
                                  // textColor: "#f88",
                                  // trailColor: "#d6d6d6",
                                  // backgroundColor: "#3e98c7",
                                })}
                              />
                            </Box>
                            {/* <Box minWidth={35}>
                        <Typography
                          variant="body2"
                          color="text"
                          className={classes.overallProg}
                        >
                          86%
                        </Typography>
                      </Box> */}
                          </Box>
                        </TabPanel>
                      </div>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid
                        container
                        justify="space-between"
                        alignItems="center"
                      >
                        {/* {[0, 1, 2].map((value) => ( */}
                        <Grid item>
                          <Paper
                            className={classes.dashboardProgress}
                            variant="outlined"
                          >
                            {/* <Grid container spacing={2}> */}
                            <Grid item xs={12} sm container spacing={1}>
                              <Grid
                                item
                                xs
                                container
                                direction="column"
                                justify="center"
                                alignItems="center"
                                spacing={1}
                              >
                                <Grid item xs>
                                  <Typography gutterBottom variant="subtitle1">
                                    <strong>30</strong> Aug
                                  </Typography>
                                  <Typography variant="button">
                                    DEADLINE
                                  </Typography>
                                  <Typography variant="caption" display="block">
                                    ~496 hr remaining
                                  </Typography>
                                </Grid>
                                <Grid item></Grid>
                              </Grid>
                              <Grid item>
                                <HourglassEmptyIcon />
                              </Grid>
                            </Grid>
                            {/* </Grid> */}
                          </Paper>
                        </Grid>
                        <Grid item>
                          <Paper
                            className={classes.dashboardProgress}
                            variant="outlined"
                          >
                            {/* <Grid container spacing={2}> */}
                            <Grid item xs={12} sm container spacing={1}>
                              <Grid
                                item
                                xs
                                container
                                direction="column"
                                justify="center"
                                alignItems="center"
                                spacing={1}
                              >
                                <Grid item xs>
                                  <Typography gutterBottom variant="subtitle1">
                                    <strong>92 %</strong>
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    gutterBottom
                                    style={{ color: "#4847a4" }}
                                  >
                                    YOUR OVERALL PROGRESS
                                  </Typography>
                                </Grid>
                                <Grid item></Grid>
                              </Grid>
                              <Grid item>
                                <FiberManualRecordIcon
                                  style={{ color: "#4847a4" }}
                                />
                              </Grid>
                            </Grid>
                            {/* </Grid> */}
                          </Paper>
                        </Grid>
                        <Grid item>
                          <Paper
                            className={classes.dashboardProgress}
                            variant="outlined"
                          >
                            <Grid item xs={12} sm container spacing={1}>
                              <Grid
                                item
                                xs
                                container
                                direction="column"
                                justify="center"
                                alignItems="center"
                                spacing={1}
                              >
                                <Grid item xs>
                                  <Typography gutterBottom variant="subtitle1">
                                    <strong>66 %</strong>
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    gutterBottom
                                    style={{ color: "#ff9ca4" }}
                                  >
                                    BATCH OVERALL PROGRESS
                                  </Typography>
                                </Grid>
                                <Grid item></Grid>
                              </Grid>
                              <Grid item>
                                <FiberManualRecordIcon
                                  style={{ color: "#ff9ca4" }}
                                />
                              </Grid>
                            </Grid>
                          </Paper>
                        </Grid>
                        {/* ))} */}
                      </Grid>
                    </Grid>
                  </Grid>
                  <Divider orientation="vertical" />
                  <Grid item xs={6}>
                    {/* <Box display="flex" alignItems="center">
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
                    </Box> */}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Paper>
        {/* INFO CARD */}
        <Paper className={classes.paper1}>
          <CardHeader
            title="Skipped Components | 1 item"
            subheader="The list of unattempted components during your study so far"
          />
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>COMPONENT</TableCell>
                  <TableCell align="right">TYPE</TableCell>
                  <TableCell align="right">DEADLINE</TableCell>
                  <TableCell align="right">EVALUATION TYPE</TableCell>
                  <TableCell align="right">SKIPPED AT</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name} hover={true}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                    <TableCell align="right">
                      {/* <Link
                        color="inherit"
                        underline="hover"
                        component="button"
                      > */}
                      <ArrowForwardIosIcon />
                      {/* </Link> */}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <Box display="flex">
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
                  <Link onClick={studentDirectory}>
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
                  <Link onClick={discussionForum}>
                    <Typography variant="body2">Go to Forum</Typography>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Container>
    </React.Fragment>
  );
}
export default Dashboard;
