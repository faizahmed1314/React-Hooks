import React, { createContext, Component } from "react";

let Context = null;

const { Provider, Consumer } = (Context = createContext());
class UserProvider extends Component {
  state = {
    user: {
      name: "faiz",
      email: "Faiz@gmail.com",
      language: ["C#", "Jave", "Javascript", "Dart", "kotlin"],
    },
    isAuthenticated: true,
  };
  login = () => {
    this.setState({ isAuthenticated: true });
  };
  logout = () => {
    this.setState({ isAuthenticated: false });
  };
  addToShowCase = (item) => {
    const user = { ...this.state.user };
    user.language.push(item);
    this.setState({ user });
  };
  render() {
    return (
      <Provider
        value={{
          ...this.state,
          addToShowCase: this.addToShowCase,
          login: this.login,
          logout: this.logout,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
export { UserProvider, Consumer as UserConsumer, Context as UserContext };
