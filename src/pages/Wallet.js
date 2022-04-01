import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchAPI } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      totalDebt: 0,
    };
  }

  componentDidMount() {
    const { currencyFetch } = this.props;
    currencyFetch();
  }

  render() {
    const { valueMail } = this.props;
    const { totalDebt } = this.state;
    return (
      <header>
        <p data-testid="email-field">{ valueMail }</p>
        <p data-testid="total-field">{ totalDebt }</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}
const mapStateToProps = (state) => ({
  valueMail: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  currencyFetch: () => dispatch(fetchAPI()),
});

Wallet.propTypes = {
  valueMail: PropTypes.string.isRequired,
  currencyFetch: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
