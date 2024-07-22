import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Drawer,
  FormControl,
  MenuItem,
  Select,
  Typography,
  IconButton,
  useTheme,
} from "@mui/material";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/actions/authActions";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const judge_check = location.pathname.includes("judge-score-card") || location.pathname.includes("judge-login");

  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  // const handleLogin = () => {
  //   navigate("/admin-login");
  //   setDrawerOpen(false);
  // };

  const handleLogin = () => {
    if (judge_check) {
      navigate("/judge-login");
    } else {
      navigate("/admin-login");
    }
    setDrawerOpen(false);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  const dispatch = useDispatch();

  const handleMenuItemClick = (value) => {
    if (value === "Logout") {
      dispatch(logout());
      dispatch({
        type: "RESET_STATE",
      });
    }
  };

  const participantPageRegex = /^\/public-screen\/[^\/]+$/;
  const participantRegisterPage = /^\/admin\/contest\/[^\/]+$/;
  const publicResultPage = /^\/public-screen-result\/[^\/]+$/;

  const currentPath = location.pathname;

  const isHidden =
    participantPageRegex.test(currentPath) ||
    participantRegisterPage.test(currentPath) ||
    publicResultPage.test(currentPath) ||
    currentPath === "/public-screen-result" ||
    currentPath === "/admin_side_screen1" ||
    currentPath === "/admin_side_screen2" ||
    currentPath === "/participant-registered";

  if (isHidden) {
    return null;
  }

  const auth = useSelector((state) => state?.admin?.isAuthenticated);
  const username = useSelector((state) => state?.admin?.user?.name);

  const handleAddEvent = () => {
    navigate("/admin/welcome");
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "0rem 5%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "static",
        top: 0,
        zIndex: 10000000,
        boxShadow: "1px 1px 1px #ededed",
      }}
    >
      <Box>
        <Link to="/">
          <img
            src="/mainLogo.png"
            alt="Logo"
            style={{ height: "auto", width: "100%" }}
          />
        </Link>
      </Box>
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >

{!judge_check ? (
  <>
    {auth && (
      <>
        <Button
          variant="contained"
          sx={{ textTransform: "none", marginRight: '1rem' }}
          onClick={handleAddEvent}
        >
          Add New Event
        </Button>

        <Button
          variant="contained"
          sx={{ textTransform: "none", color: "white" }}

        >
          <Link
            to="all-history"
            style={{
              color: "white",
              textDecoration: "none",
              textTransform: "none",
            }}
          >
            Show All History
          </Link>
        </Button>
        <Button variant="contained" sx={{ marginLeft:'1rem', textTransform: "none" }}>
          Upgrade your pricing plan
        </Button>
      </>
    )}
  </>
) : null}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",

            cursor: "pointer",
          }}
        >
          {auth ? (
            <Box>
              <FormControl sx={{ padding: 0 }}>
                <Select
                  sx={{
                    outline: "none",
                    "&:focus": {
                      outline: "none",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none", // Remove the outline border
                    },
                  }}
                  // value={selectedValue}
                  // onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Select user" }}
                  style={{ minWidth: "120px", padding: 0 }}
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Avatar
                        alt=""
                        // src={userData ? `${base}${userData?.profile_image}` : ""}
                        sx={{
                          height: "2rem",
                          width: "2rem",
                          marginRight: "8px",
                        }}
                      />
                      <Typography sx={{ fontSize: "1rem" }}>
                        {username}
                      </Typography>
                    </Box>
                  )}
                >
                  <MenuItem
                    sx={{ fontSize: "0.8rem" }}
                    value="Logout"
                    onClick={() => handleMenuItemClick("Logout")}
                  >
                    Logout
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          ) : (
            <Button
              onClick={handleLogin}
              variant="contained"
              size="small"
              sx={{
                backgroundColor: theme.palette.primary.main,
                padding: "0.5rem 2rem",
                textTransform: "none",
                fontSize: "0.9rem",
                marginLeft: "1rem",
              }}
            >
              Login
            </Button>
          )}
        </Box>
      </Box>
      <Box sx={{ display: { xs: "flex", sm: "none" } }}>
        <IconButton onClick={handleDrawerOpen} sx={{ padding: "10px" }}>
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={handleDrawerClose}
          sx={{ zIndex: 10000000 }}
        >




          <Box sx={{ width: 250, padding: "20px" }}>
          {!judge_check ? (
  <>
    {auth && (
      <>
        <Button
          variant="contained"
          sx={{ textTransform: "none", marginBottom: '1rem' }}
          onClick={handleAddEvent}
        >
          Add New Event
        </Button>

        <Button
          variant="contained"
          sx={{ textTransform: "none", color: "white", marginBottom: '1rem' }}
        >
          <Link
            to="all-history"
            style={{
              color: "white",
              textDecoration: "none",
              textTransform: "none",
            }}
          >
            Show All History
          </Link>
        </Button>
        <Button variant="contained" sx={{ textTransform: "none" }}>
          Upgrade your pricing plan
        </Button>
      </>
    )}
  </>
) : null}

            <Box
              sx={{
                display: "flex",
                alignItems: "center",

                cursor: "pointer",
              }}
            >
              {auth ? (
                <Box>
                  <FormControl sx={{ padding: 0 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mt: 5,
                      }}
                    >
                      <Avatar
                        alt=""
                        // src={userData ? `${base}${userData?.profile_image}` : ""}
                        sx={{
                          height: "2rem",
                          width: "2rem",
                          marginRight: "8px",
                        }}
                      />
                      <Typography sx={{ fontSize: "1rem" }}>
                      {username}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        mt: 2,
                      }}
                    >
                      <Button
                        variant="contained"
                        onClick={() => handleMenuItemClick("Logout")}
                      >
                        Logout
                      </Button>
                    </Box>

                  </FormControl>
                </Box>
              ) : (
                <Button
                  onClick={handleLogin}
                  variant="contained"
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    padding: "0.5rem 2rem",
                    textTransform: "none",
                    fontSize: "0.9rem",
                    mt: 4,
                  }}
                >
                  Login
                </Button>
              )}
            </Box>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Header;
