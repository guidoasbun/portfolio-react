import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import image from '../assets/images/profile-image-2.png'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(23),
    height: theme.spacing(23),
  },
}));

const ProfileImage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Avatar
        alt="Guido Asbun"
        src={image}
        className={classes.large}
      />

    </div>
  );
};

export default ProfileImage;
