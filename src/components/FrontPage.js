import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Fab,
  Hidden,
  CardMedia,
} from "@mui/material";

import theme from "../theme";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ReactRotatingText from "react-rotating-text";
import { makeStyles } from "@mui/styles";
import profilePic from "../images/profile-pic.jpg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const FrontPage = () => {
  const useStyles = makeStyles({
    name: {
      position: "relative",
      top: "2rem",
      margin: "0.5rem 1rem",
      fontWeight: "bold",
    },
    topText: {
      position: "relative",
      top: "2rem",
      margin: "0 1.4rem",
    },
    bottomText: {
      position: "relative",
      top: "2rem",
      margin: "0 1.4rem",
      fontSize: "1.5rem",
    },
    button: {
      position: "relative",
      top: "4rem",
      fontSize: "3.75rem",
    },
    backToTopButton: {
      position: "fixed",
      bottom: "0",
      right: "0",
      margin: "1rem",
      zIndex: "99999",
    },
    backToTopButtonMobile: {
      margin: "0.8rem",
      marginBottom: "3rem",
    },
  });
  const classes = useStyles();

  // makes the typing animation run on an infinite loop
  const [count, setCount] = useState(1);
  useEffect(() => {
    setCount(1);
  }, [count]);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "95vh",
        backgroundImage:
          "linear-gradient(163deg, rgba(2,0,36,1) 0%, rgba(190,223,246,1) 0%, rgba(227,223,189,1) 100%)",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
        backgroundSize: "cover",
        [theme.breakpoints.down("xs")]: {
          backgroundImage:
            "linear-gradient(163deg, rgba(2,0,36,1) 0%, rgba(190,223,246,1) 0%, rgba(227,223,189,1) 100%)",
          backgroundPosition: "left center",
          backgroundAttachment: "scroll",
        },
      }}
      id="Top"
    >
      <CardMedia
        component="img"
        image={profilePic}
        sx={{
          width: "250px",
          borderRadius: "50%",
          borderColor: "primary",
          borderWidth: "2px",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.3)",
        }}
      />
      <Typography className={classes.topText} variant="h3" align="center">
        Hi, my name is
      </Typography>
      <Typography className={classes.name} variant="h2" align="center">
        Krishna Mundada.
      </Typography>
      <Typography className={classes.bottomText} align="center">
        <ReactRotatingText
          items={[
            "AI-ML Enthusiast",
            "Graphics Designer",
            "Blockchain Enthusiast",
            "Student",
          ]}
          pause={800}
        />
      </Typography>
      <IconButton
        className={classes.button}
        aria-label="Scroll Down"
        onClick={() => scrollTo("AboutMe")}
      >
        {/* <span
          className="iconify"
          data-icon="bi:chevron-compact-down"
          data-inline="false"
        /> */}
        <KeyboardArrowDownIcon fontSize="1.5rem" />
      </IconButton>
      <Hidden smDown>
        <Fab
          className={classes.backToTopButton}
          variant="extended"
          size="small"
          aria-label="Back to Top"
          onClick={() => scrollTo("Top")}
        >
          <KeyboardArrowUpIcon />
          Back to Top
        </Fab>
      </Hidden>
      <Hidden smUp>
        <Fab
          className={`${classes.backToTopButton} ${classes.backToTopButtonMobile}`}
          size="small"
          aria-label="Back to Top"
          onClick={() => scrollTo("Top")}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Hidden>
    </Box>
  );
};

export default FrontPage;
