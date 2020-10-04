import React, { Component } from "react";
import Context from "./UserContext";
class AddItem extends Component {
  state = {
    value: "",
  };
  changeHandler = (e) => {
    this.setState({ value: e.target.value });
  };
  addItem = () => {
    if (this.state.value) {
      this.context.addToShowCase(this.state.value);
      this.setState({ value: "" });
    }
  };
  render() {
    return (
      <div className="d-flex my-3">
        <input
          type="text"
          className="form-control mr-2"
          value={this.state.value}
          onChange={this.changeHandler}
        />
        <button
          onClick={this.addItem}
          className="btn btn-primary btn-block btn-sm"
        >
          Add Item
        </button>
      </div>
    );
  }
}
AddItem.contextType = Context;
const ItemList = () => {
  return (
    <Context.Consumer>
      {({ user }) => (
        <ul className="list-group">
          {user.language.map((lang) => (
            <li className="list-group-item" key={lang}>
              {lang}
            </li>
          ))}
        </ul>
      )}
    </Context.Consumer>
  );
};
const Showcase = () => {
  return (
    <Context.Consumer>
      {({ user }) => (
        <div>
          <h3>{user.name} Showcase :</h3>
          <AddItem />
          <ItemList />
        </div>
      )}
    </Context.Consumer>
  );
};
export default Showcase;
