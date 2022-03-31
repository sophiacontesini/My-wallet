import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { valueMail } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ valueMail }</p>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}
const mapStateToProps = (state) => ({
  valueMail: state.user.email,
});

Header.propTypes = {
  valueMail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
