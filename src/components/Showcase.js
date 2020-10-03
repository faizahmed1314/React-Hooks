import React, { Component } from "react";
class AddItem extends Component {
  state = {
    value: "",
  };
  changeHandler = (e) => {
    this.setState({ value: e.target.value });
  };
  addItem = () => {
    if (this.state.value) {
      this.props.addToShowCase(this.state.value);
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
const ItemList = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((lang) => (
        <li className="list-group-item" key={lang}>
          {lang}
        </li>
      ))}
    </ul>
  );
};
const Showcase = ({ user, addToShowCase }) => {
  return (
    <div>
      <h3>{user.name} Showcase :</h3>
      <AddItem addToShowCase={addToShowCase} />
      <ItemList items={user.language} />
    </div>
  );
};
export default Showcase;
