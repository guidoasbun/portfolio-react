import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import GitHubIcon from "@material-ui/icons/GitHub";
import WebIcon from '@material-ui/icons/Web';


const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    minHeight: 510,
    alignContent: "center",
  },
  image: {
    height: 150,
    width: 150,
  },
  divider: {
    marginBottom: "20px",
  },
    icon: {
      color: 'black',
        marginLeft: 5
    },
    a: {
        color: "inherit",
        textDecoration: "none"
    }
});

const ProjectCard = (props) => {
  const { title, image, githubLink, deployLink, summary, techUsed } = props;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Typography gutterBottom variant="h5" component="h3" color="primary">
        {title}
      </Typography>
      <Divider className={classes.divider} />
      <CardMedia
        component="img"
        alt={title}
        image={image}
        title={title}
        className={classes.image}
      />
      <Divider className={classes.divider} />
      <CardActions>
        <a className={classes.a} target="_blank" href={githubLink}>
          <Button size="small" color="secondary">
            Github <GitHubIcon className={classes.icon}/>
          </Button>
        </a>
        <a className={classes.a} target="_blank" href={deployLink}>
          <Button size="small" color="secondary">
            Link <WebIcon className={classes.icon}/>
          </Button>
        </a>
      </CardActions>
      <CardContent>
        <Typography variant='subtitle1'><u>Description</u> </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {summary}
        </Typography>
          <Typography variant='subtitle1'><u>Technology Used</u></Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {techUsed}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
