import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  makeStyles
} from "@material-ui/core";

const Users = (props) => {
  let useStyle=makeStyles({
    hover: {
      "&:hover": {
        transform:"scale(1.1)",
      }
    }
  });
  let classes=useStyle();

  return (
    <div>
      <Card style={{ width: "25vw", margin: "20px"}} className={classes.hover}>
        <CardMedia
          component="img"
          height="140"
          image={props.user.avatar}
        ></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.user.first_name + " " + props.user.last_name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Email: {props.user.email}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Users;
