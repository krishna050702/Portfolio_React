import { Box, Container, Grid, Divider, Chip, Typography } from "@mui/material";
import React from "react";

const SkillSet = () => {
  const skillSetIcon = [
    "devicon-aftereffects-plain",
    "devicon-android-plain-wordmark",
    "devicon-spring-plain-wordmark",
    "devicon-javascript-plain",
    "devicon-typescript-plain",
    "devicon-nodejs-plain-wordmark",
    "devicon-vuejs-plain-wordmark",
    "devicon-react-original",
    "devicon-flutter-plain",
    "devicon-docker-plain-wordmark",
    "devicon-amazonwebservices-plain-wordmark",
    "devicon-firebase-plain-wordmark",
    "devicon-googlecloud-plain-wordmark",
    "devicon-jira-plain-wordmark",
    "devicon-confluence-original-wordmark",
  ];
  return (
    <Box
      id="AboutMe"
      sx={{
        m: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: "20px",
      }}
    >
      <Divider sx={{ width: "20rem", display: "flex", mt: "6rem" }}>
        <Typography variant="h5" component="h4">
          About Me
        </Typography>
      </Divider>
      <Typography
        variant="body1"
        component="h4"
        textAlign="center"
        sx={{ m: "15px" }}
      >
        I am student in RCOEM pursing graduation in CSE with AI-ML specialization.
        I love to create new and challenging stuff.<br/> Intrested to try and learn new things.
        <br/>Currently improving skills.
      </Typography>
      <Divider sx={{ width: "20rem", display: "flex", mt: "1rem" }}>
        <Typography variant="h5" component="h4">
          My Skills
        </Typography>
      </Divider>
      <Grid
        container
        spacing={5}
        padding={2}
        columnSpacing={5}
        columns={{ xs: 4, sm: 6, md: 10 }}
        rowSpacing={5}
        justifyContent="center"
        textAlign="center"
      >
        {Array.from(skillSetIcon).map((item, index) => (
          <Grid item xs={2} sm={2} md={2} key={index}>
            <i className={item} style={{ fontSize: "7rem" }}></i>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default SkillSet;
