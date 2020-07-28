import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        marginBottom: "20px",
        display: "flex",
        marginLeft: 12,
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

const Contact = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title}>Contact</Typography>
                <Divider className={classes.divider}/>

                <Grid container>


                </Grid>
            </CardContent>
        </Card>
    );
};

export default Contact;
