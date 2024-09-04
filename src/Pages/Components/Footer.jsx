import {
  Box,
  Divider,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
  Link as MuiLink,
} from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useLocation } from "react-router-dom";
const Footer = () => {
  const theme = useTheme();

  return (
    <>
      <Box>
       

        <Box sx={{ padding: "3rem 5%" }}>
          <Grid container spacing={5} alignItems={"start"}>
            <Grid item lg={3} md={3} sm={12} xs={12}>
              <Box>
              <Link to='/'>
              <img src="/Logo Ok.png" alt="footer Logo" width={'20%'}/>

              </Link>
              </Box>
              <Typography
                variant="h3"
                sx={{ fontSize: "1rem", marginTop: "1rem" }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officia obcaecati
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  marginTop: "1rem",
                }}
                gap={1}
              >
                <img src="/visaimage.png" alt="" />
                <img src="/american.png" alt="" />
                <img src="/mastercard.png" alt="" />
                <img src="/stripe.png" alt="" />
              </Box>
            </Grid>
            <Grid item lg={1.8} md={1.8} sm={12} xs={12}>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  marginBottom: "0.9rem",
                }}
              >
                About Us
              </Typography>
              <Typography
                sx={{
                  color:'grey',
                  fontSize: "1rem",
                  marginBottom: "0.9rem",
                  textTransform: "none",
                }}
              >
                <MuiLink
                  component={Link}
                  to="/about"
                  sx={{

                    textDecoration: "none",
                    color: "inherit",
                    "&:hover": { textDecoration: "none" },
                  }}
                >
                  About us
                </MuiLink>
              </Typography>







              <Typography
                sx={{
                  color:'grey',
                  fontSize: "1rem",
                  marginBottom: "0.9rem",
                  textTransform: "none",
                }}
              >
                <MuiLink
                  component={Link}
                  to="/contact-us"
                  sx={{

                    textDecoration: "none",
                    color: "inherit",
                    "&:hover": { textDecoration: "none" },
                  }}
                >
                  Contact Us
                </MuiLink>
              </Typography>
            </Grid>

            <Grid item lg={1.8} md={1.8} sm={12} xs={12}>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  marginBottom: "0.9rem",
                }}
              >
                Get Social
              </Typography>
              <Typography sx={{ fontSize: "1rem", marginBottom: "0.9rem", color:'grey' }}>
                Facebook
              </Typography>

              <Typography sx={{ fontSize: "1rem", marginBottom: "0.9rem", color:'grey' }}>
                Twitter
              </Typography>

              <Typography sx={{ fontSize: "1rem", marginBottom: "0.9rem", color:'grey' }}>
                Instagram
              </Typography>

              <Typography sx={{ fontSize: "1rem", marginBottom: "0.9rem", color:'grey' }}>
                Youtube
              </Typography>
            </Grid>

            <Grid item lg={1.8} md={1.8} sm={12} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "start",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: "700",
                    marginBottom: "1rem",
                  }}
                >
                  Support
                </Typography>
                <Typography sx={{ fontSize: "1rem", marginBottom: "0.9rem", color:'grey' }}>
                  Help
                </Typography>
                <Typography sx={{ fontSize: "1rem", marginBottom: "0.9rem", color:'grey' }}>
                  Contact us
                </Typography>
                <Typography
                sx={{
                  color:'grey',
                  fontSize: "1rem",
                  marginBottom: "0.9rem",
                  textTransform: "none",
                }}
              >
                <MuiLink
                  component={Link}
                  to="/blogs"
                  sx={{

                    textDecoration: "none",
                    color: "inherit",
                    "&:hover": { textDecoration: "none" },
                  }}
                >
                  call Us
                </MuiLink>
              </Typography>



              </Box>
            </Grid>
            <Grid item lg={1.8} md={1.8} sm={12} xs={12}>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  marginBottom: "0.9rem",
                }}
              >
                Terms Of Use
              </Typography>
              <Typography
                sx={{
                  color:'grey',
                  fontSize: "1rem",
                  marginBottom: "0.9rem",
                  textTransform: "none",
                }}
              >
                <MuiLink
                  component={Link}
                  to="/terms-&-conditions"
                  sx={{

                    textDecoration: "none",
                    color: "inherit",
                    "&:hover": { textDecoration: "none" },
                  }}
                >
                  Terms & Conditions
                </MuiLink>
              </Typography>
              <Typography
                sx={{
                  color:'grey',
                  fontSize: "1rem",
                  marginBottom: "0.9rem",
                  textTransform: "none",
                }}
              >
                <MuiLink
                  component={Link}
                  to="/privacy-policy"
                  sx={{

                    textDecoration: "none",
                    color: "inherit",
                    "&:hover": { textDecoration: "none" },
                  }}
                >
                  Privacy Policy
                </MuiLink>
              </Typography>

              <Typography
                sx={{
                  color:'grey',
                  fontSize: "1rem",
                  marginBottom: "0.9rem",
                  textTransform: "none",
                }}
              >
                <MuiLink
                  component={Link}
                  to="/cookies-policy"
                  sx={{

                    textDecoration: "none",
                    color: "inherit",
                    "&:hover": { textDecoration: "none" },
                  }}
                >
                  Cookies Policy
                </MuiLink>
              </Typography>
            </Grid>

          </Grid>
        </Box>
        <Divider />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          <Typography sx={{ fontSize: "0.7rem", color: "grey" }}>
            Copyright © Ex Furniture 2024 All rights reserved.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
