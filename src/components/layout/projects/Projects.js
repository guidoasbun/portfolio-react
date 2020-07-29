import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { Grid } from "@material-ui/core";

import ProjectCard from "./ProjectCard";
import projectList from '../../../data/projectsData'

const { uuid } = require('uuidv4');

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        marginBottom: "20px",
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
        color: "secondary",
    },
    pos: {
        marginTop: 12,
    },
    divider: {
        marginBottom: "10px"
    },
    component: {
        marginLeft: '5px'
    },
}));

const Projects = () => {
    const classes = useStyles();
    const getProjectCard = projectObj => {
        return (
            <Grid item xs={12} sm={6} md={4} lg={4} xl={1} key={uuid()}>
                <ProjectCard {...projectObj}/>
            </Grid>
        )
    }


    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title}>Projects</Typography>
                <Divider className={classes.divider}/>

                <Grid container spacing={2}>
                    {projectList.map(projectObj => getProjectCard(projectObj))}
                </Grid>

            </CardContent>
        </Card>
    );
};

export default Projects;
