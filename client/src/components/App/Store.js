import React, { createContext } from "react";

const Context = createContext();

export class StoreProvider extends React.Component {
  state = {
    selectedCategory: null
  };

  selectCategory = value => {
    this.setState({
      selectedCategory: value
    });
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, selectCategory: this.selectCategory }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
