import React, { useState, useEffect } from "react";
import AppAppBar from "./modules/AppAppBar";
import Snackbar from "@material-ui/core/Snackbar";

let user_id;

export default function Perfcard() {
  const openeSnack = () => {
    seterrorSnackbar(true);
  };
  const [openerrorSnackbar, seterrorSnackbar] = React.useState(false);

  const handleClose = () => {
    seterrorSnackbar(false);
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
          // console.log(res);
          //setCourses(res.responseList);
        })
        .catch((error) => openeSnack());
    } else if (!user_id) {
      window.location.href = "/";
    }
  }, []);
  return (
    <React.Fragment>
      <AppAppBar />
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openerrorSnackbar}
        autoHideDuration={6000}
        onClose={handleClose}
      ></Snackbar>
    </React.Fragment>
  );
}

//export default Perfcard;
