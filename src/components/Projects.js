import { Box, Grid, Divider, Typography } from "@mui/material";
import Project from "../Project";
import bookStore from "../images/bookStore.png";
import halloween from "../images/halloween.png";
import sarkari from "../images/sarkari.png";

const Projects = () => {
  const Projects = [
    {
      title: "Book Store",
      desc: "Very Baisc Books shopping website made in 1st sem assignement.",
      image: bookStore,
      githubLink: "https://krishna050702.github.io/Book-store/",
      techStack: "Html,CSS,JS",
    },
    {
      title: "Sarkari",
      desc: "A problem solution for under-developement Bus transportaion in a hackthon with 3 team members",
      image: sarkari,
      githubLink: "https://lokesh-malviya.github.io/Tester_Sarkari.github.io/",
      techStack: "HTML,Css,JS,Firebase",
    },
    {
      title: "Halloween Shopping",
      desc: "Task in a 24 hr hackthon in college, to make a halloween theme based shopping site",
      image: halloween,
      githubLink: "https://github.com/Lokesh-malviya/ISDC_HALOWEEN.github.io",
      techStack: "HTML,Css,JS,Firebase",
    }
    
  ];

  return (
    <Box
      id="Projects"
      sx={{
        m: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        p: "10px",
      }}
    >
      <Divider sx={{ width: "20rem", display: "flex", mt: "6rem" }}>
        <Typography variant="h5" component="h4">
          My Projects
        </Typography>
      </Divider>
      <Grid
        container
        columnSpacing={5}
        spacing={2}
        padding={5}
        rowSpacing={5}
        columns={{ xs: 3, sm: 4, md: 9, lg: 12 }}
        justifyContent="center"
      >
        {Projects.map((project, index) => (
          <Grid item xs={2} sm={2} md={3} lg={3} key={index}>
            <Project
              title={project.title}
              desc={project.desc}
              image={project.image}
              githubLink={project.githubLink}
              techStack={project.techStack}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Projects;
