import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <div>
      <Switch>
        TrybeWallet!

        <Route exact path="/" component={ Login } />
        <Route path="/carteira" component={ Wallet } />
        ;
      </Switch>
    </div>);
}
// <Link data-testid="link-to-favorites" to="/favorites">Favorites</Link>

export default App;
