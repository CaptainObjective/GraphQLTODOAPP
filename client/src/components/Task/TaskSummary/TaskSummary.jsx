import React, { useState } from "react";

import InputBase from "@material-ui/core/InputBase";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";

import useStyles from "./style";

const TaskSummary = props => {
  const classes = useStyles();
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <div className={classes.task}>
          <Typography variant="h6">
            <InputBase
              className={classes.title}
              value={title}
              onClick={e => e.stopPropagation()}
              onChange={e => setTitle(e.target.value)}
              inputProps={{
                maxLength: 20
              }}
            />
          </Typography>
          <Typography variant="subtitle1">
            <InputBase
              value={description}
              fullWidth
              onClick={e => e.stopPropagation()}
              onChange={e => setDescription(e.target.value)}
              inputProps={{
                maxLength: 60
              }}
            />
          </Typography>
        </div>
        <div
          style={{ color: `${props.color}` }}
          className={classes.iconholder}
          onClick={e => {
            e.stopPropagation();
            props.markDone();
          }}
        >
          {props.isDone ? (
            <Icon style={{ fontSize: "inherit" }}>assignment_turned_in</Icon>
          ) : (
            <Icon style={{ fontSize: "inherit" }}>assignment</Icon>
          )}
        </div>
      </div>
      {props.fulltext && (
        <div className={classes.expandicon}>
          <Icon style={{ fontSize: "inherit" }}>keyboard_arrow_down</Icon>
        </div>
      )}
    </div>
  );
};

TaskSummary.defaultProps = {
  title: "Przygotować prezki",
  description: "Zrobić przeki do CC bo sie urlop skonczy",
  completed: false,
  priority: "red",
  fulltext: "",
  color: "red",
  isDone: false,
  markDone: () => null
};

export default TaskSummary;
