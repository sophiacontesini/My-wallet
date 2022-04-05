import { PropTypes } from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginAtion } from '../actions';
import './Login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      buttonDisable: 'true',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.validationButton());
  };

  // expressao regular para validar o email
  validationButton = () => {
    const { email, password } = this.state;
    const regMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validationMail = regMail.test(email);
    const passwordValue = 6;
    const validationPass = password.length >= passwordValue;

    this.setState({
      buttonDisable: !(validationMail && validationPass),
    });
  };

  render() {
    const { buttonDisable, email, password } = this.state;
    const { login } = this.props;
    return (
      <div>
        <p className="title">TrybeWallet</p>
        <form className="formulario-login">
          Login
          <br />
          <label htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              name="email"
              data-testid="email-input"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password">
            {' '}
            Senha
            <input
              id="password"
              name="password"
              type="password"
              value={ password }
              onChange={ this.handleChange }
              data-testid="password-input"
            />
          </label>
        </form>
        <Link to="/carteira">
          <button
            className="button"
            type="button"
            disabled={ buttonDisable }
            onClick={ () => login(email) }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(loginAtion(email)),
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
