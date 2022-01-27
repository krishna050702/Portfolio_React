import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
// import FastfoodIcon from "@mui/icons-material/Fastfood";
// import LaptopMacIcon from "@mui/icons-material/LaptopMac";
// import HotelIcon from "@mui/icons-material/Hotel";
// import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import { Box, Chip, Divider } from "@mui/material";

const Education = () => {
  return (
    <Box
      id="Education"
      sx={{
        m: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundImage:
          "linear-gradient(163deg, rgba(2,0,36,1) 0%, rgba(190,223,246,1) 0%, rgba(227,223,189,1) 100%)",
        p: "20px",
      }}
    >
      <Divider sx={{ width: "20rem", display: "flex", mt: "6rem" }}>
        <Typography variant="h5" component="h4">
          My Education
        </Typography>
      </Divider>
      <Timeline position="alternate" color="common.white">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            2020 to Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Shri Ramdeobaba College of Engineering and management
            </Typography>
            <Typography>CSE with AI-ML specialization </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            2018 to 2020{" "}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              L.R.T College of Science Akola
            </Typography>
            <Typography>HSC</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            2010 to 2018
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Shri Bakliwal Vidhyalay Washim
            </Typography>
            <Typography>SSC</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
};
export default Education;
