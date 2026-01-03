import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import LoginRegister from "../LoginRegisterModal";
import Auth from "../../modules/Auth";

class TopNavBar extends Component {
  state = {
    modalShow: false,
    login: 1
  };

  showLogin = () => {
    this.setState({ modalShow: true, login: 1 });
  };

  showRegister = () => {
    this.setState({ modalShow: true, login: 0 });
  };

  hideModal = () => {
    this.setState({ modalShow: false });
  };

  logout = (e) => {
    e.preventDefault();
    Auth.logout();
    this.props.history.push("/");
  };

  renderAccountMenu() {
    const user = Auth.getUserDetails();
    const isLoggedIn =
      user && Object.keys(user).length !== 0;

    if (isLoggedIn) {
      return (
        <li className="account">
          <a href="#!" className="account-toggle">
            <i className="fa fa-user-circle mr-1"></i>
            {user.user_Name}
            <i className="fa fa-angle-down ml-1"></i>
          </a>
          <ul className="account-dropdown">
            <li>
              <a href="#!" onClick={this.logout}>
                <i className="fas fa-sign-out-alt mr-2"></i>
                Đăng xuất
              </a>
            </li>
          </ul>
        </li>
      );
    }

    return (
      <li className="account">
        <a href="#!" className="account-toggle">
          <i className="fa fa-user mr-1"></i>
          Tài khoản
          <i className="fa fa-angle-down ml-1"></i>
        </a>
        <ul className="account-dropdown">
          <li>
            <a href="#!" onClick={this.showLogin}>
              <i className="fas fa-sign-in-alt mr-2"></i>
              Đăng nhập
            </a>
          </li>
          <li>
            <a href="#!" onClick={this.showRegister}>
              <i className="fa fa-user-plus mr-2"></i>
              Đăng ký
            </a>
          </li>
        </ul>
      </li>
    );
  }

  render() {
    return (
      <>
        <div className={`top_nav ${this.props.className || ""}`}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="top_nav_left">
                  🚚 Miễn phí ship toàn quốc
                </div>
              </div>

              <div className="col-md-6 text-right">
                <ul className="top_nav_menu">
                  {this.renderAccountMenu()}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {this.state.modalShow && (
          <LoginRegister
            show={this.state.modalShow}
            login={this.state.login}
            loginclicked={this.showLogin}
            registerclicked={this.showRegister}
            onHide={this.hideModal}
          />
        )}
      </>
    );
  }
}

export default withRouter(TopNavBar);
