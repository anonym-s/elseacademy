import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useLocation } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
//################################################################################################################
//############################################# custome style ####################################################
//################################################################################################################
import AccountCircle from "@material-ui/icons/AccountCircle";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import SettingsIcon from "@material-ui/icons/Settings";
import HelpIcon from "@material-ui/icons/Help";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import AssessmentIcon from "@material-ui/icons/Assessment";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Divider from "@material-ui/core/Divider";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import TodayIcon from "@material-ui/icons/Today";
import { ListItemText } from "@material-ui/core";
// import course_Name from "../Module";
// console.log({ course_Name });
//################################################################################################################
//############################################# custome style ####################################################
//################################################################################################################
//################################################################################################################
//############################################# custome style ####################################################
//################################################################################################################
const useStyles = makeStyles((theme) => ({
  appb: {
    maxHeight: "9em",
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
  },
  logo: {
    height: "10em",
    width: "10em",
  },
  myprofile: {
    marginBottom: "2em",
  },
  toolb: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    // marginTop: 28,
    // padding: 0,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
    marginRight: theme.spacing(6),
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  menucard: {
    padding: 100,
  },
  courseName: {
    // marginTop: "1em",
    fontSize: 12,
    color: "#fff",
    fontWeight: 200,
    maxWidth: 250,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "pre-wrap",
    marginLeft: "-11em",
    marginBottom: "1em",
  },
  presentTab: {
    marginLeft: "10em",
    marginBottom: "2em",
  },
  presentTabChild: {
    cursor: "pointer",
    // border: "1px solid lightgrey",
    // borderRadius: 30,
    // verticalAlign: "top",
    // textAlign: "center",
    // height: 0,
    // backgroundColor: "lightgrey",
  },
}));
//################################################################################################################
//############################################# custome style ####################################################
//################################################################################################################
let course_name;
let user_name;
export default function AppAppBar() {
  let location = useLocation();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const mobileMenuId = "primary-search-account-menu-mobile";
  course_name = localStorage.getItem("Course_Name");
  user_name = localStorage.getItem("User_Name");
  // console.log(course_name, user_name);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const logOut = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  const menuId = "primary-search-account-menu";
  let renderMenu;
  let renderNav;
  let path = location.pathname;
  let check_routeparam = /[0-9]+/g;
  let route_param = path.match(check_routeparam);
  console.log(check_routeparam, route_param);
  const moduleClicked = () => {
    if (route_param.length == 1) {
      window.location.href = "/course/" + route_param + "/module";
    } else if (route_param.length >= 1) {
      window.location.href = "/course/" + route_param[0] + "/module";
    }
  };
  const discussionClicked = () => {
    if (route_param.length == 1) {
      window.location.href = "/course/" + route_param + "/discussion";
    } else if (route_param.length >= 1) {
      window.location.href = "/course/" + route_param[0] + "/discussion";
    }
  };
  const calendarClicked = () => {
    if (route_param.length == 1) {
      window.location.href = "/course/" + route_param + "/calendar";
    } else if (route_param.length >= 1) {
      window.location.href = "/course/" + route_param[0] + "/calendar";
    }
  };
  const gradeClicked = () => {
    if (!route_param) {
      window.location.href = "/course/" + 1 + "/grades";
    } else if (route_param.length == 1) {
      window.location.href = "/course/" + route_param + "/grades";
    } else if (route_param.length >= 1) {
      window.location.href = "/course/" + route_param[0] + "/grades";
    }
  };
  const profileClicked = () => {
    if (!route_param) {
      window.location.href = "/course/" + 1 + "/profile";
    } else if (route_param.length == 1) {
      window.location.href = "/course/" + route_param + "/profile";
    } else if (route_param.length >= 1) {
      window.location.href = "/course/" + route_param[0] + "/profile";
    }
  };
  const dashboardClicked = () => {
    if (route_param.length == 1) {
      window.location.href = "/course/" + route_param + "/dashboard";
    } else if (route_param.length >= 1) {
      window.location.href = "/course/" + route_param[0] + "/dashboard";
    }
  };
  if (path === "/courses") {
    //################################################################################################################
    //############################################# Course appbar ####################################################
    //################################################################################################################
    renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={handleMenuClose}
        className={classes.menucard}
      >
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <Link color="inherit" onClick={profileClicked} underline="none">
              <AccountBoxIcon fontSize="small" />
              My Profile
            </Link>
          </ListItemIcon>
        </MenuItem>
        <Divider />
        {/* <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <TurnedInIcon fontSize="small" />
            Followed Questions
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <SwapHorizIcon fontSize="small" />
            Switch Programs
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
            Account Settings
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <HelpIcon fontSize="small" />
            Help
          </ListItemIcon>
        </MenuItem>
        <Divider /> */}
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <Link color="inherit" underline="none" onClick={logOut}>
              <PowerSettingsNewIcon fontSize="small" />
              Logout
            </Link>
          </ListItemIcon>
        </MenuItem>
      </Menu>
    );
    renderNav = (
      <AppBar position="static" className={classes.appb}>
        <Toolbar className={classes.toolb}>
          {/* <Typography className={classes.title} variant="h5" noWrap>
            myELSA Academy
          </Typography> */}
          <img
            className={classes.logo}
            alt="complex"
            src="/static/image/logo.png"
          />
          <div className={classes.presentTab}>
            {/* <Box display="flex" justifyContent="center" mt={3} p={0}>
              <Box p={2} ml={5} className={classes.presentTabChild}>
                <Link color="inherit" href="/courses">
                  COURSE
                </Link>
              </Box>
              <Box p={2} className={classes.presentTabChild}>
                <Link color="inherit" onClick={dashboardClicked}>
                  HOME
                </Link>
              </Box>
              <Box p={2} className={classes.presentTabChild}>
                <Link color="inherit" onClick={moduleClicked}>
                  PROGRAM
                </Link>
              </Box>
              <Box p={2} className={classes.presentTabChild}>
                <Link color="inherit" onClick={discussionClicked}>
                  DISCUSSION
                </Link>
              </Box>
            </Box> */}
          </div>
          <div className={classes.grow} />
          <div className={classes.myprofile}>
            {/* <Tooltip title="Scores">
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
                fontSize="xx-large"
              >
                <Badge badgeContent={17} color="secondary">
                  <AssessmentIcon />
                </Badge>
              </IconButton>
            </Tooltip> */}
            <Link
              color="inherit"
              underline="none"
              // href="/course/module/session"
              onClick={() => gradeClicked()}
            >
              <Tooltip title="Scores">
                <IconButton
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <AssessmentIcon fontSize="medium" />
                </IconButton>
              </Tooltip>
            </Link>
            <Tooltip title="My Profile">
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                fontSize="xx-large"
              >
                <AccountCircle />
                <ListItemText primary={user_name} />
              </IconButton>
            </Tooltip>
          </div>
          {/* <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div> */}
        </Toolbar>
      </AppBar>
    );
    //################################################################################################################
    //############################################# Course appbar ####################################################
    //################################################################################################################
  } else if (path === "/course/" + route_param + "/dashboard") {
    //################################################################################################################
    //########################################### dashboard appbar ###################################################
    //################################################################################################################
    renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={handleMenuClose}
        className={classes.menucard}
      >
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <Link color="inherit" onClick={profileClicked} underline="none">
              <AccountBoxIcon fontSize="small" />
              My Profile
            </Link>
          </ListItemIcon>
        </MenuItem>
        <Divider />
        {/* <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <TurnedInIcon fontSize="small" />
            Followed Questions
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <SwapHorizIcon fontSize="small" />
            Switch Programs
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
            Account Settings
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <GroupAddIcon fontSize="small" />
            Refer & Earn
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <HelpIcon fontSize="small" />
            Help
          </ListItemIcon>
        </MenuItem>
        <Divider /> */}
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <Link color="inherit" underline="none" onClick={logOut}>
              <PowerSettingsNewIcon fontSize="small" />
              Logout
            </Link>
          </ListItemIcon>
        </MenuItem>
      </Menu>
    );
    renderNav = (
      <AppBar position="static" className={classes.appb}>
        <Toolbar className={classes.toolb}>
          <img
            className={classes.logo}
            alt="complex"
            src="/static/image/logo.png"
          />
          <div className={classes.presentTab}>
            <Box display="flex" justifyContent="center" mt={3} p={0}>
              <Box p={2} ml={5} className={classes.presentTabChild}>
                <Link color="inherit" href="/courses">
                  COURSE
                </Link>
              </Box>
              <Box p={2} className={classes.presentTabChild}>
                <Link color="inherit" onClick={dashboardClicked}>
                  HOME
                </Link>
              </Box>
              <Box p={2} className={classes.presentTabChild}>
                <Link color="inherit" onClick={moduleClicked}>
                  PROGRAM
                </Link>
              </Box>
              <Box p={2} className={classes.presentTabChild}>
                <Link color="inherit" onClick={discussionClicked}>
                  DISCUSSION
                </Link>
              </Box>
            </Box>
          </div>
          <div className={classes.grow} />
          <div className={classes.myprofile}>
            {/* <div className={classes.myprofile}> */}
            <Link
              color="inherit"
              underline="none"
              // href="/course/module/session"
              onClick={() => calendarClicked()}
            >
              <Tooltip title="Calendar">
                <IconButton
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <TodayIcon fontSize="medium" />
                </IconButton>
              </Tooltip>
            </Link>
            <Link
              color="inherit"
              underline="none"
              // href="/course/module/session"
              onClick={() => gradeClicked()}
            >
              <Tooltip title="Scores">
                <IconButton
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <AssessmentIcon fontSize="medium" />
                </IconButton>
              </Tooltip>
            </Link>
            {/* <Tooltip title="Scores">
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={1} color="secondary">
                  <NotificationsIcon fontSize="medium" />
                </Badge>
              </IconButton>
            </Tooltip> */}
            <Tooltip title="My Profile">
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                fontSize="xx-large"
              >
                <AccountCircle />
                <ListItemText primary={user_name} />
              </IconButton>
            </Tooltip>
            {/* </div> */}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    );
    //################################################################################################################
    //########################################### dashboard appbar ###################################################
    //################################################################################################################
  } else if (
    path ===
    "/course/" + route_param + "/dashboard/student-directory"
  ) {
    //################################################################################################################
    //########################################### dashboard appbar ###################################################
    //################################################################################################################
    renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={handleMenuClose}
        className={classes.menucard}
      >
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <Link color="inherit" onClick={profileClicked} underline="none">
              <AccountBoxIcon fontSize="small" />
              My Profile
            </Link>
          </ListItemIcon>
        </MenuItem>
        <Divider />
        {/* <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <TurnedInIcon fontSize="small" />
            Followed Questions
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <SwapHorizIcon fontSize="small" />
            Switch Programs
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
            Account Settings
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <GroupAddIcon fontSize="small" />
            Refer & Earn
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <HelpIcon fontSize="small" />
            Help
          </ListItemIcon>
        </MenuItem>
        <Divider /> */}
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <Link color="inherit" underline="none" onClick={logOut}>
              <PowerSettingsNewIcon fontSize="small" />
              Logout
            </Link>
          </ListItemIcon>
        </MenuItem>
      </Menu>
    );
    renderNav = (
      <AppBar position="static" className={classes.appb}>
        <Toolbar className={classes.toolb}>
          <img
            className={classes.logo}
            alt="complex"
            src="/static/image/logo.png"
          />
          <div className={classes.presentTab}>
            <Box display="flex" justifyContent="center" mt={3} p={0}>
              <Box p={2} ml={5} className={classes.presentTabChild}>
                <Link color="inherit" href="/courses">
                  COURSE
                </Link>
              </Box>
              <Box p={2} className={classes.presentTabChild}>
                <Link color="inherit" onClick={dashboardClicked}>
                  HOME
                </Link>
              </Box>
              <Box p={2} className={classes.presentTabChild}>
                <Link color="inherit" onClick={moduleClicked}>
                  PROGRAM
                </Link>
              </Box>
              <Box p={2} className={classes.presentTabChild}>
                <Link color="inherit" onClick={discussionClicked}>
                  DISCUSSION
                </Link>
              </Box>
            </Box>
          </div>
          <div className={classes.grow} />
          <div className={classes.myprofile}>
            {/* <div className={classes.myprofile}> */}
            <Link
              color="inherit"
              underline="none"
              // href="/course/module/session"
              onClick={() => calendarClicked()}
            >
              <Tooltip title="Calendar">
                <IconButton
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <TodayIcon fontSize="medium" />
                </IconButton>
              </Tooltip>
            </Link>
            <Link
              color="inherit"
              underline="none"
              // href="/course/module/session"
              onClick={() => gradeClicked()}
            >
              <Tooltip title="Scores">
                <IconButton
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <AssessmentIcon fontSize="medium" />
                </IconButton>
              </Tooltip>
            </Link>
            {/* <Tooltip title="Scores">
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={1} color="secondary">
                  <NotificationsIcon fontSize="medium" />
                </Badge>
              </IconButton>
            </Tooltip> */}
            <Tooltip title="My Profile">
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                fontSize="xx-large"
              >
                <AccountCircle />
                <ListItemText primary={user_name} />
              </IconButton>
            </Tooltip>
            {/* </div> */}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    );
    //################################################################################################################
    //########################################### dashboard appbar ###################################################
    //################################################################################################################
  } else if (path === "/course/" + route_param + "/profile") {
    //################################################################################################################
    //############################################ profile appbar #####################################################
    //################################################################################################################
    renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={handleMenuClose}
        className={classes.menucard}
      >
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <Link color="inherit" onClick={profileClicked} underline="none">
              <AccountBoxIcon fontSize="small" />
              My Profile
            </Link>
          </ListItemIcon>
        </MenuItem>
        <Divider />
        {/* <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <TurnedInIcon fontSize="small" />
            Followed Questions
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <SwapHorizIcon fontSize="small" />
            Switch Programs
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
            Account Settings
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <GroupAddIcon fontSize="small" />
            Refer & Earn
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <HelpIcon fontSize="small" />
            Help
          </ListItemIcon>
        </MenuItem>
        <Divider /> */}
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <Link color="inherit" underline="none" href="/">
              <PowerSettingsNewIcon fontSize="small" />
              Logout
            </Link>
          </ListItemIcon>
        </MenuItem>
      </Menu>
    );
    renderNav = (
      <AppBar position="static" className={classes.appb}>
        <Toolbar className={classes.toolb}>
          <img
            className={classes.logo}
            alt="complex"
            src="/static/image/logo.png"
          />
          <div className={classes.presentTab}>
            <Box display="flex" justifyContent="center" mt={3} p={0}>
              <Box p={2} ml={5} className={classes.presentTabChild}>
                <Link color="inherit" href="/courses">
                  COURSE
                </Link>
              </Box>
              <Box p={2} className={classes.presentTabChild}>
                <Link color="inherit" onClick={dashboardClicked}>
                  HOME
                </Link>
              </Box>
              <Box p={2} className={classes.presentTabChild}>
                <Link color="inherit" onClick={moduleClicked}>
                  PROGRAM
                </Link>
              </Box>
              <Box p={2} className={classes.presentTabChild}>
                <Link color="inherit" onClick={discussionClicked}>
                  DISCUSSION
                </Link>
              </Box>
            </Box>
          </div>
          <div className={classes.grow} />
          <div className={classes.myprofile}>
            {/* <div className={classes.myprofile}> */}
            <Link
              color="inherit"
              underline="none"
              // href="/course/module/session"
              onClick={() => calendarClicked()}
            >
              <Tooltip title="Calendar">
                <IconButton
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <TodayIcon fontSize="medium" />
                </IconButton>
              </Tooltip>
            </Link>
            <Link
              color="inherit"
              underline="none"
              // href="/course/module/session"
              onClick={() => gradeClicked()}
            >
              <Tooltip title="Scores">
                <IconButton
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <AssessmentIcon fontSize="medium" />
                </IconButton>
              </Tooltip>
            </Link>
            {/* <Tooltip title="Scores">
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={1} color="secondary">
                  <NotificationsIcon fontSize="medium" />
                </Badge>
              </IconButton>
            </Tooltip> */}
            <Tooltip title="My Profile">
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                fontSize="xx-large"
              >
                <AccountCircle />
                <ListItemText primary={user_name} />
              </IconButton>
            </Tooltip>
            {/* </div> */}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    );
    //################################################################################################################
    //############################################ profile appbar #####################################################
    //################################################################################################################
  } else if (path === "/course/" + route_param + "/module") {
    //################################################################################################################
    //############################################ module appbar #####################################################
    //################################################################################################################
    renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={handleMenuClose}
        className={classes.menucard}
      >
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <Link color="inherit" onClick={profileClicked} underline="none">
              <AccountBoxIcon fontSize="small" />
              My Profile
            </Link>
          </ListItemIcon>
        </MenuItem>
        {/* <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <TurnedInIcon fontSize="small" />
            Followed Questions
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <SwapHorizIcon fontSize="small" />
            Switch Programs
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
            Account Settings
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <GroupAddIcon fontSize="small" />
            Refer & Earn
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <HelpIcon fontSize="small" />
            Help
          </ListItemIcon>
        </MenuItem> */}
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <Link color="inherit" underline="none" onClick={logOut}>
              <PowerSettingsNewIcon fontSize="small" />
              Logout
            </Link>
          </ListItemIcon>
        </MenuItem>
      </Menu>
    );
    renderNav = (
      <AppBar position="static" className={classes.appb}>
        <Toolbar className={classes.toolb}>
          {/* <Typography className={classes.title} variant="h5" noWrap> */}
          <img
            className={classes.logo}
            alt="complex"
            src="/static/image/logo.png"
          />
          {/* <Typography variant="body2" className={classes.courseName}>
            {course_name}
          </Typography> */}
          {/* </Typography> */}
          <div className={classes.presentTab}>
            <Box display="flex" justifyContent="center" mt={3} p={0}>
              <Box p={2} ml={5} className={classes.presentTabChild}>
                <Link color="inherit" href="/courses">
                  COURSE
                </Link>
              </Box>
              <Box p={2} className={classes.presentTabChild}>
                <Link color="inherit" onClick={dashboardClicked}>
                  HOME
                </Link>
              </Box>
              <Box p={2} className={classes.presentTabChild}>
                <Link color="inherit" onClick={moduleClicked}>
                  PROGRAM
                </Link>
              </Box>
              <Box p={2} className={classes.presentTabChild}>
                <Link color="inherit" onClick={discussionClicked}>
                  DISCUSSION
                </Link>
              </Box>
            </Box>
          </div>
          <div className={classes.grow} />
          <div className={classes.myprofile}>
            {/* <div className={classes.myprofile}> */}
            <Link
              color="inherit"
              underline="none"
              // href="/course/module/session"
              onClick={() => calendarClicked()}
            >
              <Tooltip title="Calendar">
                <IconButton
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <TodayIcon fontSize="medium" />
                </IconButton>
              </Tooltip>
            </Link>
            <Link
              color="inherit"
              underline="none"
              // href="/course/module/session"
              onClick={() => gradeClicked()}
            >
              <Tooltip title="Scores">
                <IconButton
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <AssessmentIcon fontSize="medium" />
                </IconButton>
              </Tooltip>
            </Link>
            {/* <Tooltip title="Scores">
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={1} color="secondary">
                  <NotificationsIcon fontSize="medium" />
                </Badge>
              </IconButton>
            </Tooltip> */}
            <Tooltip title="My Profile">
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                fontSize="xx-large"
              >
                <AccountCircle />
                <ListItemText primary={user_name} />
              </IconButton>
            </Tooltip>
            {/* </div> */}
          </div>
          {/* <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div> */}
        </Toolbar>
      </AppBar>
    );
    //################################################################################################################
    //############################################ module appbar #####################################################
    //################################################################################################################
  } else if (path === "/course/" + route_param + "/grades") {
    //################################################################################################################
    //############################################ module appbar #####################################################
    //################################################################################################################
    renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={handleMenuClose}
        className={classes.menucard}
      >
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <Link color="inherit" onClick={profileClicked} underline="none">
              <AccountBoxIcon fontSize="small" />
              My Profile
            </Link>
          </ListItemIcon>
        </MenuItem>
        {/* <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <TurnedInIcon fontSize="small" />
            Followed Questions
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <SwapHorizIcon fontSize="small" />
            Switch Programs
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
            Account Settings
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <GroupAddIcon fontSize="small" />
            Refer & Earn
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <HelpIcon fontSize="small" />
            Help
          </ListItemIcon>
        </MenuItem> */}
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <Link color="inherit" underline="none" onClick={logOut}>
              <PowerSettingsNewIcon fontSize="small" />
              Logout
            </Link>
          </ListItemIcon>
        </MenuItem>
      </Menu>
    );
    renderNav = (
      <AppBar position="static" className={classes.appb}>
        <Toolbar className={classes.toolb}>
          {/* <Typography className={classes.title} variant="h5" noWrap> */}
          <img
            className={classes.logo}
            alt="complex"
            src="/static/image/logo.png"
          />
          {/* <Typography variant="body2" className={classes.courseName}>
            {course_name}
          </Typography> */}
          {/* </Typography> */}
          <div className={classes.presentTab}>
            <Box display="flex" justifyContent="center" mt={3} p={0}>
              <Box p={2} ml={5} className={classes.presentTabChild}>
                <Link color="inherit" href="/courses">
                  COURSE
                </Link>
              </Box>
              <Box p={2} className={classes.presentTabChild}>
                <Link color="inherit" onClick={dashboardClicked}>
                  HOME
                </Link>
              </Box>
              <Box p={2} className={classes.presentTabChild}>
                <Link color="inherit" onClick={moduleClicked}>
                  PROGRAM
                </Link>
              </Box>
              <Box p={2} className={classes.presentTabChild}>
                <Link color="inherit" onClick={discussionClicked}>
                  DISCUSSION
                </Link>
              </Box>
            </Box>
          </div>
          <div className={classes.grow} />
          <div className={classes.myprofile}>
            {/* <div className={classes.myprofile}> */}
            <Link
              color="inherit"
              underline="none"
              // href="/course/module/session"
              onClick={() => calendarClicked()}
            >
              <Tooltip title="Calendar">
                <IconButton
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <TodayIcon fontSize="medium" />
                </IconButton>
              </Tooltip>
            </Link>
            <Link
              color="inherit"
              underline="none"
              // href="/course/module/session"
              onClick={() => gradeClicked()}
            >
              <Tooltip title="Scores">
                <IconButton
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <AssessmentIcon fontSize="medium" />
                </IconButton>
              </Tooltip>
            </Link>
            {/* <Tooltip title="Scores">
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={1} color="secondary">
                  <NotificationsIcon fontSize="medium" />
                </Badge>
              </IconButton>
            </Tooltip> */}
            <Tooltip title="My Profile">
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                fontSize="xx-large"
              >
                <AccountCircle />
                <ListItemText primary={user_name} />
              </IconButton>
            </Tooltip>
            {/* </div> */}
          </div>
          {/* <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div> */}
        </Toolbar>
      </AppBar>
    );
    //################################################################################################################
    //############################################ module appbar #####################################################
    //################################################################################################################
  } else if (path === "/course/" + route_param + "/calendar") {
    //################################################################################################################
    //############################################ module appbar #####################################################
    //################################################################################################################
    renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={handleMenuClose}
        className={classes.menucard}
      >
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <Link color="inherit" onClick={profileClicked} underline="none">
              <AccountBoxIcon fontSize="small" />
              My Profile
            </Link>
          </ListItemIcon>
        </MenuItem>
        {/* <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <TurnedInIcon fontSize="small" />
            Followed Questions
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <SwapHorizIcon fontSize="small" />
            Switch Programs
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
            Account Settings
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <GroupAddIcon fontSize="small" />
            Refer & Earn
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <HelpIcon fontSize="small" />
            Help
          </ListItemIcon>
        </MenuItem> */}
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <Link color="inherit" underline="none" onClick={logOut}>
              <PowerSettingsNewIcon fontSize="small" />
              Logout
            </Link>
          </ListItemIcon>
        </MenuItem>
      </Menu>
    );
    renderNav = (
      <AppBar position="static" className={classes.appb}>
        <Toolbar className={classes.toolb}>
          {/* <Typography className={classes.title} variant="h5" noWrap> */}
          <img
            className={classes.logo}
            alt="complex"
            src="/static/image/logo.png"
          />
          {/* <Typography variant="body2" className={classes.courseName}>
            {course_name}
          </Typography> */}
          {/* </Typography> */}
          <div className={classes.presentTab}>
            <Box display="flex" justifyContent="center" mt={3} p={0}>
              <Box p={2} ml={5} className={classes.presentTabChild}>
                <Link color="inherit" href="/courses">
                  COURSE
                </Link>
              </Box>
              <Box p={2} className={classes.presentTabChild}>
                <Link color="inherit" onClick={dashboardClicked}>
                  HOME
                </Link>
              </Box>
              <Box p={2} className={classes.presentTabChild}>
                <Link color="inherit" onClick={moduleClicked}>
                  PROGRAM
                </Link>
              </Box>
              <Box p={2} className={classes.presentTabChild}>
                <Link color="inherit" onClick={discussionClicked}>
                  DISCUSSION
                </Link>
              </Box>
            </Box>
          </div>
          <div className={classes.grow} />
          <div className={classes.myprofile}>
            {/* <div className={classes.myprofile}> */}
            <Link
              color="inherit"
              underline="none"
              // href="/course/module/session"
              onClick={() => calendarClicked()}
            >
              <Tooltip title="Calendar">
                <IconButton
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <TodayIcon fontSize="medium" />
                </IconButton>
              </Tooltip>
            </Link>
            <Link
              color="inherit"
              underline="none"
              // href="/course/module/session"
              onClick={() => gradeClicked()}
            >
              <Tooltip title="Scores">
                <IconButton
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <AssessmentIcon fontSize="medium" />
                </IconButton>
              </Tooltip>
            </Link>
            {/* <Tooltip title="Scores">
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={1} color="secondary">
                  <NotificationsIcon fontSize="medium" />
                </Badge>
              </IconButton>
            </Tooltip> */}
            <Tooltip title="My Profile">
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                fontSize="xx-large"
              >
                <AccountCircle />
                <ListItemText primary={user_name} />
              </IconButton>
            </Tooltip>
            {/* </div> */}
          </div>
          {/* <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div> */}
        </Toolbar>
      </AppBar>
    );
    //################################################################################################################
    //############################################ module appbar #####################################################
    //################################################################################################################
  } else if (path === "/course/" + route_param + "/discussion") {
    //################################################################################################################
    //############################################ module appbar #####################################################
    //################################################################################################################
    renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={handleMenuClose}
        className={classes.menucard}
      >
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <Link color="inherit" onClick={profileClicked} underline="none">
              <AccountBoxIcon fontSize="small" />
              My Profile
            </Link>
          </ListItemIcon>
        </MenuItem>
        {/* <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <TurnedInIcon fontSize="small" />
            Followed Questions
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <SwapHorizIcon fontSize="small" />
            Switch Programs
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
            Account Settings
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <GroupAddIcon fontSize="small" />
            Refer & Earn
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <HelpIcon fontSize="small" />
            Help
          </ListItemIcon>
        </MenuItem> */}
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <Link color="inherit" underline="none" onClick={logOut}>
              <PowerSettingsNewIcon fontSize="small" />
              Logout
            </Link>
          </ListItemIcon>
        </MenuItem>
      </Menu>
    );
    renderNav = (
      <AppBar position="static" className={classes.appb}>
        <Toolbar className={classes.toolb}>
          {/* <Typography className={classes.title} variant="h5" noWrap> */}
          <img
            className={classes.logo}
            alt="complex"
            src="/static/image/logo.png"
          />
          {/* <Typography variant="body2" className={classes.courseName}>
            {course_name}
          </Typography> */}
          {/* </Typography> */}
          <div className={classes.presentTab}>
            <Box display="flex" justifyContent="center" mt={3} p={0}>
              <Box p={2} ml={5} className={classes.presentTabChild}>
                <Link color="inherit" href="/courses">
                  COURSE
                </Link>
              </Box>
              <Box p={2} className={classes.presentTabChild}>
                <Link color="inherit" onClick={dashboardClicked}>
                  HOME
                </Link>
              </Box>
              <Box p={2} className={classes.presentTabChild}>
                <Link color="inherit" onClick={moduleClicked}>
                  PROGRAM
                </Link>
              </Box>
              <Box p={2} className={classes.presentTabChild}>
                <Link color="inherit" onClick={discussionClicked}>
                  DISCUSSION
                </Link>
              </Box>
            </Box>
          </div>
          <div className={classes.grow} />
          <div className={classes.myprofile}>
            {/* <div className={classes.myprofile}> */}
            <Link
              color="inherit"
              underline="none"
              // href="/course/module/session"
              onClick={() => calendarClicked()}
            >
              <Tooltip title="Calendar">
                <IconButton
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <TodayIcon fontSize="medium" />
                </IconButton>
              </Tooltip>
            </Link>
            <Link
              color="inherit"
              underline="none"
              // href="/course/module/session"
              onClick={() => gradeClicked()}
            >
              <Tooltip title="Scores">
                <IconButton
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <AssessmentIcon fontSize="medium" />
                </IconButton>
              </Tooltip>
            </Link>
            {/* <Tooltip title="Scores">
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={1} color="secondary">
                  <NotificationsIcon fontSize="medium" />
                </Badge>
              </IconButton>
            </Tooltip> */}
            <Tooltip title="My Profile">
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                fontSize="xx-large"
              >
                <AccountCircle />
                <ListItemText primary={user_name} />
              </IconButton>
            </Tooltip>
            {/* </div> */}
          </div>
          {/* <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div> */}
        </Toolbar>
      </AppBar>
    );
    //################################################################################################################
    //############################################ module appbar #####################################################
    //################################################################################################################
  } else if (path === "/course/" + route_param + "/discussion/question") {
    //################################################################################################################
    //############################################ module appbar #####################################################
    //################################################################################################################
    renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={handleMenuClose}
        className={classes.menucard}
      >
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <Link color="inherit" onClick={profileClicked} underline="none">
              <AccountBoxIcon fontSize="small" />
              My Profile
            </Link>
          </ListItemIcon>
        </MenuItem>
        {/* <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <TurnedInIcon fontSize="small" />
            Followed Questions
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <SwapHorizIcon fontSize="small" />
            Switch Programs
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
            Account Settings
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <GroupAddIcon fontSize="small" />
            Refer & Earn
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <HelpIcon fontSize="small" />
            Help
          </ListItemIcon>
        </MenuItem> */}
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <Link color="inherit" underline="none" onClick={logOut}>
              <PowerSettingsNewIcon fontSize="small" />
              Logout
            </Link>
          </ListItemIcon>
        </MenuItem>
      </Menu>
    );
    renderNav = (
      <AppBar position="static" className={classes.appb}>
        <Toolbar className={classes.toolb}>
          {/* <Typography className={classes.title} variant="h5" noWrap> */}
          <img
            className={classes.logo}
            alt="complex"
            src="/static/image/logo.png"
          />
          {/* <Typography variant="body2" className={classes.courseName}>
            {course_name}
          </Typography> */}
          {/* </Typography> */}
          <div className={classes.presentTab}>
            <Box display="flex" justifyContent="center" mt={3} p={0}>
              <Box p={2} ml={5} className={classes.presentTabChild}>
                <Link color="inherit" href="/courses">
                  COURSE
                </Link>
              </Box>
              <Box p={2} className={classes.presentTabChild}>
                <Link color="inherit" onClick={dashboardClicked}>
                  HOME
                </Link>
              </Box>
              <Box p={2} className={classes.presentTabChild}>
                <Link color="inherit" onClick={moduleClicked}>
                  PROGRAM
                </Link>
              </Box>
              <Box p={2} className={classes.presentTabChild}>
                <Link color="inherit" onClick={discussionClicked}>
                  DISCUSSION
                </Link>
              </Box>
            </Box>
          </div>
          <div className={classes.grow} />
          <div className={classes.myprofile}>
            {/* <div className={classes.myprofile}> */}
            <Link
              color="inherit"
              underline="none"
              // href="/course/module/session"
              onClick={() => calendarClicked()}
            >
              <Tooltip title="Calendar">
                <IconButton
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <TodayIcon fontSize="medium" />
                </IconButton>
              </Tooltip>
            </Link>
            <Link
              color="inherit"
              underline="none"
              // href="/course/module/session"
              onClick={() => gradeClicked()}
            >
              <Tooltip title="Scores">
                <IconButton
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <AssessmentIcon fontSize="medium" />
                </IconButton>
              </Tooltip>
            </Link>
            {/* <Tooltip title="Scores">
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={1} color="secondary">
                  <NotificationsIcon fontSize="medium" />
                </Badge>
              </IconButton>
            </Tooltip> */}
            <Tooltip title="My Profile">
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                fontSize="xx-large"
              >
                <AccountCircle />
                <ListItemText primary={user_name} />
              </IconButton>
            </Tooltip>
            {/* </div> */}
          </div>
          {/* <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div> */}
        </Toolbar>
      </AppBar>
    );
    //################################################################################################################
    //############################################ module appbar #####################################################
    //################################################################################################################
  } else if (
    path ===
    "/course/" + route_param[0] + "/module/" + route_param[1] + "/session"
  ) {
    //################################################################################################################
    //############################################ session appbar #####################################################
    //################################################################################################################
    renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={handleMenuClose}
        className={classes.menucard}
      >
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <Link color="inherit" onClick={profileClicked} underline="none">
              <AccountBoxIcon fontSize="small" />
              My Profile
            </Link>
          </ListItemIcon>
        </MenuItem>
        {/* <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <TurnedInIcon fontSize="small" />
            Followed Questions
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <SwapHorizIcon fontSize="small" />
            Switch Programs
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
            Account Settings
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <GroupAddIcon fontSize="small" />
            Refer & Earn
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <HelpIcon fontSize="small" />
            Help
          </ListItemIcon>
        </MenuItem> */}
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <Link color="inherit" underline="none" onClick={logOut}>
              <PowerSettingsNewIcon fontSize="small" />
              Logout
            </Link>
          </ListItemIcon>
        </MenuItem>
      </Menu>
    );
    renderNav = (
      <AppBar position="static" className={classes.appb}>
        <Toolbar className={classes.toolb}>
          <img
            className={classes.logo}
            alt="complex"
            src="/static/image/logo.png"
          />
          {/* <Typography variant="body2" className={classes.courseName}>
            {course_name}
          </Typography> */}
          <div className={classes.presentTab}>
            <Box display="flex" justifyContent="center" mt={3} p={0}>
              <Box p={2} ml={5} className={classes.presentTabChild}>
                <Link color="inherit" href="/courses">
                  COURSE
                </Link>
              </Box>
              <Box p={2} className={classes.presentTabChild}>
                <Link color="inherit" onClick={dashboardClicked}>
                  HOME
                </Link>
              </Box>
              <Box p={2} className={classes.presentTabChild}>
                <Link color="inherit" onClick={moduleClicked}>
                  PROGRAM
                </Link>
              </Box>
              <Box p={2} className={classes.presentTabChild}>
                <Link color="inherit" onClick={discussionClicked}>
                  DISCUSSION
                </Link>
              </Box>
            </Box>
          </div>
          <div className={classes.grow} />
          <div className={classes.myprofile}>
            {/* <div className={classes.myprofile}> */}
            <Link
              color="inherit"
              underline="none"
              // href="/course/module/session"
              onClick={() => calendarClicked()}
            >
              <Tooltip title="Calendar">
                <IconButton
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <TodayIcon fontSize="medium" />
                </IconButton>
              </Tooltip>
            </Link>
            <Link
              color="inherit"
              underline="none"
              // href="/course/module/session"
              onClick={() => gradeClicked()}
            >
              <Tooltip title="Scores">
                <IconButton
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <AssessmentIcon fontSize="medium" />
                </IconButton>
              </Tooltip>
            </Link>
            <Tooltip title="Notifications">
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={5} color="secondary">
                  <NotificationsIcon fontSize="medium" />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title="My Profile">
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                fontSize="xx-large"
              >
                <AccountCircle />
                <ListItemText primary={user_name} />
              </IconButton>
            </Tooltip>
            {/* </div> */}
          </div>
          {/* <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div> */}
        </Toolbar>
      </AppBar>
    );
    //################################################################################################################
    //############################################ session appbar ####################################################
    //################################################################################################################
  } else if (
    path ===
    "/course/" +
      route_param[0] +
      "/module/" +
      route_param[1] +
      "/assessment/" +
      route_param[2]
  ) {
    //################################################################################################################
    //############################################ session appbar #####################################################
    //################################################################################################################
    renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={handleMenuClose}
        className={classes.menucard}
      >
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <Link color="inherit" onClick={profileClicked} underline="none">
              <AccountBoxIcon fontSize="small" />
              My Profile
            </Link>
          </ListItemIcon>
        </MenuItem>
        {/* <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <TurnedInIcon fontSize="small" />
            Followed Questions
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <SwapHorizIcon fontSize="small" />
            Switch Programs
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
            Account Settings
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <GroupAddIcon fontSize="small" />
            Refer & Earn
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <HelpIcon fontSize="small" />
            Help
          </ListItemIcon>
        </MenuItem> */}
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <Link color="inherit" underline="none" onClick={logOut}>
              <PowerSettingsNewIcon fontSize="small" />
              Logout
            </Link>
          </ListItemIcon>
        </MenuItem>
      </Menu>
    );
    renderNav = (
      <AppBar position="static" className={classes.appb}>
        <Toolbar className={classes.toolb}>
          <img
            className={classes.logo}
            alt="complex"
            src="/static/image/logo.png"
          />
          {/* <Typography variant="body2" className={classes.courseName}>
            {course_name}
          </Typography> */}
          <div className={classes.presentTab}>
            <Box display="flex" justifyContent="center" mt={3} p={0}>
              <Box p={2} ml={5} className={classes.presentTabChild}>
                <Link color="inherit" href="/courses">
                  COURSE
                </Link>
              </Box>
              <Box p={2} className={classes.presentTabChild}>
                <Link color="inherit" onClick={dashboardClicked}>
                  HOME
                </Link>
              </Box>
              <Box p={2} className={classes.presentTabChild}>
                <Link color="inherit" onClick={moduleClicked}>
                  PROGRAM
                </Link>
              </Box>
              <Box p={2} className={classes.presentTabChild}>
                <Link color="inherit" onClick={discussionClicked}>
                  DISCUSSION
                </Link>
              </Box>
            </Box>
          </div>
          <div className={classes.grow} />
          <div className={classes.myprofile}>
            {/* <div className={classes.myprofile}> */}
            <Link
              color="inherit"
              underline="none"
              // href="/course/module/session"
              onClick={() => calendarClicked()}
            >
              <Tooltip title="Calendar">
                <IconButton
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <TodayIcon fontSize="medium" />
                </IconButton>
              </Tooltip>
            </Link>
            <Link
              color="inherit"
              underline="none"
              // href="/course/module/session"
              onClick={() => gradeClicked()}
            >
              <Tooltip title="Scores">
                <IconButton
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <AssessmentIcon fontSize="medium" />
                </IconButton>
              </Tooltip>
            </Link>
            {/* <Tooltip title="Scores">
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={1} color="secondary">
                  <NotificationsIcon fontSize="medium" />
                </Badge>
              </IconButton>
            </Tooltip> */}
            <Tooltip title="My Profile">
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                fontSize="xx-large"
              >
                <AccountCircle />
                <ListItemText primary={user_name} />
              </IconButton>
            </Tooltip>
            {/* </div> */}
          </div>
          {/* <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div> */}
        </Toolbar>
      </AppBar>
    );
    //################################################################################################################
    //############################################ session appbar ####################################################
    //################################################################################################################
  } else if (
    path ===
    "/course/" +
      route_param[0] +
      "/module/" +
      route_param[1] +
      "/resource/" +
      route_param[2]
  ) {
    //################################################################################################################
    //############################################ session appbar #####################################################
    //################################################################################################################
    renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={handleMenuClose}
        className={classes.menucard}
      >
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <Link color="inherit" onClick={profileClicked} underline="none">
              <AccountBoxIcon fontSize="small" />
              My Profile
            </Link>
          </ListItemIcon>
        </MenuItem>
        {/* <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <TurnedInIcon fontSize="small" />
            Followed Questions
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <SwapHorizIcon fontSize="small" />
            Switch Programs
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
            Account Settings
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <GroupAddIcon fontSize="small" />
            Refer & Earn
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <HelpIcon fontSize="small" />
            Help
          </ListItemIcon>
        </MenuItem> */}
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <Link color="inherit" underline="none" onClick={logOut}>
              <PowerSettingsNewIcon fontSize="small" />
              Logout
            </Link>
          </ListItemIcon>
        </MenuItem>
      </Menu>
    );
    renderNav = (
      <AppBar position="static" className={classes.appb}>
        <Toolbar className={classes.toolb}>
          <img
            className={classes.logo}
            alt="complex"
            src="/static/image/logo.png"
          />
          {/* <Typography variant="body2" className={classes.courseName}>
            {course_name}
          </Typography> */}
          <div className={classes.presentTab}>
            <Box display="flex" justifyContent="center" mt={3} p={0}>
              <Box p={2} ml={5} className={classes.presentTabChild}>
                <Link color="inherit" href="/courses">
                  COURSE
                </Link>
              </Box>
              <Box p={2} className={classes.presentTabChild}>
                <Link color="inherit" onClick={dashboardClicked}>
                  HOME
                </Link>
              </Box>
              <Box p={2} className={classes.presentTabChild}>
                <Link color="inherit" onClick={moduleClicked}>
                  PROGRAM
                </Link>
              </Box>
              <Box p={2} className={classes.presentTabChild}>
                <Link color="inherit" onClick={discussionClicked}>
                  DISCUSSION
                </Link>
              </Box>
            </Box>
          </div>
          <div className={classes.grow} />
          <div className={classes.myprofile}>
            {/* <div className={classes.myprofile}> */}
            <Link
              color="inherit"
              underline="none"
              // href="/course/module/session"
              onClick={() => calendarClicked()}
            >
              <Tooltip title="Calendar">
                <IconButton
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <TodayIcon fontSize="medium" />
                </IconButton>
              </Tooltip>
            </Link>
            <Link
              color="inherit"
              underline="none"
              // href="/course/module/session"
              onClick={() => gradeClicked()}
            >
              <Tooltip title="Scores">
                <IconButton
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <AssessmentIcon fontSize="medium" />
                </IconButton>
              </Tooltip>
            </Link>
            <Tooltip title="Scores">
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={1} color="secondary">
                  <NotificationsIcon fontSize="medium" />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title="My Profile">
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                fontSize="xx-large"
              >
                <AccountCircle />
                <ListItemText primary={user_name} />
              </IconButton>
            </Tooltip>
            {/* </div> */}
          </div>
          {/* <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div> */}
        </Toolbar>
      </AppBar>
    );
    //################################################################################################################
    //############################################ session appbar ####################################################
    //################################################################################################################
  } else if (
    path ===
    "/course/" +
      route_param[0] +
      "/session/" +
      route_param[1] +
      "/segment/" +
      route_param[2]
  ) {
    //################################################################################################################
    //############################################ segment appbar ####################################################
    //################################################################################################################
    renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={handleMenuClose}
        className={classes.menucard}
      >
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <Link color="inherit" onClick={profileClicked} underline="none">
              <AccountBoxIcon fontSize="small" />
              My Profile
            </Link>
          </ListItemIcon>
        </MenuItem>
        {/* <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <TurnedInIcon fontSize="small" />
            Followed Questions
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <SwapHorizIcon fontSize="small" />
            Switch Programs
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
            Account Settings
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <GroupAddIcon fontSize="small" />
            Refer & Earn
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <HelpIcon fontSize="small" />
            Help
          </ListItemIcon>
        </MenuItem> */}
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <Link color="inherit" underline="none" onClick={logOut}>
              <PowerSettingsNewIcon fontSize="small" />
              Logout
            </Link>
          </ListItemIcon>
        </MenuItem>
      </Menu>
    );
    renderNav = (
      <AppBar position="static" className={classes.appb}>
        <Toolbar className={classes.toolb}>
          <img
            className={classes.logo}
            alt="complex"
            src="/static/image/logo.png"
          />
          {/* <Typography variant="body2" className={classes.courseName}>
            {course_name}
          </Typography> */}
          <div className={classes.presentTab}>
            <Box display="flex" justifyContent="center" mt={3} p={0}>
              <Box p={2} ml={5} className={classes.presentTabChild}>
                <Link color="inherit" href="/courses">
                  COURSE
                </Link>
              </Box>
              <Box p={2} className={classes.presentTabChild}>
                <Link color="inherit" onClick={dashboardClicked}>
                  HOME
                </Link>
              </Box>
              <Box p={2} className={classes.presentTabChild}>
                <Link color="inherit" onClick={moduleClicked}>
                  PROGRAM
                </Link>
              </Box>
              <Box p={2} className={classes.presentTabChild}>
                <Link color="inherit" onClick={discussionClicked}>
                  DISCUSSION
                </Link>
              </Box>
            </Box>
          </div>
          <div className={classes.grow} />
          <div className={classes.myprofile}>
            {/* <div className={classes.myprofile}> */}
            <Link
              color="inherit"
              underline="none"
              // href="/course/module/session"
              onClick={() => calendarClicked()}
            >
              <Tooltip title="Calendar">
                <IconButton
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <TodayIcon fontSize="medium" />
                </IconButton>
              </Tooltip>
            </Link>
            <Link
              color="inherit"
              underline="none"
              // href="/course/module/session"
              onClick={() => gradeClicked()}
            >
              <Tooltip title="Scores">
                <IconButton
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <AssessmentIcon fontSize="medium" />
                </IconButton>
              </Tooltip>
            </Link>
            {/* <Tooltip title="Scores">
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={1} color="secondary">
                  <NotificationsIcon fontSize="medium" />
                </Badge>
              </IconButton>
            </Tooltip> */}
            <Tooltip title="My Profile">
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                fontSize="xx-large"
              >
                <AccountCircle />
                <ListItemText primary={user_name} />
              </IconButton>
            </Tooltip>
            {/* </div> */}
          </div>
          {/* <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div> */}
        </Toolbar>
      </AppBar>
    );
  }
  //################################################################################################################
  //############################################ segment appbar #####################################################
  //################################################################################################################
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  return (
    <div className={classes.grow}>
      {/* <AppBar position="static" className={classes.appb}>
        <Toolbar className={classes.toolb}>
          <Typography className={classes.title} variant="h5" noWrap>
            myELSA Academy
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Tooltip title="Scores">
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
                fontSize="xx-large"
              >
                <Badge badgeContent={17} color="secondary">
                  <AssessmentIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title="My Profile">
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                fontSize="xx-large"
              >
                <AccountCircle />
              </IconButton>
            </Tooltip>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar> */}
      {renderNav}
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
