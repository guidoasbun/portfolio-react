import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        marginBottom: '20px',
        display: "flex",
        marginLeft: 12,
        marginRight: 12,
        [theme.breakpoints.up("sm")]: {
            marginLeft: 220,
            marginRight: 12,
        },
    },
    title: {
        fontSize: 30,
        color: 'secondary'
    },
    pos: {
        marginTop: 12,
    },
}));

 const AboutMe = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title}>
                    About Me
                </Typography>
                <Divider/>
                <Typography variant="body2" gutterBottom className={classes.pos}>
                    Full Stack Developer with a background in management. As a manager,
                    demonstrate problem solving, and organization skills by analyzing real time data,
                    and making decisions that positively affect operations on a daily basis.
                    Recently graduated from the University Of California Irvine full stack development
                    program developing skills in MongoDB, Express, React JS, Node JS and many other technologies.
                    Worked on various group projects, some as group lead, to create applications.
                </Typography>
            </CardContent>

        </Card>
    );
}

export default AboutMe;