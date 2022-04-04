import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((el, idx) => (
            <tr key={ idx }>
              <td>{ el.description }</td>
              <td>{ el.tag }</td>
              <td>{ el.method }</td>
              <td>{ Number(el.value).toFixed(2) }</td>
              <td>{ el.exchangeRates[el.currency].name }</td>
              <td>{ Number(el.exchangeRates[el.currency].ask).toFixed(2) }</td>
              <td>
                { (Number(el.exchangeRates[el.currency].ask)
              * el.value).toFixed(2) }
                {' '}

              </td>
              <td>Real</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
