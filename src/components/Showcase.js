import React, { Component } from "react";
import { UserConsumer, UserContext } from "./UserContext";
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
AddItem.contextType = UserContext;
const ItemList = () => {
  return (
    <UserConsumer>
      {({ user }) => (
        <ul className="list-group">
          {user.language.map((lang) => (
            <li className="list-group-item" key={lang}>
              {lang}
            </li>
          ))}
        </ul>
      )}
    </UserConsumer>
  );
};
const Showcase = () => {
  return (
    <UserConsumer>
      {({ user }) => (
        <div>
          <h3>{user.name} Showcase :</h3>
          <AddItem />
          <ItemList />
        </div>
      )}
    </UserConsumer>
  );
};
export default Showcase;
