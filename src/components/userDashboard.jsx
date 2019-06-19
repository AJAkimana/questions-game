import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../store/actions/authentication";

class Dashboard extends Component {
  state = {};
  render() {
    const { userInfo } = this.props;
    const { user } = userInfo;
    return (
      <div className="user-dashboard">
        <img src={user.image} alt="user logo" className="avatar" />
        <figcaption>{user.username}</figcaption>
        <b>
          Player <span>{user.id}</span>
        </b>
        <br />
        <input
          type="button"
          onClick={this.handleLogout}
          value="Log Out"
          className="input logout"
        />
      </div>
    );
  }
  handleLogout = () => {
    this.props.logoutUser();
  };
}

export default connect(
  null,
  { logoutUser }
)(Dashboard);
