import React from "react";
import { connect } from "react-redux";

import { fetchUser } from "../actions/userActions";

@connect((store) => {
  return {
    user: store.userReducer.user,
    userFetched: store.userReducer.fetched,
    tweets: store.tweetsReducer.tweets
  };
})
export default class Layout extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchUser());
  }
  render() {
    return <h1>{this.props.user.name}</h1>;
  }
}