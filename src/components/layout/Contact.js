import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from '@material-ui/core/Button';

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
    a: {
        color: "inherit",
        textDecoration: "none"
    },
    button: {
        marginTop: 10,
        marginBottom: 10,
        color: '#0f4c75'
    }
}));

const Contact = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title}>Contact Me</Typography>
                <Divider className={classes.divider}/>
                <Typography variant='subtitle1'>Call Me</Typography>
                <Typography variant="body2" color="textSecondary" component="p">(949)239-4144</Typography>
                <Button className={classes.button} variant='outlined'><a className={classes.a} href="mailto:someone@yoursite.com">Email Me</a></Button>
                <Typography variant="body2" color="textSecondary" component="p">guido@asbun.io</Typography>
                <Button className={classes.button} variant='outlined'><a className={classes.a} target="_blank" href="https://www.linkedin.com/in/guidoasbun">Linked In</a></Button>
                <Typography variant="body2" color="textSecondary" component="p">linkedin.com/in/guidoasbun</Typography>
                <Button className={classes.button} variant='outlined'><a className={classes.a} target="_blank" href="https://calendly.com/guidoasbun">Calendly</a></Button>
                <Typography variant="body2" color="textSecondary" component="p">Schedule a meeting</Typography>
            </CardContent>
        </Card>
    );
};

export default Contact;
