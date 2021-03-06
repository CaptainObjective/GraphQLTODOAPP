import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";

import Icon from "./Icon";
import useStyles from "./style";
import InputBase from "@material-ui/core/InputBase";
// import TextField from "@material-ui/core/TextField";

const TaskDetails = props => {
  const classes = useStyles();
  const [fulltext, setFulltext] = useState(props.fulltext);

  const icons = [
    { priority: "low", color: "grey", caption: "Niski", size: "1.2rem" },
    { priority: "medium", color: "orange", caption: "Średni", size: "1.4rem" },
    { priority: "high", color: "red", caption: "Wysoki", size: "1.6rem" }
  ];

  return (
    <div className={classes.root}>
      <Typography component={"span"}>
        <InputBase
          className={classes.title}
          value={fulltext || ""}
          onClick={e => e.stopPropagation()}
          onChange={e => {
            props.updateTask({
              variables: {
                data: { fulltext: e.target.value },
                where: { id: props.id }
              }
            });
            setFulltext(e.target.value);
          }}
          placeholder={"Pełny opis zadania..."}
          fullWidth
          multiline
        />
      </Typography>

      <div className={classes.icons}>
        <div className={classes.priority}>
          {icons.map(({ priority, color, caption, size }) => (
            <Icon
              key={caption}
              color={color}
              icon="notification_important"
              caption={caption}
              size={size}
              selected={props.priority === priority}
              isDone={props.isDone}
              onClick={e => {
                props.updateTask({
                  variables: {
                    data: { priority: priority.toUpperCase() },
                    where: { id: props.id }
                  }
                });
                props.setPriority(priority);
              }}
            />
          ))}
        </div>
        <div className={classes.delete}>
          <Icon
            onClick={() =>
              props.deleteTask({ variables: { where: { id: props.id } } })
            }
            icon="delete"
            caption="Usuń"
            size="1.6rem"
          />
        </div>
      </div>
    </div>
  );
};

TaskDetails.defaultProps = {
  fulltext:
    "Zrobić przeki do CC bo sie urlop skonczy, i jak nie pyknie to nie bedzie hajsu",
  completed: false,
  priority: "high",
  color: "red",
  setPriority: () => null
};

export default TaskDetails;
