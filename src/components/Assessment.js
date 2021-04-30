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
import { red } from "@material-ui/core/colors";
// import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";
// import Paper from "@material-ui/core/Paper";
// import Accordion from "@material-ui/core/Accordion";
// import AccordionSummary from "@material-ui/core/AccordionSummary";
// import AccordionDetails from "@material-ui/core/AccordionDetails";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
// import Timeline from "@material-ui/lab/Timeline";
// import TimelineItem from "@material-ui/lab/TimelineItem";
// import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
// import TimelineConnector from "@material-ui/lab/TimelineConnector";
// import TimelineContent from "@material-ui/lab/TimelineContent";
// import TimelineDot from "@material-ui/lab/TimelineDot";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import InboxIcon from "@material-ui/icons/Star";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert, AlertTitle } from "@material-ui/lab";
// import Skeleton from "@material-ui/lab/Skeleton";
import moment from "moment";
// import Fab from "@material-ui/core/Fab";
// import { green } from "@material-ui/core/colors";
// import { yellow } from "@material-ui/core/colors";
// import LiveTvIcon from "@material-ui/icons/LiveTv";
// import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
// import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
// import ListSubheader from "@material-ui/core/ListSubheader";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
// import DraftsIcon from "@material-ui/icons/Drafts";
// import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
// import StarBorder from "@material-ui/icons/StarBorder";
// import BackupIcon from "@material-ui/icons/Backup";
// import IconButton from "@material-ui/core/IconButton";
// import GetAppIcon from "@material-ui/icons/GetApp";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import AssessmentIcon from "@material-ui/icons/Assessment";
import Button from "@material-ui/core/Button";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  toolB: {
    backgroundImage: "linear-gradient(rgb(140, 202, 209), rgb(84, 170, 183))",
    height: 125,
  },
  root: {
    width: "100%",
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  input: {
    display: "none",
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
  pBar: {
    width: "100%",
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
}));
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
let assessment_id;
let assessment_filepath;
let fileupload_res;
let fileupload_path;
function Assessment(props) {
  const classes = useStyles();
  // const customClasses = Theme();
  // const [sessions, setSessions] = useState([]);
  // const [workshops, setWorkshops] = useState([]);
  // const [assessments, setAssessments] = useState([]);
  const [submittedassessments, setSubmittedassessments] = useState([]);
  const [selectedFile, setSelectedFile] = useState([]);
  const [opensuccessSnackbar, setsuccessSnackbar] = React.useState(false);
  const [openfailureSnackbar, setfailureSnackbar] = React.useState(false);
  const [openerrorSnackbar, seterrorSnackbar] = React.useState(false);
  // const [fileuploadpath, setFileuploadpath] = React.useState("");
  const [progress, setProgress] = React.useState(0);
  user_id = localStorage.getItem("User_Id");
  course_name = localStorage.getItem("Course_Name");
  module_name = localStorage.getItem("Module_Name");
  module_num = localStorage.getItem("Module_Num");
  assessment_name = localStorage.getItem("Assessment_Name");
  assessment_filepath = localStorage.getItem("Assessment_Filepath");
  // console.log(assessment_filepath);
  course_id = props.match.params.courseId;
  module_id = props.match.params.moduleId;
  assessment_id = props.match.params.assessmentId;
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const openeSnack = () => {
    seterrorSnackbar(true);
  };
  const opensSnack = () => {
    setsuccessSnackbar(true);
  };
  const openfSnack = () => {
    setfailureSnackbar(true);
  };
  //###################################### closing backdrop , snackbars


  const handleClose = () => {
    setsuccessSnackbar(false);



    setfailureSnackbar(false);
    seterrorSnackbar(false);
  };
  //###################################### closing backdrop , snackbars

  const courseClicked = () => {
    window.location.href = "/course/" + course_id + "/module";
  };
  const moduleClicked = () => {
    window.location.href =
      "/course/" + course_id + "/module/" + module_id + "/session";
  };

  const fileSelectHandler = (event) => {
    const fileInfo = event.target.files[0];
    setSelectedFile(fileInfo);
  };
  const fileUploadHandler = () => {
    const fd = new FormData();
    fd.append("file", selectedFile);
    axios
      .post(
        `${process.env.REACT_APP_POST_ASSESSMENT_BY_UID_API_URL}` + user_id,
        fd,
        {
          onUploadProgress: (progressEvent) => {
            setProgress(
              Math.round((progressEvent.loaded / progressEvent.total) * 100)
            );
          },
        }
      )
      .then((res) => {
        // console.log(res);
        fileupload_res = JSON.parse(res.request.response);
        // setFileuploadpath(fileupload_res.responseList[0]["FilePath"]);
        fileupload_path = fileupload_res.responseList[0]["FilePath"];
        if (res.status === 200) {
          // console.log(fileupload_path);
          // opensSnack();
          fetch(
            `${process.env.REACT_APP_POST_USER_ASSESSMENT_FILE_BY_UID_MID_AND_AID_API_URL}`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                user_id: user_id,
                module_id: module_id,
                assessment_id: assessment_id,
                // filename: selectedFile.name,
                filename: fileupload_path,
                // filename: fileuploadpath,
                filetype: selectedFile.type,
              }),
            }
          )
            .then((resp) => resp.json())
            .then((res) => {
              // console.log("response", res);
              //###################################### checking submission response
              if (res.attributes.status === `success`) {
                opensSnack();
                window.location.reload(true);
              } else if (res.attributes.status !== `success`) {
                openfSnack();
              }
              //###################################### checking submission response
            })
            .catch((error) => {
              // console.log(error);
              openfSnack();
            });
        } else if (res.attributes.status !== 200) {
          openfSnack();
        }
      });
    // fetch(
    //   `${process.env.REACT_APP_POST_USER_ASSESSMENT_FILE_BY_UID_MID_AND_AID_API_URL}`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       user_id: user_id,
    //       module_id: module_id,
    //       assessment_id: assessment_id,
    //       // filename: selectedFile.name,
    //       // filename: fileupload_path,
    //       filename: fileuploadpath,
    //       filetype: selectedFile.type,
    //     }),
    //   }
    // )
    //   .then((resp) => resp.json())
    //   .then((res) => {
    //     // console.log("response", res);
    //     //###################################### checking submission response
    //     if (res.attributes.status === `success`) {
    //       opensSnack();
    //     } else if (res.attributes.status !== `success`) {
    //       openfSnack();
    //     }
    //     //###################################### checking submission response
    //   })
    //   .catch((error) => {
    //     // console.log(error);
    //     openfSnack();
    //   });
  };
  // console.log(progress);
  useEffect(() => {
    // console.log(user_id);
    // console.log(course_id);
    // console.log(module_id);
    if (user_id) {
      fetch(
        `${process.env.REACT_APP_GET_SUBMITTED_ASSESSMENT_BY_UID_MID_AND_AID_API_URL}` +
        user_id +
        "/" +
        module_id +
        "/" +
        assessment_id,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((resp) => resp.json())
        .then((res) => {
          console.log("submitted assessments", res);
          setSubmittedassessments(res.responseList);
        })
        .catch((error) => openeSnack());
    } else if (!user_id) {
      window.location.href = "/";
    }
  }, []);
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
              <Link color="textPrimary" onClick={() => moduleClicked()}>
                <Typography variant="body1">{module_num}</Typography>
              </Link>
              <Typography variant="body1">
                Assessment {assessment_id}
              </Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={2} />
          <Grid item xs={8}>
            <Typography variant="h5">{assessment_name}</Typography>
          </Grid>
          <Grid item xs={2} />
        </Grid>
      </Toolbar>
      <Container>
        <Box justifyContent="center" m={5} p={3}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item xs={2} />
            <Grid item xs={8}>
              <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                //   subheader={
                //     <ListSubheader component="div" id="nested-list-subheader">
                //       Nested List Items
                //     </ListSubheader>
                //   }
                className={classes.root}
              >
                <ListItem button>
                  <ListItemIcon>
                    <PictureAsPdfIcon />
                  </ListItemIcon>
                  <Link
                    color="inherit"
                    underline="none"
                    target="_blank"
                    href={assessment_filepath}
                  >
                    <ListItemText primary="View Assessment" />
                  </Link>
                </ListItem>
                <Divider />
                <ListItem button>
                  <ListItemIcon>
                    <AssessmentIcon />
                  </ListItemIcon>
                  <ListItemText primary="Submit Assessment" />
                  <ListItemSecondaryAction>
                    <input
                      accept="pdf/*"
                      className={classes.input}
                      id="contained-button-file"
                      multiple
                      type="file"
                      onChange={fileSelectHandler}
                    />
                    <label htmlFor="contained-button-file">
                      <Button
                        // variant="outlined"
                        // color="default"
                        className={classes.btnTheme}
                        component="span"
                        startIcon={<AttachFileIcon />}
                      >
                        Select File
                      </Button>
                    </label>
                    {/* <input
                accept="pdf/*"
                className={classes.input}
                id="contained-button-file"
                type="file"
                onChange={fileSelectHandler}
              />
              <label htmlFor="contained-button-file">
                <Button
                  variant="contained"
                  color="default"
                  className={classes.button}
                  startIcon={<AttachFileIcon />}
                >
                  Select File
                </Button>
              </label> */}
                    {"  "}
                    <Button
                      // variant="outlined"
                      // color="primary"
                      className={classes.btnTheme}
                      startIcon={<CloudUploadIcon />}
                      onClick={fileUploadHandler}
                    >
                      Upload
                    </Button>
                  </ListItemSecondaryAction>
                </ListItem>
                <div className={classes.pBar}>
                  <LinearProgress variant="determinate" value={progress} />{" "}
                </div>
                <Divider />
                <ListItem button onClick={handleClick}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="View Submissions" />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  {submittedassessments.map((submittedassessmentsList) => {
                    return (
                      <List component="div" disablePadding>
                        <ListItem
                          button
                          className={classes.nested}
                          key={submittedassessmentsList.submisssion_date}
                        >
                          {/* <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon> */}
                          <Link
                            color="inherit"
                            underline="none"
                            target="_blank"
                            href={
                              submittedassessmentsList.user_assessment_filepath
                            }
                          >
                            <ListItemText
                              primary={submittedassessmentsList.user_assessment_filepath
                                .split("/")
                                .slice(-1)}
                            />
                            <ListItemSecondaryAction>
                              <Typography variant="subtitle1" gutterBottom>
                                {moment(
                                  submittedassessmentsList.submisssion_date
                                ).format("MMMM Do YYYY, h:mm:ss a")}
                              </Typography>
                            </ListItemSecondaryAction>
                          </Link>
                        </ListItem>
                        <Divider />
                      </List>
                    );
                  })}
                </Collapse>
              </List>
            </Grid>
            <Grid item xs={2} />
          </Grid>
        </Box>
      </Container>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        open={opensuccessSnackbar}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          <AlertTitle>Success</AlertTitle>
          <strong> File uploaded </strong>
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        open={openfailureSnackbar}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error">
          <AlertTitle>Error</AlertTitle>
          <strong> Unable to upload file. Try Again!!!</strong>
        </Alert>
      </Snackbar>
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
export default Assessment;
