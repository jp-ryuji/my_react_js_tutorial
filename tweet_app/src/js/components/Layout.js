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
    console.log(this.props.user);
    console.log(this.props.userFetched);
    return null;
  }
}