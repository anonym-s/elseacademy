import React, { useState, useEffect } from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Toolbar from "@material-ui/core/Toolbar";
import AppAppBar from "./modules/AppAppBar";
import Link from "@material-ui/core/Link";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import { red } from "@material-ui/core/colors";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert, AlertTitle } from "@material-ui/lab";
import ReactPlayer from "react-player/lazy";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
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
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import FeedbackIcon from "@material-ui/icons/Feedback";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
// import Collapse from "@material-ui/core/Collapse";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import DraftsIcon from "@material-ui/icons/Drafts";
// import SendIcon from "@material-ui/icons/Send";
// import ExpandLess from "@material-ui/icons/ExpandLess";
// import ExpandMore from "@material-ui/icons/ExpandMore";
// import StarBorder from "@material-ui/icons/StarBorder";
// import { RichText, Date } from "prismic-reactjs";
// import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import CloseIcon from "@material-ui/icons/Close";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Skeleton from "@material-ui/lab/Skeleton";
import ImageIcon from "@material-ui/icons/Image";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { MemoryRouter, Route } from "react-router";
import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";
// const segment_content =
//   "<p><strong>Segment 1: Frequently Used Acronyms</strong></p><p><strong>ELT</strong> (English Language Teaching) has quite recently come into use as an umbrella term which aims to include everything in the Teaching English field.</p><p><strong>TEFL</strong> (Teaching English as a Foreign Language) and EFL (English as a Foreign Language) are perhaps the most common terms.</p><p><strong>TEYL</strong> (Teaching English to Young Learners) is encompassed within TEFL/TESOL and is geared, as you would imagine, to teaching young learners of English.</p><p><strong>TESL</strong> (Teaching English as a Second Language) is teaching immigrants in English-speaking countries, though this area is also, confusingly, referred to as TESOL. The students are studying an ESL (English as a Second Language) course.</p><p><strong>CLT</strong> (Communicative Language Teaching) is an umbrella term for learnercentered, authentic and meaningful language acquisition principles that inform the most widely practiced language teaching approach used in second language learning classrooms today. It is also referred to as the Communicative Approach. Our course will follow this approach.</p><p><strong>L1</strong> is the term used for a student&rsquo;s first language (the student&rsquo;s native language). If someone asks you if you allow L1 in the classroom, they are asking if you allow your students to use their native language in class.</p><p><strong>L2</strong> stands for the second language a student is learning. Your students&rsquo; L2 will be English.</p><p><strong>PPP</strong> (Presentation, Practice, Production) is a widely used model of classroom teaching for lesson planning and lesson delivery. Some learning Providers call this the I do, We do, You do model of teaching.</p><p><strong>STT</strong> (Student Talking Time) is the amount of time that students spend talking in class (ideally as much as possible).</p><p><strong>TTT</strong> (Teacher Talking Time) is the amount of time you spend talking during a class (ideally as little as possible and much less than STT)</p><p><strong>Video (continuation of segment 1)</strong></p><p>There are more acronyms, but these will do us fine for the moment!</p><p>Now we will look at some Approaches, Methods and Techniques, that we&rsquo;ll be using at myELSA Academy to ensure that there is perfect and all rounded language acquisition by all our students.</p><p>We will view an &lsquo;approach&rsquo; as a way of looking at teaching and learning. Underlying any language teaching approach is a theoretical view of what language is, and of how it can be learned. It contains a set of theoretical principles about teaching with practical applications.An approach gives rise to &lsquo;methods', the way of teaching language items, e.g., via classroom activities or techniques. A method is how a language is taught. A method is made up of a set of techniques that usually reflect a particular view of language teaching. To cite an example, The Communicative Approach is the most popular and most current approach to language teaching. Task-based teaching is a methodology associated with teaching the Communicative Approach. Other methods are also associated with teaching the Communicative Approach.&nbsp;</p>";
const drawerWidth = "35em";
const useStyles = makeStyles((theme) => ({
  toolB: {
    backgroundImage: "linear-gradient(rgb(140, 202, 209), rgb(84, 170, 183))",
    height: 125,
  },
  root: {
    maxWidth: 350,
    minHeight: 400,
    display: "flex",
  },
  //drawer
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  //drwaer
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
  eBtn: {
    transform: "rotate(0deg)",
    transition: "transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  },
  segemntCont: {
    marginBottom: "1em",
  },
  playerWrapper: {
    position: "relative",
    paddingTop: "56.25%" /* Player ratio: 100 / (1280 / 720) */,
  },
  reactPlayer: {
    position: "absolute",
    top: 0,
    left: 0,
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
    marginLeft: "8em",
    width: "70em",
  },
  paper2: {
    position: "absolute",
    overflow: "hidden",
    marginTop: "7.5em",
    marginLeft: "8em",
    width: "70em",
    backgroundColor: "transparent",
  },
  paper3: {
    position: "absolute",
    overflow: "hidden",
    marginTop: "10em",
    marginLeft: "8em",
    width: "70em",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  sBtn: {
    color: "#22af73",
  },
  pBtn: {
    color: "#ff9800",
    marginRight: "1em",
  },
  missingOppositeContent: {
    "&:before": {
      display: "none",
    },
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  nlist: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 1),
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
    margin: theme.spacing(1, 1, 0, 1),
  },
  inline: {
    display: "inline",
  },
  input: {
    display: "none",
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    // height: "8em",
    backgroundColor:
      // theme.palette.type === "light"
      //   ? theme.palette.grey[200]
      //   : theme.palette.grey[800],
      "#343434",
  },
  sessionName: {
    // marginTop: "1em",
    display: "inline",
    fontSize: "1.1em",
    color: "#fff",
    // fontWeight: 200,
    // maxWidth: 250,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "pre-wrap",
    marginLeft: "-11em",
    // marginBottom: "1em",
  },
}));
const IconLeftAccordionSummary = withStyles({
  expandIcon: {
    order: -1,
    marginRight: "-2.5em",
  },
})(AccordionSummary);
//################################################################################################################
//####################################### report and error dialog ################################################
//################################################################################################################
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});
const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);
const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);
//################################################################################################################
//####################################### report and error dialog ################################################
//################################################################################################################
let user_id;
let course_id;
let segment_id;
let course_name;
let module_id;
let module_name;
let module_num;
let session_name;
let session_num;
let segment_name;
let session_len;
let quizDetails;
let fileupload_res;
let fileupload_path;
function Segment(props) {
  user_id = localStorage.getItem("User_Id");
  course_name = localStorage.getItem("Course_Name");
  module_id = localStorage.getItem("Module_ID");
  module_name = localStorage.getItem("Module_Name");
  module_num = localStorage.getItem("Module_Num");
  session_name = localStorage.getItem("Session_Name");
  session_num = localStorage.getItem("Session_Num");
  segment_name = localStorage.getItem("Segment_Name");
  session_len = localStorage.getItem("sessionLength");
  course_id = props.match.params.courseId;
  segment_id = props.match.params.segmentId;
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [segments, setSegments] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [expanded, setExpanded] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [qid, setQid] = React.useState("");
  const [oid, setOid] = React.useState("");
  const [coid, setCoid] = React.useState("");
  const [marks, setMarks] = React.useState("");
  const [quiz, setQuiz] = useState([
    // {
    //   assessment_id: marks,
    //   user_id: user_id,
    //   question_id: qid,
    //   option_id: oid,
    //   answer: value,
    // },
  ]);
  // const [error, setError] = React.useState(false);
  // const [helperText, setHelperText] = React.useState("Choose wisely");
  const [openerrorSnackbar, seterrorSnackbar] = React.useState(false);
  const [opensuccessSnackbar, setsuccessSnackbar] = React.useState(false);
  const [openfailureSnackbar, setfailureSnackbar] = React.useState(false);
  const [openfilesuccessSnackbar, setfilesuccessSnackbar] = React.useState(
    false
  );
  const [openfilefailureSnackbar, setfilefailureSnackbar] = React.useState(
    false
  );
  const [openRAEDialog, setOpenRAEDialog] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorTech, setAnchorTech] = React.useState(null);
  const [anchorVid, setAnchorVid] = React.useState(null);
  const [anchorCon, setAnchorCon] = React.useState(null);
  const [anchorQui, setAnchorQui] = React.useState(null);
  const [selectedFile, setSelectedFile] = useState([]);
  const [progress, setProgress] = React.useState(0);
  const [errorMsg, setErrorMsg] = React.useState("");
  const [errorType, setErrorType] = React.useState("");
  const [resourceId, setResourceId] = React.useState(0);
  const handleClickRAE = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseRAE = () => {
    setAnchorEl(null);
    setAnchorTech(null);
    setAnchorCon(null);
    setAnchorVid(null);
    setAnchorQui(null);
  };
  const handleClickTRAE = (event) => {
    setAnchorTech(event.currentTarget);
    setErrorType("technical");
  };
  const handleCloseTRAE = () => {
    setAnchorTech(null);
  };
  const handleClickCRAE = (event) => {
    setAnchorCon(event.currentTarget);
    setErrorType("text");
  };
  const handleCloseCRAE = () => {
    setAnchorCon(null);
  };
  const handleClickVRAE = (event) => {
    setAnchorVid(event.currentTarget);
    setErrorType("video");
  };
  const handleCloseVRAE = () => {
    setAnchorVid(null);
  };
  const handleClickQRAE = (event) => {
    setAnchorQui(event.currentTarget);
    setErrorType("quiz");
  };
  const handleCloseQRAE = () => {
    setAnchorQui(null);
  };
  const handleOpenRAEDialog = () => {
    setOpenRAEDialog(true);
  };
  const handleCloseRAEDialog = () => {
    setOpenRAEDialog(false);
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
  const openfsSnack = () => {
    setfilesuccessSnackbar(true);
  };
  const openffSnack = () => {
    setfilefailureSnackbar(true);
  };
  //###################################### closing backdrop , snackbars
  const handleClose = () => {
    setsuccessSnackbar(false);
    setfailureSnackbar(false);
    seterrorSnackbar(false);
  };
  //###################################### closing backdrop , snackbars
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
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
  const moduleClicked = () => {
    // course_name = localStorage.getItem("Course_Name");
    // if (course_name) {
    //   localStorage.removeItem("Course_Name");
    // } else if (!course_name) {
    //   localStorage.setItem("Course_Name", courseList.course_name);
    window.location.href =
      "/course/" + course_id + "/module/" + module_id + "/session";
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
  ReactPlayer.oncontextmenu = function (e) {
    e.preventDefault();
  };
  useEffect(() => {
    // console.log(user_id);
    // console.log(course_id);
    // console.log(segment_id);
    if (user_id) {
      fetch(
        `${process.env.REACT_APP_GET_SEGMENT_BY_UID_AND_SID_API_URL}` +
          user_id +
          "/" +
          segment_id +
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
          console.log("segements", res);
          setSegments(res.responseList);
        })
        .catch((error) => openeSnack());
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
          // console.log(res);
          setSessions(res.responseList);
        })
        .catch((error) => openeSnack());
    } else if (!user_id) {
      window.location.href = "/";
    }
  }, []);
  const handleRadioChange = (event) => {
    setValue(event.target.value);
    // setHelperText(" ");
    // setError(false);
  };
  const updateRadioOptionArray = () => {
    const obj = {
      assessment_id: marks,
      user_id: user_id,
      question_id: qid,
      option_id: oid,
      answer: value,
    };
    console.log(obj);
    console.log(quiz);
    let newArr = quiz.slice();
    console.log(newArr);
    // newArr.push(obj);
    setQuiz(newArr);
    newArr.push(obj);
  };
  const handleSubmit = () => {
    var uniq = {};
    var arrFiltered = quiz.filter(
      (obj) => !uniq[obj.question_id] && (uniq[obj.question_id] = true)
    );
    var arrFiltered = arrFiltered.filter((obj) => obj.question_id !== "");
    // console.log("arrFiltered", arrFiltered);
    fetch(`${process.env.REACT_APP_POST_USER_QUIZ_BY_UID_AID_QID_API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        arrFiltered
        //   {
        //   quizDtls: [
        //     {
        //       assessment_id: marks,
        //       user_id: user_id,
        //       question_id: qid,
        //       option_id: oid,
        //       answer: value,
        //       // marks: marks,
        //       // answer_flag: "incorrect",
        //     },
        //   ],
        // }
      ),
    })
      .then((resp) => resp.json())
      .then((res) => {
        // console.log("response", res);
        //###################################### checking submission response
        if (res.responseList === `success`) {
          opensSnack();
        } else if (res.attributes.status !== `success`) {
          openfSnack();
          // window.location.reload(true);
        }
        //###################################### checking submission response
      })
      .catch((error) => {
        // console.log(error);
        openfSnack();
      });
    // setQid(optionList.Option_ID);
    // setOid(optionList.Question_ID);
    // console.log("question id", qid, "option id", oid);
    // event.preventDefault();
    // if (value === "best") {
    //   setHelperText("You got it!");
    //   setError(false);
    // } else if (value === "worst") {
    //   setHelperText("Sorry, wrong answer!");
    //   setError(true);
    // } else {
    //   setHelperText("Please select an option.");
    //   setError(true);
    // }
  };
  const fileSelectHandler = (event) => {
    const fileInfo = event.target.files[0];
    setSelectedFile(fileInfo);
  };
  const handleIssue = (event) => {
    setErrorMsg(event.target.value);
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
            `${process.env.REACT_APP_POST_REPORT_ERROR_BY_UID_RID_AND_SID_API_URL}`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                user_id: user_id,
                error_type: errorType,
                error_msg: errorMsg,
                error_snapshot_url: fileupload_path,
                resource_id: resourceId,
                segment_id: segment_id,
              }),
            }
          )
            .then((resp) => resp.json())
            .then((res) => {
              // console.log("response", res);
              //###################################### checking submission response
              if (res.attributes.status === `success`) {
                openfsSnack();
                window.location.reload(true);
              } else if (res.attributes.status !== `success`) {
                openffSnack();
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
  };
  // console.log(
  //   "question id",
  //   qid,
  //   "option id",
  //   oid,
  //   "correct option id",
  //   coid,
  //   // "marks",
  //   // marks,
  //   "quiz answer",
  //   value,
  //   "assessment id",
  //   marks
  // );
  // console.log(quiz);
  // const handleClick = () => {
  //   setOpen(!open);
  // };
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  let renderPage1;
  if (segments != "") {
    renderPage1 = (
      <div>
        {segments.map((segmentList) => {
          if (segmentList.contentType === "text") {
            return (
              <div key={segmentList.text_resource_id}>
                {() => {
                  setResourceId(segmentList.text_resource_id);
                }}
                <Typography variant="h5" gutterBottom={true}>
                  {segmentList.text_content_name}
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom={true}
                  className={classes.segemntCont}
                >
                  {/* {RichText.render(segmentList.text_content)} */}
                  {/* {segmentList.text_content} */}
                  {/* <div
                          dangerouslySetInnerHTML={{
                            __html:
                              "<p><strong>Segment 1: Frequently Used Acronyms</strong></p><p><strong>ELT</strong> (English Language Teaching) has quite recently come into use as an umbrella term which aims to include everything in the Teaching English field.</p><p><strong>TEFL</strong> (Teaching English as a Foreign Language) and EFL (English as a Foreign Language) are perhaps the most common terms.</p><p><strong>TEYL</strong> (Teaching English to Young Learners) is encompassed within TEFL/TESOL and is geared, as you would imagine, to teaching young learners of English.</p><p><strong>TESL</strong> (Teaching English as a Second Language) is teaching immigrants in English-speaking countries, though this area is also, confusingly, referred to as TESOL. The students are studying an ESL (English as a Second Language) course.</p><p><strong>CLT</strong> (Communicative Language Teaching) is an umbrella term for learnercentered, authentic and meaningful language acquisition principles that inform the most widely practiced language teaching approach used in second language learning classrooms today. It is also referred to as the Communicative Approach. Our course will follow this approach.</p><p><strong>L1</strong> is the term used for a student&rsquo;s first language (the student&rsquo;s native language). If someone asks you if you allow L1 in the classroom, they are asking if you allow your students to use their native language in class.</p><p><strong>L2</strong> stands for the second language a student is learning. Your students&rsquo; L2 will be English.</p><p><strong>PPP</strong> (Presentation, Practice, Production) is a widely used model of classroom teaching for lesson planning and lesson delivery. Some learning Providers call this the I do, We do, You do model of teaching.</p><p><strong>STT</strong> (Student Talking Time) is the amount of time that students spend talking in class (ideally as much as possible).</p><p><strong>TTT</strong> (Teacher Talking Time) is the amount of time you spend talking during a class (ideally as little as possible and much less than STT)</p><p><strong>Video (continuation of segment 1)</strong></p><p>There are more acronyms, but these will do us fine for the moment!</p><p>Now we will look at some Approaches, Methods and Techniques, that we&rsquo;ll be using at myELSA Academy to ensure that there is perfect and all rounded language acquisition by all our students.</p><p>We will view an &lsquo;approach&rsquo; as a way of looking at teaching and learning. Underlying any language teaching approach is a theoretical view of what language is, and of how it can be learned. It contains a set of theoretical principles about teaching with practical applications.An approach gives rise to &lsquo;methods', the way of teaching language items, e.g., via classroom activities or techniques. A method is how a language is taught. A method is made up of a set of techniques that usually reflect a particular view of language teaching. To cite an example, The Communicative Approach is the most popular and most current approach to language teaching. Task-based teaching is a methodology associated with teaching the Communicative Approach. Other methods are also associated with teaching the Communicative Approach.&nbsp;</p>",
                          }}
                        />{" "} */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: segmentList.text_content,
                    }}
                  />
                  {/* {segment_content} */}
                </Typography>
              </div>
            );
          } else if (segmentList.contentType === "resource") {
            return (
              <div key={segmentList.text_resource_id}>
                {() => {
                  setResourceId(segmentList.text_resource_id);
                }}
                <Typography variant="h5" gutterBottom={true}>
                  {segmentList.resource_name}
                </Typography>
                <div className="playerWrapper">
                  <ReactPlayer
                    url={segmentList.resource_url}
                    width="100%"
                    height="100%"
                    loop={false}
                    controls={true}
                    className="reactPlayer"
                    volume={1}
                    config={{
                      file: {
                        attributes: {
                          autoPlay: false,
                          muted: false,
                          controlsList: "nodownload",
                        },
                      },
                    }}
                    onContextMenu={(e) => {
                      e.preventDefault();
                      return false;
                    }}
                  />
                </div>
              </div>
            );
          } else if (segmentList.contentType === "quiz") {
            return (
              <div key={segmentList.text_resource_id}>
                {() => {
                  setResourceId(segmentList.text_resource_id);
                }}
                {segmentList.quizDtls.map((quizList) => {
                  return (
                    <div>
                      <List
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                          <ListSubheader
                            component="div"
                            color="inherit"
                            id="nested-list-subheader"
                            key={quizList.Question_ID}
                          >
                            <Typography
                              variant="overline"
                              display="block"
                              gutterBottom
                            >
                              {quizList.Assessment_Type_Desc}
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                              {quizList.Question_ID}
                              {"."}
                              {quizList.Question}
                            </Typography>
                          </ListSubheader>
                        }
                        className={classes.nlist}
                      >
                        {quizList.options.map((optionList) => {
                          return (
                            <div component="div" disablePadding>
                              <RadioGroup
                                aria-label={optionList.Option}
                                name={optionList.Option}
                                value={value}
                                key={optionList.Option_ID}
                                onChange={handleRadioChange}
                                checked={value === optionList.Option_ID}
                                onClick={() => {
                                  setQid(optionList.Question_ID);
                                  setOid(optionList.Option_ID);
                                  setMarks(segmentList.text_resource_id);
                                }}
                                className={classes.nested}
                              >
                                <FormControlLabel
                                  value={optionList.Option}
                                  control={<Radio />}
                                  label={optionList.Option}
                                  onClick={updateRadioOptionArray}
                                />
                              </RadioGroup>
                            </div>
                          );
                        })}
                      </List>
                      <Divider />
                      {/* <form
                              onSubmit={handleSubmit}
                              key={quizList.Question_ID}
                            >
                              <FormControl
                                component="fieldset"
                                // error={error}
                                className={classes.formControl}
                              >
                                <FormLabel component="legend">
                                  <Typography
                                    variant="overline"
                                    display="block"
                                    gutterBottom
                                  >
                                    {quizList.Assessment_Type_Desc}
                                  </Typography>
                                  <Typography variant="h6" gutterBottom>
                                    {quizList.Question_ID}
                                    {"."}
                                    {quizList.Question}
                                  </Typography>
                                </FormLabel>
                                {quizList.options.map((optionList) => {
                                  return (
                                    <div component="div" disablePadding>
                                      <RadioGroup
                                        value={value}
                                        key={optionList.Option_ID}
                                        aria-label={optionList.Option_ID}
                                        name={optionList.Option_ID}
                                        value={value}
                                        key={optionList.Option_ID}
                                        onChange={handleRadioChange}
                                        checked={value === optionList.Option_ID}
                                        onClick={() => {
                                          setQid(optionList.Question_ID);
                                          setOid(optionList.Option_ID);
                                          setMarks(
                                            segmentList.text_resource_id
                                          );
                                        }}
                                        className={classes.nested}
                                      >
                                        <FormControlLabel
                                          value={optionList.Option}
                                          control={<Radio />}
                                          label={optionList.Option}
                                          onClick={updateRadioOptionArray}
                                        />
                                      </RadioGroup>
                                    </div>
                                  );
                                })}
                                <Button
                                  type="submit"
                                  variant="outlined"
                                  color="primary"
                                  className={classes.button}
                                >
                                  Check Answer
                                </Button>
                              </FormControl>
                            </form> */}
                    </div>
                  );
                })}
                {segmentList.userAssessmentStatus === "incomplete" ? (
                  <Button className={classes.btnTheme} onClick={handleSubmit}>
                    Submit Answers
                  </Button>
                ) : (
                  <Typography variant="h6" gutterBottom>
                    Quiz Submitted
                  </Typography>
                )}
              </div>
            );
          }
        })}
        <br />
        {/* //################################################################################################################
        //####################################### report and error dialog ################################################
        //################################################################################################################ */}
        <Button
          // href="#text-buttons"
          color="inherit"
          startIcon={<FeedbackIcon />}
          onClick={handleClickRAE}
        >
          Report an error
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleCloseRAE}
        >
          <MenuItem onClick={handleClickTRAE}>
            Technical Error
            <ListItemSecondaryAction>
              <ArrowForwardIosIcon />
            </ListItemSecondaryAction>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClickCRAE}>
            Text Content Error
            <ListItemSecondaryAction>
              <ArrowForwardIosIcon />
            </ListItemSecondaryAction>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClickVRAE}>
            Video Content Error
            <ListItemSecondaryAction>
              <ArrowForwardIosIcon />
            </ListItemSecondaryAction>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClickQRAE}>
            Quiz Error
            <ListItemSecondaryAction>
              <ArrowForwardIosIcon />
            </ListItemSecondaryAction>
          </MenuItem>
        </Menu>
        {/* technical error */}
        <Menu
          id="simple-menu"
          anchorEl={anchorTech}
          keepMounted
          open={Boolean(anchorTech)}
        >
          <MenuItem>
            <List>
              <ListItem alignItems="flex-start">
                <ListItemIcon>
                  <ArrowBackIosIcon onClick={handleCloseTRAE} />
                </ListItemIcon>
                <ListItemText primary="Technical Error" />
                <ListItemSecondaryAction>
                  <CloseIcon onClick={handleCloseRAE} />
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
              <ListItem alignItems="flex-start">
                <ListItemText
                  secondary={
                    <React.Fragment>
                      <input
                        accept="*/*"
                        className={classes.input}
                        id="contained-button-file"
                        // multiple
                        type="file"
                        onChange={fileSelectHandler}
                      />
                      <label htmlFor="contained-button-file">
                        <Button
                          color="inherit"
                          component="span"
                          startIcon={<ImageIcon />}
                        >
                          Attach Snapshot
                        </Button>
                      </label>
                      <FormHelperText>
                        Accepted formats : jpg, jpeg, png. Size upto 5MB
                      </FormHelperText>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider />
              <ListItem alignItems="flex-start">
                <ListItemText
                  secondary={
                    <React.Fragment>
                      <textarea
                        placeholder="Type your issue here"
                        style={{
                          minHeight: "15em",
                          maxHeight: "15em",
                          minWidth: "20em",
                          maxWidth: "20em",
                          border: "none",
                        }}
                        onChange={handleIssue}
                      />
                      {/* </textarea> */}
                      <br />
                      <Button
                        color="inherit"
                        className={classes.btnTheme}
                        onClick={handleClickRAE}
                      >
                        Send
                      </Button>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          </MenuItem>
        </Menu>
        {/* technical error */}
        {/* text error */}
        <Menu
          id="simple-menu"
          anchorEl={anchorCon}
          keepMounted
          open={Boolean(anchorCon)}
        >
          <MenuItem>
            <List>
              <ListItem alignItems="flex-start">
                <ListItemIcon>
                  <ArrowBackIosIcon onClick={handleCloseCRAE} />
                </ListItemIcon>
                <ListItemText primary="Text Content Error" />
                <ListItemSecondaryAction>
                  <CloseIcon onClick={handleCloseRAE} />
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
              <ListItem alignItems="flex-start">
                <ListItemText
                  secondary={
                    <React.Fragment>
                      <input
                        accept="*/*"
                        className={classes.input}
                        id="contained-button-file"
                        multiple
                        type="file"
                        onChange={fileSelectHandler}
                      />
                      <label htmlFor="contained-button-file">
                        <Button
                          color="inherit"
                          component="span"
                          startIcon={<ImageIcon />}
                        >
                          Attach Snapshot
                        </Button>
                      </label>
                      <FormHelperText>
                        Accepted formats : jpg, jpeg, png. Size upto 5MB
                      </FormHelperText>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider />
              <ListItem alignItems="flex-start">
                <ListItemText
                  secondary={
                    <React.Fragment>
                      <textarea
                        placeholder="Type your issue here"
                        style={{
                          minHeight: "15em",
                          maxHeight: "15em",
                          minWidth: "20em",
                          maxWidth: "20em",
                          border: "none",
                        }}
                      />
                      {/* </textarea> */}
                      <br />
                      <Button
                        color="inherit"
                        className={classes.btnTheme}
                        onClick={fileUploadHandler}
                      >
                        Send
                      </Button>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          </MenuItem>
        </Menu>
        {/* text error */}
        {/* video error */}
        <Menu
          id="simple-menu"
          anchorEl={anchorVid}
          keepMounted
          open={Boolean(anchorVid)}
        >
          <MenuItem>
            <List>
              <ListItem alignItems="flex-start">
                <ListItemIcon>
                  <ArrowBackIosIcon onClick={handleCloseVRAE} />
                </ListItemIcon>
                <ListItemText primary="Video Content Error" />
                <ListItemSecondaryAction>
                  <CloseIcon onClick={handleCloseRAE} />
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
              <ListItem alignItems="flex-start">
                <ListItemText primary={segment_name} />
              </ListItem>
              <Divider />
              <ListItem alignItems="flex-start">
                <ListItemText
                  secondary={
                    <React.Fragment>
                      <input
                        accept="*/*"
                        className={classes.input}
                        id="contained-button-file"
                        multiple
                        type="file"
                        onChange={fileSelectHandler}
                      />
                      <label htmlFor="contained-button-file">
                        <Button
                          color="inherit"
                          component="span"
                          startIcon={<ImageIcon />}
                        >
                          Attach Snapshot
                        </Button>
                      </label>
                      <FormHelperText>
                        Accepted formats : jpg, jpeg, png. Size upto 5MB
                      </FormHelperText>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider />
              <ListItem alignItems="flex-start">
                <ListItemText
                  secondary={
                    <React.Fragment>
                      <textarea
                        placeholder="Type your issue here"
                        style={{
                          minHeight: "15em",
                          maxHeight: "15em",
                          minWidth: "20em",
                          maxWidth: "20em",
                          border: "none",
                        }}
                      />
                      {/* </textarea> */}
                      <br />
                      <Button
                        color="inherit"
                        className={classes.btnTheme}
                        onClick={fileUploadHandler}
                      >
                        Send
                      </Button>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          </MenuItem>
        </Menu>
        {/* video error */}
        {/* qui error */}
        <Menu
          id="simple-menu"
          anchorEl={anchorQui}
          keepMounted
          open={Boolean(anchorQui)}
        >
          <MenuItem>
            <List>
              <ListItem alignItems="flex-start">
                <ListItemIcon>
                  <ArrowBackIosIcon onClick={handleCloseQRAE} />
                </ListItemIcon>
                <ListItemText primary="Quiz Error" />
                <ListItemSecondaryAction>
                  <CloseIcon onClick={handleCloseRAE} />
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
              <ListItem alignItems="flex-start">
                <ListItemText
                  secondary={
                    <React.Fragment>
                      <input
                        accept="*/*"
                        className={classes.input}
                        id="contained-button-file"
                        multiple
                        type="file"
                        onChange={fileSelectHandler}
                      />
                      <label htmlFor="contained-button-file">
                        <Button
                          color="inherit"
                          component="span"
                          startIcon={<ImageIcon />}
                        >
                          Attach Snapshot
                        </Button>
                      </label>
                      <FormHelperText>
                        Accepted formats : jpg, jpeg, png. Size upto 5MB
                      </FormHelperText>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider />
              <ListItem alignItems="flex-start">
                <ListItemText
                  secondary={
                    <React.Fragment>
                      <textarea
                        placeholder="Type your issue here"
                        style={{
                          minHeight: "15em",
                          maxHeight: "15em",
                          minWidth: "20em",
                          maxWidth: "20em",
                          border: "none",
                        }}
                      />
                      {/* </textarea> */}
                      <br />
                      <Button
                        color="inherit"
                        className={classes.btnTheme}
                        onClick={fileUploadHandler}
                      >
                        Send
                      </Button>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          </MenuItem>
        </Menu>
        {/* quiz error */}
        {/* //################################################################################################################
        //####################################### report and error dialog ################################################
        //################################################################################################################ */}
      </div>
    );
  } else if (segments == "") {
    renderPage1 = (
      <div>
        <div>
          <Typography variant="h5" gutterBottom={true}>
            <Skeleton variant="text" />
          </Typography>
        </div>
        <div>
          <div className="playerWrapper">
            <Skeleton variant="rect" width={731} height={411} />
          </div>
        </div>
      </div>
    );
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <AppAppBar />
      <Toolbar className={classes.toolB}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        {/* <Typography variant="overline">navigate</Typography> */}
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
              <Typography variant="body1">{session_num}</Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={2} />
          <Grid item xs={8}>
            <Typography variant="h5"> {session_name}</Typography>
          </Grid>
          <Grid item xs={2} />
        </Grid>
      </Toolbar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Typography variant="h6" align="left">
            {session_name}
            {""}
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {sessions.map((sessionList) => {
            return (
              <Box justifyContent="center" key={sessionList.session_id} m={0.5}>
                <Accordion
                  elevation={1}
                  expanded={expanded == "session" + sessionList.session_id}
                  onChange={handleChange("session" + sessionList.session_id)}
                >
                  <IconLeftAccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={"session" + sessionList.session_id}
                    id={"session" + sessionList.session_id}
                  >
                    <Grid item xs={2} />
                    <Grid container xs={10}>
                      <Grid item xs={4}>
                        <Typography variant="caption">
                          {sessionList.session_no}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}></Grid>
                      <Grid item xs={1} />
                      <Grid item xs={10}>
                        <Typography className={classes.heading}>
                          {sessionList.session_name}
                        </Typography>
                      </Grid>
                      <Grid item xs={1}>
                        <ErrorOutlineIcon className={classes.pBtn} />
                      </Grid>
                    </Grid>
                    {/* <Grid container xs={6}>
                      <Grid item xs={7} />
                      <Grid item xs={2} />
                      <Grid item xs={1}>
                        <ErrorOutlineIcon className={classes.pBtn} />
                      </Grid>
                      <Grid item xs={2} />
                    </Grid> */}
                  </IconLeftAccordionSummary>
                  <AccordionDetails>
                    <Grid container xs={12}>
                      {/* <Timeline align={"left"}> */}
                      {sessionList.segmentDtls.map((segmentList) => {
                        return (
                          // <TimelineItem
                          //   key={segmentList.sequence_id}
                          //   className={classes.missingOppositeContent}
                          // >
                          //   <TimelineSeparator>
                          //     <TimelineDot variant="outlined" />
                          //     <TimelineConnector />
                          //   </TimelineSeparator>
                          //   <TimelineContent>
                          <ListItem button key={segmentList.sequence_id}>
                            <Link
                              color="inherit"
                              underline="none"
                              onClick={() =>
                                segmentClicked(sessionList, segmentList)
                              }
                            >
                              <ListItemText
                                primary={segmentList.segment_name}
                              />
                              <ListItemSecondaryAction>
                                <ErrorOutlineIcon className={classes.pBtn} />
                              </ListItemSecondaryAction>
                            </Link>
                          </ListItem>
                          //   </TimelineContent>
                          // </TimelineItem>
                        );
                      })}
                      {/* </Timeline> */}
                    </Grid>
                  </AccordionDetails>
                </Accordion>
                <Divider />
              </Box>
            );
          })}
        </List>
        {/*<Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      ></main>
      <Container>
        <Box justifyContent="center" m={5} p={3}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item xs={2} />
            <Grid item xs={8}>
              {/* <Typography variant="h5" gutterBottom={true}>
                Setting the Premise
              </Typography>
              <Typography
                variant="body1"
                gutterBottom={true}
                className={classes.segemntCont}
              >
                {segment_content}
              </Typography>
              <img
                src="/static/image/segment/video_screenshot/Screenshot_1.png"
                className="App-logo"
                alt="logo"
              />
              */}
              {renderPage1}
            </Grid>
            <Grid item xs={2} />
          </Grid>
        </Box>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Box justifyContent="center" m={1} p={1}>
            <Grid container wrap="nowrap" spacing={1}>
              <Grid item xs={5}></Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={5}>
                <List>
                  <ListItem alignItems="flex-start">
                    <ListItemText
                      secondary={
                        <React.Fragment>
                          <Typography
                            variant="overline"
                            display="block"
                            gutterBottom
                            align="left"
                          >
                            Next
                          </Typography>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.sessionName}
                            color="textPrimary"
                            align="left"
                          >
                            {segment_name}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                    <ListItemSecondaryAction>
                      <ArrowForwardIcon />
                    </ListItemSecondaryAction>
                  </ListItem>
                  {/* <ListItem alignItems="flex-start">
                    <ListItemSecondaryAction>
                      <ArrowForwardIcon />
                    </ListItemSecondaryAction>
                  </ListItem> */}
                </List>
              </Grid>
            </Grid>
          </Box>
          {/* <MemoryRouter initialEntries={["/segment"]} initialIndex={0}>
            <Route>
              {({ location }) => {
                let path = location.pathname;
                console.log(path);
                let check_routeparam = /[0-9]+/g;
                let route_param = path.match(check_routeparam);
                console.log(route_param);
                const query = new URLSearchParams(location.search);
                // console.log(query);
                const page = parseInt(query.get("page") || route_param, 10);
                console.log(page);
                return (
                  <Pagination
                    page={page}
                    count={10}
                    renderItem={(item) => (
                      <PaginationItem
                        component={Link}
                        to={`/segment${
                          item.page === 1 ? "" : `?page=${item.page}`
                        }`}
                        {...item}
                      />
                    )}
                  />
                );
              }}
            </Route>
          </MemoryRouter> */}
        </Container>
      </footer>
      {/* answer submitted */}
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        open={opensuccessSnackbar}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          <AlertTitle>Success</AlertTitle>
          <strong> Answer submitted </strong>
        </Alert>
      </Snackbar>
      {/* answer submitted */}
      {/* file uploaded */}
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        open={openfilesuccessSnackbar}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          <AlertTitle>Success</AlertTitle>
          <strong> File uploaded </strong>
        </Alert>
      </Snackbar>
      {/* file uploaded */}
      {/* file not uploaded */}
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        open={openfilefailureSnackbar}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error">
          <AlertTitle>Error</AlertTitle>
          <strong> Unable to upload file. Try Again!!!</strong>
        </Alert>
      </Snackbar>
      {/* file not uploaded */}
      {/* answer not submitted */}
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        open={openfailureSnackbar}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error">
          <AlertTitle>Error</AlertTitle>
          <strong> Answer not submitted. Try Again!!!</strong>
        </Alert>
      </Snackbar>
      {/* answer not submitted */}
      {/* Failed to load resource */}
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
      {/* Failed to load resource */}
    </React.Fragment>
  );
}
export default Segment;
