import React from "react";
//import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import AppAppBar from "./modules/AppAppBar";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  //   image: {
  //     width: 200,
  //     height: 200,
  //   },
  //   img: {
  //     margin: "auto",
  //     display: "block",
  //     maxWidth: "100%",
  //     maxHeight: "100%",
  //   },
  root1: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    width: "60em",
  },
}));

function Ronline() {
  const classes = useStyles();
  //const bull = <span className={classes.bullet}>•</span>;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppAppBar />
      <Container>
        <Box justifyContent="center" m={3} p={6}>
          <Paper component="form" className={classes.searchPaper}>
            <InputBase
              className={classes.input}
              placeholder="Enter Name or City to Search"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </Box>
        <Box justifyContent="center" m={1} p={1}>
          <Grid container wrap="nowrap">
            <Grid item xs={2} />
            <Grid item xs={12}>
              <div className={classes.root}>
                <Paper className={classes.paper}>
                  <Grid container spacing={2}>
                    <Grid item>
                      <ButtonBase className={classes.image}>
                        <Avatar alt="Remy Sharp" className={classes.root1}>
                          J
                        </Avatar>
                      </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={1}>
                        <Grid item xs>
                          <Typography gutterBottom variant="h5">
                            John Doe
                          </Typography>
                          <Typography variant="body1">Company Name</Typography>
                          <Typography variant="caption" color="textSecondary">
                            Location
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </div>
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={12}>
              <div className={classes.root}>
                <Paper className={classes.paper}>
                  <Grid container spacing={2}>
                    <Grid item>
                      <ButtonBase className={classes.image}>
                        <Avatar className={classes.root1}>J</Avatar>
                      </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={1}>
                        <Grid item xs>
                          <Typography gutterBottom variant="h5">
                            John Doe
                          </Typography>
                          <Typography variant="body1">Company Name</Typography>
                          <Typography variant="caption" color="textSecondary">
                            Location
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </div>
            </Grid>
            <Grid item xs={2} />
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
export default Ronline;
