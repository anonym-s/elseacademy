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
import Fab from "@material-ui/core/Fab";
// import { green } from "@material-ui/core/colors";
import { yellow } from "@material-ui/core/colors";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
// import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
// import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import Avatar from "@material-ui/core/Avatar";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Chip from "@material-ui/core/Chip";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
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
    // marginTop: "1.5em",
    marginBotton: "5em",
    marginLeft: "8em",
    width: "70em",
  },
  courseTable: {
    padding: theme.spacing(2),
    margin: "auto",
    marginLeft: "8em",
    marginTop: "12em",
    marginBottom: "1em",
    width: "70em",
  },
  courseTable1: {
    padding: theme.spacing(2),
    margin: "auto",
    marginLeft: "8em",
    marginTop: "1em",
    marginBottom: "1em",
    width: "70em",
  },
  courseTable2: {
    padding: theme.spacing(2),
    margin: "auto",
    marginLeft: "8em",
    marginTop: "1em",
    marginBottom: "1em",
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
  avatarLarge: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  gradeHeading: {
    // position: "absolute",
    // overflow: "hidden",
    marginTop: "1.5em",
    marginBotton: "2em",
    marginLeft: "6em",
    // width: "70em",
  },
}));
const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
    width: "8em",
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
function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}
const rows = [
  createData(
    "Axis Bank Submission",
    "180/400",
    <Button variant="outlined" color="primary" href="#outlined-buttons">
      View
    </Button>
  ),
  createData(
    "Axis Bank Submission",
    "180/400",
    <Button variant="outlined" color="primary" href="#outlined-buttons">
      View
    </Button>
  ),
];
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
let user_full_name;
function Score(props) {
  const classes = useStyles();
  // const customClasses = Theme();
  const [sessions, setSessions] = useState([]);
  const [workshops, setWorkshops] = useState([]);
  const [assessments, setAssessments] = useState([]);
  const [resources, setResources] = useState([]);
  const performance_card_percentage = 2;
  user_id = localStorage.getItem("User_Id");
  course_name = localStorage.getItem("Course_Name");
  module_name = localStorage.getItem("Module_Name");
  module_num = localStorage.getItem("Module_Num");
  user_full_name = localStorage.getItem("User_Full_Name");
  course_name = localStorage.getItem("Course_Name");
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
  const table_cell = "<strong>Case Study</strong>";
  return (
    <React.Fragment>
      <CssBaseline />
      <AppAppBar />
      <Container>
        <Typography variant="h6" gutterBottom className={classes.gradeHeading}>
          STUDENT PERFORMANCE CARD
        </Typography>
        <Paper className={classes.paper1} square>
          <Box justifyContent="center" ml={3} p={3}>
            <Grid container>
              <Grid item xs={1}>
                <Avatar
                  alt="AL"
                  src="/static/images/avatar/1.jpg"
                  className={classes.avatarLarge}
                />
              </Grid>
              <Grid item xs={5}>
                <Typography variant="h6">{user_full_name}</Typography>
                <Box display="flex" alignItems="center">
                  <Box width="28%" mr={1}>
                    <BorderLinearProgress
                      variant="determinate"
                      value={performance_card_percentage}
                    />
                  </Box>
                  <Box minWidth={35}>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                    >{`${performance_card_percentage}%`}</Typography>
                  </Box>
                </Box>
                {/* {" "}
                {performance_card_percentage}% */}
                <Typography variant="caption">Program Progress</Typography>
                {/* <Typography variant="caption">Due Date</Typography> */}
              </Grid>
              <Grid item xs={4} />
            </Grid>
          </Box>
        </Paper>
        <Paper className={classes.courseTable} square>
          <Typography variant="caption">Course {course_id}</Typography>
          <Typography variant="h6" gutterBottom>
            {course_name}
          </Typography>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: "COMPONENT" + "</br><b>Case Studies</b>",
                      }}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: "WEIGHTAGE" + "</br><b>30%</b>",
                      }}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: "MARKS" + "</br><b>430/800</b>",
                      }}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: "PERCENTAGE" + "</br><b>53.8%</b>",
                      }}
                    />
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name} hover={true}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <Paper className={classes.courseTable1} square>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: "COMPONENT" + "</br><b>Case Studies</b>",
                      }}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: "WEIGHTAGE" + "</br><b>30%</b>",
                      }}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: "MARKS" + "</br><b>430/800</b>",
                      }}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: "PERCENTAGE" + "</br><b>53.8%</b>",
                      }}
                    />
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name} hover={true}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <Paper className={classes.courseTable2} square>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: "COMPONENT" + "</br><b>Case Studies</b>",
                      }}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: "WEIGHTAGE" + "</br><b>30%</b>",
                      }}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: "MARKS" + "</br><b>430/800</b>",
                      }}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: "PERCENTAGE" + "</br><b>53.8%</b>",
                      }}
                    />
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name} hover={true}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <Typography
          variant="caption"
          display="block"
          className={classes.gradeHeading}
          gutterBottom
        >
          * Your final percentage is calculated once all the sub-components are
          published
        </Typography>
      </Container>
    </React.Fragment>
  );
}
export default Score;
