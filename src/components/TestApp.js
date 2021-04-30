// import React from "react";
// import PropTypes from "prop-types";
// import { withRouter } from "react-router";
// // A simple component that shows the pathname of the current location
// class TestApp extends React.Component {
//   static propTypes = {
//     location: PropTypes.object.isRequired,
//   };
//   render() {
//     const { location } = this.props;
//     const path = location.pathname;
//     // return <div>You are now at {location.pathname}</div>;
//     if (path === "/test") {
//       return <h1>Hi.......You are now at {path}</h1>;
//     } else if (path !== "/test") {
//       return <h6>Hello..........You are now at {path}</h6>;
//     }
//   }
// }
// // Create a new component that is "connected" (to borrow redux
// // terminology) to the router.
// const TestAppWithRouter = withRouter(TestApp);
// export default TestAppWithRouter;
// // export default Course;

import React from "react";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.background,
    border: 0,
    fontSize: 16,
    borderRadius: 3,
    boxShadow: theme.boxShadow,
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  btnTheme: {
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    border: 0,
    fontSize: 16,
    borderRadius: 3,
    boxShadow: theme.boxShadow,
    color: "white",
    height: 48,
    padding: "0 30px",
  },
}));

function DeepChild() {
  const classes = useStyles();

  return (
    <div>
      <button type="button" className={classes.root}>
        Theme nesting
      </button>
      <button type="button" className={classes.rootTheme}>
        Theme nesting
      </button>
    </div>
  );
}

export default function ThemeNesting() {
  return (
    <div>
      <ThemeProvider
        theme={{
          background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
          boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        }}
      >
        <DeepChild />
        <br />
        <br />
        <ThemeProvider
          theme={(outerTheme) => ({
            ...outerTheme,
            background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
            boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
          })}
        >
          <DeepChild />
        </ThemeProvider>
      </ThemeProvider>
    </div>
  );
}
