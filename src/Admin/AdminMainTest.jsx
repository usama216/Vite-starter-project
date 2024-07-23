import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  selectClasses,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Helmet } from "react-helmet";
import HorizontalSplitIcon from "@mui/icons-material/HorizontalSplit";
import CloseIcon from "@mui/icons-material/Close";
import Category from "./AdminTestPages/Category";
import Blogs from "./AdminTestPages/Blogs";
import Sallers from "./AdminTestPages/Sallers";
import Product from "./AdminTestPages/Product";

const AdminMainTest = () => {
    const drawerWidth = 200;
  const theme = useTheme();
  const listData = [
    { title: "category", icone: <AccountCircleIcon /> },
    { title: "product", icone: <AccountCircleIcon /> },
    { title: "sallers", icone: <AccountCircleIcon /> },
    { title: "blogs", icone: <AccountCircleIcon /> },
  ];
  const [selectedItem, setSelectedItem] = React.useState(listData[0].title);
  const [isOpen, setIsOpen] = useState(true);
  const [isTitleShow, setIsTitleShow] = useState(false);
  // const [isButtonShow , setIsButtonShow]  = useState(false);

  const handleItemClick = (title) => {
    setSelectedItem(title);
  };

  console.log(selectedItem);

  const handleButtonTitle = () => {
    setIsTitleShow(!isTitleShow);
  };

  // const toggleDrawer=(prev)=>{
  //     setIsOpen(prev=>!prev)
  // }
//   const renderContent = () => {
//     switch (selectedItem) {
//         case 'category':
//             return <Category />;
//         case 'blogs':
//             return <Blogs />;
//         case 'product':
//             return <Product />;
//         case 'sallers':
//             return <Sallers />;
//         default:
//             return null;
//     }
// };
   
  return (
    <>
      <Helmet>
        <title>Admin Dashboad</title>
        <meta name="khatri-brothers" content="singing music" />
      </Helmet>
      <Box sx={{ display: "flex", height: "100vh", }}>
        <CssBaseline />
        <AppBar sx={{ backgroundColor: "white" }}>
          <Toolbar>
            <Typography
              variant="h3"
              component="div"
              sx={{ color: theme.palette.primary.main }}
            >
              logo
            </Typography>
            <Button
              variant="contained"
              sx={{ ml: "auto", backgroundColor: theme.palette.secondary.main }}
            >
              Sign Out
            </Button>
          </Toolbar>
        </AppBar>

        <Drawer open={true} variant="permanent" 
        sx={{
            width:drawerWidth, 
        }}>
          <Box sx={{ overflow: "auto", width: "100%", }}>
            <List sx={{ p: 1 }}>
              <Button onClick={handleButtonTitle}>
                {isTitleShow ? <CloseIcon /> : <HorizontalSplitIcon />}
              </Button>
              {listData.map((val, ind) => (
                <ListItem
                  key={ind}
                  sx={{
                    backgroundColor:
                      selectedItem === val.title ? "#007BFF" : "transparent",
                    color: selectedItem === val.title ? "white" : "black",
                    "&:hover": { backgroundColor: "#007BFF" },
                    mt:2,
                    borderRadius :'15px',
                    textAlign:"center"
                    
                  }}
                  onClick={() => handleItemClick(val.title)}
                >
                  <ListItemButton>
                    <ListItemIcon>{val.icone}</ListItemIcon>
                    {isTitleShow && (
                      <ListItemText
                        primary={val.title}
                        sx={{
                          fontWeight: selectedItem === val.title && "bold",
                        }}
                      />
                    )}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider/>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3, }}>
        <Toolbar />
        <Box    >
          {selectedItem === "category" && <Category />}
          {selectedItem === "blogs" && <Blogs />}
          {selectedItem === "product" && <Product />}
          {selectedItem === "sallers" && <Sallers />}
          {/* {renderContent()} */}
        </Box>
      </Box>
      
      </Box>
    </>
  );
};

export default AdminMainTest;
