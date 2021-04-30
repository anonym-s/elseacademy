import React, { useState, useEffect } from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Toolbar from "@material-ui/core/Toolbar";
import AppAppBar from "./modules/AppAppBar";
import Link from "@material-ui/core/Link";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import LinearProgress from "@material-ui/core/LinearProgress";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
// import Card from "@material-ui/core/Card";
// import CardHeader from "@material-ui/core/CardHeader";
// import CardContent from "@material-ui/core/CardContent";
import { red } from "@material-ui/core/colors";
import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";
// import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined";
// import HourglassEmptyTwoToneIcon from "@material-ui/icons/HourglassEmptyTwoTone";
// import CheckTwoToneIcon from "@material-ui/icons/CheckTwoTone";
// import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
// import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import InboxIcon from "@material-ui/icons/Star";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert, AlertTitle } from "@material-ui/lab";
import Skeleton from "@material-ui/lab/Skeleton";
import moment from "moment";
//import Fab from "@material-ui/core/Fab";
// import { green } from "@material-ui/core/colors";
import { yellow } from "@material-ui/core/colors";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
// import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
// import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
const useStyles = makeStyles((theme) => ({
  toolB: {
    backgroundImage: "linear-gradient(rgb(140, 202, 209), rgb(84, 170, 183))",
    height: 125,
  },
  root: {
    maxWidth: 350,
    minHeight: 400,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  paper1: {
    position: "absolute",
    overflow: "hidden",
    marginTop: "-1.5em",
    marginBotton: "5em",
    marginLeft: "8em",
    width: "70em",
  },
  // paper2: {
  //   position: "absolute",
  //   overflow: "hidden",
  //   marginTop: "7em",
  //   marginBottom: "8em",
  //   marginLeft: "8em",
  //   width: "70em",
  //   backgroundColor: "transparent",
  // },
  paper21: {
    position: "absolute",
    overflow: "hidden",
    marginTop: "10em",
    marginBottom: "8em",
    marginLeft: "8em",
    width: "70em",
    // backgroundColor: "transparent",
  },
  // paper3: {
  //   position: "absolute",
  //   overflow: "hidden",
  //   marginTop: "19em",
  //   marginLeft: "8em",
  //   width: "70em",
  // },
  paper31: {
    position: "absolute",
    overflow: "hidden",
    marginTop: "21em",
    marginBottom: "2em",
    marginLeft: "8em",
    width: "70em",
  },
  // paper4: {
  //   position: "absolute",
  //   overflow: "hidden",
  //   marginTop: "60em",
  //   marginLeft: "8em",
  //   width: "70em",
  // },
  // paper41: {
  //   position: "absolute",
  //   overflow: "hidden",
  //   marginTop: "62em",
  //   marginLeft: "8em",
  //   width: "70em",
  // },
  cardH1: {
    // backgroundColor: "rgb(152, 139, 213)",
    // background: "linear-gradient(45deg, #998bd5 30%, #695baf 90%)",
    padding: 0,
    paddingLeft: 20,
    paddingTop: 10,
    margin: 0,
  },
  cardH2: {
    // background: "linear-gradient(45deg, #998bd5 30%, #695baf 90%)",
    padding: 0,
    paddingLeft: 20,
    paddingBottom: 20,
    margin: 0,
  },
  cardH3: {
    // backgroundColor: "rgb(119, 67, 63)",
    // background: "linear-gradient(45deg, #998bd5 30%, #695baf 90%)",
    padding: 0,
    paddingLeft: 20,
    paddingTop: 10,
    margin: 0,
  },
  cardH4: {
    // backgroundColor: "rgb(119, 67, 63)",
    // background: "linear-gradient(45deg, #998bd5 30%, #695baf 90%)",
    padding: 0,
    paddingLeft: 20,
    paddingBottom: 20,
    margin: 0,
  },
  cardH5: {
    // backgroundColor: "rgb(90, 161, 102)",
    // background: "linear-gradient(45deg, #998bd5 30%, #695baf 90%)",
    padding: 0,
    paddingLeft: 20,
    paddingTop: 10,
    margin: 0,
  },
  cardH6: {
    // backgroundColor: "rgb(90, 161, 102)",
    // background: "linear-gradient(45deg, #998bd5 30%, #695baf 90%)",
    padding: 0,
    paddingLeft: 20,
    paddingBottom: 20,
    margin: 0,
  },
  cardHead1: {
    height: 100,
    backgroundColor: "rgb(152, 139, 213)",
  },
  cardHead2: {
    height: 100,
    backgroundColor: "rgb(119, 67, 63)",
  },
  cardHead3: {
    height: 100,
    backgroundColor: "rgb(90, 161, 102)",
  },
  fabB1: {
    color: "rgb(152, 139, 213)",
  },
  fabBtn: {
    zIndex: 1,
    position: "absolute",
    marginLeft: -38,
    marginTop: -25,
  },
  fabB2: {
    color: "#22af73",
  },
  overallProg: {
    color: "#a2a2a2",
  },
  dDate: {
    marginLeft: "-2.7em",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  eBtn: {
    transform: "rotate(0deg)",
    transition: "transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  },
  sBtn: {
    color: "#22af73",
  },
  pBtn: {
    color: "#ff9800",
    marginRight: "2em",
  },
  missingOppositeContent: {
    "&:before": {
      display: "none",
    },
  },
}));
const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
    width: "20em",
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    background: "linear-gradient(rgb(140, 202, 209), rgb(84, 170, 183))",
    // backgroundColor: "rgb(152, 139, 213)",
  },
}))(LinearProgress);
const IconLeftAccordionSummary = withStyles({
  expandIcon: {
    order: -1,
    marginRight: "-2.5em",
  },
})(AccordionSummary);
// const BorderLinearProgress1 = withStyles((theme) => ({
//   root: {
//     height: 10,
//     borderRadius: 5,
//     width: 100,
//   },
//   colorPrimary: {
//     backgroundColor:
//       theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
//   },
//   bar: {
//     borderRadius: 5,
//     backgroundColor: "rgb(119, 67, 63)",
//   },
// }))(LinearProgress);
// const BorderLinearProgress2 = withStyles((theme) => ({
//   root: {
//     height: 10,
//     borderRadius: 5,
//     width: 100,
//   },
//   colorPrimary: {
//     backgroundColor:
//       theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
//   },
//   bar: {
//     borderRadius: 5,
//     backgroundColor: "rgb(90, 161, 102)",
//   },
// }))(LinearProgress);
let user_id;
let course_id;
let module_id;
let course_name;
let module_name;
let module_num;
let session_name;
let session_num;
let segment_name;
let assessment_name;
let assessment_filepath;
let resource_name;
let resource_filepath;
function Session(props) {
  const classes = useStyles();
  // const customClasses = Theme();
  const [sessions, setSessions] = useState([]);
  const [workshops, setWorkshops] = useState([]);
  const [assessments, setAssessments] = useState([]);
  const [resources, setResources] = useState([]);
  user_id = localStorage.getItem("User_Id");
  course_name = localStorage.getItem("Course_Name");
  module_name = localStorage.getItem("Module_Name");
  module_num = localStorage.getItem("Module_Num");
  course_id = props.match.params.courseId;
  module_id = props.match.params.moduleId;
  const [openerrorSnackbar, seterrorSnackbar] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const openeSnack = () => {
    seterrorSnackbar(true);
  };
  //###################################### closing backdrop , snackbars
  const handleClose = () => {
    seterrorSnackbar(false);
  };
  //###################################### closing backdrop , snackbars
  // const sessionClicked = (segmentList) => {
  //   window.location.href =
  //     "/course/module/" + course_id + "/session/" + programList.module_id;
  // };
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
  const segmentClicked = (sessionList, segmentList) => {
    session_name = localStorage.getItem("Session_Name");
    session_num = localStorage.getItem("Session_Num");
    segment_name = localStorage.getItem("Segment_Name");
    if (session_name && session_num && segment_name && module_id) {
      localStorage.removeItem("Session_Name");
      localStorage.removeItem("Session_Num");
      localStorage.removeItem("Segment_Name");
      localStorage.removeItem("Module_ID");
    } else if (!session_name && !session_num) {
      localStorage.setItem("Session_Name", sessionList.session_name);
      localStorage.setItem("Session_Num", sessionList.session_no);
      localStorage.setItem("Segment_Name", segmentList.segment_name);
      localStorage.setItem("Module_ID", module_id);
      window.location.href =
        "/course/" +
        course_id +
        "/session/" +
        sessionList.session_id +
        "/segment/" +
        segmentList.segment_id;
    }
  };
  const assessmentClicked = (assessmentList) => {
    assessment_name = localStorage.getItem("Assessment_Name");
    assessment_filepath = localStorage.getItem("Assessment_Filepath");
    if (assessment_name && module_id && assessment_filepath) {
      localStorage.removeItem("Assessment_Name");
      localStorage.removeItem("Assessment_Filepath");
      localStorage.removeItem("Module_ID");
    } else if (!assessment_name && !assessment_filepath) {
      // console.log(assessment_name, assessment_filepath);
      localStorage.setItem("Assessment_Name", assessmentList.assessment_name);
      localStorage.setItem(
        "Assessment_Filepath",
        assessmentList.assessment_filepath
      );
      localStorage.setItem("Module_ID", module_id);
      window.location.href =
        /course/ +
        course_id +
        "/module/" +
        module_id +
        "/assessment/" +
        assessmentList.assessment_id;
    }
  };
  const resourceClicked = (resourceList) => {
    resource_name = localStorage.getItem("Resource_Name");
    resource_filepath = localStorage.getItem("Resource_Filepath");
    if (resource_name && module_id && resource_filepath) {
      localStorage.removeItem("Resource_Name");
      localStorage.removeItem("Resource_Filepath");
      localStorage.removeItem("Module_ID");
    } else if (!resource_name && !resource_filepath) {
      // console.log(assessment_name, assessment_filepath);
      localStorage.setItem("Resource_Name", resourceList.resource_name);
      localStorage.setItem("Resource_Filepath", resourceList.resource_url);
      localStorage.setItem("Module_ID", module_id);
      window.location.href =
        /course/ +
        course_id +
        "/module/" +
        module_id +
        "/resource/" +
        resourceList.add_resource_id;
    }
  };
  useEffect(() => {
    // console.log(user_id);
    // console.log(course_id);
    // console.log(module_id);
    if (user_id) {
      fetch(
        `${process.env.REACT_APP_GET_SESSION_BY_UID_AND_MID_API_URL}` +
          user_id +
          "/" +
          module_id,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((resp) => resp.json())
        .then((res) => {
          // console.log("sessions", res);
          setSessions(res.responseList);
        })
        .catch((error) => openeSnack());
      fetch(
        `${process.env.REACT_APP_GET_WORKSHOP_BY_UID_MID_AND_CID_API_URL}` +
          user_id +
          "/" +
          module_id +
          "/" +
          course_id,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((resp) => resp.json())
        .then((res) => {
          // console.log("workshops", res);
          setWorkshops(res.responseList);
        })
        .catch((error) => openeSnack());
      fetch(
        `${process.env.REACT_APP_GET_ASSESSMENT_BY_UID_MID_AND_CID_API_URL}` +
          user_id +
          "/" +
          module_id +
          "/" +
          course_id,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((resp) => resp.json())
        .then((res) => {
          // console.log("assessments", res);
          setAssessments(res.responseList);
        })
        .catch((error) => openeSnack());
      fetch(
        `${process.env.REACT_APP_GET_RESOURCES_BY_UID_CID_MID_API_URL}` +
          user_id +
          "/" +
          module_id +
          "/" +
          course_id,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((resp) => resp.json())
        .then((res) => {
          // console.log("assessments", res);
          setResources(res.responseList);
        })
        .catch((error) => openeSnack());
    } else if (!user_id) {
      window.location.href = "/";
    }
  }, []);
  let renderPage1;
  let renderPage2;
  let renderPage3;
  let renderPage4;
  if (sessions != "") {
    //################################################################################################################
    //########################################## if sessions #########################################################
    //################################################################################################################
    renderPage1 = (
      <div>
        <Container>
          <Paper className={classes.paper1}>
            <Box justifyContent="center" ml={3} p={3}>
              <Grid container>
                <Grid item xs={3}>
                  <Typography variant="caption">Module Progress</Typography>
                  <Typography variant="subtitle1">0% completed</Typography>
                </Grid>
                <Grid item xs={6} />
                <Grid item xs={1}>
                  <CalendarTodayOutlinedIcon fontSize={"large"} />
                </Grid>
                <Grid item xs={2} className={classes.dDate}>
                  <Typography variant="caption">Due Date</Typography>
                  <Typography variant="subtitle1">13th Sep 2020</Typography>
                </Grid>
                <Grid item xs={12}>
                  <BorderLinearProgress variant="determinate" value={0.9} />
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Container>
      </div>
    );
    renderPage2 = (
      <div>
        {/* <Box className={classes.paper2}>
          <Grid container>
            <Grid item xs={1} />
            <Grid item xs={2}>
              <Typography variant="overline">WORKSHOPS</Typography>
            </Grid>
            <Grid item xs={7} />
            <Grid item xs={2}>
              <Typography variant="overline">DATE</Typography>
            </Grid>
          </Grid>
        </Box> */}
        <Container>
          <Paper className={classes.paper21}>
            <Grid container>
              <Grid item xs={1} />
              <Grid item xs={2}>
                <Typography variant="overline">WORKSHOPS</Typography>
              </Grid>
              <Grid item xs={7} />
              <Grid item xs={2}>
                <Typography variant="overline">DATE</Typography>
              </Grid>
            </Grid>
            {workshops.map((workshopList) => {
              return (
                <List component="nav" aria-label="main mailbox folders">
                  <ListItem button key={workshopList.workshop_id}>
                    <ListItemText
                      primary={workshopList.workshop_name}
                      style={{ marginLeft: "3em" }}
                    />
                    {(() => {
                      // console.log(
                      //   moment(workshopList.workshop_startdate)
                      //     .startOf("hour")
                      //     .fromNow()
                      // );
                      // if (
                      //   moment(workshopList.workshop_startdate).format(
                      //     "MMMM Do YYYY, h:mm:ss a"
                      //   ) == moment().format("MMMM Do YYYY, h:mm:ss a")
                      //   // ||
                      //   // moment(workshopList.workshop_startdate)
                      //   //   .endOf("day")
                      //   //   .fromNow() == 1
                      // ) {
                      //   return (
                      //     <Link
                      //       color="inherit"
                      //       underline="none"
                      //       href={workshopList.workshop_url}
                      //     >
                      //       <Fab variant="extended" style={{ color: green }}>
                      //         <LiveTvIcon />
                      //         Join
                      //       </Fab>
                      //     </Link>
                      //   );
                      // } else if (
                      //   moment(workshopList.workshop_startdate)
                      //     .startOf("hour")
                      //     .fromNow() == 1
                      // ) {
                      //   return (
                      //     <Link
                      //       color="inherit"
                      //       underline="none"
                      //       // href={workshopList.video_link}
                      //     >
                      //       <Fab variant="extended" style={{ color: yellow }}>
                      //         <OndemandVideoIcon />
                      //         View On Demand
                      //       </Fab>
                      //     </Link>
                      //   );
                      // }
                    })()}
                    <ListItemText
                      primary={moment(workshopList.workshop_startdate).format(
                        "MMMM Do YYYY, h:mm:ss a"
                      )}
                      style={{ marginLeft: "33em" }}
                    />
                  </ListItem>
                  <Divider />
                </List>
              );
            })}
          </Paper>
        </Container>
      </div>
    );
    renderPage3 = (
      <div>
        {/* <Box className={classes.paper3}>
          <Grid container>
            <Grid item xs={1} />
            <Grid item xs={2}>
              <Typography variant="overline">SESSIONS</Typography>
            </Grid>
            <Grid item xs={7} />
            <Grid item xs={2}>
              <Typography variant="overline">STATUS</Typography>
            </Grid>
          </Grid>
        </Box> */}
        <Container>
          <Paper className={classes.paper31}>
            <Grid container>
              <Grid item xs={1} />
              <Grid item xs={2}>
                <Typography variant="overline">SESSIONS</Typography>
              </Grid>
              <Grid item xs={7} />
              <Grid item xs={2}>
                <Typography variant="overline">STATUS</Typography>
              </Grid>
            </Grid>
            {sessions.map((sessionList) => {
              return (
                <Box
                  justifyContent="center"
                  key={sessionList.session_id}
                  clone={true}
                  m={2}
                >
                  <Accordion
                    elevation={1}
                    expanded={expanded == "session" + sessionList.session_id}
                    onChange={handleChange("session" + sessionList.session_id)}
                  >
                    {/* <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              > */}
                    <IconLeftAccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={"session" + sessionList.session_id}
                      id={"session" + sessionList.session_id}
                    >
                      <Grid container xs={6}>
                        <Grid item xs={2} />
                        <Grid item xs={10}>
                          <Typography variant="caption">
                            {sessionList.session_no}
                          </Typography>
                        </Grid>
                        <Grid item xs={2} />
                        <Grid item xs={10}>
                          <Typography className={classes.heading}>
                            {sessionList.session_name}
                          </Typography>
                        </Grid>
                        <Grid item xs={2} />
                      </Grid>
                      <Grid container xs={6}>
                        <Grid item xs={7} />
                        <Grid item xs={2}>
                          <Typography
                            variant="caption"
                            className={classes.pBtn}
                          >
                            Pending
                          </Typography>
                        </Grid>
                        <Grid item xs={1}>
                          <ErrorOutlineIcon className={classes.pBtn} />
                        </Grid>
                        <Grid item xs={2} />
                      </Grid>
                    </IconLeftAccordionSummary>
                    {/* </AccordionSummary> */}
                    <AccordionDetails>
                      <Grid container xs={12}>
                        <Timeline align={"left"}>
                          {sessionList.segmentDtls.map((segmentList) => {
                            return (
                              <TimelineItem
                                key={segmentList.sequence_id}
                                className={classes.missingOppositeContent}
                              >
                                <TimelineSeparator>
                                  <TimelineDot variant="outlined" />
                                  <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                  <ListItem button>
                                    <Link
                                      color="inherit"
                                      underline="none"
                                      onClick={() =>
                                        segmentClicked(sessionList, segmentList)
                                      }
                                    >
                                      <ListItemText
                                        // primary="Segment 1"
                                        primary={segmentList.segment_name}
                                      />
                                      <ListItemSecondaryAction>
                                        <ErrorOutlineIcon
                                          className={classes.pBtn}
                                        />
                                      </ListItemSecondaryAction>
                                    </Link>
                                  </ListItem>
                                  <Divider />
                                </TimelineContent>
                              </TimelineItem>
                            );
                          })}
                          {/* <TimelineItem>
                            <TimelineSeparator>
                              <TimelineDot variant="outlined" />
                              <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                              <List>
                                <ListItem button>
                                  <Link
                                    color="inherit"
                                    underline="none"
                                    href="/course/session/segment"
                                  >
                                    <ListItemText primary="Segment 2" />
                                    <ListItemSecondaryAction>
                                      <CheckCircleOutlineIcon
                                        className={classes.sBtn}
                                      />
                                    </ListItemSecondaryAction>
                                  </Link>
                                </ListItem>
                              </List>
                              <Divider />
                            </TimelineContent>
                          </TimelineItem>
                          <TimelineItem>
                            <TimelineSeparator>
                              <TimelineDot variant="outlined" />
                              <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                              <List>
                                <ListItem button>
                                  <Link
                                    color="inherit"
                                    underline="none"
                                    href="/course/session/segment"
                                  >
                                    <ListItemText primary="Segment 3" />
                                    <ListItemSecondaryAction>
                                      <CheckCircleOutlineIcon
                                        className={classes.sBtn}
                                      />
                                    </ListItemSecondaryAction>
                                  </Link>
                                </ListItem>
                              </List>
                            </TimelineContent>
                          </TimelineItem> */}
                        </Timeline>
                        {/* <Grid item xs={10}> 
                        </Grid>
                        <Grid item xs={2} /> */}
                      </Grid>
                      {/* <Grid container xs={1}/> */}
                    </AccordionDetails>
                  </Accordion>
                </Box>
              );
            })}
            {/* </Paper>
          <Paper className={classes.paper41}> */}
            <Grid container>
              <Grid item xs={1} />
              <Grid item xs={2}>
                <Typography variant="overline">ASSESSMENTS</Typography>
              </Grid>
              <Grid item xs={7} />
              <Grid item xs={2}>
                <Typography variant="overline">DUE DATE</Typography>
              </Grid>
            </Grid>
            {assessments.map((assessmentList) => {
              return (
                // <Box
                //   justifyContent="center"
                //   key={assessmentList.assessment_id}
                //   clone={true}
                //   m={2}
                // >
                //   <Accordion
                //     elevation={1}
                //     expanded={
                //       expanded == "assessment" + assessmentList.assessment_id
                //     }
                //     onChange={handleChange(
                //       "assessment" + assessmentList.assessment_id
                //     )}
                //   >
                //     <IconLeftAccordionSummary
                //       expandIcon={<ExpandMoreIcon />}
                //       aria-controls={
                //         "assessment" + assessmentList.assessment_id
                //       }
                //       id={"assessment" + assessmentList.assessment_id}
                //     >
                //       <Grid container xs={6}>
                //         <Grid item xs={2} />
                //         <Grid item xs={10}>
                //           <Typography variant="caption">
                //             {" "}
                //             Assessment {assessmentList.assessment_id}
                //           </Typography>
                //         </Grid>
                //         <Grid item xs={2} />
                //         <Grid item xs={10}>
                //           <Typography className={classes.heading}>
                //             {assessmentList.assessment_name}
                //           </Typography>
                //         </Grid>
                //         <Grid item xs={2} />
                //       </Grid>
                //       <Grid container xs={6}>
                //         <Grid item xs={7} />
                //         <Grid item xs={5}>
                //           <Typography variant="subtitle1">
                //             {moment(assessmentList.due_date).format(
                //               "MMMM Do YYYY"
                //             )}
                //           </Typography>
                //         </Grid>
                //       </Grid>
                //     </IconLeftAccordionSummary>
                //     <AccordionDetails>
                //       <Grid container xs={1} />
                //       <Grid container xs={4}>
                //         <ListItem button>
                //           <Link
                //             color="primary"
                //             underline="none"
                //             target="_blank"
                //             href={assessmentList.assessment_filepath}
                //           >
                //             <Fab variant="extended" style={{ color: green }}>
                //               <PictureAsPdfIcon />
                //               View Assessment
                //             </Fab>
                //           </Link>
                //         </ListItem>
                //       </Grid>
                //       <Grid container xs={2} />
                //       <Grid container xs={4}>
                // <ListItem button>
                //   <Link
                //     color="primary"
                //     underline="none"
                //     target="_blank"
                //     href={assessmentList.assessment_filepath}
                //   >
                //     <Fab variant="extended" style={{ color: green }}>
                //       <QuestionAnswerIcon />
                //       Submit Assessment
                //     </Fab>
                //   </Link>
                // </ListItem>
                //       </Grid>
                //       <Grid container xs={1} />
                //     </AccordionDetails>
                //   </Accordion>
                // </Box>
                // <List component="nav" aria-label="main mailbox folders">
                //   <ListItem button key={assessmentList.assessment_id}>
                //     <Link
                //       color="inherit"
                //       underline="none"
                //       onClick={() => assessmentClicked(assessmentList)}
                //     >
                //       <ListItemText
                //         primary={assessmentList.assessment_name}
                //         style={{ marginLeft: "3em" }}
                //       />
                //       <ListItemText
                //         primary={moment(assessmentList.due_date).format(
                //           "MMMM Do YYYY"
                //         )}
                //         style={{ marginLeft: "33em" }}
                //       />
                //     </Link>
                //   </ListItem>
                //   <Divider />
                // </List>
                <List component="nav" aria-label="main mailbox folders">
                  <ListItem button key={assessmentList.assessment_id}>
                    <Link
                      color="inherit"
                      underline="none"
                      onClick={() => assessmentClicked(assessmentList)}
                    >
                      <ListItemText
                        primary={
                          assessmentList.assessment_id +
                          "." +
                          assessmentList.assessment_name
                        }
                        style={{ marginLeft: "3em" }}
                      />
                      <ListItemText
                        primary={moment(assessmentList.due_date).format(
                          "MMMM Do YYYY"
                        )}
                        style={{ marginLeft: "54em", marginTop: "-2em" }}
                      />
                    </Link>
                  </ListItem>
                  <Divider />
                </List>
              );
            })}
            <Grid container>
              <Grid item xs={1} />
              <Grid item xs={2}>
                <Typography variant="overline">RESOURCES</Typography>
              </Grid>
              <Grid item xs={7} />
              <Grid item xs={2}>
                <Typography variant="overline">VIEW</Typography>
              </Grid>
            </Grid>
            {resources.map((resourceList) => {
              return (
                <List component="nav" aria-label="main mailbox folders">
                  <ListItem button key={resourceList.add_resource_id}>
                    <Link
                      color="inherit"
                      underline="none"
                      onClick={() => resourceClicked(resourceList)}
                    >
                      <ListItemText
                        primary={
                          resourceList.add_resource_id +
                          "." +
                          resourceList.resource_name
                        }
                        style={{ marginLeft: "3em" }}
                      />
                    </Link>

                    <Link
                      color="inherit"
                      underline="none"
                      onClick={() => resourceClicked(resourceList)}
                      // href={resourceList.resource_url}
                      style={{ marginLeft: "48em" }}
                    >
                      {/* <Fab variant="extended" style={{ color: yellow }}>
                        <LiveTvIcon />
                        View
                      </Fab> */}
                    </Link>
                    {/* <ListItemText
                      primary={moment(assessmentList.due_date).format(
                        "MMMM Do YYYY"
                      )}
                      style={{ marginLeft: "54em", marginTop: "-2em" }}
                    /> */}
                  </ListItem>
                  <Divider />
                </List>
              );
            })}
          </Paper>
        </Container>
      </div>
    );
    renderPage4 = (
      <div>
        {/* <Box className={classes.paper4}>
          <Grid container>
            <Grid item xs={1} />
            <Grid item xs={2}>
              <Typography variant="overline">ASSESSMENTS</Typography>
            </Grid>
            <Grid item xs={7} />
            <Grid item xs={2}>
              <Typography variant="overline">STATUS</Typography>
            </Grid>
          </Grid>
        </Box> */}
        <Container>
          <Paper className={classes.paper41}>
            <Grid container>
              <Grid item xs={1} />
              <Grid item xs={2}>
                <Typography variant="overline">ASSESSMENTS</Typography>
              </Grid>
              <Grid item xs={7} />
              <Grid item xs={2}>
                <Typography variant="overline">STATUS</Typography>
              </Grid>
            </Grid>
            {/* {sessions.map((sessionList) => {
              return ( */}
            <Box justifyContent="center" clone={true} m={2}>
              <Accordion
                elevation={1}
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <IconLeftAccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Grid container xs={6}>
                    <Grid item xs={2} />
                    <Grid item xs={10}>
                      <Typography variant="caption"></Typography>
                    </Grid>
                    <Grid item xs={2} />
                    <Grid item xs={10}>
                      <Typography className={classes.heading}>
                        Assessment
                      </Typography>
                    </Grid>
                    <Grid item xs={2} />
                  </Grid>
                  <Grid container xs={6}>
                    <Grid item xs={7} />
                    <Grid item xs={2}>
                      <Typography variant="caption" className={classes.pBtn}>
                        Pending
                      </Typography>
                    </Grid>
                    <Grid item xs={1}>
                      <ErrorOutlineIcon className={classes.pBtn} />
                    </Grid>
                    <Grid item xs={2} />
                  </Grid>
                </IconLeftAccordionSummary>
                <AccordionDetails>
                  <Grid container xs={12}>
                    <Timeline align={"left"}>
                      {/* {sessionList.segmentDtls.map((segmentList) => {
                            return ( */}
                      <TimelineItem className={classes.missingOppositeContent}>
                        <TimelineSeparator>
                          <TimelineDot variant="outlined" />
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <ListItem button>
                            <Link color="inherit" underline="none">
                              <ListItemText primary="Segment 1" />
                              <ListItemSecondaryAction>
                                <ErrorOutlineIcon className={classes.pBtn} />
                              </ListItemSecondaryAction>
                            </Link>
                          </ListItem>
                          <Divider />
                        </TimelineContent>
                      </TimelineItem>
                      {/* );
                          })} */}
                    </Timeline>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Box>
            {/* );
            })} */}
          </Paper>
        </Container>
      </div>
    );
    //################################################################################################################
    //########################################### if sessions ########################################################
    //################################################################################################################
  } else if (sessions == "") {
    //################################################################################################################
    //############################################### skeleton #######################################################
    //################################################################################################################
    renderPage1 = (
      <div>
        <Container>
          <Paper className={classes.paper1}>
            <Box justifyContent="center" ml={3} p={3}>
              <Grid container>
                <Grid item xs={3}>
                  <Typography variant="caption">Module Progress</Typography>
                  <Typography variant="subtitle1">
                    <Skeleton
                      variant="text"
                      animation="wave"
                      width="7em"
                      height="1em"
                    />
                  </Typography>
                </Grid>
                <Grid item xs={6} />
                <Grid item xs={1}>
                  <CalendarTodayOutlinedIcon fontSize={"large"} />
                </Grid>
                <Grid item xs={2} className={classes.dDate}>
                  <Typography variant="caption">Due Date</Typography>
                  <Typography variant="subtitle1">
                    <Skeleton
                      variant="text"
                      animation="wave"
                      width="7em"
                      height="1em"
                    />
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Skeleton animation="wave" width="15em" height="1em" />
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Container>
      </div>
    );
    renderPage2 = (
      <div>
        <Container>
          <Paper className={classes.paper21}>
            <Grid container>
              <Grid item xs={1} />
              <Grid item xs={2}>
                <Typography variant="overline">WORKSHOPS</Typography>
              </Grid>
              <Grid item xs={7} />
              <Grid item xs={2}>
                <Typography variant="overline">DATE</Typography>
              </Grid>
            </Grid>
            <List component="nav" aria-label="main mailbox folders">
              <ListItem button>
                <Skeleton
                  variant="text"
                  animation="wave"
                  width="10em"
                  height="1em"
                  style={{ marginLeft: "4em" }}
                />
                <Skeleton
                  variant="text"
                  animation="wave"
                  width="20em"
                  height="1em"
                  style={{ marginLeft: "35em" }}
                />
              </ListItem>
              <Divider />
            </List>
          </Paper>
        </Container>
      </div>
    );
    renderPage3 = (
      <div>
        <Container>
          <Paper className={classes.paper31}>
            <Grid container>
              <Grid item xs={1} />
              <Grid item xs={2}>
                <Typography variant="overline">SESSIONS</Typography>
              </Grid>
              <Grid item xs={7} />
              <Grid item xs={2}>
                <Typography variant="overline">STATUS</Typography>
              </Grid>
            </Grid>
            <Box justifyContent="center">
              <Accordion elevation={1}>
                <IconLeftAccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Grid container xs={6}>
                    <Grid item xs={2} />
                    <Grid item xs={10}>
                      <Typography variant="caption">
                        <Skeleton variant="text" animation="wave" width="5em" />
                      </Typography>
                    </Grid>
                    <Grid item xs={2} />
                    <Grid item xs={2}>
                      <Typography className={classes.heading}>
                        <Skeleton
                          variant="text"
                          animation="wave"
                          width="10em"
                        />
                      </Typography>
                    </Grid>
                    <Grid item xs={2} />
                  </Grid>
                  <Grid container xs={6}>
                    <Grid item xs={7} />
                    <Grid item xs={2}>
                      <Typography variant="caption" className={classes.pBtn}>
                        <Skeleton variant="text" animation="wave" width="5em" />
                      </Typography>
                    </Grid>
                    <Grid item xs={1}>
                      <Skeleton animation="wave" width="1em" />
                    </Grid>
                    <Grid item xs={2} />
                  </Grid>
                </IconLeftAccordionSummary>
              </Accordion>
            </Box>
          </Paper>
        </Container>
      </div>
    );
  }
  //################################################################################################################
  //############################################### skeleton #######################################################
  //################################################################################################################
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
                <Typography variant="body1">{course_name}</Typography>
              </Link>
              <Link color="textPrimary" underline="none">
                <Typography variant="body1">{module_num}</Typography>
              </Link>
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
        {/* INFO CARD */}
        {renderPage1}
        {/* INFO CARD */}
        {/* <Box className={classes.paper2}>
          <Grid container>
            <Grid item xs={1} />
            <Grid item xs={2}>
              <Typography variant="overline">WORKSHOPS</Typography>
            </Grid>
            <Grid item xs={7} />
            <Grid item xs={2}>
              <Typography variant="overline">DATE</Typography>
            </Grid>
          </Grid>
        </Box> */}
        {/* </Paper> */}
        {renderPage2}
        {/* <Paper className={classes.paper2}> */}
        {/* <Box className={classes.paper3}>
          <Grid container>
            <Grid item xs={1} />
            <Grid item xs={2}>
              <Typography variant="overline">SESSIONS</Typography>
            </Grid>
            <Grid item xs={7} />
            <Grid item xs={2}>
              <Typography variant="overline">STATUS</Typography>
            </Grid>
          </Grid>
        </Box> */}
        {/* </Paper> */}
        {renderPage3}
        {/* <Box className={classes.paper4}>
          <Grid container>
            <Grid item xs={1} />
            <Grid item xs={2}>
              <Typography variant="overline">ASSESSMENTS</Typography>
            </Grid>
            <Grid item xs={7} />
            <Grid item xs={2}>
              <Typography variant="overline">STATUS</Typography>
            </Grid>
          </Grid>
        </Box> */}
        {/* </Paper> */}
        {/* {renderPage4} */}
      </Container>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openerrorSnackbar}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error">
          <AlertTitle>Error</AlertTitle>
          <strong> Failed to load resource !!!</strong>
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}
export default Session;
