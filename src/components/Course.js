import React, { useState, useEffect } from "react";
import AppAppBar from "./modules/AppAppBar";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import LinearProgress from "@material-ui/core/LinearProgress";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import Skeleton from "@material-ui/lab/Skeleton";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert, AlertTitle } from "@material-ui/lab";
import Divider from "@material-ui/core/Divider";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper1: {
    padding: theme.spacing(2),
    margin: "auto",
    marginTop: "5em",
    marginBottom: "1em",
    maxWidth: "55em",
    // minHeight: 107,
    // maxHeight: 107,
    borderTop: "7px solid rgb(246, 107, 104)",
  },
  paper2: {
    padding: theme.spacing(2),
    margin: "auto",
    marginBottom: "1em",
    maxWidth: 540,
    borderTop: "7px solid rgb(80, 151, 226)",
  },
  paper3: {
    padding: theme.spacing(2),
    margin: "auto",
    marginBottom: "1em",
    maxWidth: 540,
    borderTop: "7px solid rgb(28, 185, 199)",
  },
  paper4: {
    padding: theme.spacing(2),
    margin: "auto",
    marginBottom: "1em",
    maxWidth: 540,
    borderTop: "7px solid rgb(247, 145, 94)",
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  heading: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    marginTop: "2em",
    marginLeft: "-5em",
    marginBottom: "-3em",
    // padding: 0,
  },
  overallProg: {
    color: "#a2a2a2",
  },
  courseDetail: {
    fontSize: "1.5em",
    fontWeight: "bold",
    maxWidth: "20em",
    textOverflow: "ellipsis",
    // overflow: "hidden",
    display: "inline-block",
    position: "relative",
    top: "0.1em",
    verticalAlign: "bottom",
    whiteSpace: "nowrap",
  },
  fabB1: {
    color: "rgb(246, 107, 104)",
  },
}));
const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: "0.8em",
    borderRadius: "0.5em",
    width: "33em",
    marginLeft: "13em",
    marginTop: "-1em",
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: "0.5em",
    backgroundColor: "#22AF73",
  },
}))(LinearProgress);
let user_id;
let course_name;
function Course() {
  const classes = useStyles();
  const [courses, setCourses] = useState([]);
  const [openerrorSnackbar, seterrorSnackbar] = React.useState(false);
  const openeSnack = () => {
    seterrorSnackbar(true);
  };
  //###################################### closing backdrop , snackbars
  const handleClose = () => {
    seterrorSnackbar(false);
  };
  //###################################### closing backdrop , snackbars
  const courseClicked = (courseList) => {
    course_name = localStorage.getItem("Course_Name");
    if (course_name) {
      localStorage.removeItem("Course_Name");
    } else if (!course_name) {
      localStorage.setItem("Course_Name", courseList.course_name);
      window.location.href = "/course/" + courseList.course_id + "/module";
      // course/:courseId/module/
    }
    // props.Module(courseList);
    // localStorage.setItem("Course_Id", courseList.course_id);
    // window.location.href = "/course/module";
    // console.log(course_name);
  };
  useEffect(() => {
    user_id = localStorage.getItem("User_Id");
    // console.log(user_id);
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    };
    if (user_id) {
      fetch(`${process.env.REACT_APP_GET_COURSE_BY_USERID_API_URL}` + user_id, {
        method: "GET",
        config,
        // headers: {
        //   "Content-Type": "application/json",
        // },
      })
        .then((resp) => resp.json())
        .then((res) => {
          console.log(res);
          setCourses(res.responseList);
        })
        .catch((error) => openeSnack());
    } else if (!user_id) {
      window.location.href = "/";
    }
  }, []);
  //-------------------------------------------------------------------------------------------------------------------------------------------
  let renderPage1;
  // let renderPage2;
  if (courses != "") {
    //################################################################################################################
    //########################################### if courses #########################################################
    //################################################################################################################
    renderPage1 = (
      <div>
        <Container>
          {courses.map((courseList) => {
            return (
              /* ENROLLED COURSE 1 */
              <Paper className={classes.paper1} key={courseList.course_id}>
                <Link
                  color="inherit"
                  underline="none"
                  onClick={() => courseClicked(courseList)}
                >
                  {/* <Grid container spacing={2}> */}
                  <Grid item xs={12} sm container>
                    <Grid
                      container
                      direction="row"
                      spacing={2}
                      justify="space-around"
                      alignItems="flex-start"
                    >
                      <Grid item xs={10}>
                        <Typography
                          gutterBottom
                          variant="h5"
                          className={classes.courseDetail}
                        >
                          {courseList.course_name}
                        </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <IconButton aria-label="delete">
                          <ChevronRightIcon className={classes.fabB1} />
                        </IconButton>
                      </Grid>
                    </Grid>
                    <Grid item xs={5}>
                      <Typography variant="body2" align="left" gutterBottom>
                        MODULES:{" "}
                        <Typography
                          variant="h5"
                          className={classes.courseDetail}
                        >
                          {courseList.no_of_modules}
                        </Typography>
                      </Typography>
                    </Grid>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Grid item xs={2} />
                    <Grid item xs={4}>
                      <Typography variant="body2" align="left" gutterBottom>
                        SESSIONS:{" "}
                        <Typography
                          variant="h5"
                          className={classes.courseDetail}
                        >
                          {courseList.no_of_sessions}
                        </Typography>
                      </Typography>
                    </Grid>
                    <Grid item xs={5}>
                      <Typography variant="body2" align="left" gutterBottom>
                        ASSESSMENTS:{" "}
                        <Typography
                          variant="h5"
                          className={classes.courseDetail}
                        >
                          {courseList.no_of_assessments}
                        </Typography>
                      </Typography>
                    </Grid>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Grid item xs={2} />
                    <Grid item xs={4}>
                      <Typography variant="body2" align="left" gutterBottom>
                        WORKSHOPS:{" "}
                        <Typography
                          variant="h5"
                          className={classes.courseDetail}
                        >
                          {courseList.no_of_workshops}
                        </Typography>
                      </Typography>
                    </Grid>
                    <Grid
                      container
                      direction="row"
                      spacing={3}
                      justify="space-around"
                      alignItems="flex-start"
                    >
                      <Grid item xs={12}>
                        <Typography
                          variant="body2"
                          gutterBottom
                          className={classes.overallProg}
                        >
                          OVERALL PROGRESS:{" "}
                          <BorderLinearProgress
                            variant="determinate"
                            value={0.5}
                          />
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  {/* </Grid> */}
                </Link>
              </Paper>
            );
          })}
        </Container>
      </div>
    );
    // renderPage2 = (
    //   <div>
    //     <Container>
    //       {/* ENROLLED COURSE 1 */}
    //       <Paper className={classes.paper1}>
    //         <Grid container spacing={2}>
    //           <Grid item xs={12} sm container>
    //             <Grid item xs container direction="column" spacing={2}>
    //               <Grid item xs>
    //                 <Typography
    //                   gutterBottom
    //                   variant="h5"
    //                   className={classes.courseDetail}
    //                 >
    //                   Getting Started with Digital Marketing - Mahindra
    //                 </Typography>
    //                 <Typography
    //                   variant="body2"
    //                   gutterBottom
    //                   className={classes.overallProg}
    //                 >
    //                   OVERALL PROGRESS:
    //                   <BorderLinearProgress variant="determinate" value={0} />
    //                 </Typography>
    //               </Grid>
    //             </Grid>
    //             <Grid item>
    //               {/* <Link href="/dashboard"> */}
    //               <IconButton aria-label="delete">
    //                 <ChevronRightIcon />
    //               </IconButton>
    //               {/* </Link> */}
    //             </Grid>
    //           </Grid>
    //         </Grid>
    //       </Paper>
    //       {/* ENROLLED COURSE 1 */}
    //     </Container>
    //   </div>
    // );
    //################################################################################################################
    //########################################### if courses #########################################################
    //################################################################################################################
  } else if (courses == "") {
    //################################################################################################################
    //############################################### skeleton #######################################################
    //################################################################################################################
    renderPage1 = (
      <div>
        <Container>
          {/* ENROLLED COURSE 1 */}
          {/* <Paper className={classes.paper1}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Skeleton />
                    <Skeleton animation="wave" />
                  </Grid>
                </Grid>
                <Grid item>
                  <Link>
                    <IconButton aria-label="delete">
                      <ChevronRightIcon />
                    </IconButton>
                  </Link>
                </Grid>
                <Grid item>
                  <Link>
                    <IconButton aria-label="delete">
                      <ChevronRightIcon />
                    </IconButton>
                  </Link>
                </Grid>
                <Grid item>
                  <Link>
                    <IconButton aria-label="delete">
                      <ChevronRightIcon />
                    </IconButton>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Paper> */}
          <Paper className={classes.paper1}>
            <Link color="inherit" underline="none">
              {/* <Grid container spacing={2}> */}
              <Grid item xs={12} sm container>
                <Grid
                  container
                  direction="row"
                  spacing={2}
                  justify="space-around"
                  alignItems="flex-start"
                >
                  <Grid item xs={10}>
                    <Skeleton />
                  </Grid>
                  <Grid item xs={2}>
                    <IconButton aria-label="delete">
                      <ChevronRightIcon className={classes.fabB1} />
                    </IconButton>
                  </Grid>
                </Grid>
                <Grid item xs={5}>
                  <Skeleton animation="wave" />
                </Grid>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Grid item xs={2} />
                <Grid item xs={4}>
                  <Skeleton animation="wave" />
                </Grid>
                <Grid item xs={5}>
                  <Skeleton animation="wave" />
                </Grid>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Grid item xs={2} />
                <Grid item xs={4}>
                  <Skeleton animation="wave" />
                </Grid>
                <Grid
                  container
                  direction="row"
                  spacing={3}
                  justify="space-around"
                  alignItems="flex-start"
                >
                  <Grid item xs={12}>
                    <Skeleton animation="wave" />
                  </Grid>
                </Grid>
              </Grid>
              {/* </Grid> */}
            </Link>
          </Paper>
          {/* ENROLLED COURSE 1 */}
          {
            /* ENROLLED COURSE 2 */
            // <Paper className={classes.paper2}>
            //   <Grid container spacing={2}>
            //     <Grid item xs={12} sm container>
            //       <Grid item xs container direction="column" spacing={2}>
            //         <Grid item xs>
            //           <Typography
            //             gutterBottom
            //             variant="h5"
            //             className={classes.courseDetail}
            //           >
            //             Specialization Course for MICA - Social Media and Content
            //             Marketing- May 2020
            //           </Typography>
            //           <Typography
            //             variant="body2"
            //             gutterBottom
            //             className={classes.overallProg}
            //           >
            //             OVERALL PROGRESS:
            //             <BorderLinearProgress variant="determinate" value={86} />
            //           </Typography>
            //         </Grid>
            //       </Grid>
            //       <Grid item>
            //         <Link href="/dashboard">
            //           <IconButton aria-label="delete">
            //             <ChevronRightIcon />
            //           </IconButton>
            //         </Link>
            //       </Grid>
            //     </Grid>
            //   </Grid>
            // </Paper>;
            /* ENROLLED COURSE 2 */
            /* ENROLLED COURSE 3 */
            // <Paper className={classes.paper3}>
            //   <Grid container spacing={2}>
            //     <Grid item xs={12} sm container>
            //       <Grid item xs container direction="column" spacing={2}>
            //         <Grid item xs>
            //           <Typography
            //             gutterBottom
            //             variant="h5"
            //             className={classes.courseDetail}
            //           >
            //             Specialization Course for MICA - Branding and
            //             Communication- March 2020
            //           </Typography>
            //           <Typography
            //             variant="body2"
            //             gutterBottom
            //             className={classes.overallProg}
            //           >
            //             OVERALL PROGRESS:
            //             <BorderLinearProgress variant="determinate" value={21} />
            //           </Typography>
            //         </Grid>
            //       </Grid>
            //       <Grid item>
            //         <Link href="/dashboard">
            //           <IconButton aria-label="delete">
            //             <ChevronRightIcon />
            //           </IconButton>
            //         </Link>
            //       </Grid>
            //     </Grid>
            //   </Grid>
            // </Paper>;
            /* ENROLLED COURSE 3 */
            /* ENROLLED COURSE 4 */
            // <Paper className={classes.paper4}>
            //   <Grid container spacing={2}>
            //     <Grid item xs={12} sm container>
            //       <Grid item xs container direction="column" spacing={2}>
            //         <Grid item xs>
            //           <Typography
            //             gutterBottom
            //             variant="h5"
            //             className={classes.courseDetail}
            //           >
            //             PG Certification in Digital Marketing and Communication -
            //             Sep 2019
            //           </Typography>
            //           <Typography
            //             variant="body2"
            //             gutterBottom
            //             className={classes.overallProg}
            //           >
            //             OVERALL PROGRESS:
            //             <BorderLinearProgress variant="determinate" value={39} />
            //           </Typography>
            //         </Grid>
            //       </Grid>
            //       <Grid item>
            //         <Link href="/dashboard">
            //           <IconButton aria-label="delete">
            //             <ChevronRightIcon />
            //           </IconButton>
            //         </Link>
            //       </Grid>
            //     </Grid>
            //   </Grid>
            // </Paper>;
            /* ENROLLED COURSE 4 */
          }
        </Container>
      </div>
    );
    // renderPage2 = (
    //   <div>
    //     <Container>
    //       {/* ENROLLED COURSE 1 */}
    //       <Paper className={classes.paper1}>
    //         <Grid container spacing={2}>
    //           <Grid item xs={12} sm container>
    //             <Grid item xs container direction="column" spacing={2}>
    //               <Grid item xs>
    //                 <Skeleton />
    //                 <Skeleton animation="wave" />
    //               </Grid>
    //             </Grid>
    //             <Grid item>
    //               {/* <Link href="/dashboard"> */}
    //               <IconButton aria-label="delete">
    //                 <ChevronRightIcon />
    //               </IconButton>
    //               {/* </Link> */}
    //             </Grid>
    //           </Grid>
    //         </Grid>
    //       </Paper>
    //       {/* ENROLLED COURSE 1 */}
    //     </Container>
    //   </div>
    // );
  }
  //################################################################################################################
  //############################################### skeleton #######################################################
  //################################################################################################################
  return (
    <React.Fragment>
      <CssBaseline />
      <AppAppBar />
      <Container maxWidth="sm">
        <h2 className={classes.heading}>Enrolled Programs</h2>
      </Container>
      {renderPage1}
      {/* <Container maxWidth="sm">
        <h2 className={classes.heading}>Available Programs</h2>
      </Container>
      {renderPage2} */}
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
export default Course;
