import React, { useContext, useEffect } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Store from "../App/Store";
import useStyles from "./styles";

const Categories = ({ data }) => {
  const { selectedCategory, selectCategory } = useContext(Store);
  useEffect(() => {
    selectCategory(data.categories[0].id);
  }, []);
  const styles = useStyles();

  return (
    <Tabs
      value={selectedCategory || data.categories[0].id}
      onChange={(e, newValue) => {
        if (selectedCategory === newValue) return;
        selectCategory(newValue);
      }}
      className={styles.root}
    >
      {data.categories.map(({ name, id }) => {
        return <Tab key={id} label={name} value={id} />;
      })}
    </Tabs>
  );
};

export default Categories;
