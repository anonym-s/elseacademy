import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppAppBar from "./modules/AppAppBar";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "50%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(12),
    fontWeight: theme.typography.fontWeightRegular,
  },
  calendarPaper: {
    height: "30.5em",
  },
  calendarStyle: {
    height: "35em",
  },
}));

function Calendar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppAppBar />
      <Container>
        <Box justifyContent="center" m={5} p={8}>
          <Grid container wrap="nowrap">
            <Grid item xs={2} />
            <Grid item xs={12}>
              <Paper className={classes.calendarPaper}>
                <FullCalendar
                  plugins={[dayGridPlugin]}
                  initialView="dayGridMonth"
                  className={classes.calendarStyle}
                />
              </Paper>
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={5}>
              <Paper className={classes.calendarPaper}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography variant="button" display="block" gutterBottom>
                      Your Schedule Today
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="caption" display="block" gutterBottom>
                      How to Make or Break Brands in the Digital Era | Industry
                      Expert Session
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography className={classes.heading}>
                      Overdue Submissions
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>Nothing is Here</Typography>

                    <Typography variant="caption" display="block" gutterBottom>
                      Nothing is Here
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Paper>
            </Grid>
            <Grid item xs={3} />
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Calendar;
