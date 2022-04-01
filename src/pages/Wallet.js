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
    const { valueMail, currencies } = this.props;
    const { totalDebt } = this.state;
    return (
      <>
        <header>
          <p data-testid="email-field">{ valueMail }</p>
          <p data-testid="total-field">{ totalDebt }</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <form>
          <label htmlFor="valor">
            {' '}
            Valor:
            <input data-testid="value-input" />
          </label>
          <label htmlFor="descricao">
            {' '}
            Descrição:
            <input data-testid="description-input" />
          </label>
          <label htmlFor="moeda">
            Moeda:
            <select id="moeda">
              { currencies.map((sigla, idx) => (<option key={ idx }>{ sigla }</option>))}
            </select>
          </label>
          <label htmlFor="metodo">
            {' '}
            Método de Pagamento:
            <select data-testid="method-input">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="categoria">
            {' '}
            Categoria:
            <select data-testid="tag-input">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  valueMail: state.user.email,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  currencyFetch: () => dispatch(fetchAPI()),
});

Wallet.propTypes = {
  valueMail: PropTypes.string.isRequired,
  currencyFetch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
