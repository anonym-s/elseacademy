import React, { useState, useEffect } from "react";
import AppAppBar from "./modules/AppAppBar";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import LinearProgress from "@material-ui/core/LinearProgress";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { red } from "@material-ui/core/colors";
import Fab from "@material-ui/core/Fab";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";
import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined";
import HourglassEmptyTwoToneIcon from "@material-ui/icons/HourglassEmptyTwoTone";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert, AlertTitle } from "@material-ui/lab";
// import CheckTwoToneIcon from "@material-ui/icons/CheckTwoTone";
import Link from "@material-ui/core/Link";
import Skeleton from "@material-ui/lab/Skeleton";
import Toolbar from "@material-ui/core/Toolbar";

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
  cardH1: {
    // backgroundColor: "rgb(152, 139, 213)",
    // background: "linear-gradient(45deg, #998bd5 30%, #695baf 90%)",
    padding: 0,
    paddingLeft: 20,
    paddingTop: 10,
    margin: 0,
    fontWeight: 200,
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
}));
const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
    width: 100,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "rgb(152, 139, 213)",
  },
}))(LinearProgress);
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
let course_Name;
let module_name;
let module_num;
function Module(props) {
  const classes = useStyles();
  const [programs, setPrograms] = useState([]);
  user_id = localStorage.getItem("User_Id");
  course_id = props.match.params.courseId;
  const [openerrorSnackbar, seterrorSnackbar] = React.useState(false);
  const openeSnack = () => {
    seterrorSnackbar(true);
  };
  //###################################### closing backdrop , snackbars
  const handleClose = () => {
    seterrorSnackbar(false);
  };
  //###################################### closing backdrop , snackbars
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
  const moduleClicked = (programList) => {
    module_name = localStorage.getItem("Module_Name");
    module_num = localStorage.getItem("Module_Num");
    if (module_name && module_num) {
      localStorage.removeItem("Module_Name");
      localStorage.removeItem("Module_Num");
    } else if (!module_name && !module_num) {
      localStorage.setItem("Module_Name", programList.module_name);
      localStorage.setItem("Module_Num", programList.module_no);
      window.location.href =
        "/course/" +
        course_id +
        "/module/" +
        programList.module_id +
        "/session";
      // course/:courseId/module/
    }
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
          // console.log(course_Name);
          setPrograms(res.responseList);
        })
        .catch((error) => openeSnack());
    } else if (!user_id) {
      window.location.href = "/";
    }
  }, []);
  let renderPage;
  if (programs != "") {
    //################################################################################################################
    //########################################### if programs ########################################################
    //################################################################################################################
    renderPage = (
      <div>
        <Container>
          <Box display="flex" flexDirection="row" p={1} m={1}>
            {programs.map((programList) => {
              return (
                <Box p={2} key={programList.module_id}>
                  <Link
                    color="inherit"
                    underline="none"
                    // href="/course/module/session"
                    onClick={() => moduleClicked(programList)}
                  >
                    <Card className={classes.root}>
                      <div className={classes.cardHead1}>
                        <CardHeader
                          subheader={programList.module_no}
                          className={classes.cardH1}
                          action={
                            <Fab
                              size="medium"
                              // color="secondary"
                              aria-label="add"
                              className={classes.fabBtn}
                            >
                              <PlayArrowIcon className={classes.fabB1} />
                            </Fab>
                          }
                        />
                        <CardHeader
                          subheader={programList.module_name}
                          className={classes.cardH2}
                        />
                      </div>
                      <CardContent>
                        <Grid container>
                          <Grid item xs={2}>
                            <CalendarTodayOutlinedIcon fontSize={"large"} />
                          </Grid>
                          <Grid item xs={4}>
                            <Typography variant="caption">Due Date</Typography>
                            <Typography variant="body2">13th Sep'20</Typography>
                          </Grid>
                          <Grid item xs={2}>
                            <InsertDriveFileOutlinedIcon fontSize={"large"} />
                          </Grid>
                          <Grid item xs={4}>
                            <Typography variant="caption">
                              Submissions
                            </Typography>
                            <Typography variant="body2">Nil</Typography>
                          </Grid>
                        </Grid>
                      </CardContent>
                      <CardContent>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {programList.module_description}
                        </Typography>
                      </CardContent>
                      <Divider variant="middle" />
                      <CardContent>
                        <Grid container>
                          <Grid item xs={6}>
                            <Typography
                              variant="overline"
                              className={classes.overallProg}
                            >
                              PROGRESS
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography
                              variant="overline"
                              className={classes.overallProg}
                            >
                              ESTIMATED TIME
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography variant="caption">
                              0% completed
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography variant="caption">
                              <HourglassEmptyTwoToneIcon fontSize={"small"} />{" "}
                              20 hours
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <BorderLinearProgress
                              variant="determinate"
                              value={0.9}
                            />
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Link>
                </Box>
              );
            })}
          </Box>
        </Container>
      </div>
    );
    //################################################################################################################
    //########################################### if programs ########################################################
    //################################################################################################################
  } else if (programs == "") {
    //################################################################################################################
    //########################################### if not programs ####################################################
    //################################################################################################################
    renderPage = (
      <div>
        <Container>
          <Box display="flex" flexDirection="row" p={1} m={1}>
            {/* 1st Module */}
            <Box p={2}>
              <Link
                color="inherit"
                underline="none"
                // href="/course/module/session"
                // onClick={() => moduleClicked(programList)}
              >
                <Card className={classes.root}>
                  <div className={classes.cardHead1}>
                    <CardHeader
                      className={classes.cardH1}
                      action={
                        <Fab
                          size="medium"
                          // color="secondary"
                          aria-label="add"
                          className={classes.fabBtn}
                        >
                          <PlayArrowIcon className={classes.fabB1} />
                        </Fab>
                      }
                    ></CardHeader>
                    {/*<CardHeader className={classes.cardH2}>
                      <Skeleton animation="wave" width="5em" />
                    </CardHeader>*/}
                    <Skeleton animation="wave" width="7em" />
                    <Skeleton animation="wave" width="22em" />
                  </div>
                  <CardContent>
                    <Grid container>
                      <Grid item xs={2}>
                        <CalendarTodayOutlinedIcon fontSize={"large"} />
                      </Grid>
                      <Grid item xs={4}>
                        <Typography variant="caption">Due Date</Typography>
                        <Typography variant="body2">
                          {" "}
                          <Skeleton animation="wave" width="6em" />
                        </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <InsertDriveFileOutlinedIcon fontSize={"large"} />
                      </Grid>
                      <Grid item xs={4}>
                        <Typography variant="caption">Submissions</Typography>
                        <Typography variant="body2">
                          <Skeleton animation="wave" width="2em" />
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      <Skeleton />
                      <Skeleton animation={false} />
                      <Skeleton animation="wave" width="20em" />
                      {/* <Skeleton animation={true} /> */}
                    </Typography>
                  </CardContent>
                  <Divider variant="middle" />
                  <CardContent>
                    <Grid container>
                      <Grid item xs={6}>
                        <Typography
                          variant="overline"
                          className={classes.overallProg}
                        >
                          PROGRESS
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography
                          variant="overline"
                          className={classes.overallProg}
                        >
                          ESTIMATED TIME
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="caption">
                          <Skeleton animation="wave" width="6em" height="1em" />
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="caption">
                          <HourglassEmptyTwoToneIcon fontSize={"small"} />{" "}
                          <Skeleton animation="wave" width="4em" height="1em" />
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Skeleton animation="wave" width="6em" height="1em" />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Link>
            </Box>
            {/*  1st Module */}
            {/* 2nd Module */}
            {/* <Box p={2}>
            <Link
              color="inherit"
              underline="none"
              href="/course/module/session"
            >
              <Card className={classes.root}>
                <div className={classes.cardHead2}>
                  <CardHeader
                    subheader="Module 2"
                    className={classes.cardH3}
                    action={
                      <Fab
                        size="medium"
                        // color="secondary"
                        aria-label="add"
                        className={classes.fabBtn}
                      >
                        <CheckTwoToneIcon className={classes.fabB2} />
                      </Fab>
                    }
                  />
                  <CardHeader
                    subheader="Marketing Data Integration and EDA"
                    className={classes.cardH4}
                  />
                </div>
                <CardContent>
                  <Grid container>
                    <Grid item xs={2}>
                      <CalendarTodayOutlinedIcon fontSize={"large"} />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="caption">Due Date</Typography>
                      <Typography variant="body2">6th Jul'20</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <InsertDriveFileOutlinedIcon fontSize={"large"} />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="caption">Submissions</Typography>
                      <Typography variant="body2">Nil</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Having learnt the strategic use of digital marketing
                    analytics tools, learn about integrating data &amp; solid
                    storytelling.
                  </Typography>
                </CardContent>
                <Divider variant="middle" />
                <CardContent>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography
                        variant="overline"
                        className={classes.overallProg}
                      >
                        PROGRESS
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography
                        variant="overline"
                        className={classes.overallProg}
                      >
                        ESTIMATED TIME
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="caption">100% completed</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="caption">
                        <HourglassEmptyTwoToneIcon fontSize={"small"} />0 min
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <BorderLinearProgress1
                        variant="determinate"
                        value={100}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Link>
          </Box> */
            /* 2nd Module */
            /* 3rd Module */
            /* <Box p={2}>
            <Link
              color="inherit"
              underline="none"
              href="/course/module/session"
            >
              <Card className={classes.root}>
                <div className={classes.cardHead3}>
                  <CardHeader
                    subheader="Case studt 1"
                    className={classes.cardH5}
                  />
                  <CardHeader
                    subheader="LyvenSured Case Study"
                    className={classes.cardH6}
                  />
                </div>
                <CardContent>
                  <Grid container>
                    <Grid item xs={2}>
                      <CalendarTodayOutlinedIcon fontSize={"large"} />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="caption">Due Date</Typography>
                      <Typography variant="body2">6th Jul'20</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <InsertDriveFileOutlinedIcon fontSize={"large"} />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="caption">Submissions</Typography>
                      <Typography variant="body2">1 done</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Wear shoes of a marketing analytics manager at LyvenSured
                    and propose data-driven solutions to optimise its digital
                    presence.
                  </Typography>
                </CardContent>
                <Divider variant="middle" />
                <CardContent>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography
                        variant="overline"
                        className={classes.overallProg}
                      >
                        PROGRESS
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography
                        variant="overline"
                        className={classes.overallProg}
                      >
                        ESTIMATED TIME
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="caption">55% completed</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="caption">
                        <HourglassEmptyTwoToneIcon fontSize={"small"} />
                        40 min - 50 min
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <BorderLinearProgress2
                        variant="determinate"
                        value={100}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Link>
          </Box> */
            /* 3rd Module */}
          </Box>
        </Container>
      </div>
    );
    //################################################################################################################
    //########################################### if not programs ####################################################
    //################################################################################################################
  }
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
      {renderPage}
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
export default Module;
