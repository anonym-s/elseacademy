import React, { useState } from "react";
// import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Alert, AlertTitle } from "@material-ui/lab";
// import IconButton from "@material-ui/core/IconButton";
// import Collapse from "@material-ui/core/Collapse";
// import CloseIcon from "@material-ui/icons/Close";
import { withCookies } from "react-cookie";
// import Backdrop from "@material-ui/core/Backdrop";
// import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";
// import MuiAlert from "@material-ui/lab/Alert";
// import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
// import { useTheme } from "@material-ui/core/styles";
//################################################### copyright function for copyright screen
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://myelsaacademy.web.app/"
        target="_blank"
      >
        MyELSA Academy
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
//################################################### copyright function for copyright screen

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
  },
  logo: {
    height: "10em",
    width: "18em",
  },
}));
function SignIn() {
  const classes = useStyles();
  // const [response, setResponse] = useState("");
  //-------------------------------------------------------------------------------------------------------------------------------------------
  //################################################### sign in
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [opensuccessSnackbar, setsuccessSnackbar] = React.useState(false);
  const [openfailureSnackbar, setfailureSnackbar] = React.useState(false);
  const [openwarningSnackbar, setwarningSnackbar] = React.useState(false);
  const [openerrorSnackbar, seterrorSnackbar] = React.useState(false);
  //################################################### sign in
  //-------------------------------------------------------------------------------------------------------------------------------------------
  //################################################### update passowrd
  // const [openBackdrop, setBackdrop] = React.useState(false);
  const [openUpdatepass, setUpdatepass] = React.useState(false);
  const [password1, setPassword1] = useState("");
  const [openupsuccessSnackbar, setupsuccessSnackbar] = React.useState(false);
  const [openupwarningSnackbar, setupwarningSnackbar] = React.useState(false);
  const [openupwSnackbar, setupwSnackbar] = React.useState(false);
  //################################################### update passowrd
  //-------------------------------------------------------------------------------------------------------------------------------------------
  //################################################### catch error
  // const [openerrorDialog, seterrorDialog] = React.useState(false);
  // const theme = useTheme();
  // const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  //################################################### catch error
  //------------------------------------------------------------
  //###################################### closing backdrop , snackbars
  const handleClose = () => {
    setsuccessSnackbar(false);
    setfailureSnackbar(false);
    setwarningSnackbar(false);
    seterrorSnackbar(false);
    setupsuccessSnackbar(false);
    setupwarningSnackbar(false);
    setupwSnackbar(false);
  };
  //###################################### closing backdrop , snackbars
  //------------------------------------------------------------
  //-------------------------------------------------------------------------------------------------------------------------------------------
  //################################################### sign in screen snackbars
  const opensSnack = () => {
    setsuccessSnackbar(true);
  };
  const openfSnack = () => {
    setfailureSnackbar(true);
  };
  const openwSnack = () => {
    setwarningSnackbar(true);
  };
  //################################################### sign in screen snackbars
  const openeSnack = () => {
    seterrorSnackbar(true);
  };
  //################################################### update passowrd screen snackbar
  const openupsSnack = () => {
    setupsuccessSnackbar(true);
  };
  const openupwSnack = () => {
    setupwarningSnackbar(true);
  };
  const openupwSnack1 = () => {
    setupwSnackbar(true);
  };
  //################################################### update passowrd screen snackbar
  // const openeDialog = () => {
  //   seterrorDialog(true);
  // };
  //-------------------------------------------------------------------------------------------------------------------------------------------
  //################################################### toggling update passowrd screen
  const toggleView = () => {
    setUpdatepass(!openUpdatepass);
    //----------------toggling backdrop
    // setBackdrop(!openBackdrop);
    // handleToggle();
    //----------------toggling backdrop
    // console.log(openUpdatepass);
  };
  //####################################### toggling backdrop
  // const handleToggle = () => {
  //   setBackdrop(true);
  // };
  //###################################### toggling backdrop

  //################################################### toggling update passowrd screen
  //-------------------------------------------------------------------------------------------------------------------------------------------
  //################################################### sign in function starts
  const signin = () => {
    // console.log(username, password);
    //###################################### if username or passowrd is empty
    if (!username || !password) {
      openwSnack();
      //###################################### if username or passowrd is empty
    } else {
      fetch(
        `${process.env.REACT_APP_SIGNIN_API_URL}` + username + "/" + password,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          // console.log(res.responseList.academy_user_id);
          // console.log(res.attributes.message);
          //###################################### if username or passowrd is empty
          if (res.attributes.message === `User Authentication Successful`) {
            localStorage.setItem("User_Id", res.responseList.academy_user_id);
            localStorage.setItem("User_Name", res.responseList.first_name);
            localStorage.setItem(
              "User_Full_Name",
              res.responseList.first_name + " " + res.responseList.last_name
            );
            // saveCookie(res);
            opensSnack();
            window.location.href = "/courses";
          } else if (
            res.attributes.message === `Incorrect Username or Password`
          ) {
            openfSnack();
            // window.location.reload(true);
          }
        })
        .catch((error) => {
          // console.log(error);
          openeSnack();
          // openeDialog();
        });
    }
  };
  // const saveCookie = async (res) => {
  //   console.log(res.responseList.academy_user_id);
  //   await AsyncStorage.setItem("User_Id", res.responseList.academy_user_id);
  // };
  //################################################### sign in function ends
  //-------------------------------------------------------------------------------------------------------------------------------------------
  //################################################### update password function starts
  const updatePassword = () => {
    // console.log(username, password, password1);
    //###################################### if passwords are nt same during updation
    if (password !== password1) {
      // console.log(username, password, password1);
      openupwSnack();
    } //###################################### if passwords are nt same during updation
    else if (!username || !password || !password1) {
      // console.log(username, password, password1);
      openupwSnack1();
    } else {
      fetch(
        `${process.env.REACT_APP_UPDATE_PASSWORD_API_URL}` +
          username +
          "/" +
          password,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((res) => {
          // console.log(res);
          // console.log(res.responseList.academy_user_id);
          // console.log(res.attributes.message);
          if (res.responseList === `Password updated successfully`) {
            // localStorage.setItem("User_Id", res.responseList.academy_user_id);
            // handleToggle();
            openupsSnack();
            // window.location.href = "/";
            window.location.reload(true);
          }
          // else if (
          //   res.attributes.message === `Incorrect Username or Password`
          // ) {
          //   handleToggle();
          //   window.location.href = "/";
          // }
        })
        .catch((error) => openeSnack());
    }
  };
  //################################################### update password function ends
  //-------------------------------------------------------------------------------------------------------------------------------------------
  let renderPage;
  if (openUpdatepass === false) {
    //################################################################################################################
    //################################################ sign in #######################################################
    //################################################################################################################
    renderPage = (
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
        <img
          className={classes.logo}
          alt="complex"
          src="/static/image/logo1.png"
        />
        <Typography component="h2" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onInput={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onInput={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            onClick={signin}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            value="submit"
          >
            Sign In
          </Button>
          {/* <Dialog
            fullScreen={fullScreen}
            open={openerrorDialog}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title">
              {"Proceed to not secure link?"}
            </DialogTitle>
            <DialogContent></DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose} color="primary">
                Disagree
              </Button>
              <Button onClick={handleClose} color="primary" autoFocus>
                Agree
              </Button>
            </DialogActions>
          </Dialog> */}
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "left" }}
            open={opensuccessSnackbar}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity="success">
              <AlertTitle>Success</AlertTitle>
              <strong> Signed In !</strong>
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
              <strong> Incorrect Username or Password !!!</strong>
            </Alert>
          </Snackbar>
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "left" }}
            open={openwarningSnackbar}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity="info">
              <AlertTitle>Information</AlertTitle>
              <strong>Please fill username and password !!!</strong>
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
              <strong> Try Again !!!</strong>
            </Alert>
          </Snackbar>
          {/* <Backdrop
            className={classes.backdrop}
            open={openBackdrop}
            onClick={handleClose}
          >
            <CircularProgress color="inherit" />
          </Backdrop> */}
          <Grid container>
            <Grid item xs>
              <Link
                underline="none"
                component="button"
                variant="body2"
                onClick={toggleView}
              >
                {openUpdatepass ? "Back to SigIn" : "Forgot password?"}
              </Link>
            </Grid>
            {/* <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid> */}
          </Grid>
        </form>
      </div>
    );
    //################################################################################################################
    //################################################ sign in #######################################################
    //################################################################################################################
  } else if (openUpdatepass === true) {
    //################################################################################################################
    //########################################### update password ###################################################
    //################################################################################################################
    renderPage = (
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          myELSA Academy
        </Typography> */}
        <img
          className={classes.logo}
          alt="complex"
          src="/static/image/logo1.png"
        />
        <Typography component="h2" variant="h5">
          Update Password
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onInput={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Enter Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onInput={(e) => setPassword(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password1"
            label="Enter Password Again"
            type="password"
            id="password1"
            autoComplete="current-password"
            value={password1}
            onInput={(e) => setPassword1(e.target.value)}
          />
          <Button
            onClick={updatePassword}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            value="submit"
          >
            Update Password
          </Button>
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "left" }}
            open={openupsuccessSnackbar}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity="success">
              <AlertTitle>Success</AlertTitle>
              <strong> Password Updated !</strong>
            </Alert>
          </Snackbar>
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "left" }}
            open={openupwarningSnackbar}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity="warning">
              <AlertTitle>Warning</AlertTitle>
              <strong> Password doesn't match !!!</strong>
            </Alert>
          </Snackbar>
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "left" }}
            open={openupwSnackbar}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity="info">
              <AlertTitle>Information</AlertTitle>
              <strong>Please fill username and password !!!</strong>
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
              <strong> Try Again !!!</strong>
            </Alert>
          </Snackbar>
          <Grid container>
            <Grid item xs>
              <Link
                underline="none"
                component="button"
                variant="body2"
                onClick={toggleView}
              >
                {openUpdatepass ? "Back to SigIn" : "Forgot password?"}
              </Link>
              {/* <Link href="#" variant="body2" onClick={toggleView}>
            Update password
          </Link> */}
            </Grid>
            {/* <Grid item>
          <Link href="#" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid> */}
          </Grid>
        </form>
      </div>
    );
  }
  //################################################################################################################
  //########################################### update password ###################################################
  //################################################################################################################
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      {renderPage}
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
export default withCookies(SignIn);
