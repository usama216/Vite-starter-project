import {
  Avatar,
  Box,
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import ProductCard from "../ShopPage/ProductCard";
import { useNavigate } from "react-router";
import OurMission from "./OurMission";
import HomeProducts from "../ShopPage/HomeProducts";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useDispatch } from "react-redux";
import { getAllCategories } from "../../store/actions/categoriesActions";
import { Link } from "react-router-dom";

const Landing = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const [allCategories, setAllCategories] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const dispatch = useDispatch();

  const getAllSellers = async () => {
    dispatch(getAllCategories())
      .then((res) => {
        setAllCategories(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getAllSellers();
  }, []);




  return (
    <>


<Box sx={{padding:'1rem 10%'}}>


      <Box
        sx={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 30.2%, rgb(0,0, 0, 0) 90.9%),url(/banner1.jpeg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "none",
          height: "45vh",
          width: "100%",
borderRadius:'12px'
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

            "@media(max-width:480px)": {
              paddingLeft: "2rem",
              paddingRight: "3rem",
            },
            "@media(min-width:481px) and (max-width:768px)": {
              paddingLeft: "10%",
              paddingRight: "10%",
            },

            "@media(min-width:769px) and (max-width:1024px)": {
              paddingLeft: "10%",
              paddingRight: "10%",
            },
          }}
        >
          <Box
            minHeight={"2rem"}
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              width:'70%',
              borderRadius:'10px',
padding:'1rem 1rem',
              "@media(max-width:480px)": {
                minHeight: "12rem",
              },
            }}
          >
            <Typography
              variant="h3"
              fontSize={"1.5rem"}
              fontWeight={"550"}
              width="100%"
              // paddingLeft={'15%'}
              // paddingRight={'15%'}
              sx={{
                "@media(max-width:480px)": {
                  fontSize: "1rem",
                  width: "100%",
                  fontWeight: "600",
                  paddingLeft: "0%",
                  paddingRight: "0%",
                },
                "@media(min-width:480px) and (max-width:900px)": {
                  fontSize: "1.5rem",
                  width: "100%",
                  paddingLeft: "0%",
                  paddingRight: "0%",
                },
                "@media(min-width:901px) and (max-width:1024px)": {
                  fontSize: "1.5rem",
                  width: "100%",
                  paddingLeft: "0%",
                  paddingRight: "0%",
                },
              }}
            >
              Marketplace To Buy and Sell New & Used Furniture
            </Typography>
            <br />

            <Box width={"100%"} sx={{display:'flex'}}>
              <TextField
                placeholder="Search Any product"
                variant="outlined"
                //               value={searchKeyword}
                //               onChange={handleSearchChange}
                //               onKeyDown={(event) => {
                //   if (event.key === 'Enter') {
                //     handleSearchClick();
                //   }
                // }}
                fullWidth
                sx={{
                  "& .MuiInputBase-root": {
                    padding: 0,
                    "&:hover": {
                      borderColor: "#f7f7f7",
                    },
                    "&.Mui-focused": {
                      boxShadow: "none",
                    },
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    color: "#f7f7f7",
                  },
                  borderRadius: "10px",
                  backgroundColor: "white",
                }}
                InputProps={{
                  sx: {
                    padding: 0,
                  },
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      style={{ padding: 0, margin: 0 }}
                    >
                      <Button
                        sx={{
                          // backgroundColor: theme.palette.primary.main,
                          // color: "white",
                          // padding: "1rem",
                          // borderRadius: "0px 5px 5px 0px",
                          // ":hover": {
                          //   backgroundColor: theme.palette.primary.main,
                          //   color: "white",
                          // },
                        }}
                      >
                        <SearchOutlinedIcon />
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />


              <Button variant="contained" sx={{marginLeft:'1rem', textTransform:'none', padding:'1rem 3rem'}}>Search</Button>
            </Box>
          </Box>
        </Box>
      </Box>
</Box>

<Box sx={{ padding: '1rem 10%' }}>
      <Typography variant="h1" sx={{ fontSize: '1.5rem', fontWeight: '600' }}>
        Popular Categories
      </Typography>

      <Grid container spacing={2} sx={{ marginTop: '0rem' }}>
        {allCategories.map((category, index) => (
          <Grid item xs={12} sm={6} md={2} key={index}>
            <Box>


              <Link style={{ display: 'block', color: 'black', textDecoration: 'none', fontWeight: '500',
              fontSize:'1.1rem'
               }}
               to={'/shop'}

               onMouseEnter={(e) => e.target.style.color = 'blue'}
    onMouseLeave={(e) => e.target.style.color = 'black'}
               >

<Typography sx={{fontWeight:'500'}}>
{category.title}
</Typography>

              </Link>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>




      <HomeProducts />

    </>
  );
};

export default Landing;
