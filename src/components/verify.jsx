import React, { Component } from "react";
import { loginUser } from "../store/actions/authentication";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
class VerifyUser extends Component {
  componentDidMount() {
    const userToken = this.props.match.params.token;
    this.props.loginUser(userToken);
      this.props.history.push(`${localStorage.urlAfterLogin}`);
      localStorage.removeItem("urlAfterLogin");
  }
  render() {
    return <h1>Authenticating a user!</h1>;
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

VerifyUser.propTypes = {
  userToken: PropTypes.string,
  loginUser: PropTypes.func.isRequired
};
export default connect(
  mapStateToProps,
  { loginUser }
)(VerifyUser);
