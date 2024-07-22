import React, { useEffect } from "react";
import Page from "../components/page";
import { Box, Button, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
const AboutUs = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
  })
  return (
    <Page title="About Us">


<Box
        sx={{
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.5) 30.2%, rgba(0,0,0,0.5) 90.9%),url(${"/common.webp"})`,

          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "none",
          height: "50vh",
          width: "100%",
        }}
      >
        <Box
          sx={{
            color: "white",

            minHeight: "60vh",
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            paddingLeft: "5%",
            paddingRight: "5%",
          }}
        >
          <Box minHeight={"8rem"}>
            <Typography

              sx={{
                cursor: "pointer",
                fontSize: "2.5rem",
                fontWeight: "600",
              }}
            >
            About Us
            </Typography>
          </Box>
        </Box>
      </Box>





      <Box sx={{ p: 5 }}>
        <Typography variant="h4" fontWeight="bold" color="primary">
          About Us
        </Typography>
        <Box sx={{ display: "flex", mt: 3 }}>
          <Box flex={1}>
            <Typography variant="h6" sx={{ color: "grey" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 4,
                padding: "0.8rem 1.5rem",
                textTransform: "none",
                fontSize: "0.8rem",
              }}
              endIcon={<ArrowForward />}
            >
              Learn More
            </Button>
          </Box>
          <Box
            flex={1}
            component="img"
            src="/common.webp"
            height="350px"
            width="80px"
          />
        </Box>
      </Box>
    </Page>
  );
};

export default AboutUs;
