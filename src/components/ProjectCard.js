import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from "@material-ui/core/Divider";
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        minHeight: 500,
        alignContent: 'center'
    },
    image: {
        height: 150,
        width: 150,
    }
});

const ProjectCard = (props)  => {
    const {title, image, githubLink, deployLink, summary, techUsed } = props
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <Typography gutterBottom variant="h5" component="h3" color='secondary'>
                {title}
            </Typography>
            <Divider />
                <CardMedia
                    component="img"
                    alt={title}
                    image={image}
                    title={title}
                    className={classes.image}
                />
                <CardContent>
                    <Divider />
                    <Typography>
                        Description
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {summary}
                    </Typography>
                    <Typography>
                        Technology Used
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {techUsed}
                    </Typography>
                </CardContent>
        </Card>
    );
}

export default ProjectCard