import {
    Box,
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
    CardActionArea,
  } from "@mui/material";
  import SendIcon from "@mui/icons-material/Send";
  
  const Project = (props) => {
    const gotToLink = () => {
      window.open(props.githubLink);
    };
    return (
      <Box
        sx={{
          display: "flex",
          alignContent: "start",
          direction: "column",
          justifyContent: "start",
          textAlign: "start",
        }}
      >
        <Card sx={{ maxWidth: 345 }} elevation={5}>
          <CardActionArea>
            <CardMedia component="img" height="200" image={props.image} />
  
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.desc}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              variant="text"
              color="secondary"
              endIcon={<SendIcon />}
              onClick={gotToLink}
            >
              View Peoject
            </Button>
          </CardActions>
        </Card>
      </Box>
    );
  };
  export default Project;
  