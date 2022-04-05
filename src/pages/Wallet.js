import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchAPI } from '../actions';
import Table from '../components/Table';
import './Wallet.css';

const initialState = {
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  id: '',
};

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      ...initialState,
    };
  }

  async componentDidMount() {
    const { currencyFetch } = this.props;
    currencyFetch();
  }

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
    console.log(value);
  }

  handleClickEvent = () => {
    const { saveValueExpenses } = this.props;
    saveValueExpenses(this.state);
    console.log(this.state);
    this.setState({
      ...initialState,
    });
  }

  render() {
    const { valueMail, currencies, totalValue } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <>
        <header className="info-header">
          <p>Sua Carteira</p>
          <p data-testid="email-field">{ valueMail }</p>
          <label htmlFor="total">
            Despesa Total:
            <p data-testid="total-field">{ totalValue }</p>
          </label>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <form className="form">
          <label htmlFor="value">
            {' '}
            Valor:
            <input
              data-testid="value-input"
              type="number"
              id="value"
              name="value"
              onChange={ this.handleInputChange }
              value={ value }
            />
          </label>
          <label htmlFor="description">
            {' '}
            Descrição:
            <input
              data-testid="description-input"
              type="text"
              id="description"
              name="description"
              onChange={ this.handleInputChange }
              value={ description }
            />
          </label>
          <label htmlFor="moeda">
            Moeda:
            <select
              id="moeda"
              name="currency"
              onChange={ this.handleInputChange }
              value={ currency }

            >
              { currencies?.map((sigla, idx) => (<option key={ idx }>{ sigla }</option>))}
            </select>
          </label>
          <label htmlFor="method">
            {' '}
            Método de Pagamento:
            <select
              data-testid="method-input"
              id="method"
              name="method"
              onChange={ this.handleInputChange }
              value={ method }

            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            {' '}
            Categoria:
            <select
              data-testid="tag-input"
              id="tag"
              name="tag"
              onChange={ this.handleInputChange }
              value={ tag }
            >

              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
        <button
          className="button"
          type="button"
          onClick={ this.handleClickEvent }
        >
          Adicionar despesa
        </button>
        <Table />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  valueMail: state.user.email,
  currencies: state.wallet.currencies,
  totalValue: state.wallet.totalValue,
});

const mapDispatchToProps = (dispatch) => ({
  currencyFetch: () => dispatch(fetchAPI()),
  saveValueExpenses: (objeto) => dispatch(fetchAPI(objeto)),
});

Wallet.propTypes = {
  valueMail: PropTypes.string.isRequired,
  currencyFetch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  saveValueExpenses: PropTypes.func.isRequired,
  totalValue: PropTypes.number,
};

Wallet.defaultProps = {
  totalValue: 0,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
