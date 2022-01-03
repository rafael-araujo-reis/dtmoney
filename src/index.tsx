import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer } from 'miragejs'

createServer({
  routes() {
    this.namespace = 'api';

  models: {
    transactions: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Salário',
          amount: 9127,
          type: 'deposit',
          category: 'Crédito',
          createAt: new Date()
        },
        {
          id: 2,
          title: 'Desconto folha',
          amount: 2800,
          type: 'withdraw',
          category: 'Desconto',
          createAt: new Date()
        }
      ]
    });
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);