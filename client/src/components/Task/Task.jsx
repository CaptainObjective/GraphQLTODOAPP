import React, { useState } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

import TaskSummary from "./TaskSummary";
import useStyles, { mapColor } from "./style";
import TaskDetails from "./TaskDetails/";

const Task = props => {
  const classes = useStyles();

  const [isDone, setDone] = useState(props.completed);
  const [priority, setPriority] = useState(props.priority);

  const markDone = () => {
    setDone(!isDone);
  };
  const changePriority = value => {
    setPriority(value);
  };
  const deleteTask = () => null;

  const color = mapColor(priority, isDone);
  return (
    <ExpansionPanel
      className={classes.root}
      style={{
        boxShadow: `0px 0px 15px 1px ${color}`
      }}
    >
      <ExpansionPanelSummary
        classes={{
          root: classes.panelSummary,
          focused: classes.focused
        }}
      >
        <TaskSummary
          {...props}
          color={color}
          isDone={isDone}
          markDone={markDone}
        />
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <TaskDetails
          {...props}
          priority={priority}
          color={color}
          isDone={isDone}
          setPriority={!isDone ? changePriority : () => null}
          deleteTask={deleteTask}
        />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};
Task.defaultProps = {
  title: "Przygotować prezki",
  description: "Zrobić przeki do CC bo sie urlop skonczy",
  fulltext:
    "Zrobić przeki do CC bo sie urlop skonczy, i jak nie pyknie to nie bedzie hajsu",
  completed: false,
  priority: "high"
};

export default Task;
